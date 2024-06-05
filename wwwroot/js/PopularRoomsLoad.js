document.addEventListener("DOMContentLoaded", function() {
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
        throw error; // Re-throw the error so that the calling code knows the fetch failed
      });
  }
  fetchRooms().then(rooms =>{
    let popularRooms = document.querySelector('.popularRooms');
    console.log(rooms);
    for(let i=0;i<2;i++)
      {
        let container = document.createElement('div');
        container.classList.add('roomContainer');
        let image = document.createElement('img');
        image.classList.add('topImg');
        let roomInfo = document.createElement('div');
        roomInfo.classList.add('RoomInfo');
        let priceCont = document.createElement('div');
        priceCont.classList.add('roomStat');
        let roomNumber = document.createElement('div');
        roomNumber.classList.add('roomStat');
        let floorNumber = document.createElement('div');
        floorNumber.classList.add('roomStat');
        let available = document.createElement('div');
        available.classList.add('roomStat');

        



        roomInfo.appendChild(priceCont);
        roomInfo.appendChild(roomNumber);
        roomInfo.appendChild(floorNumber);
        roomInfo.appendChild(available);

        
        container.appendChild(image);
        container.appendChild(roomInfo);
        popularRooms.appendChild(container);
      }
  });

});