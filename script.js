const game = () => {
    
    document.getElementById("demo").addEventListener("mouseover", mouseOver);
    document.getElementById("demo").addEventListener("mouseout", mouseOut);

    function mouseOver() {
    document.getElementById("demo").style.color = "red";
    }

    function mouseOut() {
    document.getElementById("demo").style.color = "black";
    }



    const container = document.querySelector(".container");

    let arrayRow = new Array(16);
    for (let i=0; i<arrayRow.length; i++) {
        arrayRow[i] = new Array(16); 
    } 

    for (let row=0; row<16; row++) {
        const rowDiv =  document.createElement("div");
        rowDiv.style.clear = 'both';
        container.appendChild(rowDiv);

        console.log("row "+row);

        for (let col=0; col<16; col++) {
            const square = document.createElement("div");
            console.log(row.toString()+"-"+col.toString());
            square.setAttribute('id',row.toString()+"-"+col.toString());
            square.setAttribute('class','cell');
            square.style.width = "20px";
            square.style.height = "20px"; 
            square.style.backgroundColor = 'yellow';
            square.style.boxSizing = "border-box";
            square.style.borderStyle = "solid";
            square.style.borderWidth = '1px'; 
            square.style.borderColor = "black";
            square.style.cssFloat = "left";
            rowDiv.appendChild(square); 

            arrayRow[row][col] = square;

            // square.addEventListener("click")
        }
        console.log("\n");
    }

    // console.log(arrayRow);

    const testDiv = document.createElement('div');
    testDiv.style.clear = 'both';
    testDiv.style.width = "50px";
    testDiv.style.height = "50px";
    testDiv.style.backgroundColor = "yellow";
    container.appendChild(testDiv);

    document.addEventListener('mouseover', function (event) {

        if (event.target.matches('.cell')) {
            // Run your code to open a modal
            console.log(event.target.id);
            console.log(event.target);
            // console.log(document.getElementById(event.target.id));
            document.getElementById(event.target.id).style.backgroundColor = "red";
        }

    
    }, false);

    // testDiv.addEventListener("click",mouseOver(testDiv));
    // // testDiv.addEventListener("mouseout",mouseOut(testDiv));


    // // for (let r=0; r<16; r++) {
    // //     arrayRow[r].forEach(sq => {
    // //         sq.addEventListener('mouseover', changeColor(sq));
    // //     }
    // //     )
    // // }

    function mouseOver(elem) {
        // elem.style.backgroundColor = "green";
        console.log("hi");
    }
    // function mouseOut(elem) {
    //     elem.style.backgroundColor = "yellow";
    // }
    

}

game();

