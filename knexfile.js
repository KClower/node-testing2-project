// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
}


module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      filename: './data/machines.db3'
    }
  },
  testing: {
    ...sharedConfig,
    connection: {
      filename: './data/test.db3',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
