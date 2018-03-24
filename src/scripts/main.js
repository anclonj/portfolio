window.onresize = function() {
  let height = document.getElementById('top').offsetHeight;
  console.log(height);
  document.getElementById('topbg').style.height = height;
}

window.initMap = () => {
    var uluru = {
        lat: 55.49589, 
        lng: 37.28094
    };

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });

    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}