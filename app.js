const numOfGrids = 16;


const container = document.querySelector('#container');

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