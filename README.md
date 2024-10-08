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

For your convenience, you may use the following queries to populate the `Products` table with some sample entries:

```
INSERT INTO public."Product" ("createdAt","updatedAt",title,description,price,"featuredImage") VALUES
	 ('2024-08-10 22:52:31.472',NULL,'Arabica - Medium Roast 500g','100% Sagada Arabica medium roasted.',350,'/product1.png'),
	 ('2024-08-10 22:52:31.472',NULL,'Robusta - Medium Roast 500g','100% Robusta medium roasted.',300,'/product1.png'),
	 ('2024-08-10 22:52:31.472',NULL,'Arabica - Dark Roast 500g','100% Arabica dark roasted.',350,'/product1.png'),
	 ('2024-08-10 22:52:31.472',NULL,'Matutum - Medium Roast 500g','Matutum medium roasted to perfection.',450,'/product1.png'),
	 ('2024-08-10 22:52:31.472',NULL,'Mt. Apo - Dark Roast 500g','Medium roasted beans specifically cultivated in Mt. Apo, Digos City.',450,'/product1.png');
```


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
$ node server.js
```