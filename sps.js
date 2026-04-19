let stn = document.querySelector(".stone");
let pap = document.querySelector(".paper");
let sci = document.querySelector(".scissor");
let user = document.querySelector(".user");
let revels = document.querySelector(".revel");
let comp = document.querySelector(".comp");
const option = ["stone", "paper", "scissor"];
let results = document.querySelector(".result");
let result1 = document.querySelector(".result1");
let randomopt;

let userscore = 1;
let compscore = 1;

stn.addEventListener("click", () => {


        let a = "stone";
        ran();
        if (a != randomopt && randomopt == "paper") {
            revels.innerText = "You lost!";
            revels.classList.remove("green")
            revels.classList.remove("blue")
            revels.classList.add("red")
            console.log("Computer win")
            comp.innerText = compscore++

        } else if (a != randomopt && randomopt == "scissor") {
            revels.innerText = "Player wins 🏆";
            revels.classList.remove("red")
            revels.classList.remove("blue")
            revels.classList.add("green")
            console.log("You win");
            user.innerText = userscore++
        } else {
            revels.innerText = "Draw 🤝";
            revels.classList.remove("red")
            revels.classList.remove("green")
            revels.classList.add("blue")
            console.log("Draw")
        }

        results.innerText = `Player : ${a}`;
        result1.innerText = `Computer : ${randomopt}`;
    })

    pap.addEventListener("click", () => {
        let p = "paper"
        ran();
        if (p != randomopt && randomopt == "scissor") {
          revels.innerText = "You lost!";
            revels.classList.remove("green")
            revels.classList.remove("blue")
            revels.classList.add("red")
            console.log("Computer win")
            comp.innerText = compscore++

        } else if (p != randomopt && randomopt == "stone") {
           revels.innerText = "Player wins";
            revels.classList.remove("red")
            revels.classList.remove("blue")
            revels.classList.add("green")
            console.log("You win");
            user.innerText = userscore++
        } else {
            revels.innerText = "Draw";
            revels.classList.remove("red")
            revels.classList.remove("green")
            revels.classList.add("blue")
            console.log("Draw")
        }

        results.innerText = `Player : ${p}`;
        result1.innerText = `Computer : ${randomopt}`;;
    })

    sci.addEventListener("click", () => {
        let s = "scissor";
        ran();
        if (s != randomopt && randomopt == "stone") {
           revels.innerText = "You lost!";
            revels.classList.remove("green")
            revels.classList.remove("blue")
            revels.classList.add("red")
            console.log("Computer win")
            comp.innerText = compscore++

        } else if (s != randomopt && randomopt == "paper") {
           revels.innerText = "Player wins";
            revels.classList.remove("red")
            revels.classList.remove("blue")
            revels.classList.add("green")
            console.log("You win");
            user.innerText = userscore++
        } else {
            revels.innerText = "Draw";
            revels.classList.remove("red")
            revels.classList.remove("green")
            revels.classList.add("blue")
            console.log("Draw")
        }

        results.innerText = `Player : ${s}`;
        result1.innerText = `Computer : ${randomopt}`;
})



let ran = () => {
    randomopt = option[Math.floor(Math.random() * option.length)];
    console.log(randomopt);
}