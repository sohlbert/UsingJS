// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $datetimeInput = document.querySelector('#datetime');
var $searchBtn = document.querySelector('#search');

// Set filtereddatetime to data initially
// data comes from the data file
var filtereddatetime = data;
// var filter = d3.select("#filter-btn"); 
document.getElementById("filter-btn").addEventListener('click', clickSearch);


// Fill the empty table with data from data.js file
function populateTable() {
    $tbody.innerHTML = '';
    for (var i = 0; i < filtereddatetime.length; i++) {
      // Get get the current datetime object and its fields
      var datetime = filtereddatetime[i];
      var fields = Object.keys(datetime);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = datetime[field];
      }
    }
  }

  function clickSearch() {
    var filterdatetime = $datetimeInput.value.trim().toLowerCase();
    filteredAddresses = data.filter(function(datetime) {
      var addressState = address.state.toLowerCase();
      return addressState === filterState;
    });

    populateTable();
    };

    function resetOnClick() {
      filteredAddresses = data;
      $cityInput.value = '';
      $datetimeInput.value = '';
      populateTable();
    };
  

//   Render the table for the first time on page load
  populateTable();

  
// var filter = d3.select("#filter-btn"); 

// filter.on("click", function(){
//     d3.event.preventDefault(); 
//     var inputElement = d3.select("#datetime"); 
//     var inputValue = inputElement.property("value"); 
//     var filteredData = tableData.filter(row => row.datetime === inputValue); 
//     console.log(filteredData); 
//     filteredData.forEach(function(row){
//       // clear out data in table and reappend filtered data
//       var row = tbody.append("tr"); 
//       Object.entries(row).forEach(function([key,value]) {
//         var cell = tbody.append("td");
//         cell.text(value);
//       }); 
//     }); 

// }); 


//   var tableData = data;
  
//   // Select the submit button
//   var submit = d3.select(“#filter-btn”);
  
//   submit.on(“click”, function() {
  
//    // Prevent the page from refreshing
//    d3.event.preventDefault();
  
//    // Select the input element and get the raw HTML node
//    var inputElement = d3.select(“#datetime”);
  
//    // Get the value property of the input element
//    var inputValue = inputElement.property(“value”);
  
//    console.log(inputValue);
//    console.log(tableData);
  
//    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
//    console.log(filteredData);
  
//   });
//   submit.on("click", function() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();
  
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#date");
  
//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");
  
//     console.log(inputValue);
//     console.log(filteredAddresses);
  
//     // var filteredAddresses = people.filter(person => person.bloodType === inputValue);
  
//     // console.log(filteredAddresses);
  
