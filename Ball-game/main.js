let boll = document.getElementById("boll");
let game = document.getElementById("game");
let interval;
let both = 0;
let counter = 0;
let currentBlock = [];

function moveLeft() {
    let left = parseInt(window.getComputedStyle(boll).getPropertyValue("left"));
    if (left > 0) {
        boll.style.left = left - 1 + "px";
    }
}
function moveRight() {
    let left = parseInt(window.getComputedStyle(boll).getPropertyValue("left"));
    if (left < 400) {
        boll.style.left = left + 1 + "px";
    }
}

document.addEventListener("keydown", (event) => {
    if (both == 0) {
        both++;
        if (event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, );
        }
        if (event.key === "ArrowRight") {
            interval = setInterval(moveRight, );
        }
    }
});

document.addEventListener("keyup", (event) => {
    clearInterval(interval);
    both = 0;
});

let blocks = setInterval(function () {
    let blockLast = document.getElementById("block" + (counter - 1));
    console.log(blockLast);
    let holeLast = document.getElementById("hole" + (counter - 1));
    if (counter > 0) {
        var blockLastTop = parseInt(
            window.getComputedStyle(blockLast).getPropertyValue("top")
        );
        var holeLastTop = parseInt(
            window.getComputedStyle(holeLast).getPropertyValue("top")
        );
    }
    if (blockLastTop < 440 || counter == 0) {
        let block = document.createElement("div");
        let hole = document.createElement("div");
        block.setAttribute("class", "block");
        block.setAttribute("id", "block" + counter);
        hole.setAttribute("class", "hole");
        hole.setAttribute("id", "hole" + counter);
        block.style.top = blockLastTop + 60 + "px";
        hole.style.top = holeLastTop + 60 + "px";
        let random = Math.floor(Math.random() * 360);
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole);
        currentBlock.push(counter);
        counter++;
    }

    let bollTop = parseInt(
        window.getComputedStyle(boll).getPropertyValue("top")
    );
    let bollLeft = parseInt(
        window.getComputedStyle(boll).getPropertyValue("left")
    );
    let drop = 0;
    if (bollTop == 0) {
        alert("game over! Score: " + (counter-15));
        clearInterval(blocks);
        location.reload();
    }

    for (let i = 0; i < currentBlock.length; i++) {
        let current = currentBlock[i];
        let iBlock = document.getElementById("block" + current);
        let iHole = document.getElementById("hole" + current);
        let iBlockTop = parseInt(
            window.getComputedStyle(iBlock).getPropertyValue("top")
        );
        let iHoleLeft = parseInt(
            window.getComputedStyle(iHole).getPropertyValue("left")
        );
        iBlock.style.top = iBlockTop - 1 + "px";
        iHole.style.top = iBlockTop - 1 + "px";
        if (iBlockTop < -20) {
            currentBlock.shift();
            iBlock.remove();
            iHole.remove();
        }
        if (iBlockTop - 20 < bollTop && iBlockTop  > bollTop) {
            drop++;
            if (iHoleLeft <= bollLeft && iHoleLeft + 20 >= bollLeft) {
                drop = 0;
            }
        }
    }

    if (drop == 0) {
        if (bollTop < 480) {
            boll.style.top = bollTop + 2 + "px";
        }
    } else {
        boll.style.top = bollTop - 1 + "px";
    }
},20);
