## Remember

1. every time you do `npm run pull` you'll have that time zone issue; 

You can just have to replace the 

default(*timezone('utc'::text, now())*).notNull() 

to

default(*sql\`now()\`*).notNull(),


### Your dev setup

- have his repo always open
  

- You are doing it in wsl; while the tutorial is on mac;

    *PLATFORMS ARE DIFFERENT FROM TUTORIAL*

  

- you can display the `bracket pair` from vs code setting to HIGHLIGHT the block you are in

  
  

## Notes about the project

- Drizzle orm is kinda like `mongoose` or `prisma`

    - it alows us to communicate with a database  

- Supabase

    -  provides functionalities commonly needed in app development :-

        - databases

        - authentication

        - and tonnes of other tools tools

    -  while being flexible and easy to use.

  

- in package.json we add custom commands

    "pull": "drizzle-kit introspect:pg "  <- pull NEW changes from DB and update LOCAL schema files

    "generate": "drizzle-kit generate:pg" <- generate the migrations

    "drop": "drizzle-kit drop",           <- drop any of the migrations that we don't want to push

    "check": "drizzle-kit check:pg"       <- helps to keep everything up to date with the local shcema files

    "up": "drizzle-kit up:pg"             <-

  
- in typescript config `make sure IT IS es6`


- in src/lib/supabase you defined more columns

- in Supabse's sql editor secition
	- READY-MADE templates !!!! ![[Pasted image 20231230205637.png]]
  

- 

## Logs

  

1. `npx create-next-app@latest`

    - installed create-next-app

    - yes to all options except [import alias]

  

2. `npm i drizzle-orm postgres dotenv`

3. ` npm i drizzle-kit -D`

4.  created a .env and copied contents of his .env.example

  

5. create a supabase account; <-- what you have to do now

6. created a new project in supabase; and populated the .env file with values for

    - `NEXT_PUBLIC_SUPABASE_URL`

    -  `NEXT_PUBLIC_SUPABASE_ANON_KEY` , etc

    - `PASSWORD` , `DATABASE_URL` <--- important

  

7. made a drizzle.config.ts file

8. made a `db.ts` and `schema.ts` in src/lib/supabase

9. `npm run generate`
    generated meta and 0000_dapper_pu

	9.1) console.log(db) in layout.tsx <---- **IMPORTANT** STEP

10. Files and Folders in schema.ts

11. In supabase 
	- in Table Editor : we see all the tables we created in schema
	- SQL Editor      : there are many ready to use template ( edited the strip subscription template ) 
	  *and RAN IT* :-  the terminal will show :- [Success. No rows returned]
	- there will be even more tables in Table Editor  


12. How do you sync changes in `Supabase` to you `local schema file` ?
	[npm run pull]
	Now the schema.ts in migrations folder will be automatically filled.
	![[Pasted image 20231230212012.png | 900]]

13.  again do the combo
	 -> npm run generate    ( new sql in migrations folder )
	 -> npm run dev         ( we are looking to see if Migration Successfull )
	 