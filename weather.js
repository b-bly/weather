var api = "api.openweathermap.org/data/2.5/weather?";
var key = "e17ae2a5072897d3cc03f9233f778d01";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;

$( document ).ready(function(){
    //$('#city').text("jquery loaded");
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude.toFixed(0);
      var lon = "lon=" + position.coords.longitude.toFixed(0);

      getWeather(lat, lon);
    });
  } else {
    var lon = -93;
    var lat = 44;
    console.log("Geolocation is not supported by this browser.");
  }

  function getWeather(lat, lon) {
    console.log("getWeather called")
    var urlString = api + lat + "&" + lon + '&APPID=' + key;
    $.ajax({
      url: urlString, success: function (result) {
        $("#city").text(result.name + ", ");
        $("#country").text(result.sys.country);
      }
    });
  }
});
