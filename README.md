# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The original impetus for this project was to work with web apis using the third party library axios. However, it soon became apparent that this would be a good platform to demonstrate working with pseudo-apis in the form of localStorage.

Each user pulled from the http://randomuser.io web api is simulataneously written to the main users page, as well as written to a unique localStorage object. Clicking on a user renders a new individual user component, which pulls its data from that user's local storage object based on a unique user key. 

# Thanks

Thanks go out to Ken Powers and George Daole-Wellman for their input. 