# Surfin

The [Surfin](https://clever-darwin-2debfe.netlify.com/) application is a Second Milestone project build for [Code Institute's](https://www.codeinstitute.net/) Full Stack Web Developer Course.

Surfin is a quick surf forecast tool created for surfers in Ireland. The main purpose of Surfin is to show a clean and simple wave, wind and tide forecast for several Surfing Spots around Irish coast. The data provided is sourced from weather buoy's and coastal weather stations around Ireland.

## The Brief

I have decided to combine two example briefs and create a single page application that relies heavily on APIs including Google Maps API and to create a data visualization, that is sourced from an API and displayed using D3.js library.

## UX

The UX process played a major role in the design of the _Surfin_ application with all of its components playing equally important role. 

### Strategy and Scope

The target users of the _Surfin_ application are surfers but the website could attract all water sports enthusiasts like kitesurfers, windsurfers, kayakers, etc. or anyone looking to verify ocean conditions before exploring any of the locations.

The site should provide users with up to date forecast that display wave, wind and tidal information for specific locations around Irish coast. The forecast should display forecast for up to 4 days with its emphasis on clarity and simplicity.

Based on the above description the following user stories were identified:

- As a user _A_, I want a simplified forecast of surfing conditions.
- As a user _B_, I want a day forecast showing wave and wind conditions.
- As a user _C_, I want to see the tidal data.
- As a user _D_, I want to see extended forecast for up to 3 days.
- As a user _E_, I want a simplified wind forecast like Offshore wind or Onshore wind instead of trying to guess the surf spot and wind direction myself.
- As a user _F_, I want see all the surf spots on the map so I can locate them easly.
- As a user _G_, I want a visually appealing and minimalistic application instead of large number of rows and columns of data.
- As a user _H_, I, as a experienced surfer want an average forecast values for quick surf condition estimate that I could later explore in detail on other platforms or evaluate based on my own experience and knowledge.
- As a user _I_, I, as a beginner want a simple and clear average forecast values to tell me whether there are waves or not.
- As a user _J_, I want to see clear distinguish between cardinal directions of the surf spots to quickly identify locations of my interest, whether it is West or North part of Ireland for example.
- As a user _K_, I want to see all available Surfing spots for selected Cardinal direction.

### Structure and Skeleton

Due to the application requirements and characteristics, the site design should be minimal in its form. The way in which the data is provided should lack any clutter but be informative as much as possible at the same time. There shouldn't be any distraction to the user so the focus should be primarily  on the forecast. The website's simplicity and its responsive structure should provide functionality and intuitive interactions for the users.

The following wireframes were created in order to provide a starting point for the website skeleton:

- <a href="mockup/small.png" target="_blank">Small device</a>
- <a href="mockup/medium.png" target="_blank">Medium device</a>
- <a href="mockup/large.png" target="_blank">Large device</a>

### Surface

Once the wireframes were in place, the following visuals were introduced:

- The base colors for the site are dark blue, bright red and white. These colors were selected to make the site stand out from the crowd and make the application and its content memorable. The limited number of colors makes the site clean and simple.
- Typography is limited to one typeface only, that is "Roboto". It's a clean and modern sans serif typeface which makes the site readable on both small and large devices. 
- The map sourced from Google Maps API is styled to reflect the overall design approach. The map features and elements like labels, roads, water, etc. are either minimalized or removed in order to avoid any distraction to the user and make it clean. Furthermore, a custom markers were added to the map and styled accordingly to the site.

## Features

The main idea behind the _Surfin_ application is to show a minimalistic, distraction free design that is visually appealing to the user. There are three main elements on the page which are trigged by user actions and they are as follows:

- the navigation and menu content,
- Google Maps section,
- main interactive content.

### Navigation and Menu

The navigation bar is fixed to the top of the page to make it accessible at all times, making the site easy to navigate. It consists of two interactive elements, the "MENU" and "BACK" headings.

The "MENU" element once engaged by the user reveals a full screen view of the application navigation which include the Cardinal directions i.e. North, East, West and South, and the "About" section. The Cardinal directions will display list of Surfing Spots for selected direction of choice. The "ABOUT" section will display application information and a link to its developer website.

The "BACK" element, which is basically a navigating back action, is not visible on the landing page but will appear once the user pass the first step of selecting the Cardinal Direction of choice, whether it is North, South, etc. The user will have an option to go back to the selection or move to the next step of selecting a Surfing Spot to display the forecast. The "BACK" element will be visible in the surfing forecast as well and will bring the user back to the list of surfing spots of previously selected Cardinal Direction.

### Google Maps

The top element which is displayed when the page loads, contains a Google Map showing a map of Ireland with all of the Surfing Spots clearly marked on it. The user can click on each of the markers to see the Surfing Spot title, the county it belongs to and its Cardinal direction. Once the user navigate through the application, the map will adjust to user behaviour. If the user select one of the Cardinal directions, the map will change its position and zoom in towards Surfing locations that belong to the selection. Same will happen when user choose a Surfing Spot Title to display the forecast. The Map will centre its location and zoom in to show the spot. Once the user navigate back to the previous selections, the map will readjust accordingly.

### Main Content

The main content of the application consists of three interactive elements that are dependable on each other. The first element which is displayed when the page loads, is positioned below Google Maps container. It display a selection of 4 buttons that contain Cardinal directions. Each of the buttons, once engaged will be replaced by a list of available Surfing Spot Titles for selected direction. These Titles are displayed as buttons as well and once a user selects any one of them, they will be replaced by the Surfing Forecast. 

The Surfing Forecast consists of the Surfing Spot Title, followed by range of forecast, whether Today's that is displayed by default, or Extended. The Forecast range can be changed at any time by selecting its description that lays underneath the currently displayed range. Below the headings the user will find 4 cards that display the Surfing forecast. The first three cards show the forecast for time of a day, so if Today's day range is selected, it will display Morning, Midday and Afternoon, . If the extended range of days is selected, it will display the following 3 days with an average forecast for each day. Each of the 3 cards show wave height, wave period, wind type and wind speed. The fourth card display a Tidal data which is presented in a form of a line chart that show either Today's or Extended tidal predictions for selected Surfing location.    
 
### Existing Features

The main _Surfin_ application features are as follows:

- Responsive layout that allows users to preview website on all devices.
- "Back" buttons to make the site navigation easier.
- "Menu" button to make a shortcuts to the Cardinal directions.
- Interactive Google Map to show the exact Surfing Spot location.
- Simple and clean design with intuitive navigation

### Features Left to Implement

The features that could potentially be implemented are as follows:

- Local storage for returning users on the same day in order to prevent fetching the data several times a day for the same Surfing locations.
- Create a user database to allow users to create an account and to choose and save Surfing spots they visit frequently as favourite spots.
- Extend the application to include current (live) forecast on demand. It could be a paid option for subscribed users. 

## Technologies Used

The following languages, technologies and tools were used to construct this website:

- [HTML5](https://www.w3.org/TR/html52/) - Core structure of the website.
- [CSS](https://www.w3.org/Style/CSS/) - Main style of the website.
- [Bootstrap](https://getbootstrap.com/docs/3.3/) - Used to develop responsive website fast and efficiently.
- [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript) - Used to make the application interactive.
- [3D.js](https://d3js.org/) - Used to produce line chart data visualizations inside the application.
- [Jasmine](https://jasmine.github.io/) - A behaviour-driven development framework for testing JavaScript code.
- [Google Maps API](https://cloud.google.com/maps-platform/) - Dynamic and customized real world map.
- [The Marine Institute API](https://www.marine.ie/Home/home) - Main source of Surfing Forecast data.
- [Balsamiq Mockups](https://balsamiq.com/) - Used to sketch quick wireframes for website's UX design.
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) - Chrome browser tool used to iterate and debug the website.
- [HTML Checker](https://validator.w3.org/nu/) - Online HTML checker used to validate code semantics.
- [JSHint](https://jshint.com/) - Online Static Code Analysis Tool for JavaScript.
- [Parallels](https://www.parallels.com/) - Software providing hardware virtualization used to test application on other platforms like Windows or Linux.  
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) - Online Chrome tool used to audit the website's performance and accessibility.
- [Netlify](https://www.netlify.com/) - Platform used to integrate the project with Github and deploy the website.
- [Github](https://github.com/) - Project's repository.
- [Visual Studio Code](https://code.visualstudio.com/) - Text editor used to write down all the code.
- [Google Fonts](https://fonts.google.com/) - Typefaces used to style the website.

## Testing

During the website development stage I have conducted two types of testing, manual and automated. The manual testing was ongoing throughout the whole development stage while the automated test was conducted using a Jasmine framework when the project was at its finish.

### Manual Testing

The manual testing consisted mainly of the following technologies/tools:

- Chrome DevTools

Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. This tools allows me to instantly preview and edit my website but I was mainly using it to diagnose problems and fix them quickly.

- Operating Systems:
    - macOS
    - Microsoft Windows
    - Linux
    - Android
    - iOS

The Operating Systems test played an important part of the manual testing. Majority of the test was done using the Parallels software on macOS which allows me to test my application on Linux and Windows virtual machines. The test consisted of running the application on the most popular browsers within these Operating Systems and validating the expected behaviour of the site.

- Web browsers:
    - Chrome
    - Firefox
    - Safari
    - Opera
    - Internet Explorer

I made sure to use browser prefixes where necessary but to make sure that there are no errors with the website I was doing a cross browser testing from time to time. It basically consisted of running the site on these browsers, changing the size of the browser window and where possible using the native developer tools to check site responsiveness and functionality. These tests were run on desktop, tablet and smartphone devices.

- Devices:
    - desktop
    - tablet
    - smartphone

I run a manual testing on few types of devices whenever I had a chance but mainly I was testing the website using desktop, tablet and smartphone, so I could cover the most popular screen sizes.

- User Stories Testing

The following user stories from the UX section were tested to make sure everything works as intended.

1. User "A" and "G" wants to see a minimalistic website while users "B", "H" and "I" wants to have a simplified surfing forecast without overload of data and information. The following steps needs to be conduct in that case:
    1. Select a Cardinal Direction of your choice, e.g. "West".
    2. Select a Surfing Spot title of your choice, e.g. "Lahinch".
    3. The Surfing Forecast data is displayed in four "cards" with wave, wind and tidal predictions.

2. User "C" wants to see tidal data. The following steps needs to be conduct in that case:
    1. Select a Cardinal Direction of your choice, e.g. "West".
    2. Select a Surfing Spot title of your choice, e.g. "Lahinch".
    3. The tidal data represented in a line chart can be found on the last of four cards showing sea/ocean levels for a day or three days range forecast.

3. User "D" wants to see a extended 3 days forecast. The following steps needs to be conduct in that case:
    1. Select a Cardinal Direction of your choice, e.g. "West".
    2. Select a Surfing Spot title of your choice, e.g. "Lahinch".
    3. Select "+ 3 DAYS" text that is located underneath a Surfing Spot title to change forecast from Today's to extended.
    4. The Surfing Forecast data is displayed in four "cards" with wave, wind and tidal predictions.

4. User "E" wants to see a simplified wind forecast that takes into account the wind direction and Surfing Spot point. The simplified wind forecast should state whether the wind type is Offshore, Onshore or Crossshore wind. The following steps needs to be conduct in that case:
    1. Select a Cardinal Direction of your choice, e.g. "West".
    2. Select a Surfing Spot title of your choice, e.g. "Lahinch".
    3. The wind forecast can be found on cards with "WAVE" and "WIND" description. The wind type is displayed on the left hand side of the "WIND" text and is in a form of a text range including "OFF" for Offshore wind, "ON" for Onshore wind and "CROSS" for Crossshore wind.

5. User "F" wants to see all of the Surfing Spots on the map. The following steps needs to be conduct in that case:
    1. Navigate to the map which is located at the top of the page.
    2. All of the Surfing Spots should be clearly marked on the map. The marker is in a form of two circles with larger white outer circle and smaller inner red circle. Once clicked on the marker of choice, the Surfing Spot information window will popup displaying title, county and Cardinal direction of the selected spot.
        1. The map will adjust according the user behaviour, so if a specific Cardinal direction or Surfing Spot is selected, the map will zoom in to show all of the Surfing Spots for that direction or Spot for selected Surfing Spot title.

6. User "J" wants a clear distinguish between Cardinal Directions of the Surfing Spots while user "K" wants to see all available Surfing Spots for selected Cardinal direction.. The following steps needs to be conduct in that case:
    1. Navigate to the bottom of the page where four buttons with Cardinal Directions are located. Each of the buttons will display list of buttons for each of the Cardinal Directions once engaged.


#### Manual Testing Bugs

The one major issue that I have encountered during the test was the limit on daily requestes for one of my API's. The StormGlass Api has a limit of 50 requests per day, so even if I'll store each request i.e. request for each surf spot, I'll be limiting the site data access to few, with max 2 users that wish to check all 20 surf spots. Not to mention the possibility of adding new spots. 

### Automated Testing

The automate testing was conduct using the following tools:

- Jasmine framework

Jasmine is a behaviour-driven development framework for testing JavaScript code. My approach to the Jasmine testing was to breakdown large functions and to test them separately. There are 31 specs being tested with no failures.

In order to run the Jasmine test please open the "specRunner.html" file in a browser. The test results will be displayed immediately. The source code and tests can be find in the "js" folder.

- Chrome Lighthouse

The Lighthouse is an open-source automated tool that audits website for performance, accessibility, SEO and more. The website score was constantly satisfactory with recent results as follows:

```
- Performance at 74
- Progressive Web App at 55
- Accessibility at 92
- Best Practices at 81
- SEO at 78

highest score is 100
```

In order to run the Lighthouse tool please use the Chrome Developer Tools and locate the Audits tab on the right hand corner of the DevTools window.

- Online JavaScript checker

The "JSHint" was run in order to check if there are any major issues with the JavaScript code.

In order to run the checker please use the following [link](https://jshint.com/) and paste the code in.

- Online Html & Css checker

The above tool was run in order to validate the HTML and CSS semantic and non-semantic elements and check for any potential problems.

In order to run the checker please use the following [link](https://validator.w3.org/nu/) and paste the code in.

#### Automated Testing Bugs

The problem with test approach for async await, API or Event Listeners

## Deployment

The website was deployed to [Netlify](https://www.netlify.com/) with the following steps:

1. Connecting & authorizing GitHub account with Netlify.
2. Choosing the site repository.
3. Selecting Branch to deploy.
4. Deploying the website.

## Credits

### Acknowledgements

- The 3D.js line chart creation was inspired by [Mike Bostock's](https://bl.ocks.org/mbostock/1166403) article on "Axis Component".
- Event delegation inspired by an article by [David Walsh.](https://davidwalsh.name/event-delegate)