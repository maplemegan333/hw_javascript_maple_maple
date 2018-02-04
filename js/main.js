var iceCream = [
    'chocolate peanut butter',
    'raspberry sorbet',
    'vanilla'
];

iceCream.push('green tea');

var presidents = [
    {firstName: 'Donald', lastName: 'Trump', termLength: 'One Year', party: 'Republican', yearsOfPresidency: '2017-2018'},
    {firstName: 'Obama', lastName: 'Barack', termLength: 'Eight Years', party: 'Democrat', yearsOfPresidency: '2009-2017'},
    {firstName: 'George W.', lastName: 'Bush', termLength: 'Eight Years', party: 'Republican', yearsOfPresidency: '2001-2009'},
    {firstName: 'Bill', lastName: 'Clinton', termLength: 'Eight Years', party: 'Democrat', yearsOfPresidency: '1993-2001'},
    {firstName: 'George H. W.', lastName: 'Bush', termLength: 'Four Years', party: 'Republican', yearsOfPresidency: '1989-1993'}
];

console.log(presidents[2].firstName + ' ' + presidents[2].lastName);

function howdy(first, last, message) {
    return first + ' ' + last + ' says ' + message;
}

var message = howdy('Megan', 'Maple', 'Hello everyone! How are you today?');
console.log(message);

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.");
    } else if (string.length === 7) {
        console.log('7, What a perfect choice!');
    }
};

numba('7');

numba('seventy');

numba('university');

function inception(display, faveMovie) {
    display(faveMovie);
}

var printMovie = function (movieTitle) {
    console.log(movieTitle + ' is a fantastic movie.');
};

inception(printMovie, "Howl's moving Castle");
