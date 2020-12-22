import TextField from '@material-ui/core/TextField';

const AddCity = ({onKeyPress, myCitiesComponent}) => {

    const onKeyUp = event => {

        const {charCode, target} = event;

        if(charCode !== 13 || target.value.trim() === '') return;
        
        onKeyPress(target.value);
        target.value = ''
        event.preventDefault()
    }

    return(
        <div className="row mt-5">
            <div className="col-12 text-center">
                <h3>Add your favourites cities</h3>
                <TextField onKeyPress={onKeyUp} className="mt-3" label="Enter city name here"/>
                {myCitiesComponent}
            </div>
        </div>
    )
}

export default AddCity;