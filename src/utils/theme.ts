export {};
// Function to set the theme based on user preference or system default
function setTheme() {
    // Check for saved theme in localStorage
    const savedTheme: string | null = localStorage.getItem('theme');

    // If no saved theme, use system default preference
    const systemPrefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme: string = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    // Set the theme on page load
    document.documentElement.setAttribute('data-theme', defaultTheme);
}

// Call the function to set the theme
setTheme();

// Check if the toggle button exists
const toggleSwitch: Element | null = document.querySelector('.theme-switch');

if (toggleSwitch) {
    toggleSwitch.addEventListener('click', () => {
        const currentTheme: string | null = document.documentElement.getAttribute('data-theme');

        // Toggle between dark and light themes
        const newTheme: string = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);

        // Save the new preference in localStorage
        localStorage.setItem('theme', newTheme);
    });
} else {
    console.warn("Theme switch button not found!");
}
