
## Remember

### Your dev setup
- have his repo always open

- You are doing it in wsl; while the tutorial is on mac;
    *PLATFORMS ARE DIFFERENT FROM TUTORIAL* 




## Notes about the project
- Drizzle orm is kinda like `mongoose` or `prisma` 
    - it alows us to communicate with a database  





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
7. made a drizzle.config.ts file

