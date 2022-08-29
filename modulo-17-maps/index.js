let marker, map

function initMap() {
    // console.log('init map')
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4, 
        center: posicion
    })
    const marker = new google.maps.Marker({
        position: posicion,
        map,
        title: 'Posición inicial'
    })
    // marker.setPosition({ lat, lng })
    geoPosiciona()
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPoc = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert('Tu navegador no admite geolocalización')
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    // console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log('Se ha producido un error')
    console.error(error)
}