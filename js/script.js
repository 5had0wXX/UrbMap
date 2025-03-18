// Sample data for each category with at least 10 sample entries.
const data = {
  hospitals: [
    {
      name: "Vibra Healthcare",
      address: "1414 State Street",
      city: "Springfield",
      state: "MA",
      status: "For Sale / Abandoned",
      notes: "Urban exploration reports; verify latest status."
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

document.addEventListener("DOMContentLoaded", () => {
  // Populate the dropdown for selecting property type
  populateCategorySelect();
  populateCategorySelectForm();

  // Load spots for the initially selected category
  loadSpots();

  const loginButton = document.getElementById('loginButton');
  const loginForm = document.getElementById('loginForm');
  const submitLoginButton = document.getElementById('submitLoginButton');
  const categorySelect = document.getElementById('categorySelect');
  const categorySelectForm = document.getElementById('categorySelectForm');
  const addSpotForm = document.getElementById('addSpotForm');
  const spotInput = document.getElementById('spotInput');
  const addressInput = document.getElementById('addressInput');
  const cityInput = document.getElementById('cityInput');
  const stateInput = document.getElementById('stateInput');
  const statusInput = document.getElementById('statusInput');
  const notesInput = document.getElementById('notesInput');
  const addSpotButton = document.getElementById('addSpotButton');

  loginButton.addEventListener('click', () => {
    loginForm.style.display = 'block';
  });

  submitLoginButton.addEventListener('click', () => {
    const passcode = document.getElementById('passcodeInput').value;
    if (passcode === 'trenton') {
      loginForm.style.display = 'none';
      addSpotForm.style.display = 'block';
    } else {
      alert('Incorrect passcode');
    }
  });

  addSpotButton.addEventListener('click', () => {
    const category = categorySelectForm.value;
    const spot = {
      name: spotInput.value,
      address: addressInput.value,
      city: cityInput.value,
      state: stateInput.value,
      status: statusInput.value,
      notes: notesInput.value
    };
    if (category && spot.name) {
      addSpot(category, spot);
      spotInput.value = '';
      addressInput.value = '';
      cityInput.value = '';
      stateInput.value = '';
      statusInput.value = '';
      notesInput.value = '';
    } else {
      alert('Please fill in all required fields');
    }
  });

  categorySelect.addEventListener('change', () => {
    loadSpots();
  });
});

// Function to populate category select dropdown
function populateCategorySelect() {
  const categorySelect = document.getElementById('categorySelect');
  for (let category in data) {
    let option = document.createElement('option');
    option.value = category;
    option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    categorySelect.appendChild(option);
  }
}

// Function to populate category select for add spot form
function populateCategorySelectForm() {
  const categorySelectForm = document.getElementById('categorySelectForm');
  for (let category in data) {
    let option = document.createElement('option');
    option.value = category;
    option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    categorySelectForm.appendChild(option);
  }
}

// Function to Add Spot to Local Storage
function addSpot(category, spot) {
  let spots = JSON.parse(localStorage.getItem('spots')) || {};
  if (!spots[category]) {
    spots[category] = [];
  }
  spots[category].push(spot); // Ensure consistent structure
  localStorage.setItem('spots', JSON.stringify(spots));
  loadSpots();
}

// Function to Load Spots from Local Storage with detailed logging
function loadSpots() {
  try {
    let spots = JSON.parse(localStorage.getItem('spots')) || {};
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    const selectedCategory = document.getElementById('categorySelect').value;
    // Combine data from both the hardcoded data and local storage
    let combinedData = { ...data };
    console.log('Initial combinedData:', combinedData);
    for (let category in spots) {
      if (!combinedData[category]) {
        combinedData[category] = [];
      }
      combinedData[category] = combinedData[category].concat(spots[category]);
      console.log(`Combined data for category ${category}:`, combinedData[category]);
    }
    if (combinedData[selectedCategory] && combinedData[selectedCategory].length > 0) {
      let table = document.createElement('table');
      table.className = 'table';
      let thead = document.createElement('thead');
      thead.innerHTML = `<tr><th>Name</th><th>Address</th><th>City</th><th>State</th><th>Status</th><th>Notes</th></tr>`;
      table.appendChild(thead);
      let tbody = document.createElement('tbody');
      combinedData[selectedCategory].forEach(spot => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${spot.name}</td><td>${spot.address}</td><td>${spot.city}</td><td>${spot.state}</td><td>${spot.status}</td><td>${spot.notes}</td>`;
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      tableContainer.appendChild(table);
    } else {
      console.log('No data available for selected category:', selectedCategory);
    }
  } catch (error) {
    console.error('Error loading spots:', error);
  }
}

// Load Spots on Page Load
document.addEventListener('DOMContentLoaded', loadSpots);
