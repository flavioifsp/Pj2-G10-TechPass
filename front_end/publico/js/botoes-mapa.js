const btns = [...document.querySelectorAll(".cor-botoes")]

btns.map((e) => {
    let btnOescolhido
    e.addEventListener("click", (event) => {
        btnOescolhido = event.currentTarget
        for (x of btns) { x.style.background = "linear-gradient(45deg, rgba(0, 117, 255, 0.7978737027037377) 25%, rgba(96, 2, 255, 0.6970333665692839) 76%)" }
        btnOescolhido.style.background = "#6000CF"
    })
})





function init_map(pontos) {
    
    let myOptions = {
        zoom: 15, center: new google.maps.LatLng(-22.9688813, -46.5338473), mapTypeId:
            google.maps.MapTypeId.ROADMAP
    };


    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);

    for(umPonto of pontos){
        marker = new google.maps.Marker({ map: map, position: new google.maps.LatLng(umPonto.lat, umPonto.lng) });
        infowindow = new google.maps.InfoWindow({ content: umPonto.nome });
    }

    google.maps.event.addListener(marker, 'click', function () { infowindow.open(map, marker); });
    infowindow.open(map, marker);

}



const pontos = [
    {nome: "TECH PASS", lat: -22.9688813, lng: -46.5338473},
    {nome: "T PASS", lat: -22.9688815, lng: -46.5338475}
]

google.maps.event.addDomListener(window, 'load', init_map(pontos));
