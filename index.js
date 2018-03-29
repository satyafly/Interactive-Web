Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @satyafly
Sign out
0
0 0 ronamadthis/Javascript_table
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
Javascript_table/index.js
5f41c25  26 days ago
@ronamadthis ronamadthis Revised
     
139 lines (108 sloc)  4.32 KB
// Get references to the tbody element, input field and button
// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

var $searchBtn = document.querySelector("#search");


// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);



// Set filteredAddresses to data initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable(filteredData) {
  $tbody.innerHTML = "";
  // Create variable for page number
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var address = filteredData[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    // Increment page no if i is multiple of 50
    // add data attribute to row
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

// Do the search queries on Datetime, City, State, Country and Shape
function handleSearchButtonClick() {
  
  filteredData = dataSet;
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDatetime = $dateInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(address) {
    var addressDatetime = address.datetime.toLowerCase();
    var addressCity = address.city.toLowerCase();
    var addressState = address.state.toLowerCase();
    var addressCountry = address.country.toLowerCase();
    var addressShape = address.shape.toLowerCase();



    if ((addressDatetime===filterDatetime || filterDatetime == "") && 
      (addressCity === filterCity || filterCity == "") && 
      (addressState === filterState  || filterState == "") &&
      (addressCountry === filterCountry || filterCountry == "") && 
      (addressShape === filterShape || filterShape =="")){
      
        return true;
    }
      return false;
      console.log(filteredData);
     });
loadList();
}







// <script type="text/javascript">
// Initialize variables
  var list = new Array();
  var pageList = new Array();
  var currentPage = 1;
  var numberPerPage = 50;
  var numberOfPages = 1;


// Calculate number of pages   
function getNumberOfPages(list) {
    return Math.ceil(list.length / numberPerPage);
}

// Set up pagination buttons
function nextPage() {
    currentPage += 1;
    loadList();
}

function previousPage() {
    currentPage -= 1;
    loadList();
}

function firstPage() {
    currentPage = 1;
    loadList();
}

function lastPage() {
    currentPage = numberOfPages;
    loadList();
}

// Slice the data to be displayed as page and render table for display of page
function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = filteredData.slice(begin, end);
    console.log(pageList);
    renderTable(pageList);
    numberOfPages = getNumberOfPages(filteredData)
    check();
}

// Disable first and previous buttons when on first page and disable last and next buttons when on last page.
function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

// Call loadList function
loadList();
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
Press h to open a hovercard with more details.