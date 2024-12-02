// 12.2.24 - something wrong with the clearSketch() function 
// particularly with the replacewith. will have to go back and 
// append the new rows and boxes to the new box container 

// main "container" holds both the
// button container div and the boxes container div 
const container = document.querySelector("#container");
container.classList.add("content"); 

// container to contain the input fields 
const inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");
container.appendChild(inputContainer);

    const columnsInput = document.createElement("input");
    columnsInput.id = "columnsInput";
    columnsInput.classList.add("input");
    columnsInput.setAttribute("placeholder", "How many columns do you want?");
    inputContainer.appendChild(columnsInput);

    const rowsInput = document.createElement("input");
    rowsInput.id = "rowsInput";
    rowsInput.classList.add("input");
    rowsInput.setAttribute("placeholder", "How many rows do you want?");
    inputContainer.appendChild(rowsInput);

    // create a button that can run the function new sketch pad 
    // when the user has input how many squares they want
    const button = document.createElement("button");
    button.id = "btn"
    button.textContent = "Submit"; 
    inputContainer.appendChild(button); 

        // telling the computer when to run function how many
        btn.addEventListener(`click`, () => {
            const userRows = rowsInput.value;
            const userColumns = columnsInput.value; 
            // console.log("TEsting");
            // clearSketch();
            newPad(userRows, userColumns);
        });
    
// functions for clearing the old sketch
// replace the box container with a new box container
// function clearSketch() {
    // const oldBoxContainer = document.querySelector("#boxContainer");
    // const newBoxContainer = document.createElement("div");
    // oldBoxContainer.replaceWith(newBoxContainer);

    // append the new box container to container 
    // newBoxContainer.classList.add("boxContainer"); 
    // container.appendChild(newBoxContainer);
// } 

// telling the computer what to do when the submit button is clicked 
function newPad(userRows, userColumns) {
        // create new rows and columns according to user input
    // console.log("testing newpad")
    for (let r = 0; r < userRows; r++) {
        // newRow();
        // function newRow() {
            //function for creating divs
            const originalRow = document.getElementById("row");
            const clonedRow = originalRow.cloneNode(true);
            boxContainer.appendChild(clonedRow); 
        // };
        // console.log("testing rows");
    }
    for (let c = 0; c < userColumns; c++) {
        // newCol();
        // function newCol() {
            //function for creating divs
            const originalCol = document.getElementById("box");
            const clonedCol = originalCol.cloneNode(true);
            boxContainer.appendChild(clonedCol); 
        // };
        // console.log("testing columns");
    }
}

const boxContainer = document.createElement("div");
boxContainer.id = "boxContainer";
boxContainer.classList.add("boxContainer");
container.appendChild(boxContainer);



const box1a = document.createElement("div");
box1a.id = "box"
box1a.classList.add("boxes");
row1.appendChild(box1a);

    