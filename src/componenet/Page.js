import React from 'react'
import './css/weathercss.css';

const Page = ({weatherData,icon,date,time}) => {

    const {temp,weatherMood,city,country,Sunset,humidity,pressure,speed}=weatherData;
   
    return (
        <>
         
        <div className="weather_info">
            <div className="w_condition">
                <div className="big_logo"><i className={icon} id="big_icon" ></i></div>
            </div>
            <div className="weather_data">
                <div className="temperature">
                    <div className="deg">{temp}&deg;</div>
                     <div className="cld">{weatherMood} <br/>
                        <span id="location">{city},{country}</span>
                     </div>
                </div>
            
              
                <div className="time"> {date} <br />
                {time}
                </div>
            </div>
            <div className="four_cont">
                <div className="small_cont">
                    <div className="small_logo"><i className="wi wi-sunset"></i></div>
                    <div className="small_data">{Sunset}<br/> Sunset</div>
                </div>
                <div className="small_cont">
                    <div className="small_logo"><i className="wi wi-humidity"></i></div>
                    <div className="small_data">{humidity} <br/> Humidity</div>
                </div>
                <div className="small_cont">
                    <div className="small_logo"><i className="wi wi-barometer"></i></div>
                    <div className="small_data">{pressure} <br/> Pressure</div>
                </div>
            
                <div className="small_cont">
                    <div className="small_logo"><i className="wi wi-strong-wind"></i></div>
                    <div className="small_data">{speed}<br/> speed</div>
                </div>
            </div>

        </div>
      <div className="creator"> <center>Developed by: <span onclick="window.location.assign('https://www.instagram.com/swayam_0p/')">@swayam_0p</span> <br/>React-js project: Weather-App</center> </div>
      
    
        </>
    )
}

export default Page
