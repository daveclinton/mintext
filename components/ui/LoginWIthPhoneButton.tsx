import { signInWithPhoneNumber } from 'firebase/auth';
import { firebaseAuth } from '../firebase/firebaseAuth';

const loginWithPhoneNumber = async () => {
    try {
        const phoneNumber = prompt(
            'Please enter your phone number with country code (e.g., +1234567890)'
        );
        if (phoneNumber) {
            const confirmationResult = await signInWithPhoneNumber(firebaseAuth, phoneNumber, _);

            // Prompt the user to enter the verification code
            const verificationCode = prompt(
                'Please enter the verification code sent to your phone'
            );

            if (verificationCode) {
                const userCredential = await confirmationResult.confirm(verificationCode);
                const user = userCredential.user;
                console.log('Phone number authentication successful:', user);
            } else {
                console.log('Phone number authentication failed: Invalid verification code');
            }
        } else {
            console.log('Phone number authentication failed: No phone number provided');
        }
    } catch (error) {
        console.log('Error during phone number authentication:', error);
    }
};
export default loginWithPhoneNumber;
