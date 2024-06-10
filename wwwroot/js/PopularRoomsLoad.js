document.addEventListener("DOMContentLoaded", function() {
  function getRooms() {
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

    fetchRooms().then(rooms => {
      let popularRooms = document.querySelector('.popularRooms');

      for (let i = 0; i < 3; i++) {
        let room = rooms[i];
        
        let container = document.createElement('div');
        container.classList.add('roomContainer');
        
        // Image
        let image = document.createElement('img');
        image.src = `http://localhost:5086/api/rooms/image/${room.roomPic}`;
        image.classList.add('topImg');
        
        // Room Info
        let roomInfo = document.createElement('div');
        roomInfo.classList.add('RoomInfo');

        // Room Price
        let priceCont = document.createElement('div');
        priceCont.classList.add('roomStat');
        let priceHeader = document.createElement('div');
        priceHeader.classList.add('statName');
        priceHeader.textContent = 'Price:';
        let priceValue = document.createElement('div');
        priceValue.classList.add('statValue');
        priceValue.textContent = rooms[i].price;
        priceCont.appendChild(priceHeader);
        priceCont.appendChild(priceValue);

        // Room Number
        let roomCont = document.createElement('div');
        roomCont.classList.add('roomStat');
        let roomHeader = document.createElement('div');
        roomHeader.classList.add('statName');
        roomHeader.textContent = 'Room Number:';
        let roomValue = document.createElement('div');
        roomValue.classList.add('statValue');
        roomValue.textContent = rooms[i].roomNumber;
        roomCont.appendChild(roomHeader);
        roomCont.appendChild(roomValue);

        // Floor Number
        let floorCont = document.createElement('div');
        floorCont.classList.add('roomStat');
        let floorHeader = document.createElement('div');
        floorHeader.classList.add('statName');
        floorHeader.textContent = 'Floor:';
        let floorValue = document.createElement('div');
        floorValue.classList.add('statValue');
        floorValue.textContent = rooms[i].floorNumber;
        floorCont.appendChild(floorHeader);
        floorCont.appendChild(floorValue);

        // Button
        let buttonCont = document.createElement('div');
        buttonCont.classList.add('btnCont');
        let button = document.createElement('button');
        button.classList.add('BookRoom');
        button.textContent = rooms[i].isAvailable ? "Book For Today" : "Not Available";
        buttonCont.appendChild(button);

        roomInfo.appendChild(priceCont);
        roomInfo.appendChild(roomCont);
        roomInfo.appendChild(floorCont);
        roomInfo.appendChild(buttonCont);
        container.appendChild(image);
        container.appendChild(roomInfo);
        popularRooms.appendChild(container);
      }

    });
  }

  let carouselHeight = document.querySelector('.Carousel');
  let roomsLoaded = false;
  document.addEventListener('scroll', function() {
    if ((window.scrollY > carouselHeight.offsetHeight / 2 && !roomsLoaded)) {
      getRooms();
      document.querySelector('.popularRooms').classList.add('scrollImageUp');
      roomsLoaded = true;
    }
  });
});
