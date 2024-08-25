# Products frontend Application

This is a frontend application built with Next.js 14.2.6 and JavaScript JSX components. The Node.js environment is managed with asdf to handle versions.

## Requirements

- Node.js 18.17.0 (managed with asdf)
- npm or yarn

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/al-lo-co/products-frontend
    cd products-frontend
    ```

2. **Install asdf and the necessary plugins:**

    If you don't have asdf installed, follow the instructions at [asdf](https://asdf-vm.com/guide/getting-started.html#_2-download-asdf).

    ```bash
    asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git
    asdf install
    ```

3. **Install project dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build` or `yarn build`

Builds the app for production to the `out` folder.

### `npm start` or `yarn start`

Starts the server in production mode.
