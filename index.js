//Declare variables for the various sections 
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

let workData;
let workCurrent = document.getElementById("work-current");
let workPrevious = document.getElementById("work-previous");

let playData;
let playCurrent = document.getElementById("play-current");
let playPrevious = document.getElementById("play-previous");

let studyData;
let studyCurrent = document.getElementById("study-current");
let studyPrevious = document.getElementById("study-previous");

let exerciseData;
let exerciseCurrent = document.getElementById("exercise-current");
let exercisePrevious = document.getElementById("exercise-previous");

let socialData;
let socialCurrent = document.getElementById("social-current");
let socialPrevious = document.getElementById("social-previous");

let selfData;
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
  // Call function to get the json data
  getData()
    .then(data => {
      // assign data for the various sections
      workData = data[0].timeframes;
      playData = data[1].timeframes;
      studyData = data[2].timeframes;
      exerciseData = data[3].timeframes;
      socialData = data[4].timeframes;
      selfData = data[5].timeframes;

      // Default 
      workCurrent.innerHTML = `${workData.daily.current}hrs`;
      workPrevious.innerHTML = `Yesterday - ${workData.daily.previous}hrs`;
      
      playCurrent.innerHTML = `${playData.daily.current}hrs`;
      playPrevious.innerHTML = `Yesterday - ${playData.daily.previous}hrs`;

      studyCurrent.innerHTML = `${studyData.daily.current}hrs`;
      studyPrevious.innerHTML = `Yesterday - ${studyData.daily.previous}hrs`;

      exerciseCurrent.innerHTML = `${exerciseData.daily.current}hrs`;
      exercisePrevious.innerHTML = `Yesterday - ${exerciseData.daily.previous}hrs`;

      socialCurrent.innerHTML = `${socialData.daily.current}hrs`;
      socialPrevious.innerHTML = `Yesterday - ${socialData.daily.previous}hrs`;

      selfCurrent.innerHTML = `${selfData.daily.current}hrs`;
      selfPrevious.innerHTML = `Yesterday - ${selfData.daily.previous}hrs`;

      // display daily hours when daily button is clicked
      daily.onclick = () => {
        workCurrent.innerHTML = `${workData.daily.current}hrs`;
        workPrevious.innerHTML = `Yesterday - ${workData.daily.previous}hrs`;
        
        playCurrent.innerHTML = `${playData.daily.current}hrs`;
        playPrevious.innerHTML = `Yesterday - ${playData.daily.previous}hrs`;

        studyCurrent.innerHTML = `${studyData.daily.current}hrs`;
        studyPrevious.innerHTML = `Yesterday - ${studyData.daily.previous}hrs`;

        exerciseCurrent.innerHTML = `${exerciseData.daily.current}hrs`;
        exercisePrevious.innerHTML = `Yesterday - ${exerciseData.daily.previous}hrs`;

        socialCurrent.innerHTML = `${socialData.daily.current}hrs`;
        socialPrevious.innerHTML = `Yesterday - ${socialData.daily.previous}hrs`;

        selfCurrent.innerHTML = `${selfData.daily.current}hrs`;
        selfPrevious.innerHTML = `Yesterday - ${selfData.daily.previous}hrs`;
      };

      // display weekly hours when daily button is clicked
      weekly.onclick = () => {
        workCurrent.innerHTML = `${workData.weekly.current}hrs`;
        workPrevious.innerHTML = `Last week - ${workData.weekly.previous}hrs`;
        
        playCurrent.innerHTML = `${playData.weekly.current}hrs`;
        playPrevious.innerHTML = `Last week - ${playData.weekly.previous}hrs`;

        studyCurrent.innerHTML = `${studyData.weekly.current}hrs`;
        studyPrevious.innerHTML = `Last week - ${studyData.weekly.previous}hrs`;

        exerciseCurrent.innerHTML = `${exerciseData.weekly.current}hrs`;
        exercisePrevious.innerHTML = `Last week - ${exerciseData.weekly.previous}hrs`;

        socialCurrent.innerHTML = `${socialData.weekly.current}hrs`;
        socialPrevious.innerHTML = `Last week - ${socialData.weekly.previous}hrs`;

        selfCurrent.innerHTML = `${selfData.weekly.current}hrs`;
        selfPrevious.innerHTML = `Last week - ${selfData.weekly.previous}hrs`;
      };

      // display monthly hours when daily button is clicked
      monthly.onclick = () => {
        workCurrent.innerHTML = `${workData.monthly.current}hrs`;
        workPrevious.innerHTML = `Last month - ${workData.monthly.previous}hrs`;
        
        playCurrent.innerHTML = `${playData.monthly.current}hrs`;
        playPrevious.innerHTML = `Last month - ${playData.monthly.previous}hrs`;

        studyCurrent.innerHTML = `${studyData.monthly.current}hrs`;
        studyPrevious.innerHTML = `Last month - ${studyData.monthly.previous}hrs`;

        exerciseCurrent.innerHTML = `${exerciseData.monthly.current}hrs`;
        exercisePrevious.innerHTML = `Last month - ${exerciseData.monthly.previous}hrs`;

        socialCurrent.innerHTML = `${socialData.monthly.current}hrs`;
        socialPrevious.innerHTML = `Last month - ${socialData.monthly.previous}hrs`;

        selfCurrent.innerHTML = `${selfData.monthly.current}hrs`;
        selfPrevious.innerHTML = `Last month - ${selfData.monthly.previous}hrs`;
      };

    });
};