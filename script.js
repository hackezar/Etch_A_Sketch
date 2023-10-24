const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#sizeBtn");

let size = 16;


sizeBtn.addEventListener('click', function sizeClick() {
    size = prompt("Enter how many boxes you would like the height and width to be (Max: 100)")

    if ( size > 100 ) {

        alert("Number input greater than 100");
        sizeClick();

    } else if (size < 1 && size != null) {

        alert("Number too small!");
        sizeClick();
        
    } else if ( size > 1 && size < 100){
        removeAllChildNodes(container);
        generateGrid(size);

    } else if ( size == null) {

        return;

    } else {

        alert("Please enter a valid Number")
        sizeClick();

    }
});


//creates the grid
function generateGrid (size) {
    
    let totalBoxes = size * size;
    let divHeight = (900/size).toString() + 'px';
    let divWidth = (900/size).toString() + 'px';
   
    
    for (let i = 1; i <=totalBoxes; i++) {
        const div = document.createElement("div");
        div.style.height = divHeight;
        div.style.width = divWidth;
        div.addEventListener('mouseover', () => {

            div.style = "background-color: #0000FF";
            div.style.height = divHeight;
            div.style.width = divWidth;

        });
        
        container.appendChild(div);
    
    }
    
}

function removeAllChildNodes (container){
    container.innerHTML = '';
}

generateGrid(size);