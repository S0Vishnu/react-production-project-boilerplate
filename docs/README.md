# Getting Started

Follow these steps to set up and run the project locally.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js, but you can also install [npm separately](https://www.npmjs.com/get-npm)
- **yarn (optional)**: If you prefer to use Yarn, [install it here](https://yarnpkg.com/)
- **TypeScript**: This project uses TypeScript, and the necessary dependencies will be installed automatically.
---
## Installation

1. Clone the repository:

   ```bash
   git clone http://185.100.212.76:7776/Vishnu/Dwinzo.git
   cd Dwinzo
   ```

   - Cloning repository with User Credentials:

   ```bash
   git clone http://your_username:password@185.100.212.76:7776/Vishnu/Dwinzo.git
   cd Dwinzo
   ```

   note: if password contains special charecters use:

   - @ → %40
   - : → %3A
   - / → %2F
   - ? → %3F
   - & → %26
   - = → %3D
   - ! → %21

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start server:

   ```bash
   npm start
   ```

4. Build the app for production:

   ```bash
   npm run build
   ```

5. Tests

   This project includes both **unit tests** using **Jest** and **end-to-end (E2E) tests** using **Cypress**. Here’s how you can run and manage these tests.

   **Unit Tests (Jest)**
   Unit tests are located in the `src/tests/unit/` directory. They test individual components and functions to ensure they work as expected. **Jest** is used for running these tests.

   **Running Unit Tests**
   To run the unit tests, use the following command:

   ```bash
   npm run test
   ```

   **End-to-End (E2E) Tests (Cypress)**
   Cypress can be run in two modes

   1. Interactive Mode:

      ```bash
      npm run cypress:open
      ```

   2. Headless Mode:

      ```bash
      npm run cypress:run
      ```
---
## Documentation

Run the local server with `docsify serve`. You can preview your site in your browser on `http://localhost:3000`.

```bash
docsify serve docs
```
