# Donate Period

## Project Overview:
Makers Academy final project. We have built a web app in 10 days that enables a user to wisely donate to charity, providing an organisation with specific products that they need (and are often overlooked).

## Contributors:
* Angus Pettifer https://github.com/anguspettifer
* Ben Tomkins https://github.com/Benjamin-Tomkins
* Charlotte Payne https://github.com/CLTPayne
* Jen Strong https://github.com/JenStrong
* Simone Smith https://github.com/simone-smith

## Demo
![alt text](https://s3.eu-west-2.amazonaws.com/donate-period/out.gif)


## Quickstart:
#### How to install the code:
1. Clone this project ```git clone https://github.com/simone-smith/donate-period.git```
2. Change into the directory ```cd donate-period```
3. Use node version 10.5.0 and have npm installed

##### Client Side App
1. Change into the directory ```cd front-end```
2. Run ```npm install``` to add module dependencies
3. Open the server with ```npm start```

##### Server Side App
1. Change into the directory ```cd back-end```
2. Run ```npm install``` to add module dependencies
3. Seed the database:
  a. ```./node_modules/.bin/sequelize db:seed --seed 20180801171407-demo-charity.js```
  b. ```./node_modules/.bin/sequelize db:seed --seed 20180801105807-demo-item.js```
4. Open the server with ```npm start```

#### Run Tests:
1. Back end and front end tests ```npm test```

#### Test Coverage:
##### Client Side App
1. Run using Jest coverage tool ```npm test -- --coverage```
2. Current Coverage: 93%

#### How to use the website:
1. Open the back end server with ```node app.js``` or ```npm start```
2. The terminal will display the localhost port number for you to visit: ```localhost:3010```
3. Launch the client side application with ```npm start```, visit ```localhost:3000``` and navigate from the home page on to explore the site.
3. When finished with the application, close each server with ```^c```

## Work Flow - Tickets
[Trello](https://trello.com/b/q4a2xRgA/donation-period)

## Project MockUp:
[Wireframe](https://xd.adobe.com/view/bf101bfe-4d4f-4e1a-548e-3be7ae8bed18-c921/?fullscreen)

## Route Table
|     Task      | HTTP-method | URI |  Content-Type   |
| --- | --- | --- | --- |
| Retrieve list of charities and their wishlists    |   GET    |  /api/charities |   JSON   |
| Retrieve a charities' wishlist   | GET   | api/charities/:justGivingCharityId | JSON |

## Development Process

### Back End Application
During development process we used nodemon to manage our server connection. This package watches for changes in our code base and restarts the server when a change is identified: ```nodemon app.js```

We used Postman for exploring API calls to our endpoints.

Item images are hosted in an Amazon AWS S3 bucket, with Cross Origin Blocking turned off.

Our POST routes are used for seeding data into the database for development purposes only and are not part of our application's current functionality, therefore we have not tested these routes.

### Front End Application
For improved development workflow we used hotloading and served the application via webpack.  

We used Postman for exploring the data structure of the JustGiving external API.

## Objectives
Before getting started and settling on the idea for our final project, we discussed and defined our team objectives for the next two weeks:
* Build a web app
* Learn a new front end framework
* Follow a TDD approach
* Write clean, readable code and ensure knowledge sharing
* Agile ceremonies: 9.30am stand-ups, check-ins and retros
* Pair programming and 2 day sprints
* XP values, especially communication, simplicity and respect

##  Completed User Stories:
```
As a donor,
So that I can donate wisely,
I would like to be able to see what items charities need
```
```
As a donor,
So that I can donate to a cause I'm passionate about,
I would like to be able to see the wishlists for multiple charities
```
```
As a donor,
So that I can know more about the charity I'm donating to,
I would like to see some information about each charity
```
```
As a donor,
So that I can know what I'm donating,
I would like to see information about each item on the charity's wishlist
```
```
As a charity,
So that I can can request all of the items I need,
I would like to have a wishlist with multiple items
```
```
As a donor,
So that I can learn more about the website,
I would like to view an About page
```
```
As a donor,
So that I can make a large donation,
I would like to specify the quantity of each item I'm donating
```
## Future User Stories:
```
As a donor,
So I know the cost of my donation,
I would like my total to be calculated
```
```
As a donor,
So I can find a charity quickly,  
I would like to use a navigation bar
```
```
As a donor,
So I can complete the donation process,
I would like to purchase the items I've selected
```

## Project Diary:

### Week One

#### Day 1
Our team gathered together and brain stormed ideas - we were keen to focus on a real problem and our team mate Jen had previously worked in the charity sector and felt the need to have a better way for a charity to let potential givers know what items were actually required e.g. toilet paper! By midday, we decided to build a solution in the form of a full stack web app. We diagrammed our tech stack and agreed our MVP based on our first two user stories. As a team we broke the tasks into estimated tickets for our first 2 day sprint.

We spent the rest of the day working as follows:

Jen - exploring React and potential testing frameworks
Angus and Simone - exploring React potential testing frameworks
Charlotte and Ben - exploring Node, Express and potent testing frameworks

MVP:
A user can view a charity name as a link, which on click displays a list of items that are stored in our back end application. We decided to focus having a working connection between the two applications.

#### Day 2
We continued in our previous pairs and switched at lunch time in order to start our rotation plan to ensure everyone gets to explore our front end and back end application.

Jen - focusing on the React documentation and what a component is
Angus and Simone - looking into create-react-app and creating the outline of the wishlist component
Charlotte and Ben - a Mocha tested GET endpoint for wishlist in the Express controller, serving a static json object
Jen and Simone - outline of the clickable link charity component
Ben - research spike for Travis CI
Charlotte and Angus - webpack configuration for bundling front end code

#### Day 3
The day 2 <afternoon/> pairing format rolled over to day 3.. with an agreed planning session, with Mark supervising, scheduled for mid-to-late afternoon.

Simone, Jen, Angus, Charlotte were mobbing the start script for React, App component for react, test to green for original wishlist text.

The triumphant moment of reaching our MVP was witnessed by Mark, during the planning session; he was presumably impressed with the team’s progress.. he was probably jumping for joy (inside).. it was hard to tell from a distance. Mark was happy with our code review and made suggestions that we do more of the prep work in advance and plan for shorter meetings.

It was agreed, during the day 2 morning, that the cost/benefit of using Travis CI wasn’t enough to justify using it for a project of this timescale. Deployment to Heroku was spliced in as an alternative investigation, with positive results.

Jen held an afternoon retro <awesome> with impromptu emoji section <awesome/>. It was well planned and executed by Jen.

An agreed plan of action for the next sprint was made during the planning sesh.. to be guided by the agreed upon session 2 cases (see Trello). Jen took the Trello minutes

The new day-3-afternoon-to-day-4-afternoon pairing rotations were set to:

Simone - creating wireframes for the web page / react component use case features.
Angus and Ben - using React to make a Post request Wishlist (form component).
Jen and Charlotte - to create a “Sign In” React component.. using Postman.

#### Day 4
Fetch-mock-gate

The API call from the front end to the back end was built, successfully returning the charity data. This was TDD’d though the test actually failed as we were unable to stub the asynchronicity of the API call. We spent the next 2 days reading all of the docs and all of the blog posts before Charlotte triumphantly solved this problem.

#### Day 5
Amazon-API-gate

We time-boxed an hour to each research as much as we could about the Amazon API. Unfortunately we uncovered a hitherto overseen detail which was that we had no way to get access without a fully function business. This totally turned our app upside down.

We spent some time investigating other APIs, seeing as this was the reason we were all together. We settled on the Just Giving API in order to gain information about charities and pivoted our app to an information provider for willing donors.

#### Day 6
We met today to work on setting up the Postgres database and creating an interactive wireframe for the project. We started working on a search bar to filter through our charities and created a dynamic router.

### Week 2

#### Day 1
Today we added routing for our web app and finished setting up the tables for our database. One of our triumphs was being able to set the primary key for our Charity table to the JustGivingCharity id number.

#### Day 2
Feature Freeze! Today was the last day that we could work on adding features to our project. We added dynamic routing, so when a charity's wishlist button was clicked, the correct wishlist appeared on the screen.

#### Day 3
Fresh from feature freeze we had a deep dive planning session to list out all the possible tasks and loose ends we could potentially tackle. Prioritisation included images for the products, styling, persistent data, presentational components, and refactoring!

Ben refactored our page routing into a navigation bar, Angus and Jen refactored presentation logic out of some of our container components, Simone and Charlotte created an S3 bucket on Amazon Web Services and refactored our back-end API routes.

#### Day 4
Today was earmarked for the presentation but with still a few features that were mid way through implementation we agreed to time box the implementation of the search filter, an incremental total for the donation page and data seeding and continued styling (throughout the day!).

We broke out for a planning session to discuss the presentation.

#### Day 5
Careers fair, demo day and presentations!
