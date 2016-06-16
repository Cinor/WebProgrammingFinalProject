var lat = [25.150024, 25.1325611, 25.1596123, 25.1283, 25.144658, 25.145639, 25.159463, 25.163325, 25.146013, 25.079253];
var lng = [121.7768812, 121.739341, 121.765433, 121.7432, 121.779831, 121.786015, 121.708087, 121.727093, 121.797491, 121.757408];

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 25.1325611, lng: 121.739341}
  });
  directionsDisplay.setMap(map);

  document.getElementById('submit').addEventListener('click', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var waypts = [];
  var checkboxArray = document.getElementById('waypoints');
  for (var i = 0; i < checkboxArray.length; i++) {
    if (checkboxArray.options[i].selected) {
      alert(lat[i]);
      var new_marker_position = new google.maps.LatLng(lat[i], lng[i]);
      waypts.push({
        location: new_marker_position,
        stopover: true
      });
    }
  }

  directionsService.route({
    origin: {lat: lat[document.getElementById('start').value],lng: lng[document.getElementById('start').value]},
    destination: {lat: lat[document.getElementById('end').value],lng: lng[document.getElementById('end').value]},
    waypoints: waypts,
    optimizeWaypoints: true,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById('directions-panel');
      summaryPanel.innerHTML = '';
      // For each route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
            '</b><br>';
        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
      }
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
