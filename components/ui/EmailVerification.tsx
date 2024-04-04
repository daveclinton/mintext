// UpdateEmail.tsx
import React, { useState } from 'react';
import { useAppDispatch } from '../redux/store';
import { updateUserEmail, useUpdateUserEmailLoading } from '../redux/auth/verifyEmail';
import { firebaseAuth } from '../firebase/firebaseAuth';
import { LoadingStateTypes } from '../redux/types';

const UpdateEmail = () => {
    const [newEmail, setNewEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const dispatch = useAppDispatch();
    const loading = useUpdateUserEmailLoading();

    const handleEmailUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = firebaseAuth.currentUser;

        if (user) {
            dispatch(
                updateUserEmail({
                    newEmail,
                    password,
                    auth: { user, type: LoadingStateTypes.LOADED },
                    callback: (result) => {
                        if (result.type === 'success') {
                            setSuccess(
                                'Email updated successfully! Please check your inbox for the verification link.'
                            );
                            setError(null);
                        } else {
                            setError(result.message);
                            setSuccess(null);
                        }
                    },
                })
            );
        } else {
            setError('No user is currently signed in.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
            <h2>Update Email Address</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {loading && <p>Loading...</p>}
            <form onSubmit={handleEmailUpdate}>
                <input
                    type="email"
                    placeholder="New Email Address"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Current Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    Update Email
                </button>
            </form>
        </div>
    );
};

export default UpdateEmail;
