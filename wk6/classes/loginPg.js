"use strict";

const Page = require('./page');

/**
 * A loging page
 * 
 * @lessons
 * 1. How to inherit properties from base class?
 * 2. How to call base class property or method?
 * 3. How to create an object?
 * 
 * @terminology
 * super class -> sub-class
 * base class -> derived class
 * parent class -> child class
 * 
 */

class LoginPage extends Page {

    constructor() {
        super() // The parent constructor must be called when creating a child constructor
        console.log(`Calling the child constructor..`);
        this.runDate = "2022-01-01"
        console.log(`The rundate is: ${this.runDate}`);
    }

    // Getter property
    get loginBtn() {
        return 'loginBtn';
    }

    // Click a login btn
    clickLoginBtn() {
        this.click(this.loginBtn)
    }

}

// Object creation
let loginPg = new LoginPage()
console.log(typeof(loginPg));

// Calling a parent's method
loginPg.navigateTo("google.com");

// Calling the own method
loginPg.clickLoginBtn();