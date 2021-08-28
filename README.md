Project to test Bit ecosystem, aiming to create a micro front-end application with shared components.

## Installing BVM, BIT and setting enviroment

1. `npm i @teambit/bvm -g`;
2. `bvm install`; e
3. `setx path "%path%;%LocalAppData%\.bvm"`.

## Creating a new project

1. `bit init --harmony`;
2. `bit install react --type peer`;
3. `bit install react-dom --type peer`;
4. `bit create react-component path/to/component`;
5. `bit status` afeter testing everything, so Bit can check if all components are fine;
6. `bit login` to login Bit portal;
7. Create the workspace and the collection in the portal, copy and paste its name (find it in "Export your components to (...));
8. Go back to the project, opwn workspace.jsonc and paste the scope copied from the portal;
9. Run `bit link` so Bit can relink all node modules; and
10. Now we can rename the imports from the local paths to "@marcelino-borges.mfe-test/component" (so it will get the component from the cloud.

## Running locally

1. `bit start` to run at the browser; and
2. `bit compile` to see the errors in components with no need to run in the browser.

## Versioning components

- `bit tag --all --message="first version" to use the same tag in all components;

## Exporting components

- `bit export`
