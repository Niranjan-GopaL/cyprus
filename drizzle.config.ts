import type { Config } from "drizzle-kit"; 
//to import a `SPECIFIC` named export (Config) of a particular type from the drizzle-kit module. 
// It's `importing a type` named Config specifically.

import * as dotenv from 'dotenv';
dotenv.config({path: '.env'})

if (!process.env.DATABASE_URL) {
    console.log('😓!!  🔴 Cannot find database url');
}
  
export default  {
    schema: './src/lib/supabase/schema.ts',
    out: './migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL || '',
       
    },
} satisfies Config;