import {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import axios from 'axios'

import './App.css';
import NavBar from './components/Navbar/Navbar'
import Cities from './components/Cities/DefaultCities'
import AddCity from './components/MyCities/AddCity';
import Alert from './components/Alert/Alert';
import Snackbar from './components/Snackbar/Snackbar'
import MyCities from './components/MyCities/MyCities';

import getWeather from './store/actions/fetchWeather';
import addCity from './store/actions/addCity'

import getCityToSave from './controllers/saveCity';

const App = props => {
  
  const [dataState, setDataState] = useState({
    errors: false,
    text: ''
  })

  const [open, setOpen] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [urlApi, setUrlApi] = useState('')

  const {getWeather: getWeatherProps, cities, addCity: propsAddCity, myCities} = props

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  }


  useEffect(() => {
    const fetcher = async () => {
      const res = await axios.get('http://localhost:3000/getUrl')
      setUrlApi(res.data.url)
      getWeatherProps(res)
    }

    fetcher()
  }, [])

  const handleOnKeyPress = async (city) => {

    setOpenSnackbar(true)
    setOpen(false)

    const data = await getCityToSave(city, urlApi);
    
    if(data.error){
      setDataState({errors: true, text: 'The city could not be found'})
      setOpen(true)
      setOpenSnackbar(false)
      return;

    }else{

      const exists = myCities.find(city => city.location.name === data.location.name);

      if(exists){
        setDataState({errors: true, text: 'You have already added this city'})
      
      }else{
        await propsAddCity(data);
        setDataState({errors: false})

      }

      setOpen(true)
      setOpenSnackbar(false);
    }

  }

  return(
    <>
      <NavBar/>
      
      <div className="container">
        {(cities.length) ? <Cities cities={cities} /> : <h3>Loading...</h3>}
        
        <AddCity 
          onKeyPress={(city) => handleOnKeyPress(city)}
          myCitiesComponent={<MyCities myCities={myCities} />}
        />

        <Snackbar onClose={handleCloseSnackbar} open={openSnackbar}/>

        {(dataState.errors) ? 
          <Alert 
            open={open} 
            onClose={handleCloseAlert}
            severity="error" 
            text={dataState.text}
          />
          :
          <Alert 
            open={open} 
            severity="success"
            onClose={handleCloseAlert}
            text="City saved successfully"
          />}
      </div>

    </>
  )

}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    myCities: state.myCities
  }
}

const mapDispatchToProps = dispatch => {
  return (bindActionCreators({

    getWeather,
    addCity
    
  }, dispatch)) 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);