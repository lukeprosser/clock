const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand')

function setDate() {
  const now = new Date(); /* Current date and time */

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; /* Convert seconds to degrees and offset 90 from CSS starting position */
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // Prevent glitch when hands reach 0 (the 90deg offset) at start
  if(secondsDegrees === 90) {
      allHands.forEach(hand => hand.style.transition = 'none')  // remove all 0.05s transition
    } else {
      allHands.forEach(hand => hand.style.transition = '')      // using '' removes the inline style and reverts back to the stylesheet
    }

}

setInterval(setDate, 1000); // Run setDate every second
setDate();
