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

5. **Install JDK (if not already installed) to run firebase CLI**
   If you haven't installed JDK yet, you can install it by following the instructions at [https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-22-04](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-22-04)

6. **Create `.env.local` File**
   Create a new file called `.env.local` in the root directory of your project and add your Firebase API key:

    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
    NEXT_PUBLIC_AUTH_DOMAIN =  your-auth-domain
    NEXT_PUBLIC_PROJECT_ID = your-public-project-id
    NEXT_PUBLIC_STORAGE_BUCKET = your-public-storgae-bucket
    NEXT_PUBLIC_MESSAGE_SENDER_ID = your-public-message-sender
    NEXT_PUBLIC_APP_ID = your-public-app-id
    ```

7. **Install Dependencies**

    ```bash
    yarn install
    ```

8. **Run the Project**
    ```bash
    yarn dev
    ```

Your project should now be running locally. Open your web browser and navigate to `http://localhost:3000` to view it.
