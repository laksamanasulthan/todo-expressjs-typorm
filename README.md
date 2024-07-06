# Express JS Boilerplate.

## Express.js with Typescript and ORM (Typeorm: Postgre & Mysql Driver)

Feature

-   Typescript
-   bcryptjs
-   class-validator
-   class-transformer
-   dotenv
-   express
-   reflect-metadata
-   jsonwebtoken
-   express-validator
-   typeorm
-   postgresql
-   mysql

The main purpose of this repo are to fasten development process. No Need for Structuring Project. All of Dependecy is avaliable in this repo.

## Usage

```git
git clone https://github.com/laksamanasulthan/express-js-typescript-boilerplate.git
```

```bash
copy .env.example and rename to copied file to .env ,Change value inside .env according to your Database Configuration

```

```bash
change SYNC in .env to true, so to Entities will doing auto-migration into database
```

```bash
#Node Module Installation
npm i

#run in watch mode
npm run watch
```

## Deployment

If you want deploy this project. There is few necessery step to ensure the program can be run in your favorite shared hosting or (even better) your personal VPS.

```bash
#Build Your app First
npm build

#And then you can upload the project to your shared hosting/VPS

#Run this command to serve application to your shared hosting/VPS
npm run start
```

TO DO :

-   Test
-   Custom CLI
-   Middleware Auth
