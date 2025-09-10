# GEMINI.md

## Project Overview

This project is a simple web-based photo exposure simulator built with React and Vite. It allows users to adjust camera settings like exposure, aperture, and shutter speed to see their effect on a sample black and white photograph in real-time. The application provides a user-friendly interface with sliders for each setting and displays the resulting image with the applied filters.

The core technologies used are:

*   **React:** For building the user interface components.
*   **TypeScript:** For static typing and improved code quality.
*   **Vite:** As the build tool and development server.
*   **ESLint:** For code linting to maintain a consistent style.

The main application logic resides in `src/App.tsx`, which manages the state of the camera settings and applies the corresponding CSS filters to the image. The UI is composed of a `Toolbar` for controls, a main image display, and a `Thumbnail` view.

## Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, and you can view the application in your browser at the address provided (usually `http://localhost:5173`).

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This command compiles the TypeScript code and bundles the application for production. The output will be in the `dist` directory.

4.  **Lint the code:**
    ```bash
    npm run lint
    ```
    This will run ESLint to check for any code quality or style issues.

## Development Conventions

The project follows standard React and TypeScript conventions.

*   **Component-Based Architecture:** The UI is broken down into reusable components located in the `src/components` directory.
*   **Styling:** CSS styles are defined in `.css` files and imported into the components. The main application styles are in `src/App.css`.
*   **State Management:** Component-level state is managed using React Hooks (`useState`).
*   **Coding Style:** The project uses ESLint with the recommended rules for React and TypeScript to enforce a consistent coding style. It is recommended to run the linter before committing any changes.
