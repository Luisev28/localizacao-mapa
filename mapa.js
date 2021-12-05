   
    // const lat = document.querySelector(".latitude");
    // const lon = document.querySelector(".longitude");

   const latitude = prompt("Qual a sua Latitude? ")
   const Longitude = prompt("Qual a sua Longitude? ")

    // lat.addEventListener('keyup', function(e){
    //     var key = e.which || e.keyCode;
    //     if (key == 13) { 
    //        const latitu = this.value 
    //        lon.addEventListener('keyup', function(e){
    //         var key = e.which || e.keyCode;
    //         if (key == 13) { 
    //             const longi  = this.value 

    var map = L.map('map').setView([latitude,Longitude
    ], 10);
    L.marker([latitude,Longitude
    ] ).addTo(map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', 
        {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
//     }
// });
// };

// })  
  
  
    
    




