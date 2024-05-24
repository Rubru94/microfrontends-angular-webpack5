# Microfrontends - Angular - Webpack 5

## Demo mf-webpack5

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

6. To run all microfrontends at the same time we can use the **npm-run-all** dependency.

   ```
   npm run all
   ```

## Bibliography

- [Microfrontends con Módulos Federados](https://rpenya.medium.com/documentaci%C3%B3n-de-proyecto-de-microfrontends-con-m%C3%B3dulos-federados-8943f5f85303)
- [MICRO - FRONTEND con Angular y Module Federation](https://www.youtube.com/watch?v=12x2QpDCsfk)
- [La Revolución de Micro Frontend: Module Federation con Angular](https://codigoencasa.com/la-revolucion-de-micro-frontend-module-federation-con-angular/)
