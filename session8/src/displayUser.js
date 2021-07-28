// displayUser.js
"use strict";

/**
 * Unit testing on the DOM
 * We are pretending that we have a web page, on which we have a button and span tags.
 * The button has id="button" is clicked the fetchCurrentUser function to be invoke. So that it returns the details of the current user.
 * If the details are returned we display in the span elememt.
 */

const fetchCurrentUser = require("./fetchCurrentUser.js")

document.querySelector("#button").addEventListener('click', ()=> {
    fetchCurrentUser( user =>{
        const loggedText = `Logged ${(user.loggedIn? "In" : "Out")}`;
        document.querySelector("#username").innerText = `${user.fullName} - ${loggedText}`
    });
});
