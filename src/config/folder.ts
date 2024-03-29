export const FOLDER_CONFIG = [
  {
    folderName: "__tests__",
    desc: "This folder contains all 'tests'.",
  },
  {
    folderName: "lib",
    desc: "This folder may contain utility functions that can be converted later into packages that are used across multiple applications.",
  },
  {
    folderName: "public",
    desc: "Self explanatory.",
  },
  {
    folderName: "src/app",
    desc: "NextJS app directory.",
  },
  {
    folderName: "src/components",
    desc: "This directory contains your UI components. It's further subdivided into ui for generic UI components and shared for components that might be reused across different parts of your application.",
  },
  {
    folderName: "src/config",
    desc: "This folder contains different configurations for different parts of the project.",
  },
  {
    folderName: "src/constants",
    desc: "This folder contains constants.",
  },
  {
    folderName: "src/context",
    desc: "The context folder in React JS is a folder that stores all of the context files for the application. Context is a way to pass data through the component tree without having to pass props down manually at every level. This can be useful for data that needs to be accessed by many components, such as the current user or the current state of the application.",
  },
  {
    folderName: "src/data",
    desc: "The data folder in React JS is used to store data assets such as JSON files that contain information used in the application. It is similar to the assets folder, but it is specifically for storing data.",
  },
  {
    folderName: "src/db",
    desc: "The db folder in React JS is typically used to store database-related files, such as database configuration files, migration scripts, and seed files.",
  },
  {
    folderName: "src/hooks",
    desc: "This directory may house custom hooks that are used throughout your application.",
  },
  {
    folderName: "src/modules",
    desc: "Modules which is also synonymous with 'sections/features' are logical groupings of code that make up the larger pages.",
    link: { href: "sup-1", body: 1 },
  },
  {
    folderName: "src/queries",
    desc: "This directory may contain GraphQL queries.",
  },
  {
    folderName: "src/services",
    desc: "This folder helps separate the concerns of your application by isolating data fetching and manipulation logic from the components that render the UI",
  },
  {
    folderName: "src/store",
    desc: "The store folder in React JS is used to store global state data that is used throughout the application. This data can be anything from the current user's login status to the contents of a shopping cart. The store folder is typically created in the root directory of the project and contains a number of files, including the store itself, actions, and reducers.",
  },
  {
    folderName: "src/utils",
    desc: "This directory may contain utility functions that do not make sense to convert into packages later.",
  },
  {
    folderName: "styles",
    desc: "As the name suggests, this directory contains the css pages that is responsible for styling.",
  },
  {
    folderName: "types",
    desc: "This folder contains TypeScript type definitions.",
  },
] as const
