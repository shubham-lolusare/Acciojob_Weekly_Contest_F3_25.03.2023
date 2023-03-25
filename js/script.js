//Getting the variables as required
let getloc = document.getElementById("getLoc");
let remloc = document.getElementById("remLoc");
let mapbody = document.getElementById("map");

// Disabling the remove location button at start
remloc.setAttribute("disabled", "");

// Adding the event listener to the Remove location button
remloc.addEventListener("click", () => {
  localStorage.clear();
  getloc.removeAttribute("disabled");
  remloc.setAttribute("disabled", "");
  let frame = document.getElementById("mapFrame");
  frame.remove();
  location.reload();
});

// Checking if the coordinates are already in the local storage
if (localStorage.length == 0) {
  getloc.addEventListener("click", getLocation);

  function getLocation() {
    if (navigator.geolocation) {
      remloc.removeAttribute("disabled");
      getloc.setAttribute("disabled", "");
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      remloc.setAttribute("disabled", "");
      alert("Geolocation API not supported by your Browser");
    }
  }

  function showPosition(position) {
    localStorage.setItem("lat", position.coords.latitude);
    localStorage.setItem("long", position.coords.longitude);
    remloc.removeAttribute("disabled");
    getloc.setAttribute("disabled", "");
    displayOnMap(localStorage.getItem("lat"), localStorage.getItem("long"));
  }
} else {
  remloc.removeAttribute("disabled");
  getloc.setAttribute("disabled", "");
  displayOnMap(localStorage.getItem("lat"), localStorage.getItem("long"));
}

// functon to create and display the iframe and locations on the map
function displayOnMap(latitude, longitude) {
  let iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`
  );
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("height", "100%");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("id", "mapFrame");
  iframe.style.borderWidth = "0px";
  mapbody.append(iframe);
}
