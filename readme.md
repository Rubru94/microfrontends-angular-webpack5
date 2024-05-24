# Microfrontends - Angular - Webpack 5

## Demo

1. Create new workspace

   ```
   ng new mf-webpack5 --no-create-application
   ```

2. Generate components

   ```
   ng generate application mf-host-shell-app --style=scss --routing=true
   ```

   ```
   ng generate application mf-shopping-app --style=scss --routing=true
   ```

   ```
   ng generate application mf-payment-app --style=scss
   ```

   ```
   ng generate library commons-lib
   ```

3. Install dependency **@angular-architects/module-federation**

   path: `./mf-webpack5`

   ```
   npm i -D @angular-architects/module-federation
   ```

4. Module federation generating webpack.config.js file for projects with specific type

   ```
   ng add @angular-architects/module-federation --project mf-host-shell-app --port 4200 --type host
   ```

   ```
   ng add @angular-architects/module-federation --project mf-shopping-app --port 4201 --type remote
   ```

   ```
   ng add @angular-architects/module-federation --project mf-payment-app --port 4202 --type remote
   ```

5. Configure remote projects. Microfrontends allows us to run each project individually.

   ```
   ng s mf-shopping-app
   ```

   ```
   ng s mf-payment-app
   ```

   ```
   ng s mf-host-shell-app
   ```
