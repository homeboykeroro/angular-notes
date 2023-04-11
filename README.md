# angular-notes

### This project is to demonstrate Angular project setup, project structure and general frontend functions. The codebase's endpoint API adheres to the repository [springbootnotes](https://github.com/gothinkster/realworld-example-apps) <br/><br/>

## Thrid Party Library Adapted
- **RxWebValidators** is used to simplfy form validation code such as cross field and conditional checking.
- **Angular Material** is used to construct attractive, consistent responsive UI.
- **Transloco** is used to translate webpage content into different language. It is an internationalization (i18n) library for Angular.
- **Moment.js** is used to simplify the use of javascript Date API

## My Own Configuration
- Change `outputPath` property value to "dist" instead of "dist/[PROJECT_NAME]" in angular.json
- Change `start` script to `ng serve --open` in package.json
- Change `build` script to `ng build --base-href` *`/[PROJECT_NAME]/`* in package.json
- Change `defaultConfiguration` property value to `development` in angluar.json
- Add the following proxy configration for endpoint API service in both dev-proxy.config.json and prod-proxy.config.json 
```
{
    "/endpoint": {
      "target": "http://localhost:8090/springbootnotes/api",
      "secure": false,
      "changeOrigin": true
    }
}
```
- Add the following build configuration for proxy configuration in angular.json
```
"serve": {
    "configurations": {
      "production": {
        "proxyConfig": "src/prod-proxy.config.json"
      },
      "development": {
        "proxyConfig": "src/dev-proxy.config.json"
      }
    },
    "defaultConfiguration": "development"
}
```

## Angular Backend Development Prerequisite Steps
1. Install Node.js for NPM package management
2. Run `npm install -g @angular/cli` to install `Angular CLI`

## Project Creation Steps
1. Run `ng new ` *`[PROJECT_NAME]`* ` --routing --defaults`
2. Add pom.xml
3. Edit config (Refer to "My Own Configuration" section)

## Project Build Steps
1. Run `mvn clean install` to build a war file
2. Deploy the war to server

## Useful vscode Extensions for Angular Project Development
- **Angular Extension Pack**

## Useful Angular CLI Commands
- `ng g c` *`[COMPONENT_PATH] --skip-import`*
- `ng g s` *`[SERVICE_PATH]`*

## My Executed Command Record
- `npm install -g @angular/cli`
- `ng add @ngneat/transloco`
- `npm install @rxweb/reactive-form-validators`
- `npm install moment --save`
- `ng add @angular/material`
- `ng g c components/components/home --skip-import`
- `ng g c components/components/error --skip-import`
- `ng g c components/shared/layout/header --skip-import`
- `ng g c components/shared/layout/footer --skip-import`

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
