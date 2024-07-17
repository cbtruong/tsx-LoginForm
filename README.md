# IDE VITE

### Demo
    https://cbtruong.github.io/Popup-ReactJS/
### Run code 
    npm start
### Deploy code
    npm install gh-pages --save-dev
    - open file package.json and add to the command below

    "homepage" : "url"
    Example:
    {
    "homepage" : "https://[gitname].github.io/[projectName]",
    "name": "portfolio-website",
    "version": "0.1.0",
    .....
    }
    <!-- ======================================== -->
    add to the command below
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    Example:
        "scripts": {
        "start": "react-scripts start",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist",
        "build": "tsc -b && vite build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
        },
    - open file vite.config.ts and change your-response-name to your project name.
    export default defineConfig({
          plugins: [react()],
          base: '/your-repository-name/'
        })
    Deploy: npm run deploy
