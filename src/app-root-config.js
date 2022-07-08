import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });
// registerApplication(
//   'index',
//   () => import('./index.js'),
//   (location) => location.pathname.startsWith(''),
//   { some: 'value' }
// );
registerApplication({
  name: 'app1',
  app: () => import('./index'),
  activeWhen: '/',
  customProps: {
    some: 'value',
  }
});

// registerApplication({
//   name: "@app/navbar",
//   app: () => System.import("@app/navbar"),
//   activeWhen: ["/"]
// });

start();
