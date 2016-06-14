(function(window, mapster) {

  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);

  var marker = map.addMarker({
    lat: 25.150024,
    lng: 121.7768812,
    content: 'ntou'
  });

  var marker2 = map.addMarker({
    lat: 25.1325611,
    lng: 121.739341,
    content: 'Keelung station'
  });

  var marker3 = map.addMarker({
    lat: 25.1596123,
    lng: 121.765433,
    content: 'peaceful island'
  });

  var marker3 = map.addMarker({
    lat: 25.1283,
    lng: 121.7432,
    content: 'front of tample'
  });

  //map._removeMarker(marker2);

  //console.log(map.markers);

  var found = map.findMarkerByLat(25.1325611);

  console.log(found);


}(window, window.Mapster));
