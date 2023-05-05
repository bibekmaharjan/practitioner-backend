import { Sequelize } from 'sequelize';

import user from './user';
import practitioner from './practitioner';
import config from '../config/db.config';

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: config.dialect as any,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = user(sequelize, Sequelize);
db.practitioner = practitioner(sequelize, Sequelize);

export default db;
