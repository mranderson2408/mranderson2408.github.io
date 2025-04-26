// Store units and calls
const units = [];
const calls = [];

const unitForm = document.getElementById('unitForm');
const callForm = document.getElementById('callForm');
const unitList = document.getElementById('unitList');
const callList = document.getElementById('callList');

// Handle adding a new unit
unitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const unitId = document.getElementById('unitId').value.trim();
  const unitStatus = document.getElementById('unitStatus').value;
  
  if (unitId === '') {
    alert('Please enter a valid Unit ID.');
    return;
  }

  const unit = { id: unitId, status: unitStatus };
  units.push(unit);
  updateUnitList();

  unitForm.reset();
});

// Handle creating a new call
callForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const callDesc = document.getElementById('callDesc').value.trim();
  
  if (callDesc === '') {
    alert('Please enter a call description.');
    return;
  }

  const call = { description: callDesc };
  calls.push(call);
  updateCallList();

  callForm.reset();
});

// Update the DOM for units
function updateUnitList() {
  unitList.innerHTML = '';
  
  units.forEach(unit => {
    const li = document.createElement('li');
    li.className = 'unit';
    li.textContent = `${unit.id} - Status: ${unit.status}`;
    unitList.appendChild(li);
  });
}

// Update the DOM for calls
function updateCallList() {
  callList.innerHTML = '';
  
  calls.forEach((call, index) => {
    const li = document.createElement('li');
    li.className = 'call';
    li.innerHTML = `<strong>Call #${index + 1}</strong>: ${call.description}`;
    callList.appendChild(li);
  });
}
