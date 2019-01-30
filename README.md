# Surfin

The [Surfin](https://clever-darwin-2debfe.netlify.com/) application is a Second Milestone project build for [Code Institute's](https://www.codeinstitute.net/) Full Stack Web Developer Course.

Surfin is a quick surf forecast tool created for surfers in Ireland. The main purpose of Surfin is to show a clean and simple wave, wind and tide forecast in several Surfing Spots around Irish coast. The data provided is sourced from weather buoy's and coastal weather stations around Ireland.

## The Brief

I have decided to combine two example briefs and create a single page application that relies heavily on APIs including Google Maps API and create a data visualization sourced from an API and visualised using D3.js library.

## UX

The UX process played a major role in the design of the _Surfin_ application with all of its components playing equally important role. 

### Strategy and Scope

The target users of the _Surfin_ application are surfers but the website could attract all water sports enthusiasts like kitesurfers, windsurfers, kayakers, etc. or anyone looking to verify sea conditions before exploring any of the locations.

The site should provide users with up to date forecast that display wave, wind and tidal information for specific locations around Irish coast. The forecast should display forecast for up to 4 days with its emphasis on clarity and simplicity.

Based on the above description the following user stories were identified:

- As a user _A_, I want a simplified forecast of surfing conditions.
- As a user _B_, I want a day forecast showing wave and wind conditions.
- As a user _C_, I want to see the tidal data.
- As a user _D_, I want to see extended forecast for up to 3 days.
- As a user _E_, I want a simplified wind forecast like 'Offshore wind' or 'Onshore wind' instead of trying to guess the surf spot and wind direction myslef.
- As a user _F_, I want see all the surf spots on the map so I can locate them easly.
- As a user _G_, I want a visualy appealing and minimalistic applicaton instead of large number of rows and columns of data.
- As a user _H_, I, as a experienced surfer want an average forecast values for quick surf condition estimate that I could later explore in detail on other platforms or evaluate based on my own experiece and knowledge.
- As a user _I_, I, as a beginner want a simple and clear average forecast values to tell me whether there are waves or not.
- As a user _J_, I want to see clear distinguish between cardinal directions of the surf spots to quickly identify locations of my interest, whether it is West or North part of Ireland for example.

### Structure and Skeleton

Due to the application requirements and characteristics, the site design should be minimal in its form. The way in which the data is provided should lack any clutter but be informative as much as possible at the same time. There shouldn't be any distraction to the user so the focus should be primarly on the forecast. The website's simplicity and its responsive structure should provide functionality and intuitive interactions for the users.

The following wireframes were created in order to provide a starting point for the website skeleton:

- <a href="mockup/small.png" target="_blank">Small device</a>
- <a href="mockup/medium.png" target="_blank">Medium device</a>
- <a href="mockup/large.png" target="_blank">Large device</a>

### Surface

Once the wireframes were in place, the following visuals were introduced:

- The base colors for the site are dark blue, bright red and white. These colors were selected based on the personal aesthetics and to make the site stand out from the crowd. The colors combination makes the application and its content easy to read and memorable. The limited number of colors makes the site clean and simple.
- Typography is limited to one typeface only, that is 'Roboto'. It's a clean and modern sans serif typeface which makes the site readable on both mobile and larger devices. 
- The Google Maps API map is styled to reflect the overall design approach. The map features and elements like labels, roads, water, etc. are set to either minimal or none visibility in order to remove any distraction to the user.  

## Features

<!-- In this section, you should go over the different parts of your project, and describe each in a sentence or so. -->
 
### Existing Features
<!-- - Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future: -->

### Features Left to Implement
<!-- - Another feature idea -->

local storage for returning users on the same day
local storage for favourite spots

## Technologies Used

<!-- In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation. -->

// Day Tidal data - LINE CHART creation
// implementation heavily influenced by http://bl.ocks.org/1166403  


## Testing

Jasmine checklist:

Testing the functionality:

- should do this and that

Testing DOM manipulation:

- should inject HTML
- should display new item
- should trigger data forecast generation and chart display


Issue 1

The StormGlass API data consists of several sources so to calculate the specific value e.g. Air Temperatur I wanted initialy to sum all values and divided by their number to get the average, however some of the data has different format so to avoid issues I decided to stick to the first source i.e. SG - StormGlass. The biggest advantage of that source is, that it is the most frequent as updated every 6 hours and cover global area. Furthermore it is the first index in the array i.e. [0]

I have encountered problem when trying to add a Event listner to a dynamically created element. The error was thrown sice it could not be created as the element does not existed yet.

solutions:

[link 1](https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript)
[Link 2](https://davidwalsh.name/event-delegate)
[Link 3](https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation)

Issue 2

The StormGlass Api has a limit of 50 requests per day, so even if I'll store each request i.e. request for each surf spot, I'll be limiting the site data access to few, with max 2 users that wish to check all 20 surf spots. Not to mention the possibility of adding new spots.

<!-- In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here. -->

## Deployment

The website was deployed to [Netlify](https://www.netlify.com/) with the following steps:

1. Connecting & authorizing GitHub account with Netlify.
2. Choosing the site repository.
3. Selecting Branch to deploy.
4. Deploying the website.

// In addition, if it is not obvious, you should also describe how to run your code locally. -->


## Credits

### Content
<!-- - The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z) -->

### Media
<!-- - The photos used in this site were obtained from ... -->

### Acknowledgements

<!-- - I received inspiration for this project from X -->
