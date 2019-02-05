import React from "react";

const SForm = (props) => {
    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="Ciudad..." />
            <input type="text" name="country" placeholder="País..." />
            <button>Buscar</button>
        </form>
    )
}

export default SForm;