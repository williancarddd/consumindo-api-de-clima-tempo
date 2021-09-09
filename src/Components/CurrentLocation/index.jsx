import { CurrentTime } from '../CurrentTime'
import './style.css'
export function CurrentLocation({name_city, country, region, time_zone}){
  return (
    <div className="container-main-location">
      <ul className="location-list">
        <li><strong>City name</strong>: {name_city}</li>
        <li><strong>Country</strong>: {country}</li>
        <li><strong>Region</strong>: {region}</li>
        <li><strong>Timezone</strong>: <br/>{time_zone}</li>
        <li><strong>Current Time</strong>: <br/>{<CurrentTime />}</li>
      </ul>
    </div>
  )
}