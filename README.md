# Membership Portal

## How to set up for development
### Clone the repo
1. at a terminal make a folder or go to a folder where you keep development projects. 
2. on github find the green button that says clone or download repo. Copy the link (if you have ssh set up, use that one, otherwise youse https) 
3. Navigate to your development folder in the terminal and type: `git clone <the linke you copied>`

### Make a secrets.json file with this structure: 
`
{
    "dbUser": <username for db>,
    "pass": <password for db>,
    "sessionSecret": "some secret"
}
`


### Set up database
1. Install PostegreSQL here: http://postgresapp.com/ (for macs) and install from http://postgresapp.com/ (for Windows). REMEMBER YOUR USER NAME AND PASSWOORD.  Make a secrets.json file in the root
2. Once postgres is installed, it should just be running... you can open a terminal, type `psql` and then write SQL queries as you need.   `\q` will get you out of the SQL command line
3. Set up the database: 
  * at the terminal type: `createdb bgv`
