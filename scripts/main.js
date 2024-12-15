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

function messageSent() {
  var message = document.getElementById('contactMessage').value;
  if (message.trim() === "") {
    alert("Please write a message before sending.");
    return;
  }
  

  setTimeout(function() {
    document.getElementById('contactForm').reset();
    document.getElementById('successMessage').style.display = 'block';
  }, 500); 
}

function messageSent() {
  var email = document.getElementById('emailAddressInput').value;
  var category = document.getElementById('categoryInput').value;
  var phone = document.getElementById('phoneNumberInput').value;
  var message = document.getElementById('messageInput').value;

  if (email.trim() === "" || category.trim() === "" || phone.trim() === "" || message.trim() === "") {
    alert("Please fill out all fields before sending.");
    return;
  }

 
  setTimeout(function() {
    document.getElementById('contactForm').reset();
    document.getElementById('successEmail').style.display = 'block';
  }, 500); 
}
