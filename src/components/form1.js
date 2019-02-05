import React from "react";

class Form1 extends React.Component{

    render(){

        return(
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" placeholder="Ciudad..."/>
                    <input type="text" name="country" placeholder="País..."/>
                    <button>Buscar</button>
                </form>
           
        )
    }
}


export default Form1;