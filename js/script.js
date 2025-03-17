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
    // ... (other sample data)
  ],
  // ... (other categories)
};

// When the DOM is ready, set up the dropdown event.
document.addEventListener("DOMContentLoaded", () => {
  loadSpots(); // Load spots for all visitors
  const loginButton = document.getElementById('loginButton');
  const loginForm = document.getElementById('loginForm');
  const submitLoginButton = document.getElementById('submitLoginButton');
  const categorySelect = document.getElementById('categorySelect');
  const addSpotForm = document.getElementById('addSpotForm');
  const spotInput = document.getElementById('spotInput');
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
    const category = categorySelect.value;
    const spot = spotInput.value;
    if (category && spot) {
      addSpot(category, spot);
      spotInput.value = '';
    } else {
      alert('Please select a category and enter a spot');
    }
  });
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
  const tableContainer = document.getElementById('tableContainer');
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
    if (combinedData[category].length > 0) {
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
}

// Load Spots on Page Load
document.addEventListener('DOMContentLoaded', loadSpots);
