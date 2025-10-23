
import { startYearCountdown } from './yearend/yeartimer.js';
import { setupStickyNotes } from './stickynotes/stickyNotes.js';
import { weatherData } from './weather/weather.js'
import { quoteFun } from './quotes/quotes.js';
import { wallClock } from './clock/clock.js';
import { progressBar } from './yearend/prgressBar.js';


// Initialize countdown
startYearCountdown('yearendTimer');

// Initialize sticky notes
setupStickyNotes('addNoteBtn', 'sticky-notes');

// initializing weather
weatherData();

// initializing quotes
quoteFun();

// clock
wallClock();

// progressBar
progressBar();

console.log("hello jaan chalja yaarr")

