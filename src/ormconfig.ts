import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

export const dataSourceOptions: DataSourceOptions = {
  url: `mysql://v3uc99nseljiazto9ep6:pscale_pw_uEFghr3LRYD0OeO3m5WymDQPHuDHNqpKciRyfCczbkP@aws.connect.psdb.cloud/foodnas?ssl={"rejectUnauthorized":true}`,
  type: 'mysql',
  // host: process.env.DATABASE_HOST,
  // port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  // username: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE_DATABASE,
  entities: ['C:\\Users\\esion\\gitHub\\foodnas-back\\src\\entities\\comida.entity.ts'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
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
