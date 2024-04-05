# Project Name

## Setup Instructions

1. **Clone the Repository**

    ```bash
    git clone git@github.com:daveclinton/mintext.git
    cd minext
    ```

2. **Install Firebase CLI**

    ```bash
    yarn global add firebase-tools
    ```

3. **Install Yarn (if not already installed)**
   If you haven't installed Yarn yet, you can install it by following the instructions at [https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)

4. **Install PNPM (if not already installed)**
   If you haven't installed PNPM yet, you can install it by following the instructions at [https://pnpm.io/installation](https://pnpm.io/installation)

5. **Create `.env.local` File**
   Create a new file called `.env.local` in the root directory of your project and add your Firebase API key:

    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
    NEXT_PUBLIC_FIREBASE_API_KEY
    NEXT_PUBLIC_AUTH_DOMAIN
    NEXT_PUBLIC_PROJECT_ID
    NEXT_PUBLIC_STORAGE_BUCKET
    NEXT_PUBLIC_MESSAGE_SENDER_ID
    NEXT_PUBLIC_APP_ID
    ```

6. **Install Dependencies**

    ```bash
    yarn install
    ```

7. **Run the Project**
    ```bash
    yarn dev
    ```

Your project should now be running locally. Open your web browser and navigate to `http://localhost:3000` to view it.
