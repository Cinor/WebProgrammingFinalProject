(function(window, mapster) {

  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);

  var marker2 = map.addMarker({
    lat: 25.1325611,
    lng: 121.739341,
    content: 'Keelung station'
  });

  //map._removeMarker(marker2);

  //console.log(map.markers);

  var found = map.findMarkerByLat(25.1325611);

  console.log(found);


}(window, window.Mapster));
