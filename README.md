# SystemPlus ReactNative Assessment

A repository to test and evaluate React Native candidates.

## Introduction :

**This branch has tasks in two folders. There is a folder named server and it has all the base files added in it. Server tasks are listed in the Readme.md file in server folder. There is an app folder and it has a Readme.md file about all the React Native tasks.
Remains the intellectual property of System Plus Pvt. Limited.**

## Brief:

#### Server Tasks Brief:

1. You are given a .json file with universities data. It has a lot of data. You are supposed to create APIs to get, post, search, delete and edit the university entries.
2. You will be creating APIs for login, signup, and logout to be used in the mobile app. Create a local file accounts.json as use it as a database.
3. This will be a local server and a demo api will be provided.
4. We will be using local files as database. server/universities.json is our database.
5. You are required to create a get endpoint to fetch universities data. Since universities data is alot, you might consider adding a pagination logic, only authenticated users can get the data.
6. You are required to create an API to edit the universities list. Modify data structure according to your own choice. Optimisation is the key. Only Authenticated users can edit the universities.
7. You are required to create an API to delete a university entry. Again, optimisation is the key. Only authenticated users can delete a univerity.
8. For more information, go to the server directory and read the Readme.md file there.

#### React Native Mobile Application Tasks:

1. In mobile application you are supposed to utilize the api devloped in the previous tasks to implement login, sign up and authentication flow. Make good use of AsyncStorage and store signup records at the backend. If I close the app and open it again user must be authenticated if he/she has logged in already.
2. You are allowed to use navigation library of your choice. React-Navigation and React-Native-Navigation are the preferred navigation libraries.
3. There will be a login screen and a sigup screen. These routes will be open. Anyone can access these routes.
4. User will be navigated to a Dashboard screen once he/she logs in or signs up. A dashboard will load the universities data (first 50 for example) at the start and these entries must be shown in the form of a card. Feel free to use any styling library like react-native-paper or native-base etc.
5. When the list list reaches the end it must give an option to load more universities into the list. And get universities must support it.(Pagination)
6. There will be a search bar in the header on Dashboard and it must produce search results as we type in it and loads only search results and it must show all the previously loaded universities if we erase all the search input in the search bar. (Make good use of map,filter,reduce)
7. Each card will be clickable and take us to the University details page that will have the option to edit and delete it. Make sure you alert the user before deleting.
8. You are going to create an Add University form screen. You will be using the same form to edit the university data. Make good use of navigation params.
9. All the state management will be done using Redux or Context API.

## Instructions:

1. In this Assessment you are free to choose the type of React Programming. Although we recommend you use a mix of both Class and functional components.

2. You are not allowed to push code to this repository. Therefore you are
   required to create a copy of this repository on your own account and work on it.
   Hint: Make good use of git clone, git fork, git plugins for vs code etc.

   https://docs.github.com/en/get-started/quickstart/fork-a-repo

   https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository

3. This repository has a branch named Assessment. Clone/Fork this repository
   and checkout to Assessment branch.

4. In Assessment branch there will be a Readme.md file and it will have detailed tasks information.

5. You are supposed to submit a compilable and runnable code of the solution.

6. Solution in txt files will not be accepted.

7. For this Assessment we are supposing that you have a react-native environment setup and node environment to run the server.

8. You will be implementing a mobile app solution along with its backend. Mobile app will be implemented using React Native and a Node.js powered Express backend will be used for APIs. Refer to this link for more information.
   https://reactnative.dev/docs/environment-setup

9. Mobile app styling is up to you but React Native styling Knowledge and good design will be given more weightage while evaluation. Feel free to use design you have previously worked on.

10. After you are done implementing a task, please add comments in the code file
    for clear understanding and add a Readme.md file if necessary.

11. This will be an open ended programming exercise. Problem descriptions are
    provided and you are supposed to implement a solution.

12. In case of confusions, please contact us at our email.
