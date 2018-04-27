
var parkMap = L.map("map").setView([25.7114614,-80.2779458], 19);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20,
  id: 'openstreetmap.satellite',
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(parkMap);

//Pull Down Menu

    var teamPulldown = document.querySelector("#team");
    var result = document.querySelector("#result");

      teamPulldown.addEventListener("change", function(event) {
        console.log(event.target.selectedOptions[0]);

        // This requires a little sorting through the 'event.target'
        // object, but if you go with selectedOptions property, it
        // will always return an array of 1 item in the array (hence
        // [0]). Then you select the data you would like to display.

        if (event.target.selectedOptions[0].value != "null") {
          var pulldownData = event.target.selectedOptions[0].textContent;
          result.textContent = "You selected: " + pulldownData + ".";
        } else {
          result.textContent = "";
        }

var array = new Array();

// function onMapClick(event){
//       // console.log(event.latlng);
//       //console.dir(event);
//       for(var x = 0; x < array.length; )
//
//     };

    parkMap.on("click", onMapClick);


var form1 = document.forms[0];

var submit = document.forms[0].elements.submit;
submit.addEventListener("click", function() {
      event.preventDefault();

      var city = document.forms[0].elements[0].value;
      var park = document.forms[0].elements[1].value;
      var zipcode = document.forms[0].elements[2].value;
      console.log(city);
    });
