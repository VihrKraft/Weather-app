import { WeatherIcons } from '../Constants'


export const WeatherInfoComponent = ({name, value}) => {
    return(
        <div className="InfoContainer">
            <img src={WeatherIcons[name]} alt="" className="InfoIcon" />
            <span className="InfoLabel">{value}</span>
            <span>{name}</span>
        </div>
    )
}