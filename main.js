 let data = "jind";
 getdata(data);
 
 
 
 // get city name from searchbar s
 async function cityname(){
    data=   searchinput.value 
    console.log(data);
    getdata(data);
    getforecastdata(data)
   }  
const searchinput = document.getElementById('searchinput')
const searchbtn= document.getElementById('searchbtn')
searchbtn.addEventListener('click' , cityname )
searchinput.addEventListener('keyup' , (e)=>{
   if (e.keyCode == 13) {
   
    
     cityname()
   }
  
 
})


// query to get currentdata data
   async function getdata(dat){

      let data =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dat}&units=metric&appid=fe7c941637516dc4d303f84c5673ba75`)
     let result = await data.json();
  
    console.log(result);
    showcurrentdata(result);
    
  }
//show current data
function showcurrentdata(result) {
   let temp = Math.round(result.main.temp)
   let visibility = (result.visibility)/1000
   let cityname = result.name
   let main = result.weather[0].main
   let description=result.weather[0].description
   let icon = result.weather[0].icon
   let humidity = result.main.humidity
   let pressure = result.main.pressure
   let wind =Math.round(result.wind.speed)
   let tempmin = Math.round(result.main.temp_min)
   let tempmax = Math.round(result.main.temp_max)
   letprey = result.main.humidity
    document.querySelector('.cityname').innerHTML=`<h1>${cityname}</h1>`
    document.querySelector('.discription').innerHTML=`<h2>${main}</h2>`
    document.querySelector('.temp').innerHTML=` <h1>${temp}</h1>
                                                <h3>°C </h3>`
                                                
    document.querySelector('.stage2').innerHTML=`<img src="img/${main}.png" alt="">`
    document.querySelector('.humidity').innerHTML=`  <h3>Humadity</h3>
                                                      <h1>${humidity}%</h1>`
      document.querySelector('.wind').innerHTML=` <h3>Wind speed</h3>
                                                  <div class="wind2">
                                                          <h1>${wind}</h1>
                                                          <h3>Km/h</h3>
                                                  </div>`
      document.querySelector('.pressure').innerHTML=` <h3>Air Pressure</h3>
                                                  <div class="wind2">
                                                          <h1>${pressure}</h1>
                                                          <h3>hPa</h3>
                                                  </div>`
      document.querySelector('.visibility').innerHTML=` <h3>Visibility</h3>
                                                  <div class="wind2">
                                                          <h1>${visibility}</h1>
                                                          <h3>KM</h3>
                                                  </div>`
      document.querySelector('.tempminmax').innerHTML=`   <h3>Temp Max</h3>
                                                          <div class="wind2">
                                                            <h1>${tempmax}</h1>
                                                            <h3>°C</h3>
                                                        </div>`                                                    
}  

let date1 = document.querySelector('.date')
let day1 = document.querySelector('.day')
// update time and date 
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
setInterval(() => {
const time = new Date();
const year = time.getFullYear();


const month = time.getMonth();
const date= time.getDate();
const day = time.getDay();
const hours = time.getHours();
const hoursIn12HrFormat = hours >= 13 ? hours %12: hours;
const minutes = time.getMinutes();
const min = minutes <=10 ? `0${minutes}` : minutes
const ampm=  hours >=12? 'PM': 'AM'

// timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes+ id="am-pm">${ampm}</span> + <span

// date.innerHTML = days[day] + ', ' + date+''+ months[month]
date1.innerHTML=`<h2>${date}-${months[month]}-${year}</h2>`
day1.innerHTML=`<h1>${days[day]} , ${hoursIn12HrFormat}:${min} ${ampm}</h1>`

}, 1000);
  


//for right part

function showforcastdata(dailyTemperatures){
   let day1name = dailyTemperatures[1].day
   let day1temp = Math.round(dailyTemperatures[1].avgTemp)
   let day1main = dailyTemperatures[1].mainWeather
   document.querySelector('.day1').innerHTML=`<div class="dayname"> <h2>${day1name}</h2></div>
                                                     <div class="img">
                                                       <img src="img/${day1main}.png" alt="">
                                                   </div>
                                                   <div class="t day">
                                                     <h4>${day1temp}</h4>
                                                     <h3>°C </h3>
                                                   </div>`
   let day2name = dailyTemperatures[2].day
   let day2temp = Math.round(dailyTemperatures[2].avgTemp)
   let day2main = dailyTemperatures[2].mainWeather
   document.querySelector('.day2').innerHTML=`<div class="dayname"> <h2>${day2name}</h2></div>
                                                     <div class="img">
                                                       <img src="img/${day2main}.png" alt="">
                                                   </div>
                                                   <div class="t day">
                                                     <h4>${day2temp}</h4>
                                                     <h3>°C </h3>
                                                   </div>`
   let day3name = dailyTemperatures[3].day
   let day3temp = Math.round(dailyTemperatures[3].avgTemp)
   let day3main = dailyTemperatures[3].mainWeather
   document.querySelector('.day3').innerHTML=`<div class="dayname"> <h2>${day3name}</h2></div>
                                                     <div class="img">
                                                       <img src="img/${day3main}.png" alt="">
                                                   </div>
                                                   <div class="t day">
                                                     <h4>${day3temp}</h4>
                                                     <h3>°C </h3>
                                                   </div>`
   let day4name = dailyTemperatures[4].day
   let day4temp = Math.round(dailyTemperatures[4].avgTemp)
   let day4main = dailyTemperatures[4].mainWeather
   document.querySelector('.day4').innerHTML=`<div class="dayname"> <h2>${day4name}</h2></div>
                                                     <div class="img">
                                                       <img src="img/${day4main}.png" alt="">
                                                   </div>
                                                <div class="t day">
                                                     <h4>${day4temp}</h4>
                                                     <h3>°C </h3>
                                                   </div>`
   let day5name = dailyTemperatures[5].day
   let day5temp = Math.round(dailyTemperatures[4].avgTemp)
   let day5main = dailyTemperatures[5].mainWeather
   document.querySelector('.day5').innerHTML=`<div class="dayname"> <h2>${day5name}</h2></div>
                                                     <div class="img">
                                                       <img src="img/${day5main}.png" alt="">
                                                   </div>
                                                   <div class="t day">
                                                     <h4>${day5temp}</h4>
                                                     <h3>°C </h3>
                                                   </div>`


}

async function getforecastdata(city2){

   let data =await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city2}&units=metric&appid=fe7c941637516dc4d303f84c5673ba75`)
  let result = await data.json();
  const dailyTemperatures = processDailyTemperatures(result);
    console.log(dailyTemperatures); // Display the daily temperatures in the console
    showforcastdata(dailyTemperatures)
}
let city2="jind"
getforecastdata(city2);

// Function to process the data and extract daily temperatures
function processDailyTemperatures(data) {
   const dailyTemps = {};
 
   data.list.forEach(forecast => {
     const date = new Date(forecast.dt * 1000).toISOString().split('T')[0]; // Get date in YYYY-MM-DD format
 
     if (!dailyTemps[date]) {
       dailyTemps[date] = { temps: [], weather: {} };
     }
 
     dailyTemps[date].temps.push(forecast.main.temp);
     const weatherMain = forecast.weather[0].main;
 
     // Count occurrences of each weather condition to determine the most common one
     if (dailyTemps[date].weather[weatherMain]) {
       dailyTemps[date].weather[weatherMain]++;
     } else {
       dailyTemps[date].weather[weatherMain] = 1;
     }
   });
 
   // Calculate average temperature and most common weather condition for each day
   const dailyAvgTemps = Object.keys(dailyTemps).map(date => {
     const temps = dailyTemps[date].temps;
     const avgTemp = temps.reduce((sum, temp) => sum + temp, 0) / temps.length;
     const day = new Date(date).toLocaleString('en-US', { weekday: 'short' }); // Get short form of the day of the week
 
     // Determine the most common weather condition for the day
     const weatherCounts = dailyTemps[date].weather;
     const mainWeather = Object.keys(weatherCounts).reduce((a, b) => weatherCounts[a] > weatherCounts[b] ? a : b);
 
     return { date, day, avgTemp, mainWeather };
   });
 
   return dailyAvgTemps;
 }
  


