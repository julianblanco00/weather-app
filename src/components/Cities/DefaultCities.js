import {useState, useEffect} from 'react'
import CitiesTemplate from './CitiesTemplate'

const Cities = ({cities}) => {
    
    const [currentCity, setCurrentCity] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {

            setCurrentCity(pos => {
                if(cities.length - 1 === pos){
                    return 0
                }else{
                    return pos + 1
                }
            })

        }, 10000);

        return () => clearInterval(interval)
    }, [])

    const {location, current} = cities[currentCity]

    const loadCity = () => {
        return <CitiesTemplate location={location} current={current}/>
    }

    return loadCity()
}

export default Cities