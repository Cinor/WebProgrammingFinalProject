var markernumber=0;
var marker;
var lat=[25.150024,25.1325611,25.1596123,25.1283];
var lng=[121.7768812,121.739341,121.765433,121.7432];
var con=["ntou","keelung station","peaceful island","nightmarket front of temple"]
function start()
{
   var button1 = document.getElementById( "button1" );
   button1.addEventListener( "click", click1, false );
   var button2 = document.getElementById( "button2" );
   button2.addEventListener( "click", click2, false );
   var button3 = document.getElementById( "button3" );
   button3.addEventListener( "click", click3, false );
   var button4 = document.getElementById( "button4" );
   button4.addEventListener( "click", click4, false );
} // end function start
function click1(){
    markernumber=0;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);

}
function click2(){
    markernumber=1;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
}
function click3(){
    markernumber=2;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
}
function click4(){
    markernumber=3;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    marker.setPosition(new_marker_position);
}
window.addEventListener( "load", start, false );
