let numOfGrids = 16;
let interactionCount = 0;

const gridBtn = document.querySelector('#gridBtn');

gridBtn.addEventListener('click', setGrid);

function setGrid(){

    let userInput = prompt('Type the number of grids you wanted to set? (Maximum 100)', 16);

    //Convert userInput to number
    userInput = parseInt(userInput);

    if(!isNaN(userInput) && userInput > 0 && userInput <= 100){
    
        //Clearing existing grid
         container.innerHTML = '';
        
        numOfGrids = userInput;

        //reset interaction Count when changing grid
        interactionCount = 0;

        grid();
    }else {
        alert('Please enter a valid number between 1 to 100.');
    }
}

const container = document.querySelector('#container');

function grid(){
    for(let column = 0; column < numOfGrids; column++ ){
        const columnDiv = document.createElement('div');
    
        columnDiv.style.display = 'flex';
        columnDiv.style.flex = '1';
    
    
            for(let row = 0; row < numOfGrids; row++){
    
                const rowDivs = document.createElement('div');
    
                rowDivs.style.border = '1px solid black';
    
                rowDivs.style.flex = '1';
                
                rowDivs.addEventListener('mouseenter', () => handleMouseEnter(rowDivs));
    
                columnDiv.appendChild(rowDivs);  
            }
    
        container.appendChild(columnDiv);
    }
}

function  handleMouseEnter(element){
    interactionCount++;
    element.style.backgroundColor = getRandomColor()
}

function getRandomColor(){

    let darknessPercentage = (interactionCount/ 10) * 100;

    if(darknessPercentage > 100){
        darknessPercentage = 100;
    }

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue}, ${darknessPercentage}%)`;
}

grid();