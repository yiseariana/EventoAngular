/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function initMap() {
    var myLatLng = {
        lng: -76.6095757484436,
        lat: 2.444207174443903,
    };

    var c = document.getElementById('map');
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Encuentro apícola Cauca'
    });
}


