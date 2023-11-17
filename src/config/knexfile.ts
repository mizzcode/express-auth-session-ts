import { configDotenv } from 'dotenv';
import type { Knex } from 'knex';
import path from 'path';

// load dotenv
configDotenv({ path: path.join(process.cwd(), '..', '..', '.env') });

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: process.env.PGCLIENT,
    connection: {
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../migrations',
    },
    seeds: {
      directory: '../seeds',
    },
  },

  production: {
    client: process.env.PGCLIENT,
    connection: {
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../migrations',
    },
    seeds: {
      directory: '../seeds',
    },
  },
};

export default config;
