
//var parkMap = L.map("map").setView([25.7114614,-80.2779458], 19);
mapboxgl.accessToken = 'pk.eyJ1IjoidmlyYWoxMDI5IiwiYSI6ImNqZ2ZsaHFwYTJ5YnAyd3FleWF6NzVqNnIifQ.U8aHQWQHypdxjrVZ8DWqpQ';
// var parkMap = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/satellite-v9',
//     zoom: 18,
//     center: [-80.2779458, 25.7114614]
// });

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 20,
//   id: 'openstreetmap.satellite',
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(parkMap);

//Pull Down Menu

//All the park Objects

// map.loadImage('img/marker-icon.png', function(error, image) {
//         if (error) throw error;
//         map.addImage('marker', image);

var parkInfo = {
    jaycee: {
    id: "jaycee",
    parkName: "Jaycee Park",
    lat: 25.7114614,
    lng: -80.2779458,
    zoom: 18,
    address: "1230 Hardee Rd Coral Gables, FL 33146",
    phoneNumber: "Not Available",
    weather: "https://api.weather.gov/gridpoints/MFL/106,47/forecast",
    features: [{
            "type": "Feature",
            "properties": {
                "description": "<strong>Basketball Court</strong><p>Currently Wet, will dry in two hours.</p>",
                "icon": "star"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.2780421526759, 25.711707544926526]
            }
        }, {
            "type": "Feature",
            "properties": {
                "description": "<strong>Tennis Court</strong><p>Currently Wet, will dry in two hours.</p>",
                "icon": "star"
            },
            "geometry": {
                "type": 'Point',
                "coordinates": [-80.27765905491205, 25.711366639117685]
            }
          }]
      },
    salvadore: {
    id: "salvadore",
    parkName: "Salvadore Park",
    lat: 25.7474295,
    lng: -80.2779948,
    zoom: 18,
    address: "1120 Andalusia Ave Coral Gables, FL 33134",
    phoneNumber: "(305) 460-5333",
    weather: "https://api.weather.gov/gridpoints/MFL/106,48/forecast",
    features: [{
            "type": "Feature",
            "properties": {
                "description": "<strong>Tennis Court</strong><p>Dry and Ready to Play</p>",
                "icon": "star"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.27763001958007, 25.747539273013743]
            }
        }, {
            "type": "Feature",
            "properties": {
                "description": "<strong>Tennis Court</strong><p>Dry and Ready to Play</p>",
                "icon": "star"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.27761660853581, 25.74720587682991]
            }
          }]
      },
    phillips: {
    id: "phillips",
    parkName: "Phillips Park",
    lat: 25.757669,
    lng: -80.2563704,
    zoom: 17.8,
    address: "90 Menores Avenue, Coral Gables, FL",
    phoneNumber: "(305) 460-5600",
    weather: "https://api.weather.gov/gridpoints/MFL/106,49/forecast",
    features: [{
            "type": "Feature",
            "properties": {
                "description": "<strong>Tennis Court</strong><p>Dry and Ready to Play</p>",
                "icon": "star"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.25677093638562, 25.75750926877285]
            }
        }, {
            "type": "Feature",
            "properties": {
                "description": "<strong>Basketball Court</strong><p>Dry and Ready to Play</p>",
                "icon": "star"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.25633342741642, 25.75724010122741]
            }
        }, {
            "type": "Feature",
            "properties": {
                "description": "<strong>Soccer Field</strong><p>Dry and Ready to Play</p>",
                "icon": "star"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.25635499476195, 25.757682087600386]
            }
        }]
      },
coral: {
    id: "coral",
    parkName: "Coral Bay Park",
    lat: 25.6541454,
    lng: -80.2832038,
    zoom: 18,
    address: "1590 Campamento Ave Coral Gables, FL 33156",
    phoneNumber: "Not Available",
    weather: "https://api.weather.gov/gridpoints/MFL/106,44/forecast",
    features: [{
            "type": "Feature",
            "properties": {
                "description": "<strong>Basketball Court</strong><p>Still Wet, Ready to play in 20 minutes</p>",
                "icon": "star"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.28308578280384, 25.654216574175067]
            }
        }, {
            "type": "Feature",
            "properties": {
                "description": "<strong>Playground</strong><p>Slide Temperature: 100 Degrees; Dry and ready to play. </p>",
                "icon": "star"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-80.28343446997897, 25.654235916621346]
            }
          }]
      }
    }




//Array of all the park objects



    var teamPulldown = document.querySelector("#team");
    var result = document.querySelector("#result");

    var outputString = "";

      teamPulldown.addEventListener("change", function(event) {
        console.log(event.target.selectedOptions[0]);



        // This requires a little sorting through the 'event.target'
        // object, but if you go with selectedOptions property, it
        // will always return an array of 1 item in the array (hence
        // [0]). Then you select the data you would like to display.

        if (event.target.selectedOptions[0].value != "null") {
          var pulldownData = event.target.selectedOptions[0].value;

          // for(i = 0; i < parkInfo.length; i++){
          //
          //   if(pulldownData == parkInfo[i].id){
          //     console.log(pulldownData);
              console.log(parkInfo[pulldownData].parkName);
              var informationString = "";
              var information = document.getElementById("information");
              informationString = "<p><strong>Click on the stars for additional information</strong></p>"
              information.innerHTML = informationString;



              outputString = "<h2>"+ parkInfo[pulldownData].parkName
                             +"</h2>"
                             + "<p><strong>Address:</strong> "
                             + parkInfo[pulldownData].address
                             + "</p>"
                             + "<p><strong>Telephone:</strong> "
                             + parkInfo[pulldownData].phoneNumber
                             + "</p>";

             $.getJSON(parkInfo[pulldownData].weather,
                function(data) {
                          console.log(data);
                          var weatherString;
                          var x = document.getElementById("weatherIcon");
                          x.src = data.properties.periods[0].icon;

                          weatherString = "<h3>The weather forecast for "
                                        + data.properties.periods[0].name.toLowerCase()
                                        + ": </h3>"
                                        + "<p><strong>Detailed Forecast: </strong>"
                                        + data.properties.periods[0].detailedForecast
                                        + "</p>"
                                        + "<h3>The weather forecast for "
                                        + data.properties.periods[1].name.toLowerCase()
                                        + ": </h3>"
                                        + "<p><strong>Detailed Forecast: </strong>"
                                        + data.properties.periods[1].detailedForecast
                                        + "</p>";
                          weather.innerHTML = weatherString;
                }
              );
              // var name = "<p>Park Name: " + parkInfo[i].name + "</p>";
              // var address = "<p>Address: " + parkInfo[i].address + "</p>";
              // var telephone = "<p>Phone Number: " + parkInfo[i].phoneNumber + "</p>";
              //console.log(telephone + name);
              // result.innerHTML = name + address + telephone;

              //result.innerHTML = outputString;

              var map = new mapboxgl.Map({
                  container: 'map',
                  style: 'mapbox://styles/mapbox/satellite-v9',
                  zoom: parkInfo[pulldownData].zoom,
                  center: [parkInfo[pulldownData].lng, parkInfo[pulldownData].lat]
              });
              // function onMapClick(event){
              //       console.log(event.lngLat);
              //      //console.dir(event);
              //     };
              //
              //     map.on("click", onMapClick);

              var currPark = parkInfo[pulldownData];
              var features = currPark.features;



              map.on('load', function () {
                  // Add a layer showing the places.

                    var geojson = {
                      "id": "places",
                      "type": "symbol",
                      "source": {
                          "type": "geojson",
                          "data": {
                              "type": "FeatureCollection",
                              "features": features
                          }
                      },
                      "layout": {
                          "icon-image": "{icon}-15",
                          "icon-allow-overlap": true
                      }
                  }
                  map.addLayer(geojson);

    //               geojson.source.data.features.forEach(function(marker) {
    //     // create a DOM element for the marker
    //     var el = document.createElement('div');
    //     el.className = 'marker';
    //     el.style.backgroundImage= "url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/15px-Map_marker.svg.png)";
    //     el.style.width = marker.properties.iconSize[0] + 'px';
    //     el.style.height = marker.properties.iconSize[1] + 'px';
    //
    //     // add marker to map
    //     new mapboxgl.Marker(el)
    //         .setLngLat(marker.geometry.coordinates)
    //         .addTo(map);
    //     // el.addEventListener('click', function() {
    //     //         //window.alert(marker.properties.message);
    //     //         var coordinates = marker.geometry.coordinates.slice();
    //     //         var description = marker.properties.description;
    //     //         //console.log(description);
    //     //         //console.log(coordinates);
    //     //         // Ensure that if the map is zoomed out such that multiple
    //     //         // copies of the feature are visible, the popup appears
    //     //         // over the copy being pointed to.
    //     //         // while (Math.abs(marker.lngLat.lng - coordinates[0]) > 180) {
    //     //         //     coordinates[0] += marker.lngLat.lng > coordinates[0] ? 360 : -360;
    //     //         // }
    //     //
    //     //         new mapboxgl.Popup()
    //     //             .setLngLat(coordinates)
    //     //             .setHTML(description)
    //     //             .addTo(map);
    //     //     });
    // });


                  map.on('click', 'places', function (e) {
                    var coordinates = e.features[0].geometry.coordinates.slice();
                    var description = e.features[0].properties.description;

                    // Ensure that if the map is zoomed out such that multiple
                    // copies of the feature are visible, the popup appears
                    // over the copy being pointed to.
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }

                    new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(description)
                        .addTo(map);
                });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });

                });
        }
          //result.textContent = "You selected: " + pulldownData + ". \n ";
         else {
          outputString = "";
        }
        result.innerHTML = outputString;



    });


// function onMapClick(event){
//       // console.log(event.latlng);
//       //console.dir(event);
//       for(var x = 0; x < array.length; )
//
//     };

  //  parkMap.on("click", onMapClick);


// submit.addEventListener("click", function() {
//       event.preventDefault();
//
//       var city = document.forms[0].elements[0].value;
//       var park = document.forms[0].elements[1].value;
//       var zipcode = document.forms[0].elements[2].value;
//       console.log(city);
//     });
