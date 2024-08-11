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

**Example database URL:**<br/>
postgresql://beanysaya_node_user:mypassword$$@localhost:5432/beanysaya_db

After that, run the migration.

```
$ yarn prisma migrate dev --name init
```

> **NOTE**
>
> We decided to use Prisma for ORM purposes - to make life easier.

### 5) CORS Implementation

We have also set up CORS for this sample project as CORS is considered minimum requirement for any API app.
In your `.env` file, define a `CORS_WHITELIST` variable which takes an array of String which defines `hosts` that we allow access to our API.

With regard to our `beanysaya` React project, we can add its host to our CORS_WHITELIST so that we can request to this API from it. For example, using its default host `localhost:3000`:

```
...
CORS_WHITELIST=["http://localhost:3000","http://another-client-host.com"]
...
```
> **IMPORTANT**
> 
> `CORS_WHITELIST` is required. Otherwise, the API will get a runtime error and will not be able to accept requests. You can just allow all possible origin by adding "*", or allow the host of the API server itself e.g. "http://localhost:3000" if you do not have any specified API client host for now.
>


### 5) Test

Once done, test by running

```
$ yarn dev
```