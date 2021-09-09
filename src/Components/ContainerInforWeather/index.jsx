import './style.css'
import { CurrentWeather } from '../CurrentWeather'
import { ContextAppWeather } from '../AppContext'
import { useContext } from 'react'
import { CurrentLocation } from '../CurrentLocation'
import { CurrentTime } from '../CurrentTime'

export function ContainerInforWeather({children}){
  const {state, dispatch} = useContext(ContextAppWeather)
  console.log(state)
  return (
  <section className='container-main'>
    {
      state.hasOwnProperty('current') && state.hasOwnProperty('location')  ? 
      (
        <>
        <CurrentWeather 
            img={state.current.weather_icons[0]} 
            weather_description={state.current.weather_descriptions[0]}
            temperature={`${state.current.temperature}°C`}
            observation_time={state.current.observation_time}
            />
            
            <CurrentLocation 
              name_city={state.location.name}
              region={state.location.region}
              time_zone={state.location.timezone_id.split('/').join('- ')}
              country={state.location.country}
              />
        </>
          )
          :
      ''
    }
    
  </section>
  )
}