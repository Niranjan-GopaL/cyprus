import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';


dotenv.config({ path: '.env' });


if (!process.env.DATABASE_URL) {
    console.log('🔴 no database URL');
}


// This will allow us to QUERY DB 
// we migrate this stuff


// an object as second parameter 
const client = postgres(process.env.DATABASE_URL as string, { max: 1 });


// everytime we use DB; 
// it will call the mirgateDB() too which 
//      -> will keep SCHEMAS upto date with DB 
const db = drizzle(client, { schema });
const migrateDb = async () => {
  try {
    console.log('🟠 Migrating client');
    await migrate(db, { migrationsFolder: 'migrations' });
    console.log('🟢 Successfully Migrated');
  } catch (error) {
    console.log('🔴 Error Migrating client', error);
  }
};
// envoking / calling the migrateDB() function <---
migrateDb();
export default db;