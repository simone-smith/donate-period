# Donate Period

### Quickstart:
#### How to install the code:
1. Clone this project ```git clone https://github.com/simone-smith/donate-period.git```
2. Change into the directory ```cd donate-period```
3. Use node version 10.5.0 and have npm installed
4. Run ```npm install``` to add module dependencies

#### How to use the website:
1. Open the server with ```node app.js```
2. The terminal will display the localhost port number for you to visit: ```localhost:3000```
3. When finished with the application, close the server with ```^c```

#### Work Flow - Tickets
[Trello](https://trello.com/b/q4a2xRgA/donation-period)

#### Route Table 
|     Task      | HTTP-method | URI |  Content-Type   |
| --- | --- | --- | --- |
| Index.html   |   GET    |  / |   text/html   |
| Retrieve wishlist items    |   GET    |  /wishlist |   JSON   |
