// Axios - ayuda a hacer llamada a servicios externos

import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
        console.log('Success!')
        console.log(response.data) // .data - para acceder a la información
    })
    .catch(function (error) {
        console.log('Error!')
        console.log(error);
    })
