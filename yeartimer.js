export function startYearCountdown(targetElementId) {
  const yearTimer = document.querySelector(`#${targetElementId}`);
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

    yearTimer.innerHTML = `${Days} Days : ${Hours} hours : ${Minutes} minutes : ${Seconds} seconds`;
  }, interval);
}
