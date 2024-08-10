# INSTALLATION

### 1) Clone project
Clone the project first.


### 2) Node packages
The following packages will be installed with `yarn`.
- yarn
- express
- prisma
- cors
- dotenv
- nodemon

```
$ cd beanysaya-api
```

```
$ yarn install
```


### 3) Prisma ORM (PostgreSQL)

Install PostgreSQL on your machine.

Create a database called `beanysaya`.

Then open the `.env` file and adjust the DATABASE_URL in your case.

After that, run the migration.

```
$ yarn prisma migrate dev --name init
```

> **NOTE:**
>
> We decided to use Prisma for ORM purposes - to make life easier.

### 4) Test

Once done, test by running

```
$ yarn dev
```