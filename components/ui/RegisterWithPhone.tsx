import React, { useState } from 'react';
import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
    getAuth,
    ConfirmationResult,
    UserCredential,
    Auth,
} from 'firebase/auth';
import { firebaseApp } from '../firebase/firebase';
import Modal from './Modal';
import Input from './Input';

interface RegisterWithPhoneNumberProps {
    open: boolean;
    setOpen: (show: boolean) => void;
}

const RegisterWithPhoneNumber = (props: RegisterWithPhoneNumberProps) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const [verificationCode, setVerificationCode] = useState('');

    const auth: Auth = getAuth(firebaseApp);

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleVerificationCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerificationCode(e.target.value);
    };

    const sendVerificationCode = async () => {
        try {
            const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
            const confirmationResult = await signInWithPhoneNumber(
                auth,
                phoneNumber,
                recaptchaVerifier
            );
            setConfirmationResult(confirmationResult);
            console.log('Verification code sent');
        } catch (error) {
            console.error('Error sending verification code:', error);
        }
    };

    const verifyPhoneNumber = async () => {
        try {
            if (confirmationResult) {
                const credential: UserCredential =
                    await confirmationResult.confirm(verificationCode);
                console.log('Phone number verified:', credential.user);
                // You can now create or update the user in your database or perform any other necessary actions
            }
        } catch (error) {
            console.error('Error verifying phone number:', error);
        }
    };

    return (
        <Modal show={props.open} setShow={props.setOpen}>
            <div className="max-w-md w-full bg-white py-6 flex flex-col items-center gap-2 rounded-lg">
                <h2>Register with Phone Number</h2>
                <Input
                    type="text"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />
                <button
                    className="transition-colors bg-violet-600 text-white font-medium px-4 py-2 rounded-md hover:bg-violet-700 disabled:bg-violet-400"
                    onClick={sendVerificationCode}
                >
                    Send Verification Code
                </button>
                {confirmationResult && (
                    <>
                        <Input
                            type="text"
                            placeholder="Enter verification code"
                            value={verificationCode}
                            onChange={handleVerificationCodeChange}
                        />
                        <button
                            className="transition-colors bg-violet-600 text-white font-medium px-4 py-2 rounded-md hover:bg-violet-700 disabled:bg-violet-400"
                            onClick={verifyPhoneNumber}
                        >
                            Verify Phone Number
                        </button>
                    </>
                )}
                <div id="recaptcha-container" />
            </div>
        </Modal>
    );
};

export default RegisterWithPhoneNumber;
