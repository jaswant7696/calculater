let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            let input = document.querySelector("input"). value = string;
        }
       else if(e.target.innerHTML == "AC"){
            string = "";
            let input = document.querySelector("input"). value = string;
        }

        else if(e.target.innerHTML == "clr"){
           string = string.slice(0,-1)
            let input = document.querySelector("input"). value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            let input = document.querySelector("input"). value = string;
        }
    })
})