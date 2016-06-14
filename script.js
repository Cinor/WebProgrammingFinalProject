
var marker1;

(function(window, mapster) {

  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);

    marker = map.addMarker({
    lat: lat[markernumber],
    lng: lng[markernumber],
    content: 'ntou'
  });
/*
  var marker2 = map.addMarker({
    lat: lat[1],
    lng: lng[1],
    content: 'Keelung station'
  });

  var marker3 = map.addMarker({
    lat: lat[2],
    lng: lng[2],
    content: 'peaceful island'
  });

  var marker4 = map.addMarker({
    lat: lat[3],
    lng: lng[3],
    content: 'front of tample'
  });
*/
  map._removeMarker(marker1);

  //console.log(map.markers);

  var found = map.findMarkerByLat(25.1325611);

  console.log(found);


}(window, window.Mapster));
