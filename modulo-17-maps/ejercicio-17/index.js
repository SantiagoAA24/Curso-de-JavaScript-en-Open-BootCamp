function initMap() {
    const posicion = {
        lat: 4.586820, 
        lng: -74.135323
    }
    const unal = {
        lat: 4.63874255,
        lng: -74.085237757545
    }
    const corferias = {
        lat: 4.629041, 
        lng: -74.089669
    }
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4, 
        center: posicion
    })
    const marker1 = new google.maps.Marker({
        position: posicion,
        map,
        title: 'Posición inicial'
    })
    const marker2 = new google.maps.Marker({
        position: unal,
        map,
        title: 'Unal'
    })
    const marker3 = new google.maps.Marker({
        position: corferias,
        map,
        title: 'Corferias'
    })
}