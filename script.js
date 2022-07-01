
// Create div container

const divContainer = document.createElement('div');
    divContainer.className = "grid-container";
    document.body.appendChild(divContainer);
    
// Create 256 div

for (i = 0; i < 256 ; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = "grid-item";
    divContainer.appendChild(newDiv);
}

// Add a button to the top of the screen that will send a user a
// popup asking for the number of squares per side for the new grid
// Once entered the existing grid should be removed and a new grid generated


// CSS needs to change so the grid is changed to the playerInput

