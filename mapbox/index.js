mapboxgl.accessToken =
  "pk.eyJ1IjoieWFtYW4xMzM3IiwiYSI6ImNrd3V4cWRrejFjcnIydXFxcHNjcG9hbHMifQ.0MvUydr2xdlAEM2eVWqEkw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([85.3311488, 27.6955136]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    "top-left"
  );

  // Set marker options.
  const marker = new mapboxgl.Marker({
    color: "red",
    draggable: true,
  })
    .setLngLat(center)
    .addTo(map);

  const markerHeight = 50;
  const markerRadius = 10;
  const linearOffset = 25;
  const popupOffsets = {
    top: [0, 0],
    "top-left": [0, 0],
    "top-right": [0, 0],
    bottom: [0, -markerHeight],
    "bottom-left": [
      linearOffset,
      (markerHeight - markerRadius + linearOffset) * -1,
    ],
    "bottom-right": [
      -linearOffset,
      (markerHeight - markerRadius + linearOffset) * -1,
    ],
    left: [markerRadius, (markerHeight - markerRadius) * -1],
    right: [-markerRadius, (markerHeight - markerRadius) * -1],
  };
  const popup = new mapboxgl.Popup({
    offset: popupOffsets,
    className: "my-class",
  })
    .setLngLat(center)
    .setHTML("<h1>Hello World!</h1>")
    .setMaxWidth("300px")
    .addTo(map);
}
