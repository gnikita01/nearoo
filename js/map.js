$(function () {

  function initMap() {

      var location = new google.maps.LatLng(51.508742,-0.120850);

      var mapCanvas = document.getElementById('map');
      var mapOptions = {
          center: location,
          zoom: 16,
          panControl: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);

  }

  google.maps.event.addDomListener(window, 'load', initMap);
});
