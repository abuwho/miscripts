// How to use this script: Install the Tampermonkey extension and add this script in the extension.

// ==UserScript==
// @name         Hide Email from View on ChatGPT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script hides the email of the user from the view and replaces the email with a placesholder text on the website chat.openai.com
// @author       Abu Huraira
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant        none
// ==/UserScript==


// Finds the element that includes the email and replaces it with a placeholder text
function replaceEmail() {
    var elements = document.getElementsByClassName('grow');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (element.textContent.includes('@gmail.com')) {
            // Replace the text with some placeholder text
            element.textContent = 'User';
            console.log('Email has been hidden from view and replaced.');
        }
    }
}


(function() {
    'use strict';

    // Wait 5 seconds for the UI to load and then execute the function
    setTimeout(replaceEmail, 5000);

})();
