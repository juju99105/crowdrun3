function toggleBathroomDetails(value) {
  const details = document.getElementById('bathroom_details');
  if (value === 'yes') {
     details.style.display = 'block';
  } else {
     details.style.display = 'none';
  }
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var map;
var geocoder;
var currentDirectionsDisplay = null;
// multiple routes
var listPos = [
  //mills college run
  { name: "Mills College Run", arriveLat: 37.782674, arriveLng: -122.187797, departLat: 37.771174, departLng: -122.176506 },
  //leona heights park run
  { name: "Leona Heights Park Run",arriveLat: 37.790926, arriveLng: -122.179782, departLat: 37.791124, departLng: -122.167964 },
  //merritt college run
  { name: "Merritt College Run", arriveLat: 37.787410, arriveLng: -122.162791, departLat: 37.775693, departLng: -122.145772 },
  //redwood regional park run
  { name: "Redwood Regional Park Run", arriveLat: 37.821446, arriveLng: -122.181644, departLat: 37.8287, departLng: -122.1826 },
  //lake chabot run
  { name: "Lake Chabot Run", arriveLat: 37.7331, arriveLng: -122.1207, departLat: 37.7516, departLng: -122.1264 },
  // Joaquin Miller Park run
  { name: "Joaquin Miller Park Run", arriveLat: 37.8116, arriveLng: -122.1821, departLat: 37.8068, departLng: -122.1675 },
  // Jack London Square run
  { name: "Jack London Square Run", arriveLat: 37.7938, arriveLng: -122.2766, departLat: 37.7952, departLng: -122.2792 },
  // Oakland-Alameda Estuary run
  { name: "Oakland-Alameda Estuary Run", arriveLat: 37.7879, arriveLng: -122.2590, departLat: 37.7715, departLng: -122.2331 },
  // Piedmont Park run
  { name: "Piedmont Park Run", arriveLat: 37.8274, arriveLng: -122.2313, departLat: 37.8236, departLng: -122.2346 },
  // Alameda Beach run
  { name: "Alameda Beach Run", arriveLat: 37.7645, arriveLng: -122.2421, departLat: 37.7714, departLng: -122.2786 },
  // Emeryville Marina run
  { name: "Emeryville Marina Run", arriveLat: 37.8342, arriveLng: -122.3104, departLat: 37.8396, departLng: -122.3147 },
  // Claremont Canyon Regional Preserve run
  { name: "Claremont Canyon Regional Preserve Run", arriveLat: 37.8638, arriveLng: -122.2386, departLat: 37.8719, departLng: -122.2441 },
  // Oakland Zoo run
  { name: "Oakland Zoo Run", arriveLat: 37.7498, arriveLng: -122.1476, departLat: 37.7512, departLng: -122.1459 },
  // Martin Luther King Jr. Regional Shoreline run
  { name: "Martin Luther King Jr. Regional Shoreline Run", arriveLat: 37.7347, arriveLng: -122.1981, departLat: 37.7421, departLng: -122.2135 },
  // Lake Merritt run
  { name: "Lake Merritt Run", arriveLat: 37.8043, arriveLng: -122.2582, departLat: 37.8090, departLng: -122.2620 },
  // Golden Gate Park run, San Francisco
  { name: "Golden Gate Park Run, San Francisco", arriveLat: 37.7694, arriveLng: -122.4862, departLat: 37.7675, departLng: -122.4943 },
  // Crissy Field run, San Francisco
  { name: "Crissy Field run, San Francisco", arriveLat: 37.8066, arriveLng: -122.4504, departLat: 37.8077, departLng: -122.4375 },
  // Sawyer Camp Trail run, San Mateo
  { name: "Sawyer Camp Trail run, San Mateo", arriveLat: 37.5512, arriveLng: -122.3601, departLat: 37.5834, departLng: -122.3715 },
  // Baylands Nature Preserve run, Palo Alto
  { name: "Baylands Nature Preserve run, Palo Alto", arriveLat: 37.4597, arriveLng: -122.1084, departLat: 37.4644, departLng: -122.1156 },
  // San Pedro Valley Park run, Pacifica
  { name: "San Pedro Valley Park run, Pacifica", arriveLat: 37.5804, arriveLng: -122.4750, departLat: 37.5876, departLng: -122.4738 },
  // Mount Tamalpais run, Marin
  { name: "Mount Tamalpais run, Marin", arriveLat: 37.9236, arriveLng: -122.5963, departLat: 37.9125, departLng: -122.6010 },
  // Berkeley Marina run, Berkeley
  { name: "Berkeley Marina run, Berkeley", arriveLat: 37.8630, arriveLng: -122.3148, departLat: 37.8710, departLng: -122.3194 },
  // Quarry Lakes Regional Recreation Area run, Fremont
  { name: "Quarry Lakes Regional Recreation Area run, Fremont", arriveLat: 37.5578, arriveLng: -121.9655, departLat: 37.5480, departLng: -121.9764 },
  // Alviso Marina County Park run, San Jose
  { name: "Alviso Marina County Park run, San Jose", arriveLat: 37.4264, arriveLng: -121.9753, departLat: 37.4322, departLng: -121.9796 },
  // Point Isabel Regional Shoreline run, Richmond
  { name: "Point Isabel Regional Shoreline run, Richmond", arriveLat: 37.8991, arriveLng: -122.3207, departLat: 37.9048, departLng: -122.3242 },
  // Tiburon Peninsula run, Marin
  { name: "Tiburon Peninsula run, Marin", arriveLat: 37.8735, arriveLng: -122.4563, departLat: 37.8808, departLng: -122.4610 },
  // Angel Island State Park run, Tiburon
  { name: "Angel Island State Park run, Tiburon", arriveLat: 37.8600, arriveLng: -122.4300, departLat: 37.8673, departLng: -122.4348 },
  // Muir Woods National Monument run, Marin
  { name: "Muir Woods National Monument run, Marin", arriveLat: 37.8952, arriveLng: -122.5785, departLat: 37.9025, departLng: -122.5691 },
  // Half Moon Bay Coastside Trail run, Half Moon Bay
  { name: "Half Moon Bay Coastside Trail run, Half Moon Bay", arriveLat: 37.4697, arriveLng: -122.4458, departLat: 37.4860, departLng: -122.4481 },
  // San Bruno Mountain run, South SF
  { name: "San Bruno Mountain run, South SF", arriveLat: 37.6900, arriveLng: -122.4465, departLat: 37.6972, departLng: -122.4379 },
  // Coyote Hills Regional Park run, Fremont
  { name: "Coyote Hills Regional Park run, Fremont", arriveLat: 37.5496, arriveLng: -122.0891, departLat: 37.5583, departLng: -122.0974 },
  // Loma Alta Open Space Preserve run, Lucas Valley
  { name: "Loma Alta Open Space Preserve run, Lucas Valley", arriveLat: 38.0152, arriveLng: -122.5996, departLat: 38.0259, departLng: -122.6068 },
  // Los Gatos Creek Trail run, Los Gatos
  { name: "Los Gatos Creek Trail run, Los Gatos", arriveLat: 37.2357, arriveLng: -121.9695, departLat: 37.2270, departLng: -121.9742 },
  // Don Edwards San Francisco Bay National Wildlife Refuge run, Newark
  { name: "Don Edwards San Francisco Bay National Wildlife Refuge run, Newark", arriveLat: 37.5216, arriveLng: -122.0485, departLat: 37.5301, departLng: -122.0561 },
  // Ring Mountain Open Space Preserve run, Corte Madera
  { name: "Ring Mountain Open Space Preserve run, Corte Madera", arriveLat: 37.9120, arriveLng: -122.4871, departLat: 37.9183, departLng: -122.4943 },
  // Presidio of San Francisco run
  { name: "Presidio of San Francisco run", arriveLat: 37.7983, arriveLng: -122.4669, departLat: 37.8047, departLng: -122.4753 },
  // Lands End Trail run, San Francisco
  { name: "Lands End Trail run, San Francisco", arriveLat: 37.7844, arriveLng: -122.5053, departLat: 37.7881, departLng: -122.4944 },
  // Fort Funston run, San Francisco
  { name: "Fort Funston run, San Francisco", arriveLat: 37.7174, arriveLng: -122.5027, departLat: 37.7203, departLng: -122.4958 },
  // Twin Peaks run, San Francisco
  { name: "Twin Peaks run, San Francisco", arriveLat: 37.7544, arriveLng: -122.4477, departLat: 37.7513, departLng: -122.4525 },
  // Glen Canyon Park run, San Francisco
  { name: "Glen Canyon Park run, San Francisco", arriveLat: 37.7380, arriveLng: -122.4397, departLat: 37.7452, departLng: -122.4436 },
  // Mount Diablo State Park run, Contra Costa
  { name: "Mount Diablo State Park run, Contra Costa", arriveLat: 37.8816, arriveLng: -121.9146, departLat: 37.8937, departLng: -121.9308 },
  // Henry W. Coe State Park run, Morgan Hill
  { name: "Henry W. Coe State Park run, Morgan Hill", arriveLat: 37.1887, arriveLng: -121.5506, departLat: 37.2019, departLng: -121.5648 },
  // Big Basin Redwoods State Park run, Santa Cruz
  { name: "Big Basin Redwoods State Park run, Santa Cruz", arriveLat: 37.1725, arriveLng: -122.2219, departLat: 37.1797, departLng: -122.2351 },
  // Portola Redwoods State Park run, San Mateo
  { name: "Portola Redwoods State Park run, San Mateo", arriveLat: 37.2603, arriveLng: -122.2151, departLat: 37.2734, departLng: -122.2294 },
  // Samuel P. Taylor State Park run, Marin
  { name: "Samuel P. Taylor State Park run, Marin", arriveLat: 38.0346, arriveLng: -122.7381, departLat: 38.0469, departLng: -122.7504 },
  // Santa Cruz Beach Boardwalk run, Santa Cruz
  { name: "Santa Cruz Beach Boardwalk run, Santa Cruz", arriveLat: 36.9645, arriveLng: -122.0187, departLat: 36.9580, departLng: -122.0174 },
  // Wilder Ranch State Park run, Santa Cruz
  { name: "Wilder Ranch State Park run, Santa Cruz", arriveLat: 36.9602, arriveLng: -122.0838, departLat: 36.9663, departLng: -122.0924 },
  // Nisene Marks State Park run, Santa Cruz
  { name: "Nisene Marks State Park run, Santa Cruz", arriveLat: 36.9881, arriveLng: -121.8967, departLat: 36.9792, departLng: -121.8896 },
  // Monterey Bay Coastal Recreation Trail run, Monterey
  { name: "Monterey Bay Coastal Recreation Trail run, Monterey", arriveLat: 36.6057, arriveLng: -121.8907, departLat: 36.6182, departLng: -121.9023 },
  // Point Lobos State Natural Reserve run, Carmel-by-the-Sea
  { name: "Point Lobos State Natural Reserve run, Carmel-by-the-Sea", arriveLat: 36.5230, arriveLng: -121.9523, departLat: 36.5155, departLng: -121.9420 },
  // Carmel Beach run, Carmel-by-the-Sea
  { name: "Carmel Beach run, Carmel-by-the-Sea", arriveLat: 36.5552, arriveLng: -121.9234, departLat: 36.5489, departLng: -121.9272 },
  // Alston Park run, Napa
  { name: "Alston Park run, Napa", arriveLat: 38.3468, arriveLng: -122.3221, departLat: 38.3543, departLng: -122.3284 },
  // Skyline Wilderness Park run, Napa
  { name: "Skyline Wilderness Park run, Napa", arriveLat: 38.2574, arriveLng: -122.2531, departLat: 38.2649, departLng: -122.2615 },
  // Benicia State Recreation Area run, Vallejo
  { name: "Benicia State Recreation Area run, Vallejo", arriveLat: 38.0801, arriveLng: -122.1935, departLat: 38.0936, departLng: -122.2047 },
  // Mare Island Shoreline Heritage Preserve run, Vallejo
  { name: "Mare Island Shoreline Heritage Preserve run, Vallejo", arriveLat: 38.1025, arriveLng: -122.2630, departLat: 38.1120, departLng: -122.2700 },
  // Dublin Hills Regional Park run, Dublin
  { name: "Dublin Hills Regional Park run, Dublin", arriveLat: 37.7190, arriveLng: -121.9295, departLat: 37.7285, departLng: -121.9412 },
  // Donlon Point run, Dublin
  { name: "Donlon Point run, Dublin", arriveLat: 37.7440, arriveLng: -121.9200, departLat: 37.7515, departLng: -121.9280 }
];
// initiate map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
  geocoder = new google.maps.Geocoder();
  enrichTrails().then(() => {
    displayAllTrails();
  });
}
function enrichTrails() {
  let promises = listPos.map(trail => {
    return addTrailDetails(trail);
  });
  return Promise.all(promises).then(detailedTrails => {
    listPos = detailedTrails;
  });
}
function getAddress(lat, lng) {
  return new Promise((resolve, reject) => {
    geocoder.geocode({ 'location': { lat, lng } }, (results, status) => {
      if (status === 'OK') {
        resolve(results[0].formatted_address);
      } else {
        reject('Geocode failed due to: ' + status);
      }
    });
  });
}
function getDistance(service, origin, destination, callback) {
  service.getDistanceMatrix({
    origins: [origin],
    destinations: [destination],
    travelMode: 'WALKING',
  }, (response, status) => {
    if (status === 'OK') {
      const distance = response.rows[0].elements[0].distance.text;
      callback(null, distance);
    } else {
      callback(status);
    }
  });
}
function calculateDistance(startLat, startLng, endLat, endLng) {
  return (google.maps.geometry.spherical.computeDistanceBetween(
    new google.maps.LatLng(startLat, startLng),
    new google.maps.LatLng(endLat, endLng)
  ) / 1000).toFixed(2) + ' km';
}
function addTrailDetails(trail) {
  return Promise.all([
    getAddress(trail.departLat, trail.departLng),
    getAddress(trail.arriveLat, trail.arriveLng)
  ]).then(addresses => {
    trail.departAddress = addresses[0];
    trail.arriveAddress = addresses[1];
    trail.distance = calculateDistance(trail.departLat, trail.departLng, trail.arriveLat, trail.arriveLng);
    trail.upvotes = getRandomInt(1, 100);
    trail.downvotes = getRandomInt(1, 100);
    return trail;
  });
}
// create routes
function calculateAndDisplayRoute(directionsService, directionsDisplay, startPoint, endPoint) {
  directionsService.route({
    origin: startPoint,
    destination: endPoint,
    travelMode: 'WALKING'
  }, (response, status) => {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Unable to display route: ' + status);
    }
  });
}
function displayRouteOnMap(trail) {
  var startPoint = new google.maps.LatLng(trail.departLat, trail.departLng);
  var endPoint = new google.maps.LatLng(trail.arriveLat, trail.arriveLng);
  var request = {
    origin: startPoint,
    destination: endPoint,
    travelMode: 'WALKING'
  };
  if (currentDirectionsDisplay === null) {
    currentDirectionsDisplay = new google.maps.DirectionsRenderer();
    currentDirectionsDisplay.setMap(map);
  }
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status === 'OK') {
      currentDirectionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
////display all trails in infoWrapper
function displayAllTrails() {
  var infoWrapper = document.getElementById('infoWrapper');
  infoWrapper.innerHTML = '';
  listPos.forEach(function(trail) {
    var trailDiv = document.createElement('div');
    trailDiv.innerHTML = `<strong>${trail.name}</strong><br>
                          Depart: ${trail.departAddress}<br>
                          Arrivee: ${trail.arriveAddress}<br>
                          Distance: ${trail.distance}<br>
                          Upvotes: ${trail.upvotes} | Downvotes: ${trail.downvotes}`;
    infoWrapper.appendChild(trailDiv);
  });
}
//display search results in infoWrapper
function displayTrailResults(trails) {
  var infoWrapper = document.getElementById('infoWrapper');
  infoWrapper.innerHTML = ''; 
  trails.forEach(function(trail) {
    var trailDiv = document.createElement('div');
    var content = `<strong>${trail.name}</strong><br>` +
                  `Depart Address: ${trail.departAddress || 'Loading...'}<br>` +
                  `Arrival Address: ${trail.arriveAddress || 'Loading...'}<br>` +
                  `Distance: ${trail.distance || 'Calculating...'}<br>` +
                  `Upvotes: ${trail.upvotes || 0} | ` +
                  `Downvotes: ${trail.downvotes || 0}<br>`;
    
    trailDiv.innerHTML = content;
    infoWrapper.appendChild(trailDiv);
  });
}
 //search on map
function searchLocation() {
 const address = document.getElementById('location-search').value;
 geocoder.geocode({ 'address': address }, function(results, status) {
   if (status === 'OK') {
     map.setCenter(results[0].geometry.location);
     new google.maps.Marker({
       map: map,
       position: results[0].geometry.location
     });
   } else {
      details.style.display = 'none';
   }
 });
}
//search trails
function searchTrails() {
  var searchTerm = document.getElementById('trail-search').value.toLowerCase();
  var searchResults = listPos.filter(function(trail) {
    return trail.name.toLowerCase().includes(searchTerm);
  });
  if (searchResults.length === 0) {
    displayNoTrailFoundMessage();
  } else {
    displayTrailResults(searchResults);
    if (currentDirectionsDisplay !== null) {
      currentDirectionsDisplay.setMap(null);
    }
    if (searchResults.length === 1) {
      displayRouteOnMap(searchResults[0]);
    }
  }
}
//validation-no trail found
function displayNoTrailFoundMessage() {
  var infoWrapper = document.getElementById('infoWrapper');
  infoWrapper.innerHTML = ''; 
  var noTrailDiv = document.createElement('div');
  noTrailDiv.textContent = 'No such trail info found, please try again.';
  infoWrapper.appendChild(noTrailDiv);
}
// Event Listener
document.addEventListener('DOMContentLoaded', function() {
  //on home page
  var searchBtn = document.getElementById('trail-search-btn');
  var displayAllBtn = document.getElementById('display-all-btn');
  if (searchBtn && displayAllBtn) {
    searchBtn.addEventListener('click', searchTrails);
    displayAllBtn.addEventListener('click', displayAllTrails);
  }
  //on submit page
  var form = document.getElementById('submit-form');
  var result = document.getElementById('result');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      result.style.display = "block";
      result.innerHTML = "Please wait...";
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
      })
      .then(async response => {
        const json = await response.json();
        if (response.ok) {
          alert("Thank you, we've received your submission.");
          form.reset();
        } else {
          console.error(json);
          result.innerHTML = json.message;
        }
      })
      .catch(error => {
        console.error(error);
        result.innerHTML = "Something went wrong!";
      });
    });
  }
});