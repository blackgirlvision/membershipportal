# Membership Portal

The tech stack for this is
* Themeforest Template 
* Express.js on Node.js
* Express-Handlebars
* Redis
* Postgresql

## How to set up for development
### Clone the repo
1. at a terminal make a folder or go to a folder where you keep development projects. 
2. on github find the green button that says clone or download repo. Copy the link (if you have ssh set up, use that one, otherwise youse https) 
3. Navigate to your development folder in the terminal and type: `git clone <the linke you copied>`

### Make a secrets.json file with this structure: 
1. This will hold passwords and other secrests for the database.
2. save this file in the root directory. 
`
{
    "dbUser": <username for db>,
    "pass": <password for db>,
    "sessionSecret": "some secret"
}
`


### Set up database
1. Install PostegreSQL here: http://postgresapp.com/ (for macs) and install from http://postgresapp.com/ (for Windows). REMEMBER YOUR USER NAME AND PASSWOORD.  
2. Once postgres is installed, it should just be running... you can open a terminal, type `psql` and then write SQL queries as you need.   `\q` will get you out of the SQL command line
3. Set up the database: 
  * at the terminal type: `createdb bgv`
  * then type psql -d bgv -f db/dbSetup.sql
4. The previous command should make a table in your database called users.

### Set up Redis
This is useful for storing session data and caching data. 
1. Mac users can download Redis <a href="https://redis.io/download">here</a>. After you have downloaded it, cd into the unzipped directory and type make to build it.
2. Ubuntu users should be able to type sudo apt-get install redis-server to download and install.
3. Windows users are out of luck! Redis does not work on your OS. However, there is a <a href="https://github.com/MicrosoftArchive/redis">Windows</a> port of Redis
