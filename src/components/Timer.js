import React from "react";

const Timer = () => {
  // Set the duration of the timer (in seconds)
  const durationInSeconds = 30;

  // Get the HTML element where you want to display the timer
  const timerDisplay = document.getElementById("timer");

  // Initialize the timer value to the duration
  let timerValue = durationInSeconds;

  // Function to update the timer display
  function updateTimer() {
    // Display the current timer value
    timerDisplay.textContent = timerValue;

    // Decrease the timer value by 1 second
    timerValue--;

    // Check if the timer has reached 0
    if (timerValue < 0) {
      // Timer has finished, you can perform any actions here
      clearInterval(timerInterval); // Stop the timer
      timerDisplay.textContent = "Timer finished!";
    }
  }

  // Call updateTimer function immediately to display initial timer value
  updateTimer();

  // Update the timer every second
  const timerInterval = setInterval(updateTimer, 1000);

  return <div></div>;
};

export default Timer;
