// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.

var filters = {};

function updateTable(); {
  // Grab values from the filter
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  // Check to see if a city was entered and filter the
  // data using that city.
  if (city) {
    // Apply `filter` to the table data to only keep the
    // rows where the `city` value matches the filter value
    filteredData = filteredData.filter(row => row.city === city);
  }
  // Check to see if a state was entered and filter the
  // data using that state.
  if (state) {
    // Apply `filter` to the table data to only keep the
    // rows where the `state` value matches the filter value
    filteredData = filteredData.filter(row => row.state === state);
  }
  // Check to see if a country was entered and filter the
  // data using that country.
  if (country) {
    // Apply `filter` to the table data to only keep the
    // rows where the `country` value matches the filter value
    filteredData = filteredData.filter(row => row.country === country);
  }
  // Check to see if a shape was entered and filter the
  // data using that shape.
  if (shape) {
    // Apply `filter` to the table data to only keep the
    // rows where the `shape` value matches the filter value
    filteredData = filteredData.filter(row => row.shape === shape);
  }
   // Rebuild the table using the filtered data
  // @NOTE: If no entry was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// 3. Use this function to update the filters. 
function updateFilters() {
    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    let filterID = changedElement.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    d3.selectAll("input").on("change", updateFilters);
    updateTable();
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(tableData);
  }
  
// Build the table when the page loads
buildTable(tableData);

  // 2. Attach an event to listen for changes to each filter

if(date) {
  updateFilters = d3.selectAll("#filter-btn").on("click", handleClick);
}
else if(city) {
  updateFilters = d3.selectAll("#filter-btn").on("click", handleClick);
}
else if(state) {
  updateFilters = d3.selectAll("#filter-btn").on("click", handleClick);
}
else if(country) {
  updateFilters = d3.selectAll("#filter-btn").on("click", handleClick);
}
else if(shape) {
  updateFilters = d3.selectAll("#filter-btn").on("click", handleClick);
}