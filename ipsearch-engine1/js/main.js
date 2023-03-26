// Get the redirect button element
var redirectButton = document.querySelector('#redirect-button');

// Add an event listener to the redirect button
redirectButton.addEventListener('click', function() {
  // Redirect to page1.html
  window.location.href = 'page1.html';
});

// Get the search button element
var searchButton = document.querySelector('.btn-search');

// Add an event listener to the search button
searchButton.addEventListener('click', function() {
  // Get the search input value
  var searchValue = document.querySelector('#choices-text-preset-values').value;

  // Log the search query
  console.log('Search query: ' + searchValue);

  // Make the API call with the search value
  fetch('https://google.com/api/search?query=' + encodeURIComponent(searchValue))
    .then(function(response) {
      // Handle the response from the API
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('API call failed');
      }
    })
    .then(function(data) {
      // Do something with the API response data
      console.log(data);

      // Update the content of the search-results div with the API data
      var searchResults = document.querySelector('#search-results');
      searchResults.innerHTML = JSON.stringify(data);
    })
    .catch(function(error) {
      // Handle any errors that occurred during the API call
      console.error(error);
    });
});

  // Add an event listener to the search button
  searchButton.addEventListener('click', function() {
    // Get the selected values of the selectors
    var selector1Value = document.querySelector('#selector1').value;
    // var selector2Value = document.querySelector('#selector2').value;
    // var selector3Value = document.querySelector('#selector3').value;
    // var selector4Value = document.querySelector('#selector4').value;

    // Get the search input value
    var searchValue = document.querySelector('#search-input').value;

    // Log the search query
    console.log('Selected values: ' + selector1Value + ', ' + selector2Value + ', ' + selector3Value + ', ' + selector4Value);
    console.log('Search query: ' + searchValue);

    // Make the

    const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
});

// Navigation


const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
});


// toggle menu
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
}