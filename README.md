# votingapp

This README provides instructions on how to run the Voting App locally. The development stack is discussed, along with the testing approach, potential security concerns, and any unfinished or assumed aspects.


## Running the Voting App Locally 
### Prequisites

1. Node.js and npm installed on your machine.
2. Git installed on your machine

### Steps

1. Clone the repository:

git clone https://github.com/sanadev02/voting-app.git
cd votingapp-main

2. Install dependencies for the front-end and back-end:

npm install
npm install sqlite3
npm install axios
npm install chai-http


3. Run the server and client:

    # In the first terminal run:
        npm run dev

    In a second terminal run:
        node server.js
    
    For running tests:
        npm test

4. Click the link given in the first termainal to access the Voting App.

## Development Stack
### Front-end
The front-end of the Voting App is built using Vue.js, which was chosen due to its simplicity,reactive system, and ease of integration with various UI components.

### Back-end
The back-end utilises a Node.js server with EXpress.js to expose a RESTful API. SQLite3 is used as the local database for simplicity.

## Testing
### Front-end Testing
The front-end has been tested using Vue Test Utils. Unit tests ensure that components are functioning correctly and that interactions with the UI work as expected.

### Back-end Testing
The back-end has been tested using Node.js with Express to the the GET and POST endpoints. To test these endpoint testing libraries like Mocha and Chai were used.

## Security Concerns
1. SQL Injections: The current implementation is vunerable to SQL injections as it directly inserts user input into SQL queries.
2. Cross-Site-Scripting(XSS): The front-end does not sanitise user inputs, making it susceptable to XSS attacks.

### Mitigation Strategies
1. Parameterised Queries: Implement parameteriesed queries to prevent SQL injection. 
2. Input Sanitation: Sanitise user inputs on the front-end to prevent XSS attacks. Libraries like "DOMPurify" can be used for this purpose.
3. Authentication and Authorisation: Implement user authentication and authorisation mechanisms to secure the application further.

## Unfinished/ Assumed Aspects
1. Deployment: Currently, the webapp only deploys locally. For production, deploying the webapp to a secure hosting environment with proper security configurations, should be considered.

2. UI/UX Enhancements: Additional Styling and responsiveness improvements could be made for a polished user experience.

3. Storage: The current implementation uses SQLite for local storage. In a production environemtn, a more robust databse solution would be preferred.

4. Error Handling and Logging: Enhanced logging and error handling should be implemented for better debugging and monitoring.

5. Load Testing: The app has not undergone load testing. In a production scenario, load testing should be performed to ensure scalability.

Feel free to reach out for any further clarifaction or assistance!
