const container = document.querySelector('.container');

const clearBtn = document.querySelector('#clearBtn');

const eraserBtn = document.querySelector('#eraser');

const colorBtn = document.querySelector('#color-mode');
colorBtn.blur();
const rainbowBtn = document.querySelector('#rainbow-mode');


const colorSelector = document.querySelector('#color');

const gridSizeBtn = document.querySelector('#grid-size');
const gridText = document.querySelector('#grid-text');


const nodeList = container.children;
const toggleGrid = document.querySelector('#toggleGrid');
let gridSize = 16;

let color = 'black';

colorSelector.addEventListener('input',() => {color = colorSelector.value;})


let colorArray = ['#ff0000','#00ff00','#0000ff','#ffa500','#ffff00','#8f00ff','4b0082'];

//function to make the grid

function makeGrid(rows,cols){
		gridText.textContent = `${gridSize} X ${gridSize}`;

		for (let c = 0; c < (rows*cols); c++){

			let cell = document.createElement('div');
			cell.className = 'grid-items';
			container.appendChild(cell);
			container.appendChild(cell);
		}
		
		container.setAttribute('style',`display:grid; grid-template-columns:repeat(${cols},1fr);
							grid-template-rows:repeat(${rows},1fr)`);
		

		showHide();
}


//function to delete the grid

function deleteGrid(){
	while(container.lastElementChild){
		container.removeChild(container.lastElementChild);
	}
}


//function to toggle between showing/hiding grid lines

function showHide(){
		if(toggleGrid.textContent === 'HIDE GRID' || nodeList.item(0).style.border !== 'none'){
			for(let i = 0; i < nodeList.length; i++) 
			{
				nodeList.item(i).style.border = 'none';
				toggleGrid.textContent = 'SHOW GRID';
			}
		}
		else{
			for(let i = 0; i < nodeList.length; i++) 
			{
				nodeList.item(i).style.border = '0.25px solid rgba(0,0,0,0.5)';
				toggleGrid.textContent = 'HIDE GRID';
			}	
		}
	}



function randomColor(){
	return colorArray[Math.floor(Math.random()*7)];
}

function selectButton(colVal){
	for(let i = 0; i < nodeList.length; i++) 
	{
		nodeList.item(i).addEventListener('mouseover',() => 
		{	
			nodeList.item(i).style.background = colVal;
		});
	}
}

//initial function call to make the grid

makeGrid(gridSize,gridSize);


eraserBtn.addEventListener('focus',() => {
	selectButton('white');
	colorBtn.setAttribute('style','background:white; color:black');
	eraserBtn.setAttribute('style','background:black; color:white');
	rainbowBtn.setAttribute('style','background:white; color:black');

});



colorBtn.addEventListener('focus',() => {
		selectButton(colorSelector.value);
		colorBtn.setAttribute('style','background:black; color:white');
		eraserBtn.setAttribute('style','background:white; color:black');
		rainbowBtn.setAttribute('style','background:white; color:black');
});



//changing grid size upon clicking 'select grid size button'

gridSizeBtn.addEventListener('input', () => {
	
	gridSize = gridSizeBtn.value;
	deleteGrid();
	makeGrid(gridSize,gridSize);
	colorBtn.setAttribute('style','background:white; color:black');
	eraserBtn.setAttribute('style','background:white; color:black');
	rainbowBtn.setAttribute('style','background:white; color:black');


	}
);


//clearing the sketch pad

clearBtn.addEventListener('click', () => {
	for(let i = 0; i < nodeList.length; i++) 
	{
		nodeList.item(i).style.background = 'white';
		}
		
	});	


rainbowBtn.addEventListener('focus', () =>{
	
	for(let i = 0; i < nodeList.length; i++) 
	{	
		nodeList.item(i).addEventListener('mouseover',() => 
		{	nodeList.item(i).style.background = '';
			nodeList.item(i).style.background = randomColor();
		});
	}
	colorBtn.setAttribute('style','background:white; color:black');
	eraserBtn.setAttribute('style','background:white; color:black');
	rainbowBtn.setAttribute('style','background:black; color:white');

});
		

toggleGrid.addEventListener('click', showHide);


