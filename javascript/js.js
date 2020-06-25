var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening..';
} else if (hourNow > 12) { 
    greeting = 'Good after!';
} else if (hourNow > 0) { 
    greeting = 'It is way too early..'
} else {
    greeting = 'How YOU doing?';
}