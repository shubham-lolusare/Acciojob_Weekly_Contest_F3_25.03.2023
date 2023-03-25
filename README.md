# Acciojob_Weekly_Contest_F3_25.03.2023
- The project is about displaying the current location of the device. The project also implments the use of local storage to display already fetched location.
- Deployed Link: https://slolusare96.github.io/Acciojob_Weekly_Contest_F3_25.03.2023/

# Project Overview (100 Marks)
- The task is to build a web application that fetches a user's geolocation using the Geolocation API, saves the coordinates in localStorage, and displays the location on a map. Your task is to create an HTML file with a button to fetch the user's geolocation and a div to display the map, a JavaScript file to handle the geolocation and map integration, and a CSS file to style the HTML elements.

# Requirements
- Create an HTML file called index.html.This file should have a button with the text "Get Location" and an empty div with an id of map.You should also include a link to your CSS file and a script tag to your JavaScript file.
- In your JavaScript file, define a function called getLocation().This function should check if the Geolocation API is supported by the user's browser. If it is, call the getCurrentPosition()method of the Geolocation API, passing in a callback function called showPosition as an argument. If the Geolocation API is not supported, display an error message to the user.
- In the showPosition function, retrieve the user's latitude and longitude from the positionobject passed as an argument. Use the setItem() method of localStorage to save the latitude and longitude in the browser's local storage. You should use the keys latand longto save the latitude and longitude respectively.
- Use the Google Maps to display the user's location on a map. To display the lat,long of the user on a map refer to these links -
- Create a Remove Location button and once the button is clicked remove the lat and long from the localstorage.
- If the lat,long are already there in the localstorage disable the Get Location button as the location has already been fetched earlier and directly show the map

# Marking Scheme (100 Marks)
- Get Location Functionality - 20
- Use of local Storage to set and retrieve lat,long - 20
- showPosition Function - 20
- Remove Location - 20
- Showing lat,long on Google Maps - 20
