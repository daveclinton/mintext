import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateEmail, sendEmailVerification } from 'firebase/auth';
import { getFriendlyMessageFromFirebaseErrorCode } from './helpers';
import { showToast } from '../toast/toastSlice';
import { LoadingStateTypes } from '../types';
import { AuthContextType } from '@/components/useAuth';
import { firebaseAuth } from '@/components/firebase/firebaseAuth';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const updateUserEmail = createAsyncThunk(
    'updateUserEmail',
    async (
        args: {
            newEmail: string;
            password: string;
            auth: AuthContextType;
            callback: (
                args:
                    | { type: 'success' }
                    | {
                          type: 'error';
                          message: string;
                      }
            ) => void;
        },
        { dispatch }
    ) => {
        if (args.auth.type !== LoadingStateTypes.LOADED) return;

        const user = firebaseAuth.currentUser;

        if (user) {
            try {
                // Update the email address
                await updateEmail(user, args.newEmail);

                // Send email verification link
                await sendEmailVerification(user);

                dispatch(
                    showToast({
                        message:
                            'Email updated successfully! Please check your inbox for the verification link.',
                        type: 'success',
                    })
                );

                args.callback({ type: 'success' });
            } catch (error: any) {
                dispatch(
                    showToast({
                        message: getFriendlyMessageFromFirebaseErrorCode(error.code),
                        type: 'error',
                    })
                );
                if (args.callback)
                    args.callback({
                        type: 'error',
                        message: getFriendlyMessageFromFirebaseErrorCode(error.code),
                    });
            }
        } else {
            dispatch(
                showToast({
                    message: 'No user is currently signed in.',
                    type: 'error',
                })
            );
        }
    }
);

export const useUpdateUserEmailLoading = () => {
    const loading = useSelector((state: RootState) => state.loading.updateUserEmail);
    return loading;
};
