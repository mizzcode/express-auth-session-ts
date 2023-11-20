## How to use?

```
> npm install
> npm run dev # run development!
```

## Database

```
> docker compose up -d # run database
> docker compose down -v # delete database and the volume
```

## Scripts

```
> npm run build # build typescript project
> npm run dev # run in development mode
> npm run setup # run migration, seeder
> npm run tailwind:css # run watch tailwind css
> npm run tailwind:minify # run minify tailwind css
```

## Config

```
> npx knex migrate:make namaMigration --knexfile src/config/knexfile.ts # create file migration
> npx knex seed:make namaSeed --knexfile src/config/knexfile.ts # create file seed
```
