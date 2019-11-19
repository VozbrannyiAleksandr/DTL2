function initMap() {
    var lviv = {lat: 49.773, lng: 24.029};
    var map = new google.maps.Map(
        document.querySelector('.map'), {zoom: 14, center: lviv,});
    var marker = new google.maps.Marker({position: lviv, map: map});
  }