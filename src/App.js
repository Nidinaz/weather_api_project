import "./App.css";

const weatherJson = require("./weather.json");

//way to condition - weather.forecast.forecastday.hour //.text //.icon //.code //.time
//filter time and condition
//map de data

//first array first: forcasst day
//date, max, min, conditiontext
//

function App() {
  const wj = weatherJson.forecast.forecastday.map((weather) => {
    // const HourWeatherCondition = weather.hour.map((hourWeather) => {
    //   return (
    //     <HourWeather hourWeather={hourWeather}></HourWeather>
    //   )
    // })
    console.log("Hier komt weather:")
    console.log(weather)
    return (
    <div>
      <WeatherCondition weather={weather}></WeatherCondition>
      {/* {HourWeatherCondition} */}
    </div>
    )
  });
  return <div>{wj}</div>;
}

const WeatherCondition = (props) => {
  // console.log(props)
  const hw = props.weather.hour.map((hourWeather) => {
   return <HourWeather hourWeather={hourWeather}></HourWeather>;
  });
  
  return (
    <div className='dayweatherdata'>
      <div>
        <span className="date">{props.weather.date}</span>
      </div>
      <div>
        <span className="mintemp">{props.weather.day.mintemp_c}</span>
      </div>
      <div>
        <span className="maxtemp">{props.weather.day.maxtemp_c}</span>
      </div>
      <div>
        <span className="day_condition_text>">
          {props.weather.day.condition.text}
        </span>
      </div>
      <div className="day_condition_icon>">
        <img src={props.weather.day.condition.icon} alt='day_icon_picture' />
      </div>
      <div>
        <span className="day_condition_code>">
          {props.weather.day.condition.code}
        </span>
      </div>
      <div>{hw}</div>
    </div>
  );
};

const HourWeather = (props) => {
  // console.log(props);
  return (
    <div>
      <div>
        <span className="time">{props.hourWeather.time}</span>
      </div>
      <div>
        <span className="hour_condition_text>">
          {props.hourWeather.condition.text}
        </span>
      </div>
      <div className="hour_condition_icon>">
        <img src={props.hourWeather.condition.icon}  alt='hour_icon_picture'/>
      </div>
      <div>
        <span className="hour_condition_code>">
          {props.hourWeather.condition.code}
        </span>
      </div>
    </div>
  );
};

export default App;
