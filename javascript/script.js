
import { startYearCountdown } from './yeartimer.js';
import { setupStickyNotes } from './stickyNotes.js';
// import { weatherData } from './weather.js';
import { weatherData } from './weather/weather.js'
import { quoteFun } from './quotes.js';
import { wallClock } from './clock.js';
// Initialize countdown
startYearCountdown('yearendTimer');

// Initialize sticky notes
setupStickyNotes('addNoteBtn', 'sticky-notes');

// initializing weather
weatherData();

// initializing quotes
quoteFun();

// clock
wallClock()

