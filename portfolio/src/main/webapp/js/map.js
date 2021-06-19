const mapContainer = document.getElementById("map");
const town = {lat: 40.6641090881515, lng: -74.21069168968002}
const map = new google.maps.Map(
    mapContainer, {
        center: town,
        zoom: 12,
        mapId: "4307d858faf24a2a",
    }
)
const marker = new google.maps.Marker({
    position: town,
    map: map,
})