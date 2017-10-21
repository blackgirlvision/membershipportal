# Membership Portal

The tech stack for this is
* Themeforest Template 
* Express.js on Node.js
* Express-Handlebars
* Redis
* Postgresql

Important notes: This app was copied and pasted from another app, so there's are views, routes, and database queries that may be irrelevant to BlackGirlVentures...

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
1. Install Redis: 
    * Mac users can download Redis <a href="https://redis.io/download">here</a>. After you have downloaded it, cd into the unzipped directory and type make to build it.
    * Ubuntu users should be able to type sudo apt-get install redis-server to download and install.
    * Windows users are out of luck! Redis does not work on your OS. However, there is a <a href="https://github.com/MicrosoftArchive/redis">Windows</a> port of Redis
4. in the terminal, from any directory, type `redis-server --daemonize yes` which starts the redis server. It will just run in the background. 
5. Redis is a no sql database.  It saves data as key:value pairs.  You can mess around with it by using the cli.  Type `redis-cli` in the terminal and then see Redis docs for how to use it. 

### Install node modules
1. Navigate to the membershipportal folder in the terminal (command line)
2. Type `npm install`. This will install a node_modules folder in that directory and install the modules and their dependencies according to the package.json file that is also in that directory. 

### Start the server & see if it works
1. Navigate to the membershipportal folder in the terminal (command line)
2. Type `node server.js`.  This should start something going that says listening on localhost:8080
3. Open up a browser and type in localhost:8080 for the url. Hopefully the registration page appears! 

## Styling and HTML
* the `.handlbars` files under the views directory are how the server generates html files to send to the browser. 
* there is a `main.handlebars` file under layouts that is the basic layout for all the pages.  This makes it easy to have the same nav bar and footer on all your pages without copying and pasting. If you look at this page you'll notice that it has three main sections: nav bar, body, and footer.  This is also where links to css and js script files go. 
* The other `.handlebars` files are used to create html files. So if you are adding html and styles you will need to copy all the stuff between the body tags and paste into a file of name `something.handlebars`
* if the css or client side script files change, you will need to copy/paste into the public/css or public/js directories


