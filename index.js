/* ELEMENTS */
const generatedPass = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");

const uppercaseBox = document.getElementById("uppercase");
const numbersBox = document.getElementById("numbers");
const lowercaseBox = document.getElementById("lowercase");
const symbolsBox = document.getElementById("symbols");

const generateBtn = document.getElementById("generate-btn");

/* CHARACTER SETS */
const characterSets = [`ABCDEFGHIJKLMNOPQRSTUVWXYZ`, 
                       `1234567890`, 
                       `abcdefghijlkmnopqrstuvwxyz`, 
                       `¬!"£$%^&*()_+=-{}[]:;@'~#?/>.<|,`]

/* VARIABLES */
let allowedChars = ``;

generateBtn.onclick = function(){
    const passLength = Number(document.getElementById("password-length").value);
    let passChars = new Array;

    if((uppercaseBox.checked || numbersBox.checked || lowercaseBox.checked || symbolsBox.checked) && passLength > 0)
    {
        allowedChars += uppercaseBox.checked ? characterSets[0] : "";
        allowedChars += numbersBox.checked ? characterSets[1] : "";
        allowedChars += lowercaseBox.checked ? characterSets[2] : "";
        allowedChars += symbolsBox.checked ? characterSets[3] : "";
    }
    else
    {
        window.alert(`-At least one character set must be included \n-The password's length should be greater than 0`)
    }

    allowedChars = scrambleString(allowedChars);

    for(let i = 0; i <= passLength - 1; i++)
    {
        const randomNum = Math.floor(Math.random() * (allowedChars.length - 1));
        passChars[i] = allowedChars[randomNum];
    }

    generatedPass.textContent = passChars.join(``);
}

document.querySelectorAll(".copy-btn").forEach(copyButton =>{
    copyButton.addEventListener("click", () =>{
        const targetElement = document.querySelector(copyButton.dataset.copy);
        const textToCopy = targetElement.textContent;
        console.log(textToCopy);
    });
});

function scrambleString(str){
    let strChars = str.split('');
    let charsNum = strChars.length;

    for(let i = charsNum - 1; i > 0; i--){
        const randomNum = Math.floor(Math.random() * (i + 1));
        [strChars[i], strChars[randomNum]] = [strChars[randomNum], strChars[i]] 
    }
    return strChars;
}