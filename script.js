// buttons

const btnContainer = document.createElement('div');{
    btnContainer.className = "btn-container";
    document.body.appendChild(btnContainer);
}

const sizeBtn = document.createElement("button"); {
    sizeBtn.className = "size-button";
    sizeBtn.innerText = "Enter Grid Size";
    btnContainer.appendChild(sizeBtn);
}

// create  div container

const divContainer = document.createElement('div');{
    divContainer.className = "grid-container";
    document.body.appendChild(divContainer);
}

// button click

sizeBtn.addEventListener("click", getPlayerSelection)

// function for button click to generate new grids

function getPlayerSelection() {
    let playerInput = prompt("Choose a number between 5 and 50 to set the amount of squares you would like per side");
    let playerNumber = parseInt(playerInput);
    while (playerNumber < 2 || playerNumber > 50) {
        prompt("Choose a number between 2 and 50 to set the amount of squares you would like per side")
        if (playerNumber > 1 || playerNumber < 51) {
            break
        }    
    }
    divContainer.style.setProperty("--grid-size", playerNumber)
    let gridSize = playerNumber * playerNumber
    for (i = 0; i < gridSize ; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "grid-item";
        newDiv.addEventListener('mouseover', event => {
            event.target.classList.add('hover-trail')
        })
        divContainer.appendChild(newDiv);
    }
}