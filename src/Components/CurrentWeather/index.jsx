import './style.css'

export function CurrentWeather({img, weather_description, temperature, observation_time}){
  return (
    <div className='info-container'>
      <div className="image">
        <img src={img} alt={weather_description} className='image-tag' />
      </div>
      <div className="information-weather">
        <ul className='list-info'>
          <li><strong>temperature: </strong>{temperature}</li>
          <li><strong>observation time: </strong>{observation_time}</li>
          <li><strong>weather description: </strong>{weather_description}</li>
        </ul>
      </div>
    </div>
  )
}