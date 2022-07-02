// buttons

const btnContainer = document.createElement('div');{
    btnContainer.className = "btn-container";
    document.body.appendChild(btnContainer);
}

const sizeBtn = document.createElement("button"); {
    sizeBtn.className = "size-button";
    sizeBtn.innerText = "Click to Play";
    btnContainer.appendChild(sizeBtn);
}

const resetBtn = document.createElement("button"); {
    resetBtn.className = "reset-button";
    resetBtn.innerText = "Reset Game";
    btnContainer.appendChild(resetBtn);
}

// reset 

resetBtn.addEventListener('click', () => {
    location.reload()
})

// create  div container

const divContainer = document.createElement('div');{
    divContainer.className = "grid-container";
    document.body.appendChild(divContainer);
}

// button click

sizeBtn.addEventListener("click", getPlayerSelection)

// function for button click to generate new grids

function getPlayerSelection() {
    let playerInput = prompt("Choose a number between 10 and 65 to determine the size of the board");
    let playerNumber = parseInt(playerInput);
    while (playerNumber < 10 || playerNumber > 65) {
        playerInput = prompt("Choose a number between 10 and 65 to determine the size of the board")
        playerNumber = parseInt(playerInput);
        if (playerNumber > 10 && playerNumber < 66) {
            break
        }    
    }
    let gridTemplateSize = 'repeat('+playerNumber+', 1fr)'
    divContainer.style.gridTemplateColumns = gridTemplateSize;
    divContainer.style.gridTemplateRows = gridTemplateSize;
    let gridNumber = playerNumber * playerNumber
    for (i = 0; i < gridNumber ; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = "grid-item";
        newDiv.addEventListener('mouseover', event => {
            event.target.classList.add('hover-trail')
        })
        divContainer.appendChild(newDiv);
    }
}