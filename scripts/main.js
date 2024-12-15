function initMap() {
  const options = {
      zoom: 14,
      center: { lat: 53.287, lng: -6.374 },
  };

  const map = new google.maps.Map(document.getElementById("Map"), options);

  new google.maps.Marker({
      position: { lat: 53.287, lng: -6.374 },
      map: map,
      title: "Tallaght",
  });
}


window.initMap = initMap;
