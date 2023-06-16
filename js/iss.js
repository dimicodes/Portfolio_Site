function getISSLocation() {
    fetch("http://api.open-notify.org/iss-now.json")
      .then((response) => response.json())
      .then((data) => {
        const issLatitude = data.iss_position.latitude;
        const issLongitude = data.iss_position.longitude;
  
        const reverseGeocodingUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${issLatitude}&longitude=${issLongitude}&localityLanguage=en`;
  
        fetch(reverseGeocodingUrl)
          .then((response) => response.json())
          .then((geocodingData) => {
            let country = "";
            let noCityName = "";
  
            if (geocodingData.countryName.length > 0) {
              country = geocodingData.countryName;
            } else if (geocodingData.localityInfo.informative && geocodingData.localityInfo.informative.length > 0) {
              noCityName = geocodingData.localityInfo.informative[0].name;
            }
  
            const nasaLink = `<a href='https://eol.jsc.nasa.gov/ESRS/HDEV/' class="link" target='_blank'>here</a>`;
  
            const issElement = document.getElementById("iss");
            if (country.length > 0) {
                issElement.innerHTML = `The ISS is currently closest to: <span style="color: #71a276;">${country}</span>. See live video ${nasaLink}.`;
            } else if (noCityName.length > 0) {
                issElement.innerHTML = `The ISS is currently closest to: <span style="color: #71a276;">${noCityName}</span>. See live video ${nasaLink}.`;
            }
          })
          .catch((error) => {
            const issElement = document.getElementById("iss");
            issElement.innerHTML = `Error: ${error.message}`;
          });
      })
      .catch((error) => {
        const issElement = document.getElementById("iss");
        issElement.innerHTML = `Error: ${error.message}`;
      });
  }
  
  getISSLocation();
  
