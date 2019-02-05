import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather__key">Ciudad: 
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature && <p className="weather__key">Temperatura (K): 
                        <span className="weather__value">  {this.props.temperature}</span>
                    </p>
                }

                {
                    this.props.humidity && <p className="weather__key">Humedad (%): 
                        <span className="weather__value">  {this.props.humidity}</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather__key">Condiciones:  
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
        
            </div>
        )
    }
}

export default Weather;