## Project Folder Structure

```plaintext
my-react-app/
├── .github/
│   └── workflows/                # CI/CD configuration (e.g., GitHub Actions)
│       └── ci.yml                # Configuration for automated tests/lints
├── .husky/                       # Husky Git hooks
│   ├── pre-commit                # Pre-commit hook for linting and tests
│   ├── pre-push                  # Pre-push hook for running tests
│   └── _/                        # Husky internal scripts
│       └── husky.sh              # Husky script
├── docs/                         # Documentation folder (for Docsify)
│   ├── _navbar.md                # Navigation configuration for Docsify
│   ├── documentation             # Documented contents
│   ├── _sidebar.md               # Sidebar configuration for Docsify
│   ├── .nojekyll                 # Skip Jekyll processing for GitHub Pages
│   ├── index.html                # Main landing page for Docsify
│   └── README.md                 # Documentation file
├── public/                       # Static public assets (e.g., index.html)
├── src/                          # Main source code
│   ├── assets/                   # Static assets (images, styles)
│   │   ├── fonts/                # Font files
│   │   ├── images/               # Image files
│   │   ├── models/               # 3d files (e.g., .gltf, .fbx)
│   │   └── styles/               # Global styles (SCSS)
│   │       ├── abstracts/        # SCSS variables, functions, and mixins
│   │       ├── base/             # Basic, global styles (e.g., resets)
│   │       ├── components/       # Styles specific to components
│   │       ├── layout/           # Layout-related styles (e.g., grid, flexbox)
│   │       ├── pages/            # Page-specific styles
│   │       └── main.scss         # Main SCSS entry file
│   ├── components/               # Reusable React components
│   │   ├── 3d-ui/                # 3d ui components (e.g., distance text)
│   │   ├── common/               # Shared/common components (e.g., buttons, inputs)
│   │   ├── layout/               # Layout-related components (e.g., header, footer)
│   │   ├── ui/                   # Ui-related components (e.g., toolbar, menu)
│   │   ├── templates/            # modals, loaders, skeletons
│   │   ├── temp/                 # temporary workspace (to try function/components without interfearing with app)
│   │   └── scene/                # all 3d realted functions.
│   ├── hooks/                    # Custom React hooks
│   ├── functions/                # Non-React utility functions
│   ├── pages/                    # Page components (e.g., Home, About)
│   ├── services/                 # API services and business logic
│   ├── store/                    # Global state management (e.g., Redux store)
│   ├── store/                    # Global state management (e.g., Redux store)
│   ├── temp/                     # temporary workspace (to try function/components without interfearing with app)
│   ├── tests/                    # Testing folder
│   │   ├── unit/                 # Unit tests
│   │   │   ├── __mocks__/        # Mock files for unit tests
│   │   │   ├── __tests__/        # Unit test files
│   │   │   ├── setupTests.ts     # Setup for Jest
│   │   │   └── jest.config.js    # Jest configuration
│   │   └── e2e/                  # End-to-end tests (Cypress)
│   │       ├── integration/      # Integration test files
│   │       ├── fixtures/         # Fixtures for mock data in tests
│   │       ├── plugins/          # Cypress plugins
│   │       ├── support/          # Cypress support files (e.g., commands)
│   │       └── cypress.config.js # Cypress configuration
│   ├── utils/                    # Utility functions/helpers (independent functions)
│   ├── app.tsx                   # Root React component
│   ├── index.tsx                 # Main entry point for React application
│   └── react-app-env.d.ts        # TypeScript environment types for React
├── .env                          # Environment variables (e.g., API keys)
├── .eslintrc.js                  # ESLint configuration for code linting
├── .gitignore                    # Files and directories to be ignored by Git
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation (this file)
```
