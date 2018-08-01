# Donate Period

#### Project Overview:
Makers Academy final project. We have built a web app in 9 days that allows a user wisely donate to charity, providing an organisation with specific products that they need (and are often overlooked).

### Contributors:
* Angus Pettifer https://github.com/anguspettifer
* Ben Tomkins https://github.com/Benjamin-Tomkins
* Charlotte Payne https://github.com/CLTPayne
* Jen Strong https://github.com/JenStrong
* Simone Smith https://github.com/simone-smith

### Quickstart:
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
3. Open the server with ```npm start```

#### Run Tests:
1. Back end and front end tests ```npm test```

#### Test Coverage:
##### Client Side App
1. Run using Jest coverage tool ```npm test -- --coverage```

Current Coverage:
XXXXX

##### Server Side App
1. XXXXX

Current Coverage:
XXXXXX

#### How to use the website:
1. Open the back end server with ```node app.js``` or ```npm start```
2. The terminal will display the localhost port number for you to visit: ```localhost:3010```
3. Launch the client side application with ```npm start``` and navigate from the home page on to explore the site.
3. When finished with the application, close each server with ```^c```

#### Run Tests:
1. Backend-tests ```npm test```

#### Work Flow - Tickets
[Trello](https://trello.com/b/q4a2xRgA/donation-period)

#### Project MockUp:
[Wireframe](https://xd.adobe.com/view/bf101bfe-4d4f-4e1a-548e-3be7ae8bed18-c921/?fullscreen)

#### Route Table
|     Task      | HTTP-method | URI |  Content-Type   |
| --- | --- | --- | --- |
| Retrieve wishlist items    |   GET    |  /wishlist |   JSON   |

#### Development Process

##### Back End Application
During development process we used nodemon to manage our server connection. This package watches for changes in our code base and restarts the server when a change is identified: ```nodemon app.js```

We used Postman for exploring API calls to our endpoints.

##### Front End Application
For improved development workflow we used hotloading and served the application via webpack.  

We used Postman for exploring the data structure of the JustGiving external API.

#### Objectives
Before getting started and settling on the idea for our final project, we discussed and defined our team objectives for the next two weeks:
* Build a web app
* Learn a new front end framework
* Follow a TDD approach
* Write clean, readable code and ensure knowledge sharing
* Agile ceremonies: 9.30am stand-ups, check-ins and retros
* Pair programming and 2 day sprints
* XP values, especially communication, simplicity and respect

####  Completed User Stories:
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
#### Future User Stories:
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

#### Project Diary:

##### Week One

##### Day 1
Our team gathered together and brain stormed ideas - we were keen to focus on a real problem and our team mate Jen had previously worked in the charity sector and felt the need to have a better way for a charity to let potential givers know what items were actually required e.g. toilet paper! By midday, we decided to build a solution in the form of a full stack web app. We diagrammed our tech stack and agreed our MVP based on our first two user stories. As a team we broke the tasks into estimated tickets for our first 2 day sprint.

We spent the rest of the day working as follows:

Jen - exploring React and potential testing frameworks
Angus and Simone - exploring React potential testing frameworks
Charlotte and Ben - exploring Node, Express and potent testing frameworks

MVP:
A user can view a charity name as a link, which on click displays a list of items that are stored in our back end application. We decided to focus having a working connection between the two applications.

##### Day 2
We continued in our previous pairs and switched at lunch time in order to start our rotation plan to ensure everyone gets to explore our front end and back end application.

Jen - focusing on the React documentation and what a component is
Angus and Simone - looking into create-react-app and creating the outline of the wishlist component
Charlotte and Ben - a Mocha tested GET endpoint for wishlist in the Express controller, serving a static json object
Jen and Simone - outline of the clickable link charity component
Ben - research spike for Travis CI
Charlotte and Angus - webpack configuration for bundling front end code
