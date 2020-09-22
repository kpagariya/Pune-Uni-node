# Pune-Uni-node

For Node JS login code please download login.html and login js file and then follow the below steps 

1) Create new project folder
2) Go to newly created folder using CMD and install mysql dependency.
   npm install mysql
3) Copy index.html and login.js into newly created folder.
4) Create the database and tables as follows 

CREATE DATABASE nodelogindb;
USE nodelogin;

CREATE TABLE IF NOT EXISTS accounts (
  id int(11) NOT NULL,
  username varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO accounts (id, username, password, email) VALUES (1, 'kunal', 'kunal', 'kunal@test.com');

5) Start the server
   node index.js
   
6) Hit the URL
