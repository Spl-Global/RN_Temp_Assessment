## React Native Mobile Application Tasks:

By far, you must have implemented your APIs. Now it's time to design the mobile application architecture for our developed APIs and make it useable.

### Components You Will Write:

1. Login
2. Signup
3. Dashboard
4. University Details Page.
5. University Add/Edit page.

### Feature wise components:

1. Login: (Simple login using login endpoint)
2. Signup (Simple signup but stores the user data in accounts.json on server)
3. Dashboard (
   Shows Universities as list of Cards(use native-base card),
   Load more universities using get endpoint of backend server for universities when list reaches the end.
   Search Universities through header search bar and show results and reset results to default once search input is erased. More details in instrunctions.
)
4. University Details Page (Shows the details of university as a separate screen, Button to edit and button to delete the university using the API of course.)
5. University Add/Edit form screen (Single screen would to be used to edit and add a new university, make good use of navigation props. API: add university, and edit university)

### Instructions:

1. In app folder, try running **npx react-native run-ios** or **npx react-native run-android** according to your platform.
2. In mobile application you are supposed to utilize the api devloped in the previous tasks to implement login, sign up and authentication flow. Make good use of AsyncStorage and store signup records at the backend. If I close the app and open it again user must be authenticated if he/she has logged in already.
3. You are allowed to use navigation library of your choice. React-Navigation and React-Native-Navigation are the preferred navigation libraries.
4. There will be a login screen and a sigup screen. These routes will be open. Anyone can access these routes.
5. User will be navigated to a Dashboard screen once he/she logs in or signs up. A dashboard will load the universities data (first 50 for example) at the start and these entries must be shown in the form of a card. Feel free to use any styling library like react-native-paper or native-base etc.
6. When the list list reaches the end it must give an option to load more universities into the list. And get universities must support it.(Pagination)
7. There will be a search bar in the header on Dashboard and it must produce search results as we type in it and loads only search results and it must show all the previously loaded universities if we erase all the search input in the search bar. (Make good use of map,filter,reduce)
8. Each card will be clickable and take us to the University details page that will have the option to edit and delete it. Make sure you alert the user before deleting.
9. You are going to create an Add University form screen. You will be using the same form to edit the university data. Make good use of navigation params.
10. All the state management will be done using Redux or Context API.

Best of Luck!
