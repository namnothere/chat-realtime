import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "root",
  database: "chat_realtime",
  entities: ['dist/src/models/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*.js'],
  synchronize: true,
};
// const config: MysqlConnectionOptions = {
//   type: 'mysql',
//   database: 'chat_realtime',
//   username: 'root',
//   password: 'root',
//   port: 3306,
//   host: 'localhost',
//   entities: ['dist/models/**/*.entity{.ts,.js}'],
//   synchronize: false,
//   dropSchema: false,
//   migrations: ['dist/database/migrations/*.js'],
// };



export default config;