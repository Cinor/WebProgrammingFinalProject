
var marker1;

(function(window, mapster) {

  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);

    marker = map.addMarker({
  });

  map._removeMarker(marker1);

  //console.log(map.markers);

  var found = map.findMarkerByLat(25.1325611);

  console.log(found);


}(window, window.Mapster));
