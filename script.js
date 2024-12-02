// main "container" holds both the
// button container div and the boxes container div 
const container = document.querySelector("#container");
container.classList.add("content"); 

const boxContainer = document.createElement("div");
boxContainer.classList.add("content");
container.appendChild(boxContainer);

// container to contain the 
const inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");
container.appendChild(inputContainer);

    const columnsInput = document.createElement("input");
    columnsInput.classList.add("input");
    columnsInput.setAttribute("placeholder", "How many columns do you want?");
    inputContainer.appendChild(columnsInput);

    const rowsInput = document.createElement("input");
    rowsInput.classList.add("input");
    rowsInput.setAttribute("placeholder", "How many rows do you want?");
    inputContainer.appendChild(rowsInput);

    const button = document.createElement("button");
    button.id = "btn"
    button.textContent = "Submit"; 
    inputContainer.appendChild(button); 

    // telling the computer what to do when the button is clicked 
    function howMany() {
        prompt("How many squares do you want?"); 
    }

    // telling the computer when to run function how many
    btn.addEventListener("click", howMany);
    
// row divs
const row1 = document.createElement("div");
row1.classList.add("row"); 
container.appendChild(row1);

    const box1a = document.createElement("div");
    box1a.classList.add("boxes");
    row1.appendChild(box1a);

    const box1b = document.createElement("div");
    box1b.classList.add("boxes");
    row1.appendChild(box1b);

    const box1c = document.createElement("div");
    box1c.classList.add("boxes");
    row1.appendChild(box1c);

    const box1d = document.createElement("div");
    box1d.classList.add("boxes");
    row1.appendChild(box1d);

    const box1e = document.createElement("div");
    box1e.classList.add("boxes");
    row1.appendChild(box1e);

    const box1f = document.createElement("div");
    box1f.classList.add("boxes");
    row1.appendChild(box1f);


const row2 = document.createElement("div");
row2.classList.add("row"); 
container.appendChild(row2);

    const box2a = document.createElement("div");
    box2a.classList.add("boxes");
    row2.appendChild(box2a);

    const box2b = document.createElement("div");
    box2b.classList.add("boxes");
    row2.appendChild(box2b);

    const box2c = document.createElement("div");
    box2c.classList.add("boxes");
    row2.appendChild(box2c);

    const box2d = document.createElement("div");
    box2d.classList.add("boxes");
    row2.appendChild(box2d);

    const box2e = document.createElement("div");
    box2e.classList.add("boxes");
    row2.appendChild(box2e);

    const box2f = document.createElement("div");
    box2f.classList.add("boxes");
    row2.appendChild(box2f);

const row3 = document.createElement("div");
row3.classList.add("row"); 
container.appendChild(row3);

    const box3a = document.createElement("div");
    box3a.classList.add("boxes");
    row3.appendChild(box3a);

    const box3b = document.createElement("div");
    box3b.classList.add("boxes");
    row3.appendChild(box3b);

    const box3c = document.createElement("div");
    box3c.classList.add("boxes");
    row3.appendChild(box3c);

    const box3d = document.createElement("div");
    box3d.classList.add("boxes");
    row3.appendChild(box3d);

    const box3e = document.createElement("div");
    box3e.classList.add("boxes");
    row3.appendChild(box3e);

    const box3f = document.createElement("div");
    box3f.classList.add("boxes");
    row3.appendChild(box3f);

const row4 = document.createElement("div");
row4.classList.add("row"); 
container.appendChild(row4);

    const box4a = document.createElement("div");
    box4a.classList.add("boxes");
    row4.appendChild(box4a);

    const box4b = document.createElement("div");
    box4b.classList.add("boxes");
    row4.appendChild(box4b);

    const box4c = document.createElement("div");
    box4c.classList.add("boxes");
    row4.appendChild(box4c);

    const box4d = document.createElement("div");
    box4d.classList.add("boxes");
    row4.appendChild(box4d);

    const box4e = document.createElement("div");
    box4e.classList.add("boxes");
    row4.appendChild(box4e);

    const box4f = document.createElement("div");
    box4f.classList.add("boxes");
    row4.appendChild(box4f);

const row5 = document.createElement("div");
row5.classList.add("row"); 
container.appendChild(row5);

    const box5a = document.createElement("div");
    box5a.classList.add("boxes");
    row5.appendChild(box5a);

    const box5b = document.createElement("div");
    box5b.classList.add("boxes");
    row5.appendChild(box5b);

    const box5c = document.createElement("div");
    box5c.classList.add("boxes");
    row5.appendChild(box5c);

    const box5d = document.createElement("div");
    box5d.classList.add("boxes");
    row5.appendChild(box5d);

    const box5e = document.createElement("div");
    box5e.classList.add("boxes");
    row5.appendChild(box5e);

    const box5f = document.createElement("div");
    box5f.classList.add("boxes");
    row5.appendChild(box5f);

const row6 = document.createElement("div");
row6.classList.add("row"); 
container.appendChild(row6);

    const box6a = document.createElement("div");
    box6a.classList.add("boxes");
    row6.appendChild(box6a);

    const box6b = document.createElement("div");
    box6b.classList.add("boxes");
    row6.appendChild(box6b);

    const box6c = document.createElement("div");
    box6c.classList.add("boxes");
    row6.appendChild(box6c);

    const box6d = document.createElement("div");
    box6d.classList.add("boxes");
    row6.appendChild(box6d);

    const box6e = document.createElement("div");
    box6e.classList.add("boxes");
    row6.appendChild(box6e);

    const box6f = document.createElement("div");
    box6f.classList.add("boxes");
    row6.appendChild(box6f);


