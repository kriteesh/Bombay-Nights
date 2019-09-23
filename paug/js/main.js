let create = parent => tag => element => parameters => { 
    x = document.createElement(tag);
    x.className = element;
    for( i in parameters){
        x.setAttribute(i, parameters[i]);
    }
    parent.appendChild(x);
    return x;
}

function geo_success(position) {
    console.log(position.coords.latitude, position.coords.longitude);
}
  
function geo_error() {
    alert("Sorry, no position available.");
  }
  
let geo_options = {
    enableHighAccuracy: true, 
    maximumAge        : 30000, 
    timeout           : 27000
  };
  
let wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);

body = document.body;
container = create(body)('div')('container')({contenteditable : true});

container