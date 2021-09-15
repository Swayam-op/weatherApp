import React,{useState,useEffect} from 'react'
import Page from './Page';



const WeatherApp = () => {
  const [weatherData,setweatherData] = useState({});
  const [inputdata,setinputdata]=useState("cuttack");
  const [icon,seticon]=useState('wi wi-cloudy');
  const [time,settime]=useState(new Date().toLocaleTimeString());
  const [date,setdate]=useState(new Date().toLocaleDateString());
    const getWeatherInfo = async () =>{
   
  try {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${inputdata}&units=metric&appid=95fe21cad56b9b4993c62f0f16cc53d7`;
    const res=await fetch(url)
    const data=await res.json();

    const {temp,pressure,humidity}=data.main;
    const {main:weatherMood}=data.weather[0];
    const {speed}=data.wind;
    //Time of searched city
    
    
    const {dt}=data;
    // var t=new Date(dt*1000);
    // const time=t.toLocaleTimeString();
    // const date=t.toLocaleDateString();
    const {name:city}=data;
    const {country}=data.sys;
    // for sunset value
    const {sunset}=data.sys;
    var d=new Date(sunset*1000);
    const hr=parseInt(d.getHours()%12);
    const mnt=d.getMinutes();
    const Sunset=`${hr}:${mnt} PM`;
   
    const w_data={temp,pressure,humidity,weatherMood,speed,Sunset,city,country};
    setweatherData(w_data);
    
    //selecting icon for respective weather mood
    switch(weatherMood){
      case 'Clouds':seticon('wi wi-cloudy-windy');
      break;
      case 'Thunderstorm':seticon('wi wi-thunderstorm')
      break;
      case 'Drizzle':seticon('wi wi-sprinkle');
      break;
      case 'Haze':seticon('wi wi-fog');
      break;
      case 'Rain':seticon('wi wi-rain-wind');
      break;
      case 'Snow':seticon('wi wi-snow-wind');
      break;
      case 'Smoke':seticon('wi wi-smoke');
      break;
      case 'FOg':seticon('wi wi-smoge');
      break;
      default:
       
        if(new Date(dt*1000).getHours()>18 || new Date(dt*1000).getHours()<5)
        {
          
          seticon('wi wi-night-clear')
        }
        else{
          seticon('wi wi-day-sunny')
        }
        break;
    }
   
    // console.log(weatherData);
  } catch (error) {
    console.log(error)
  }
  
    }

    function tim()
    {
      setInterval(() => {
        var d=new Date().toLocaleDateString();
        var t=new Date().toLocaleTimeString();
        setdate(d);
        settime(t);
      }, 1000);
    }

     useEffect(() => {
     
      tim();
     getWeatherInfo();
    },[])// eslint-disable-next-line
    return (
        <>
           <div className="weather">
        <div className="search_box">
            <div className="search_in"><input placeholder="Search city..." type="text" value={inputdata} onChange={(event)=>setinputdata(event.target.value)}/></div>
            <div className="search" onClick={()=>getWeatherInfo()}>Search</div>
        </div>
            <Page weatherData={weatherData} icon={icon} time={time} date={date}/>
            </div>
        </>
    )
}

export default WeatherApp;
