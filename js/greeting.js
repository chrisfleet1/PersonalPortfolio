var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >= 18) {
    greeting = 'Good evening and welcome to my page!';
} else if (hourNow >= 12) {
    greeting = 'Good afternoon and welcome to my page!';
} else if (hourNow >= 0) {
    greeting = 'Good morning and welcome to my page!';
} else {
    greeting = 'Welcome to my page!';
}

document.write('<h3>' + greeting + '</h3>');

