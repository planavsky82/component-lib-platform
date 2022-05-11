# The @planit Component Library Platform

## @planit/components, @planit/react-components

`@planit/components` is a web component library that can be used within any application, regardless of technology. Check out the [Storybook](https://planit-dev-platform.web.app/storybook-static/) for the library documentation.

### Get started!

To use the standard web components, run the following script:

```
npm i @planit/components
```

Then load the package into your app:

```
import { defineCustomElements } from '@planit/components/loader';
defineCustomElements();
```

To use the web components within React Wrappers for a more efficient utilization in a React application, run the following script:

```
npm i @planit/react-components
```

For an example of how to use the React Wrapper version of the web components, please review [this example](https://github.com/planavsky82/component-lib-platform/blob/main/apps/react-demo/src/App.js).

## @planit/component-lib-platform

### Overview
Start your own component library platform in minutes!

As explained by the [Nielsen Norman Group](https://www.nngroup.com/articles/design-systems-101/), a design system is a set of standards to manage design at scale by reducing redundancy while creating a shared language and visual consistency across different pages and channels.

A key part of a design system is an extenstive component library to implement the system standards and abstract patterns to ensure consistency across applications. `@planit/component-lib-platform` will automatically set up a component library development platform in just a few minutes. It includes a [Stencil web component](https://stenciljs.com/docs/introduction) starter library, a [TailwindCSS](https://tailwindcss.com/) configuration, [Storybook.js](https://storybook.js.org/), and a demo application.

#### Applications

The platform also can be used to generate a [Micro Frontend](https://micro-frontends.org/), a more complex web component that is esentially its own micro-application and can be shared across other frontend applications. 

### Prerequisites 

Before you install, please make sure you are have a [Node.js LTS Version](https://nodejs.org/en/about/releases/) installed on your machine.

### Installation

Run `npx @planit/component-lib-platform <your-project-name>` to install the project.

If you do not pass a project name, a default name will be provided.

You may also provide an author name if you'd like:

`npx @planit/component-lib-platform <your-project-name> <author-name>`

### Documentation

When the package is installed, a ***Get Started*** application will launch in your browser window with instructions on how to start building your component library and/or micro frontend.


