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
        
        //img
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('imgSide');
        let img = document.createElement('img');
        img.classList.add('hotelRoomimg');
        img.src = `http://localhost:5086/api/rooms/image/${room.roomPic}`;
        imgContainer.appendChild(img);

        //statsSide
        let statsSide = document.createElement('div');
        statsSide.classList.add('statsSide');
        let onlyStats = document.createElement('div');
        onlyStats.classList.add('stats');



        let statHeaders = []
        let statValues = []
        //generating single stat
        for(let i=0;i<3;i++)
        {
          let singleStat = document.createElement('div');
          singleStat.classList.add('stat');
          let statHeader = document.createElement('div');
          statHeader.classList.add('statHd');
          let statVal = document.createElement('div');
          statVal.classList.add('statVal');
          

          singleStat.appendChild(statHeader);
          singleStat.appendChild(statVal);
          onlyStats.appendChild(singleStat);
          statHeaders.push(statHeader);
          statValues.push(statVal);
        }
        statsSide.appendChild(onlyStats);

        //logic to generate stats within one loop
        for(let i =0; i<3 ;i++)
        {
          if(i === 0)
          {
            statHeaders[i].textContent = 'Room Number';
            statValues[i].textContent = room.roomNumber;
          }
          else if(i === 1)
          {
            statHeaders[i].textContent = 'Floor';
            statValues[i].textContent = room.floorNumber;
          }  
          else
          {
            statHeaders[i].textContent = 'Price';
            statValues[i].textContent = `${room.price} $`;
          }
        }
        
        //bookBtn
        let bookBtnContainer = document.createElement('div');
        bookBtnContainer.classList.add('BookCont');
        let bookBtn = document.createElement('button');
        bookBtn.classList.add('bookBtn');
        bookBtn.textContent = room.isAvailable ? 'Book For Today' : 'Not Available';
        bookBtnContainer.appendChild(bookBtn);
        statsSide.appendChild(bookBtnContainer);


        container.appendChild(imgContainer);
        container.appendChild(statsSide);
        RoomsGrid.appendChild(container);
      });

    });
  }
  LoadRooms();
  

});

