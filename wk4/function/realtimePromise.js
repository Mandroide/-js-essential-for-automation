"use strict";

/**
 * Real time use case of a promise
 */

const fetch = require('node-fetch');

// Using promise
/* function getAPIRes() {
    fetch("https://api.github.com/users/github")
    .then((res) => {
        return res.json()
    }).then((updatedRes) => {
        console.log(updatedRes);
    })
    .catch((err) => {
        console.log(err);
    });
} */


// Async and await  
async function getAPIRes() {
    try {
        const res = await fetch("https://api.github.com/users/github");
        const updatedRes = await res.json()        
        console.log(updatedRes);
    } catch (error) {
        console.log(error);
    }
}


getAPIRes()