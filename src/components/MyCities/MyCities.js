import CitiesTemplate from "../Cities/CitiesTemplate"


const MyCities = (props) => {

    const {myCities} = props

    return(
        <div className="row mt-5 text-left">
            <div className="col-12">
                
                {(
                !myCities.length ?

                    <h4>You don't have any favourite city yet</h4> 
                    :
                    myCities.map( city => {

                        return <CitiesTemplate 
                            key={city.location.name} 
                            location={city.location} 
                            current={city.current}
                        />
                        
                    })
                )}
            </div>
        </div>
    )

}

export default MyCities