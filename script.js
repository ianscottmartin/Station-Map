// document.addEventListener('DOMContentLoaded', () => {
//   const locations = document.querySelectorAll('.location');

//   locations.forEach((location) => {
//     location.addEventListener('click', function () {
//       // Check if input and buttons are already present
//       const existingInput = this.querySelector('input');
//       const existingSaveButton = this.querySelector('button.save');
//       const existingResetButton = this.querySelector('button.reset');

//       if (existingInput) {
//         // If input exists, just focus on it
//         existingInput.focus();
//         return;
//       }

//       // Store current name if it exists
//       const currentName = this.querySelector('.name')
//         ? this.querySelector('.name').textContent.trim()
//         : '';
//       this.innerHTML = ''; // Clear the location content

//       const stationNumber = this.getAttribute('data-location');
//       const stationDiv = document.createElement('div');
//       stationDiv.className = 'station-number';
//       stationDiv.textContent = `Station ${stationNumber}`;
//       this.appendChild(stationDiv);

//       const nameDiv = document.createElement('div');
//       nameDiv.className = 'name';
//       nameDiv.textContent = currentName; // Pre-fill with the current name if it exists
//       this.appendChild(nameDiv);

//       const inputField = document.createElement('input');
//       inputField.type = 'text';
//       inputField.placeholder = 'Enter new name'; // Add a placeholder to guide the user
//       inputField.value = currentName; // Pre-fill with the current name

//       const saveButton = document.createElement('button');
//       saveButton.textContent = 'Save';
//       saveButton.className = 'save';

//       const resetButton = document.createElement('button');
//       resetButton.textContent = 'Reset';
//       resetButton.className = 'reset';

//       // Append input and buttons to the location element
//       this.appendChild(inputField);
//       this.appendChild(saveButton);
//       this.appendChild(resetButton);

//       // Handle save action
//       saveButton.addEventListener('click', () => {
//         const newName = inputField.value.trim();
//         if (newName !== '') {
//           nameDiv.textContent = newName; // Set the new station name
//         }
//         // Remove input and buttons after saving
//         inputField.remove();
//         saveButton.remove();
//         resetButton.remove();
//       });

//       // Handle reset action
//       resetButton.addEventListener('click', () => {
//         nameDiv.textContent = ''; // Clear the name
//         inputField.value = ''; // Clear the input field
//       });

//       // Add class to indicate the location is in "editing" mode
//       this.classList.add('active');
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const locations = document.querySelectorAll('.location');

  locations.forEach((location) => {
    // Create elements for input, save, and reset buttons
    const inputField = document.createElement('input');
    inputField.className = 'input-field';
    inputField.type = 'text';
    inputField.placeholder = 'Enter new name';

    const saveButton = document.createElement('button');
    saveButton.className = 'save';
    saveButton.textContent = 'Save';

    const resetButton = document.createElement('button');
    resetButton.className = 'reset';
    resetButton.textContent = 'Reset';

    location.appendChild(inputField);
    location.appendChild(saveButton);
    location.appendChild(resetButton);

    // Add a name div if it doesn't exist
    let nameDiv = location.querySelector('.name');
    if (!nameDiv) {
      nameDiv = document.createElement('div');
      nameDiv.className = 'name';
      location.appendChild(nameDiv);
    }

    location.addEventListener('click', () => {
      // Hide input fields and buttons in other locations
      locations.forEach((loc) => {
        if (loc !== location) {
          loc.querySelector('.input-field').style.display = 'none';
          loc.querySelector('.save').style.display = 'none';
          loc.querySelector('.reset').style.display = 'none';
        }
      });

      // Show input field and buttons for the clicked location
      inputField.style.display = 'block';
      saveButton.style.display = 'block';
      resetButton.style.display = 'block';
      inputField.focus();
    });

    saveButton.addEventListener('click', () => {
      const newName = inputField.value.trim();
      if (newName !== '') {
        nameDiv.textContent = newName;
      }
      // Hide input field and buttons
      inputField.style.display = 'none';
      saveButton.style.display = 'none';
      resetButton.style.display = 'none';
    });

    resetButton.addEventListener('click', () => {
      inputField.value = '';
      // Hide input field and buttons
      inputField.style.display = 'none';
      saveButton.style.display = 'none';
      resetButton.style.display = 'none';
    });
  });
});
