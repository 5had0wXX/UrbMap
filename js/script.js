// Sample data for each category with at least 10 sample entries.
const data = {
  hospitals: [
    {
      name: "Vibra Healthcare",
      address: "1414 State Street",
      city: "Hartford",
      state: "CT",
      status: "For Sale / Abandoned",
      notes: "Urban exploration reports; verify latest status."
    },
    {
      name: "Cedarcrest Medical Center",
      address: "Russell Road",
      city: "Waterbury",
      state: "CT",
      status: "Recently Closed",
      notes: "Mentioned in local news; confirmation recommended."
    },
    {
      name: "Edgewood Hospital",
      address: "1000 King St",
      city: "Hartford",
      state: "CT",
      status: "Partially Abandoned",
      notes: "Some sections unused; check records."
    },
    {
      name: "St. Mary's Hospital",
      address: "400 Main Street",
      city: "New Haven",
      state: "CT",
      status: "Recently Closed / For Sale",
      notes: "Historical closure noted; redevelopment possible."
    },
    {
      name: "Franklin Medical Center",
      address: "22 Innovation Way",
      city: "Bridgeport",
      state: "CT",
      status: "For Sale",
      notes: "Broker data suggests market listing; verify details."
    },
    {
      name: "Newtown Regional Hospital",
      address: "789 Regional Ave",
      city: "Newtown",
      state: "CT",
      status: "Abandoned",
      notes: "Highlighted by historical society; verify status."
    },
    {
      name: "Riverside Community Hospital",
      address: "85 River Road",
      city: "Albany",
      state: "NY",
      status: "For Sale",
      notes: "Listed on real estate sites; confirmation advised."
    },
    {
      name: "Mercy Hospital",
      address: "200 Mercy Lane",
      city: "Springfield",
      state: "MA",
      status: "Recently Closed",
      notes: "State health department information; recheck status."
    },
    {
      name: "Bayside Hospital",
      address: "123 Sea Breeze Avenue",
      city: "Providence",
      state: "RI",
      status: "Abandoned / For Sale",
      notes: "Urban exploration blogs mention; verify with records."
    },
    {
      name: "Liberty Medical Pavilion Hospital",
      address: "680 Liberty Blvd",
      city: "Boston",
      state: "MA",
      status: "For Sale",
      notes: "Listed in real estate; requires confirmation."
    }
  ],
  industrial: [
    {
      name: "Oakwood Industrial Complex",
      address: "123 Oak Street",
      city: "Hartford",
      state: "CT",
      status: "Abandoned / For Sale",
      notes: "Redevelopment potential; check local records."
    },
    {
      name: "Heritage Warehouse",
      address: "88 Commerce Blvd",
      city: "New Haven",
      state: "CT",
      status: "For Sale",
      notes: "Listed on commercial sites; confirm current status."
    },
    {
      name: "Granite Mill Facility",
      address: "250 Granite Street",
      city: "Worcester",
      state: "MA",
      status: "For Sale",
      notes: "Visible on multiple platforms; verify details."
    },
    {
      name: "Riverview Depot",
      address: "900 Depot Road",
      city: "New Haven",
      state: "CT",
      status: "Abandoned / For Sale",
      notes: "Old rail facility; check condition."
    },
    {
      name: "Metro Industrial Park",
      address: "500 Industrial Way",
      city: "Stamford",
      state: "CT",
      status: "For Sale",
      notes: "Broker listings indicate opportunity."
    },
    {
      name: "Riverfront Logistics Hub",
      address: "77 Gateway Road",
      city: "Bridgeport",
      state: "CT",
      status: "For Sale",
      notes: "Strategically located; verify records."
    },
    {
      name: "Central Manufacturing Plant",
      address: "300 Factory Lane",
      city: "New Brunswick",
      state: "NJ",
      status: "Recently Closed",
      notes: "Former plant with redevelopment potential."
    },
    {
      name: "Techno Industrial Center",
      address: "450 Silicon Ave",
      city: "Newark",
      state: "NJ",
      status: "For Sale",
      notes: "Modern repurposing opportunity; verify with brokers."
    },
    {
      name: "Legacy Industrial Estate",
      address: "350 Heritage Road",
      city: "Providence",
      state: "RI",
      status: "Abandoned",
      notes: "Historical estate; further confirmation needed."
    },
    {
      name: "Southside Distribution Center",
      address: "600 Depot Street",
      city: "Philadelphia",
      state: "PA",
      status: "For Sale",
      notes: "Potential redevelopment site; review broker listings."
    }
  ],
  educational: [
    {
      name: "Old Maple School",
      address: "45 Maple Avenue",
      city: "Bridgeport",
      state: "CT",
      status: "Recently Closed / Abandoned",
      notes: "Cited in heritage reports; verify records."
    },
    {
      name: "Greenwood High School",
      address: "200 Elm Street",
      city: "Hartford",
      state: "CT",
      status: "Abandoned",
      notes: "Unused building noted by explorers."
    },
    {
      name: "Central Tech Institute",
      address: "310 Tech Drive",
      city: "New Haven",
      state: "CT",
      status: "For Sale",
      notes: "Former vocational school; research broker listings."
    },
    {
      name: "Riverside Community College",
      address: "400 College Way",
      city: "Springfield",
      state: "MA",
      status: "For Sale",
      notes: "Property on the market; further research advised."
    },
    {
      name: "Northside Academy",
      address: "1200 North Ave",
      city: "Worcester",
      state: "MA",
      status: "Recently Closed",
      notes: "Records indicate closure."
    },
    {
      name: "Hillcrest University Annex",
      address: "89 University Blvd",
      city: "Providence",
      state: "RI",
      status: "Abandoned",
      notes: "Part of larger institution; condition to verify."
    },
    {
      name: "Cedarwood Elementary",
      address: "67 Cedar Lane",
      city: "Waterbury",
      state: "CT",
      status: "Recently Closed",
      notes: "Community reports suggest disuse; check records."
    },
    {
      name: "Southtown Preparatory School",
      address: "560 South Street",
      city: "Newark",
      state: "NJ",
      status: "For Sale",
      notes: "Broker indicates transition; verify listing."
    },
    {
      name: "Elmwood Vocational School",
      address: "800 Elmwood Road",
      city: "Philadelphia",
      state: "PA",
      status: "Abandoned",
      notes: "Former facility; consult historical societies."
    },
    {
      name: "Lakeside High Laboratory",
      address: "350 Lakeside Dr",
      city: "Boston",
      state: "MA",
      status: "Recently Closed",
      notes: "Records confirm closure; redevelopment under review."
    }
  ],
  hospitality: [
    {
      name: "Liberty Hotel",
      address: "77 Ocean Drive",
      city: "Providence",
      state: "RI",
      status: "Abandoned",
      notes: "Urban explorers note deterioration."
    },
    {
      name: "Grandview Resort",
      address: "900 Lakeview Road",
      city: "Hartford",
      state: "CT",
      status: "For Sale",
      notes: "Listed on hotel sites; verify market conditions."
    },
    {
      name: "Sunset Motel",
      address: "345 Sunset Blvd",
      city: "New York",
      state: "NY",
      status: "Abandoned / For Sale",
      notes: "Former motel with redevelopment potential."
    },
    {
      name: "Riverside Inn",
      address: "123 River Street",
      city: "Albany",
      state: "NY",
      status: "For Sale",
      notes: "Local broker listings; confirm status."
    },
    {
      name: "Bayview Lodge",
      address: "88 Seaside Ave",
      city: "New Haven",
      state: "CT",
      status: "Recently Closed",
      notes: "Historical property per archives."
    },
    {
      name: "Elmwood Resort & Spa",
      address: "456 Elm Street",
      city: "Bridgeport",
      state: "CT",
      status: "For Sale",
      notes: "Boutique resort potential; verify with brokers."
    },
    {
      name: "Heritage Hotel",
      address: "232 Heritage Way",
      city: "Boston",
      state: "MA",
      status: "Abandoned",
      notes: "Former chain property; verify condition."
    },
    {
      name: "Crestview Inn",
      address: "333 Crestview Rd",
      city: "Springfield",
      state: "MA",
      status: "For Sale",
      notes: "Recently closed; market status under evaluation."
    },
    {
      name: "Central City Hotel",
      address: "500 Central Ave",
      city: "Philadelphia",
      state: "PA",
      status: "For Sale",
      notes: "Commercial agent listings; check condition."
    },
    {
      name: "Summit Lodge",
      address: "789 Mountain Road",
      city: "Burlington",
      state: "VT",
      status: "Recently Closed / Abandoned",
      notes: "Unique mountain resort; verify with municipality."
    }
  ],
  government: [
    {
      name: "Heritage Post Office",
      address: "101 Central Plaza",
      city: "Philadelphia",
      state: "PA",
      status: "Abandoned / For Sale",
      notes: "Historical surveys noted; check records."
    },
    {
      name: "City Municipal Building",
      address: "150 City Hall Ave",
      city: "New Haven",
      state: "CT",
      status: "For Sale",
      notes: "Govt. operations relocated; redevelopment possible."
    },
    {
      name: "Old Courthouse",
      address: "77 Justice Road",
      city: "Providence",
      state: "RI",
      status: "Abandoned",
      notes: "Historic building; verify significance."
    },
    {
      name: "Government Office Complex",
      address: "300 Government Lane",
      city: "Newark",
      state: "NJ",
      status: "For Sale",
      notes: "Downsizing property; check broker listings."
    },
    {
      name: "Federal Archives Center",
      address: "450 Archive Blvd",
      city: "Washington",
      state: "DC",
      status: "For Sale",
      notes: "Former gov storage; needs verification."
    },
    {
      name: "State Department Building",
      address: "220 State Street",
      city: "Boston",
      state: "MA",
      status: "Recently Closed",
      notes: "Under reorganization; more details pending."
    },
    {
      name: "City Library Annex",
      address: "560 Book Street",
      city: "Albany",
      state: "NY",
      status: "Abandoned",
      notes: "Former annex; confirm current use."
    },
    {
      name: "Regional Health Administration",
      address: "95 Health Plaza",
      city: "Bridgeport",
      state: "CT",
      status: "For Sale",
      notes: "Large institutional property; broker data available."
    },
    {
      name: "Old Fire Station",
      address: "160 Firehouse Drive",
      city: "New Brunswick",
      state: "NJ",
      status: "Abandoned",
      notes: "Repurposing potential; check records."
    },
    {
      name: "Civic Center",
      address: "800 Civic Center Way",
      city: "Philadelphia",
      state: "PA",
      status: "For Sale / Abandoned",
      notes: "Listed in redevelopment plans; verify updates."
    }
  ]
};

// When the DOM is ready, set up the dropdown event.
document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("categorySelect");
  const tableContainer = document.getElementById("tableContainer");

  categorySelect.addEventListener("change", function () {
    const selectedCategory = this.value;
    if (selectedCategory && data[selectedCategory]) {
      tableContainer.innerHTML = generateTable(data[selectedCategory]);
    } else {
      tableContainer.innerHTML = "";
    }
  });

  // Load existing spots from local storage when the page loads
  loadSpots();
});

// Generates an HTML table from the property data array.
function generateTable(categoryData) {
  let tableHTML = `<table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Facility Name</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Status</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>`;
  
  categoryData.forEach((item) => {
    tableHTML += `<tr>
      <td>${item.name}</td>
      <td>${item.address}</td>
      <td>${item.city}</td>
      <td>${item.state}</td>
      <td>${item.status}</td>
      <td>${item.notes}</td>
    </tr>`;
  });
  
  tableHTML += `</tbody></table>`;
  return tableHTML;
}

// Hardcoded passcode
const PASSCODE = "trenton";

// DOM Elements
const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementById('loginForm');
const passcodeInput = document.getElementById('passcodeInput');
const submitLoginButton = document.getElementById('submitLoginButton');
const addSpotForm = document.getElementById('addSpotForm');
const spotInput = document.getElementById('spotInput');
const addSpotButton = document.getElementById('addSpotButton');

// Event Listener for Login Button
loginButton.addEventListener('click', () => {
  loginForm.style.display = 'block';
});

// Event Listener for Submit Login Button
submitLoginButton.addEventListener('click', () => {
  const passcode = passcodeInput.value;
  if (passcode === PASSCODE) {
    loginForm.style.display = 'none';
    addSpotForm.style.display = 'block';
    loadSpots();
  } else {
    alert('Incorrect passcode');
  }
});

// Event Listener for Add Spot Button
addSpotButton.addEventListener('click', () => {
  const category = document.getElementById("categorySelect").value;
  const spot = spotInput.value;
  if (category && spot) {
    addSpot(category, spot);
    spotInput.value = '';
  } else {
    alert('Please select a category and enter a spot');
  }
});

// Function to Add Spot to Local Storage
function addSpot(category, spot) {
  let spots = JSON.parse(localStorage.getItem('spots')) || {};
  if (!spots[category]) {
    spots[category] = [];
  }
  spots[category].push({ name: spot }); // Ensure consistent structure
  localStorage.setItem('spots', JSON.stringify(spots));
  loadSpots();
}

// Function to Load Spots from Local Storage
function loadSpots() {
  let spots = JSON.parse(localStorage.getItem('spots')) || {};
  tableContainer.innerHTML = '';
  // Combine data from both the hardcoded data and local storage
  let combinedData = { ...data };
  for (let category in spots) {
    if (!combinedData[category]) {
      combinedData[category] = [];
    }
    combinedData[category] = combinedData[category].concat(spots[category]);
  }
  for (let category in combinedData) {
    let table = document.createElement('table');
    table.className = 'table';
    let thead = document.createElement('thead');
    thead.innerHTML = `<tr><th>${category}</th></tr>`;
    table.appendChild(thead);
    let tbody = document.createElement('tbody');
    combinedData[category].forEach(spot => {
      let row = document.createElement('tr');
      row.innerHTML = `<td>${spot.name || spot}</td><td>${spot.address || ''}</td><td>${spot.city || ''}</td><td>${spot.state || ''}</td><td>${spot.status || ''}</td><td>${spot.notes || ''}</td>`;
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    tableContainer.appendChild(table);
  }
}

// Load Spots on Page Load
document.addEventListener('DOMContentLoaded', loadSpots);
Updated style.css to Restore Original Background Color
CSS
/* css/style.css */

body {
  background-color: #f7f7f7; /* Original background color */
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-family: 'Bubblegum Sans', cursive; /* Use a bubble letters font */
  font-weight: 700; /* Make the text bold */
  margin-left: 120px; /* Add margin to prevent overlap with logo */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add shadow effect */
  color: black; /* Change text color to black */
  animation: bounceIn 1s ease-in-out; /* Bounce only on load */
}

/* Keyframes for bounce animation */
@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0.7;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

table {
  margin-top: 20px;
}

header .logo {
  width: 100px; /* Adjust the width as needed */
  height: auto;
  position: absolute;
  top: 20px; /* Adjust the top position as needed */
  left: 20px; /* Adjust the left position as needed */
}

/* Position the login button and form in the bottom left corner */
.tiny-login {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 100px; /* Tiny width */
  font-size: 10px; /* Small font size */
}

#loginForm {
  position: fixed;
  bottom: 60px; /* Above the login button */
  left: 20px;
  width: 200px; /* Set a fixed width */
  background: rgba(255, 255, 255, 0.9); /* Slightly transparent background */
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: none; /* Hide initially */
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  h1 {
    margin-left: 0; /* Remove left margin on mobile */
    text-align: center; /* Center-align the text on mobile */
  }
  header .logo {
    left: auto; /* Remove left positioning on mobile */
    right: 20px; /* Position the logo to the right on mobile */
  }
}
