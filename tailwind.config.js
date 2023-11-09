/** @type {import('tailwindcss').Config} */
// Import the 'tailwindcss/plugin' module using ESM syntax
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html", // Include your index.html file
  ],
  purge: [
    // other paths
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '2px 2px 2px black',
      },
    },
  },
  plugins: [
    // Use 'import' instead of 'require' to import the plugin module
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
