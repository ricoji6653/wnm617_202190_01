const makeMap = async (target="", center={ lat:37.786437, lng:-122.399650 }) => {
   await checkData(()=>window.google);
   let mapEl = $(target);

   if(!mapEl.data("map")) {
      mapEl.data({
         "map" : new google.maps.Map(mapEl[0], {
            center:center,
            zoom: 12,
            disableDefaultUI:true,
            styles:mapStyles
         }),
         "infoWindow": new google.maps.InfoWindow({content:''})
      });
   }

   return mapEl;
}

const makeMarkers = (mapEl,mapLocs) => {
   let {map,markers} = mapEl.data();

   if(markers) markers.forEach(o=>o.setMap(null));

   markers = [];

   mapLocs.forEach(o=>{
      let m = new google.maps.Marker({
         position: o,
         map,
         icon: {
            url:o.icon,
            scaledSize: {
               width:40,
               height:40
            }
         }
      });
      markers.push(m);
   });

   mapEl.data("markers",markers);
   setMapBounds(mapEl,mapLocs);
}


const setMapBounds = (mapEl,mapLocs) => {
   let {map,markers} = mapEl.data();
   let zoom = 14;

   if(mapLocs.length==0) {
      if(window.location.protocol!=='https:') return;
      else {
         navigator.geolocation.getCurrentPosition(p=>{
            let pos = {
               lat:p.coords.latitude,
               lng:p.coords.longitude
            };
            map.setCenter(pos);
            map.setZoom(zoom);
         },(...args)=>{
            console.log(args)
         },{
            enableHighAccuracy:false,
            timeout:5000,
            maximumAge:0
         });
      }
   } else if(mapLocs.length==1) {
      map.setCenter(mapLocs[0]);
      map.setZoom(zoom);
   } else {
      let bounds = new google.maps.LatLngBounds(null);
      mapLocs.forEach(o=>{
         bounds.extend(o);
      });
      map.fitBounds(bounds);
   }
}




const mapStyles = [
[
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#FFAD00"
            },
            {
                "saturation": 50.2
            },
            {
                "lightness": -34.8
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "hue": "#FFAD00"
            },
            {
                "saturation": -19.8
            },
            {
                "lightness": -1.8
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "hue": "#FFAD00"
            },
            {
                "saturation": 72.4
            },
            {
                "lightness": -32.6
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "hue": "#FFAD00"
            },
            {
                "saturation": 74.4
            },
            {
                "lightness": -18
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "hue": "#00FFA6"
            },
            {
                "saturation": -63.2
            },
            {
                "lightness": 38
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "hue": "#FFC300"
            },
            {
                "saturation": 54.2
            },
            {
                "lightness": -14.4
            },
            {
                "gamma": 1
            }
        ]
    }
]