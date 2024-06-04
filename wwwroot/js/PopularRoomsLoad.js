document.addEventListener("DOMContentLoaded", function() {
  fetch('http://localhost:5086/api/rooms', {
    method: 'GET',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(json => console.log(json))
  .catch(error => console.error('There has been a problem with your fetch operation:', error));
});