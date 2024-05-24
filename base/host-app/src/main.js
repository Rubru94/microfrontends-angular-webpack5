import('rentApp/Component')
  .then((module) => {
    // This is where the component will be inserted into the DOM.
    // This will depend on how you expose the component in Angular.
  })
  .catch((err) => {
    console.log('Error loading component rentApp:', err);
  });

import('saleApp/Component')
  .then((module) => {
    // This is where the component will be inserted into the DOM.
    // This will depend on how you expose the component in Angular.
  })
  .catch((err) => {
    console.log('Error loading component saleApp:', err);
  });
