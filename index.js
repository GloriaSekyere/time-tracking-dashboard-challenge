//Declare variables for timeframes and the various sections

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

let workCurrent = document.getElementById("work-current");
let workPrevious = document.getElementById("work-previous");
let playCurrent = document.getElementById("play-current");
let playPrevious = document.getElementById("play-previous");
let studyCurrent = document.getElementById("study-current");
let studyPrevious = document.getElementById("study-previous");
let exerciseCurrent = document.getElementById("exercise-current");
let exercisePrevious = document.getElementById("exercise-previous");
let socialCurrent = document.getElementById("social-current");
let socialPrevious = document.getElementById("social-previous");
let selfCurrent = document.getElementById("selfcare-current");
let selfPrevious = document.getElementById("selfcare-previous");

//Fetch data and convert response to json 
const getData = async () => {
  let response = await fetch("../data.json");
  let data = await response.json();
  return data;
}

// when the page loads, fetch and display data
window.onload = () => {

  // Call async function to get the json data
  getData()
    .then(data => {
      
      // set page content based on timeframe
      const setTimeframe = (timeframe, previous) => {

        workCurrent.innerHTML = `${data[0].timeframes[timeframe].current}hrs`;
        workPrevious.innerHTML = `${previous} - ${data[0].timeframes[timeframe].previous}hrs`;
        
        playCurrent.innerHTML = `${data[1].timeframes[timeframe].current}hrs`;
        playPrevious.innerHTML = `${previous} - ${data[1].timeframes[timeframe].previous}hrs`;

        studyCurrent.innerHTML = `${data[2].timeframes[timeframe].current}hrs`;
        studyPrevious.innerHTML = `${previous} - ${data[2].timeframes[timeframe].previous}hrs`;

        exerciseCurrent.innerHTML = `${data[3].timeframes[timeframe].current}hrs`;
        exercisePrevious.innerHTML = `${previous} - ${data[3].timeframes[timeframe].previous}hrs`;

        socialCurrent.innerHTML = `${data[4].timeframes[timeframe].current}hrs`;
        socialPrevious.innerHTML = `${previous} - ${data[4].timeframes[timeframe].previous}hrs`;

        selfCurrent.innerHTML = `${data[5].timeframes[timeframe].current}hrs`;
        selfPrevious.innerHTML = `${previous} - ${data[5].timeframes[timeframe].previous}hrs`;
      }

      // set default display to daily timeframe
      setTimeframe(daily.value, "Yesterday");

      // display daily hours when daily button is clicked
      daily.onclick = () => {
        setTimeframe(daily.value, "Yesterday");
      };

      // display weekly hours when daily button is clicked
      weekly.onclick = () => {
        setTimeframe(weekly.value, "Last Week");
      };

      // display monthly hours when daily button is clicked
      monthly.onclick = () => {
        setTimeframe(monthly.value, "Last Month");
      };

  });
};