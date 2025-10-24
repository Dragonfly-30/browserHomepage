export function startYearCountdown(targetElementId) {
  // Target a child element instead of the container
  const yearTimer = document.querySelector(`#${targetElementId} #timer-text`);
  
  if (!yearTimer) {
    console.error('Timer text element not found! Make sure #timer-text exists inside #yearendTimer');
    return;
  }
  
  let interval = 1000;
  setInterval(() => {
    let now = new Date();
    let currentTimeMS = now.getTime();
    let endOfTheYear = new Date('December 31, 2025, 23:59:59');
    let endOfTheYearMS = endOfTheYear.getTime();
    let timeLeft = endOfTheYearMS - currentTimeMS;
    let timeLeftinSeconds = Math.floor(timeLeft / 1000);
    let timeLeftinMinutes = Math.floor(timeLeftinSeconds / 60);
    let timeLeftinHours = Math.floor(timeLeftinMinutes / 60);
    let timeLeftinDays = Math.floor(timeLeftinHours / 24);
    let Days = timeLeftinDays;
    let Hours = timeLeftinHours % 24;
    let Minutes = timeLeftinMinutes % 60;
    let Seconds = timeLeftinSeconds % 60;
    
    // Now this only updates the text, not the whole container
    yearTimer.innerHTML = `${Days} Days : ${Hours} hours : ${Minutes} minutes : ${Seconds} seconds`;
  }, interval);
}
