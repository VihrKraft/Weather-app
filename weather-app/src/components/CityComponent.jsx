import img from '../assets/icons/perfect-day.svg'


export const CityComponent = ({ setCity, fetchWeather }) => {
    return (
        <>
            <img src={img} alt="" className="WelcomeLogo"/>
            <span className="ChooseCityLabel">Find Weather of your city</span>
            <form action="" className="SearchBox" onSubmit={(event) => fetchWeather(event)}>
                <input type="text" placeholder='City' onChange={(event) => setCity(event.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        </>
    )
}