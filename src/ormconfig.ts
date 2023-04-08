import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

console.log("driname: ", __dirname)

export const dataSourceOptions: DataSourceOptions = {
  url: process.env.URL_DATABASE,
  type: 'mysql',
  // host: process.env.DATABASE_HOST,
  // port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  // username: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE_DATABASE,
  entities: [ __dirname + '/entities/comida.entity.js' ],
  migrations: [ __dirname + '/database/migrations/*{.ts,.js}'],
  synchronize: true,
  logging: true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
};
const dataSource = new DataSource(dataSourceOptions);

dataSource.initialize()
.then(() => {
  console.log("Data Source has been initialized!");
})
.catch((err) => {
  console.error("Error during Data Source initialization", err);
});

export default dataSource;
