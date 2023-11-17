import argon2 from 'argon2';
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    { email: 'mizz@gmail.com', password: await argon2.hash('password') },
    { email: 'jani@gmail.com', password: await argon2.hash('password') },
  ]);
}
