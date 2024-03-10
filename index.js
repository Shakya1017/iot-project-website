// Function to toggle control
function toggleControl(controlName) {
  var statusElement = document.getElementById(controlName + "Status");
  var currentStatus = statusElement.textContent;
  
  if (currentStatus === "Off") {
    statusElement.textContent = "On";
  } else {
    statusElement.textContent = "Off";
  }
  
  // Replace this function with your actual control logic
  console.log(`Toggling ${controlName} control`);
}

// Function to view more data
function viewMoreData(controlName) {
  var dataElement = document.getElementById(controlName + "Data");
  var statusElement = document.getElementById(controlName + "Status");

  // Replace this with your actual data fetching logic
  // For now, let's assume we have some dummy data
  var dummyData = "Sample data for " + controlName + " control";

  // Display the data or "No data available" if there's no data
  if (dataElement.classList.contains("hidden")) {
    dataElement.textContent = dummyData;
    dataElement.classList.remove("hidden");
  } else {
    dataElement.classList.add("hidden");
    statusElement.textContent = "Off"; // Reset status when data is hidden
  }
}

// Dark mode toggle functionality
const toggleSwitch = document.getElementById('dark-mode-toggle');
const body = document.body;

function toggleDarkMode() {
  body.classList.toggle('dark-mode');
}

