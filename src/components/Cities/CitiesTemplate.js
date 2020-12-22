const CitiesTemplate = ({location, current}) => {

    return(
        <div className="row">
        
            <div className="col-6 mt-5 text-center">
                <h2>{location.name}</h2>
                <p className="text-muted">
                    {location.region}, {location.country}
                </p>
                <h5>{location.localtime}</h5>
            </div>

            <div className="col-6 mt-5 text-center">
                <img alt={location.name} src={current.weather_icons[0]} />

                <p>{current.weather_descriptions[0]}</p>

                <p>{current.temperature}°. 
                    <span className="text-muted">{current.feelslike}°</span>
                </p>
            </div>
        </div>
    )
}

export default CitiesTemplate