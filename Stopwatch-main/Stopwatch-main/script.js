// Assigning the initial values of milliseconds, seconds, minutes and hour as 0, 0, 0, 0 using an array
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// select the displayTime and store it in a local variable
let displayTime = document.getElementById("displayTime");
// it shows that no interval is present or started
let timer = null;

// create a function for the StopWatch
function stopWatch() {
    milliseconds += 10; // increase milliseconds by 10 after each encounter
    if (milliseconds == 1000) { //when milliseconds reaches to 1000 change it to 00 and increase the secondsby 1
        milliseconds = 00;
        seconds++;
        if (seconds == 60) { //when seconds reaches to 60, change it to 0 and increase minutes by 1
            seconds = 0;
            minutes++;
            if (minutes == 60) { //when minutes reaches to 60, change it to 0 and increase hours by 1
                minutes = 0;
                hours++;
            }
        }
    }

    // if hour is less than 10 add a 0 prior to hours and store it in a local variable for furture use
    let h = hours < 10 ? "0" + hours : hours;
    // if minutes is less than 10 add a 0 prior to minutes and store it in a local variable for furture use
    let m = minutes < 10 ? "0" + minutes : minutes;
    // if seconds is less than 10 add a 0 prior to seconds and store it in a local variable for furture use
    let s = seconds < 10 ? "0" + seconds : seconds;
    // if milliseconds is less than 10 add a 0 prior to milliseconds and store it in a local variable for furture use
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    // display the latest time
    displayTime.innerHTML = h + ":" + m + ":" + s + "." + ms;
}

// create a function to start the StopWatch
function watchStart() {
    // if any ongoing interval is present (or running) stop it and then restart it 
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 10);
}

// create a function to stop the StopWatch
function watchStop() {
    // clear the previous interval
    clearInterval(timer);
}

// create a function to reset the StopWatch
function watchReset() {
    clearInterval(timer);
    // clear the previous interval and assign the default values to the timer 
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00.000"
}