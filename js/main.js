// Simple array

var iceCream = [
    'chocolate peanut butter',
    'raspberry sorbet',
    'vanilla'
];

// Adds additional item to iceCream array

iceCream.push('green tea');

// Array containing objects with various properties that hold pertinate information about various presidents

var presidents = [
    {firstName: 'Donald', lastName: 'Trump', termLength: 'One Year', party: 'Republican', yearsOfPresidency: '2017-2018'},
    {firstName: 'Obama', lastName: 'Barack', termLength: 'Eight Years', party: 'Democrat', yearsOfPresidency: '2009-2017'},
    {firstName: 'George W.', lastName: 'Bush', termLength: 'Eight Years', party: 'Republican', yearsOfPresidency: '2001-2009'},
    {firstName: 'Bill', lastName: 'Clinton', termLength: 'Eight Years', party: 'Democrat', yearsOfPresidency: '1993-2001'},
    {firstName: 'George H. W.', lastName: 'Bush', termLength: 'Four Years', party: 'Republican', yearsOfPresidency: '1989-1993'}
];

// Instructs console to log a specific president name

console.log(presidents[2].firstName + ' ' + presidents[2].lastName);

// Function declaration with 3 parameters

function howdy(first, last, message) {
    return first + ' ' + last + ' says ' + message;
}

// Varriable message assigning my first name, last name and a message to howdy

var message = howdy('Megan', 'Maple', 'Hello everyone! How are you today?');

// Loging message in the console

console.log(message);

// Function named numba stipulating 3 seperate messages based on varous string lengths

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.");
    } else if (string.length === 7) {
        console.log('7, What a perfect choice!');
    }
};

// Instructing the console to run the numba function with three specific strings

numba('7');

numba('seventy');

numba('university');

// Function insception calls function passed in first parameter using second parameter

function inception(display, faveMovie) {
    display(faveMovie);
}

// Instructs console to log parameter plus string

var printMovie = function (movieTitle) {
    console.log(movieTitle + ' is a fantastic movie.');
};

// calls insception using function printMovie as the first parameter and a string "Howl's Moving Castle"

inception(printMovie, "Howl's moving Castle");
