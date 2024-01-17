let numOfGrids = 16;

const gridBtn = document.querySelector('#gridBtn');

gridBtn.addEventListener('click', setGrid);

function setGrid(){

    let userInput = prompt('Type the number of grids you wanted to set? (Maximum 100)', 16);

    //Convert userInput to number
    userInput = parseInt(userInput);

    if(!isNaN(userInput) && userInput > 0 && userInput <= 100){
        
        numOfGrids = userInput;

        //Clearing existing grid
        container.innerHTML = '';

        grid();
    }else {
        alert('Please enter a valid number between 1 to 100.');
    }

    //Generate new grid
    grid();
}

const container = document.querySelector('#container');

function grid(){
    for(let column = 0; column < numOfGrids; column++ ){
        const columnDiv = document.createElement('div');
    
        columnDiv.style.display = 'flex';
        columnDiv.style.flexFlow = 'row wrap';
        columnDiv.style.flex = '1';
    
    
            for(let row = 0; row < numOfGrids; row++){
    
                const rowDivs = document.createElement('div');
    
                rowDivs.style.border = '1px solid black';
    
                rowDivs.style.flex = '1';
                
                rowDivs.addEventListener('mouseenter', () => {
                    rowDivs.classList.add('changeColor');
                });
    
                columnDiv.appendChild(rowDivs);  
            }
    
        container.appendChild(columnDiv);
    }
}

grid();