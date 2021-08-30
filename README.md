Project to test/study Bit ecosystem, aiming to create a micro front-end application with shared components.

## What is Bit?
* Bit is a platform that provides a whole infrastructure or ecosystem which allows that different teams to collaborate in a single project, using micro front-end architecture. 

## What is micro front-end?
* Micro front-end is an architecture similiar to micro services, that is the approach where the engineering splits the a supposed monolith application/service into small repositories, categorized by business domains. 
* The same way we can make micro services aiming each domain, we can make micro front-ends aiming each domain.
* This kind of architecture benefits agile projects and teams in a special way. Like so we can have different teams working a individual parts of the same application without worrying about getting stuck trying to sync the commit and merge of features into a large repository, waiting an ethernity the monolithic front-end CI/CD.
* This way we only need to have a wrapping project that will put together all the micro front-ends components.

## And there we have Bit a super useful tool!
* We just need to install Bit's npm packages and let it make its magic! 
* For each micro front-end, we can have a bit repo containing all the components for a certain domain. After we finish our components, we export them to Bit's cloud (private or public, depending on our plan) and later on we import these exported components from the cloud repo into the wrapping project.

## Front-end stack
* Here the most recommended (by Bit) is ReactJS, using Typescript.

## Installing BVM (Bit Version Manager), Bit and setting the enviroment

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
