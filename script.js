document.addEventListener('DOMContentLoaded', bindButtonsGET);

      function bindButtonsGET(){
        document.getElementById('submitInfo').addEventListener('click', function(event){
          var req = new XMLHttpRequest();

          zipcode = document.getElementById('zipcode').value;
          url = 'http://api.zippopotam.us/us/' + zipcode;
          
          req.open('GET', url , false);
          req.send(null);
          
          var response = JSON.parse(req.responseText);
        
          document.getElementById('inputInfo').textContent = response["post code"];
        
          
          document.getElementById('placeName').textContent = response["places"][0]["place name"];
          document.getElementById('longitude').textContent = response["places"][0]["longitude"];
          document.getElementById('latitude').textContent = response["places"][0]["latitude"];
          document.getElementById('state').textContent = response["places"][0]["state"];
          document.getElementById('stateAbbreviation').textContent = response["places"][0]["state abbreviation"];
          event.preventDefault();

        })
      }