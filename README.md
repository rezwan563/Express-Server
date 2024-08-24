# Express Server

This express server is built with **express** + **typescript** 

As package manager I've used **yarn**

Here I will start with how I've setup the project. And issues I've faced while setting up the project and most importantly how I've fixed those issues. I want this document to work as a reminder to myself and anyone else wish to work with same setup.

## Setup

I have started with ```yarn init``` command. This created a list of files withing the project folder


```bash
project_folder/
├── package.json
├── README.md
└── yarn.lock
```


The **package.json** file contains

```json
{
  "name": "express-server",
  "packageManager": "yarn@4.4.0"
}
```

Then  I've added some packages. After installing the packages package.json file contains 

```json
{
  "packageManager": "yarn@4.4.0",
  
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"tsc --watch\" \"nodemon dist/index.js\""
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^22.5.0",
    "concurrently": "^8.2.2",
    "nodemon": "^3.1.4",
    "typescript": "^5.5.4"
  },
  "dependencies": {
    "express": "^4.19.2"
  }
}
```

I want to talk about serveral scripts in package.json. Here I've used [Concurrently](https://www.npmjs.com/package/concurrently).
It helps to run several command parallely. It reduces command you've to write when running the project in development stage. If I run ```yarn dev``` it will run the ```dev``` script in package.json. Which will run this command

```concurrently \"tsc --watch\" \"nodemon dist/index.js\"```

This simplifies the development server running process. The command will check if anything changes in ```.ts``` file it will compile with typescript compiler and convert it to javascript. And the nodemon will ensure to restart the server if any code changes. The backslash ```\``` is used to escape ```"``` mark. For more details follow the official page of [Concurrently](https://www.npmjs.com/package/concurrently).

To use typescript I needed a typescript configuration file. Here, I've create a **tsconfig.json** file. After lots of trial and error I've found the configuration that worked for me. The **tsconfig.json** file contains

```json
{
    "compilerOptions": {
      /* Base Options: */
      "esModuleInterop": true,
      "skipLibCheck": true,
      "target": "ESNext",
      "allowJs": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      /* Strictness */
      "strict": true,
      "noUncheckedIndexedAccess": true,
      /* If transpiling with TypeScript: */
      "moduleResolution": "node",
      "module": "commonjs",
      "outDir": "dist",
      "sourceMap": true,
      /* If your code doesn't run in the DOM: */
      "lib": ["ESNext", "dom"]
    },
    "include": ["src/**/*.ts"],
  }
  ```

I've used this [Typescript with node](https://www.totaltypescript.com/typescript-and-node) guide to setup the **tsconfig.json**. However, since I was using [yarn](https://yarnpkg.com/) I had to made some modification to the guide and ended up with the tsconfig.json found above.

I wanted to use import statement for different packages instead of require. However, I've faced the issue of 

>error TS2307: Cannot find module 'express' or its corresponding type declarations.

I've found these steps detailed in [Editor SDK](https://yarnpkg.com/getting-started/editor-sdks#vscode) solved this issue.
