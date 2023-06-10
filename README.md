
# G-Drive Report Generator (Metomic) 

## Overview
Its a web application that lets you link your google account . Upon linking your account , it displays the list of files from the respective Google Drive along with analytics such as file type, file size, link and created by.


##  Tech Stack Used  
Backend - `Node.js`  with clean architecture was used to create the backend server 

Database - `MongoDB`

Frontend - `React.js ` + `Tailwind`
## Installation

   1.  Clone the project from GitHub using the following command
 
```bash
  git clone https://github.com/Sreeraj0801/FUSE_projectManagement.git 
``` 
   2. To set up the frontend, navigate to the "frontend" directory and run the following command to install all npm modules

```bash
  cd frontend
  npm install
``` 
* After installing the node modules , create a file for the .env to include all the Environmental variables for the frontend

- #### Environment Variables
   To run this project, you will need to add the following environment      variables to your .env file 

`VITE_BASEURL`

3.  To start the frontend Server , run the following command 

   ```bash
  npm run dev
   ``` 
   4. To set up the backend,from the root folder navigate to the "backend" directory and run the following command to install all npm modules

```bash
  cd backend
  npm install
``` 
* After installing the node modules , create a file for the .env to include all the Environmental variables for the backend

- #### Environment Variables
   To run this server, you will need to add the following environment      variables to your .env file 

   `PORT` 

   `MONGODB_ATLAS_URL `

   `GOOGLE_CLIENT_ID `

   `GOOGLE_CLIENT_SECRET `

   `REDIRECT_URL `

   `FRONTEND_URL `

5.  To start the backend Server , run the following command

   ```bash
  npm run dev
   ``` 
## Author

- [@Gokul Rajesh](https://github.com/gokulrajeshofficial) Email - gokulrajesh2022@gmail.com


