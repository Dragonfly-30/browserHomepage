export function progressBar() {
  // const progressBar = document.querySelector('#progress-bar');
  const progressBarFill = document.querySelector('#progress-bar-fill');

  // console.log("testing progress bar")

  const startOfYearMS = new Date('1 January, 2025 00:00:00').getTime();
  let endOfTheYearMS = new Date('31 December, 2025 23:59:59').getTime();

  setInterval(() => {

    const nowMS = new Date().getTime();

    const percentage = ((nowMS - startOfYearMS) / (endOfTheYearMS - startOfYearMS)) * 100

    // console.log(percentage)

    progressBarFill.style.width = `${percentage}%`;
  }, 1000)
}
