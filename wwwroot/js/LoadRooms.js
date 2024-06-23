document.addEventListener("DOMContentLoaded",function(){
  
  function LoadRooms()
  {
    function fetchRooms() {
      return fetch('http://localhost:5086/api/rooms')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
          throw error;
        });
    }

    fetchRooms().then(rooms =>{
      let RoomsGrid = document.querySelector(".RoomsList");
      rooms.forEach(room =>{
        let container = document.createElement('div');
        container.classList.add("singleRoom");


        RoomsGrid.appendChild(container);
      });

    });
  }

  setTimeout(LoadRooms(),3000);



});

