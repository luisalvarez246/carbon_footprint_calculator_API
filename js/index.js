const distancia = document.getElementById('distance');
const peso = document.getElementById('weight');
const tipoVehiculo = document.getElementById('vehicule_type');

const consultApi = async () => {
  const response = await fetch(
          "https://beta2.api.climatiq.io/emission-factors",
          {
                  headers: {
                      Authorization:
                          "Bearer HDJRZGTJC7MPN4K1CQXW215A8Q47",
                          "Content-Type": "application/json",
                  },
          }
  );
  if (response.status === 200) {
          let data = await response.json();
          console.log(data.results);
          
  } else {
          alert("Error-HTTP: " + response.status);
  }
};


const calculateApi = () => {
  const data = {
          emission_factor:
                  "passenger_vehicle-vehicle_type_car-fuel_source_diesel-distance_na-engine_size_medium",
          parameters: {
                  distance: 2800,
                  distance_unit: "km",
                  passengers: 1,
          }
  };

  fetch("https://beta4.api.climatiq.io/estimate", {
          method: "POST",
          headers: {
                  Authorization:
                          "Bearer HDJRZGTJC7MPN4K1CQXW215A8Q47",
                          "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
  })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
};




consultApi();