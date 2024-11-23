## /temp/ files

I’ve set up the repository to ignore all folders named `temp`. This is a space you can use for temporary or experimental files without worrying about affecting the application or pushing these files to Gitea.

- **Purpose**: Use the `temp` folder to store temporary files, logs, or scripts for testing purposes.
- **Ignored by Git**: All `temp` folders are excluded from version control using the `.gitignore` rule `**/temp/`. These files will not be committed or pushed to the repository.
- **Best Practices**: Please avoid storing critical or shared files here. Use it for temporary work only, and clean up files when no longer needed.

This should help us maintain a clean repository while giving everyone the freedom to experiment.

---

## Standardized File Structure and Coding Guidelines

To improve our codebase's readability, maintainability, and scalability, we’re adopting a standardized file structure and coding practices. Here’s a summary:

1. **File Structure**:

   - **Components (`.tsx`)**: All files that return HTML/JSX will be React components with a `.tsx` extension. They should focus on UI logic and presentation.

     - **Purpose**: Files with the `.tsx` extension are reserved for React components that return JSX/HTML.
     - **Location**: Components should be organized based on their purpose or scope within the application. Example:
       ```
       src/
         components/
           Header.tsx
           Footer.tsx
         pages/
           Home.tsx
           About.tsx
       ```
     - **Naming Convention**: Component filenames should use PascalCase, matching the component name (e.g., `Header.tsx` for a `Header` component).
     - **Example**:

       ```tsx
       /**
        * Header component that displays the application's navigation bar.
        *
        * @returns {JSX.Element} A navigation bar with links.
        */
       const Header: React.FC = () => {
         return (
           <header>
             <nav>
               <a href="/">Home</a>
               <a href="/about">About</a>
             </nav>
           </header>
         );
       };

       export default Header;
       ```

   - **Functions (`.ts`)**: All helper functions or business logic will go into `.ts` files, separate from the components.
     - **Purpose**: Files with the `.ts` extension are for helper functions, utility logic, or other non-React code that does not return JSX/HTML.
     - **Location**: Place utility files in a `utils` directory or within a directory relevant to their context. Example:
       ```
       src/
         utils/
           calculateTotal.ts
           formatDate.ts
         hooks/
           useFetch.ts
       ```
     - **Naming Convention**: Use camelCase for filenames that describe the primary function (e.g., `calculateTotal.ts` for a `calculateTotal` function).
     - **Example**:
       ```ts
       /**
        * Calculates the total price based on items and tax rate.
        *
        * @param {number[]} prices - Array of item prices.
        * @param {number} taxRate - Tax rate as a decimal.
        * @returns {number} Total price including tax.
        */
       export const calculateTotal = (
         prices: number[],
         taxRate: number
       ): number => {
         const subtotal = prices.reduce((sum, price) => sum + price, 0);
         return subtotal + subtotal * taxRate;
       };
       ```

---

## Commenting Standards

To improve code readability and understanding, every function and component should include comments explaining its purpose, inputs, and outputs. Here’s how we’ll approach this:

1. **React Components**:

   - Include a **high-level description** of what the component does.
   - Specify the **props** it accepts, along with their types.
   - Specify the **return type** (`JSX.Element` for React components).

   **Example**:

   ```tsx
   /**
    * Button component that triggers an action when clicked.
    *
    * @param {object} props - The props object.
    * @param {string} props.label - The text to display on the button.
    * @param {() => void} props.onClick - The callback function triggered when the button is clicked.
    * @returns {JSX.Element} A styled button element.
    */
   const Button: React.FC<{ label: string; onClick: () => void }> = ({
     label,
     onClick,
   }) => {
     return <button onClick={onClick}>{label}</button>;
   };

   export default Button;
   ```

2. **Functions**:

   - Include a **detailed description** of what the function does.
   - Specify the **parameters**, their types, and what they represent.
   - Specify the **return type** and what it represents.

   **Example**:

   ```ts
   /**
    * Converts a date string to a readable format.
    *
    * @param {string} date - A date string in ISO format (e.g., "2024-11-21").
    * @returns {string} The formatted date (e.g., "November 21, 2024").
    */
   export const formatDate = (date: string): string => {
     const options: Intl.DateTimeFormatOptions = {
       year: "numeric",
       month: "long",
       day: "numeric",
     };
     return new Date(date).toLocaleDateString(undefined, options);
   };
   ```

3. **Commenting Standards**:

   - Each function and component should have a comment explaining:
     - What it does.
     - The props or parameters it accepts (including types).
     - What it returns and why.

4. **Why This Matters**:
   - This structure helps us maintain a clean, modular codebase. It also makes the project easier to navigate for new and existing team members.

---

## File Naming Guidelines

To maintain consistency and professionalism in our codebase, we are standardizing the way we name files. This is crucial for readability, collaboration, and avoiding potential issues across different operating systems.
We are introducing a standardized **file naming convention** to maintain consistency across the codebase. Here are the key points:

1. **File Naming**:

   - All file names must follow the **camelCase** convention (e.g., `headerComponent.tsx`, `calculateTotal.ts`).
   - This ensures uniformity and avoids case sensitivity issues.

2. **Pre-Commit Hook**:

   - A pre-commit hook will automatically rename files to camelCase if they don’t comply.
   - Please double-check that your imports match the updated file names to avoid runtime errors.

3. **What You Need to Do**:

   - Name files correctly in camelCase from the start.
   - If a file is renamed during a commit, ensure all imports are updated to reflect the new name.

4. **Why This Matters**:
   - Consistent file naming improves readability and reduces issues when working in teams or across different operating systems.
