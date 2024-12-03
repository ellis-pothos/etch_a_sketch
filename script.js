// 12.2.24 - something wrong with the clearSketch() function 
// particularly with the replacewith. will have to go back and 
// append the new rows and boxes to the new box container 

// main "container" holds both the
// button container div and the boxes container div 
const container = document.querySelector("#container");
container.classList.add("mainContainer"); 

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
            clearSketch();
            const userRows = rowsInput.value;
            const userColumns = columnsInput.value; 
            // console.log("TEsting");
            newPad(userRows, userColumns);
        });
    
// functions for clearing the old sketch
// replace the box container with a new box container
function clearSketch() {
        const oldBoxContainer = document.getElementById("boxContainer");
        oldBoxContainer.remove(); 
} 

// telling the computer what to do when the submit button is clicked 
function newPad(userRows, userColumns) {
    const boxContainer = document.createElement("div");
    boxContainer.id = "boxContainer"; 
    
    // append the new box container to container 
    boxContainer.classList.add("boxContainer"); 
    container.appendChild(boxContainer);

        // create new rows and columns according to user input
    // console.log("testing newpad")
    for (let r = 0; r < userRows; r++) {
        // newRow();
        const row = document.createElement("div");
        row.id = "row";
        row.classList.add("row"); 

        for (let c = 0; c < userColumns; c++) {
            const box = document.createElement("div");
            box.id = "box";
            box.classList.add("boxes");
            row.appendChild(box);

            box.addEventListener("mouseover", () => {
                // console.log("test");
                box.style.backgroundColor = "black";
            });
        }      
        boxContainer.appendChild(row); 
        // console.log("testing rows");
    }

}


const boxContainer = document.createElement("div");
boxContainer.id = "boxContainer";
boxContainer.classList.add("boxContainer");
container.appendChild(boxContainer);

