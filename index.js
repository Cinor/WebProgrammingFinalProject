var markernumber=0;
var marker;
var img;
var lat=[25.150024,25.1325611,25.1596123,25.1283,25.144658,25.145639,25.159463,25.163325,25.146013,25.079253];
var lng=[121.7768812,121.739341,121.765433,121.7432,121.779831,121.786015,121.708087,121.727093,121.797491,121.757408];
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
   var button5 = document.getElementById( "button5" );
   button5.addEventListener( "click", click5, false );
   var button6 = document.getElementById( "button6" );
   button6.addEventListener( "click", click6, false );
   var button7 = document.getElementById( "button7" );
   button7.addEventListener( "click", click7, false );
   var button8 = document.getElementById( "button8" );
   button8.addEventListener( "click", click8, false );
   var button9 = document.getElementById( "button9" );
   button9.addEventListener( "click", click9, false );
   var button10 = document.getElementById( "button10" );
   button10.addEventListener( "click", click10, false );
} // end function start
function click1(){
    markernumber=0;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    img=document.getElementById( "pic" );
    marker.setPosition(new_marker_position);
    img.setAttribute("die1.png");
}
function click2(){
    markernumber=1;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    img=document.getElementById( "pic" );
    marker.setPosition(new_marker_position);
    img.setAttribute("die2.png");
}
function click3(){
    markernumber=2;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    img=document.getElementById( "pic" );
    marker.setPosition(new_marker_position);
    img.setAttribute("die3.png");
}
function click4(){
    markernumber=3;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    img=document.getElementById( "pic" );
    marker.setPosition(new_marker_position);
    img.setAttribute("die4.png");
}
function click5(){
    markernumber=4;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    img=document.getElementById( "pic" );
    marker.setPosition(new_marker_position);
    img.setAttribute("die1.png");
}
function click6(){
    markernumber=5;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    img=document.getElementById( "pic" );
    marker.setPosition(new_marker_position);
    img.setAttribute("die1.png");
}
function click7(){
    markernumber=6;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    img=document.getElementById( "pic" );
    marker.setPosition(new_marker_position);
    img.setAttribute("die1.png");
}
function click8(){
    markernumber=7;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    img=document.getElementById( "pic" );
    marker.setPosition(new_marker_position);
    img.setAttribute("die1.png");
}
function click9(){
    markernumber=8;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    img=document.getElementById( "pic" );
    marker.setPosition(new_marker_position);
    img.setAttribute("die1.png");
}
function click10(){
    markernumber=9;
    var new_marker_position = new google.maps.LatLng(lat[markernumber], lng[markernumber]);
    img=document.getElementById( "pic" );
    marker.setPosition(new_marker_position);
    img.setAttribute("die1.png");
}
window.addEventListener( "load", start, false );
