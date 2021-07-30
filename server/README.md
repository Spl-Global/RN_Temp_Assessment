## SPL Assessment Server Tasks Brief:

You are given base files for a server. It is an express server. Try exploring database/ apis/ and index.js to understand how things are working.

if you have a node/react-native environment setup.In server directory, use **yarn install** to install the dependencies. If you have npm try deleting yarn.lock and then excecute **npm install**.

After successfull installation of dependencies, use **yarn start** or **npm start** to start the node server.

After starting the server, go to your browser and open the link http://localhost:5000/api/demo if you see HelloWorld on the screen your server is working perfectly fine.

Now it's your task to do the following tasks and then use these APIs later in the mobile application tasks.

1. You are given a .json file with universities data. It has a lot of data. You are supposed to create APIs to get, post, search, delete and edit the university entries.
2. You will be creating APIs for login, signup, and logout to be used in the mobile app. Create a local file accounts.json in database/accounts.json and use it as a database.
3. This is local server and a demo api is also provided.
4. We will be using local files as database. server/database/universities.json is our database.
5. You are required to create a get endpoint to fetch universities data. Since universities data is alot, you might consider adding a pagination logic, only authenticated users can get the data.
6. You are required to create an API to edit the universities list. Modify data structure according to your own choice. Optimisation is the key. Only Authenticated users can edit the universities.
7. You are required to create an API to delete a university entry. Again, optimisation is the key. Only authenticated users can delete a univerity.
8. Consider adding an express middleware to filter authenticated requests.
