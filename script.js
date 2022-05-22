const game = () => {

    const container = document.querySelector(".container");
    let widthCon = 600;
    let heightCon = 600;
    container.style.width = `${widthCon}px`;
    container.style.height = `${heightCon}px`;

    let size = 16;
    let round = 1;

    const updateGrid = (size) => {

        if (round!==1) {
            for (const row of document.querySelectorAll(".rowDiv")) {
                row.removeAttribute("class");
                row.remove();
            }
            for (const element of document.querySelectorAll(".cell")) {
                element.removeAttribute("id");
                element.remove();
            }
        }
        round++;
        
        for (let row=0; row<size; row++) {

            const rowDiv =  document.createElement("div");
            rowDiv.setAttribute('class','rowDiv');
            rowDiv.style.clear = 'both';
            rowDiv.style.display = "flex";
            rowDiv.style.backgroundColor = "DAD7CD";
            let height = heightCon/size;
            rowDiv.style.height = `${height.toString()}px`;

            container.appendChild(rowDiv);
    
            console.log("row "+row);
    
            for (let col=0; col<size; col++) {
                const square = document.createElement("div");
                console.log(row.toString()+"-"+col.toString());
                square.setAttribute('id',row.toString()+"-"+col.toString());
                square.setAttribute('class','cell');
                square.style.backgroundColor = "E97020";
                square.style.boxSizing = "border-box";
                square.style.borderStyle = "solid";
                square.style.borderWidth = '1px'; 
                square.style.borderColor = "black";
                square.style.flex = "auto";
                rowDiv.appendChild(square); 
    
            }
        }

        const randomColor = () => {
            let randNum = Math.floor(Math.random() * 4) + 1;
            if (randNum === 1) { 
                return "A3B18A";
            } else if (randNum === 2) {
                return "344E41";
            } else if (randNum === 3) {
                return "3A5A40";
            } else {
                return "588157";
            } 
        }

        document.addEventListener('mouseover', function (event) {

            if (event.target.matches('.cell')) {
                // Run your code to open a modal
                console.log(event.target.id);
                console.log(event.target);
                document.getElementById(event.target.id).style.backgroundColor = randomColor();
            }

        
        }, false);
    
    }

    const promptGridSize = () => {
        let num = size;
        do {
            num = prompt("Enter size of grid: (max 100)");
        } while (num > 100);
        size = num; 
        updateGrid(Number(num));
    }

    document.addEventListener('click', function (event) {
        if (event.target.matches('.button')) {
            promptGridSize();
        }
    }, false);

    updateGrid(size);

}

game();

