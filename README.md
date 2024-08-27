# Express Server

This express server is built with **express** + **typescript**

As package manager I've replace **yarn** to **pnpm**

I wanted to use **yarn pnp** for this project. However, I found it difficult to work with **prisma generate** in yarn pnp. The setup process that I've read in blogs didn't work for me. Finally, it was easier to switch to **pnpm** and start the app building process than to try different things to setup **yarn pnp** with prisma. I assume **yarn pnp** is not widely supported so there could be other compatability issue during app development. That's why **pnpm** was better option.

## Setup

I have started with ```pnpm init``` command. This created a list of files withing the project folder

```bash
project_folder/
├── package.json
```

Then  I've added some packages. After installing the packages package.json file contains

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "concurrently \"tsc --watch\" \"nodemon dist/index.js\"",
    "generate": "prisma generate",
    "migrate:dev": "prisma migrate dev"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^22.5.0",
    "concurrently": "^8.2.2",
    "dotenv": "^16.4.5",
    "nodemon": "^3.1.4",
    "prisma": "5.18.0",
    "typescript": "^5.5.4"
  },
  "dependencies": {
    "@prisma/client": "5.18.0",
    "express": "^4.19.2"
  }
  
}

```

I want to talk about serveral scripts in package.json. Here I've used [Concurrently](https://www.npmjs.com/package/concurrently).
It helps to run several command parallely. It reduces command you've to write when running the project in development stage. If I run ```pnpm dev``` it will run the ```dev``` script in package.json. Which will run this command

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
