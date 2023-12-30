## Remember

### Your dev setup
- have his repo always open

- You are doing it in wsl; while the tutorial is on mac;
    *PLATFORMS ARE DIFFERENT FROM TUTORIAL* 

- you can display the `bracket pair` from vs code setting to HIGHLIGHT the block you are in


## Notes about the project
- Drizzle orm is kinda like `mongoose` or `prisma` 
    - it alows us to communicate with a database  
- Supabase
    -  provides functionalities commonly needed in app development :- 
        - databases 
        - authentication
        - and tonnes of other tools tools
    -  while being flexible and easy to use.

- in package.json we add custom commands 
    "pull": "drizzle-kit introspect:pg "  <- pull NEW changes from DB and update LOCAL schema files 
    "generate": "drizzle-kit generate:pg" <- generate the migrations
    "drop": "drizzle-kit drop",           <- drop any of the migrations that we don't want to push
    "check": "drizzle-kit check:pg"       <- helps to keep everything up to date with the local shcema files
    "up": "drizzle-kit up:pg"             <-

- in typescript config `make sure IT IS es6`


## Logs

1. `npx create-next-app@latest`
    - installed create-next-app 
    - yes to all options except [import alias] 

2. `npm i drizzle-orm postgres dotenv`
3. ` npm i drizzle-kit -D`
4.  created a .env and copied contents of his .env.example

5. create a supabase account; <-- what you have to do now
6. created a new project in supabase; and populated the .env file with values for 
    - `NEXT_PUBLIC_SUPABASE_URL`
    -  `NEXT_PUBLIC_SUPABASE_ANON_KEY` , etc
    - `PASSWORD` , `DATABASE_URL` <--- important

7. made a drizzle.config.ts file
8. made a `db.ts` and `schema.ts` in src/lib/supabase

9. `npm run generate` 
    generated meta and 0000_dapper_pu
