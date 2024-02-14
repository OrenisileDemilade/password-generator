const rangeAmount = document.getElementById("rangeAmount");
const numAmount = document.getElementById("numAmount");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumbersElement = document.getElementById("includeNumbers");
const includeSymbolsElement = document.getElementById("includeSymbols");
const form = document.getElementById("form");
const display = document.getElementById("display");

const UPPERCASE_CHAR = arrayLoop(65,90)
const LOWERCASE_CHAR = arrayLoop(97,172)
const  NUMBERS_CHAR = arrayLoop(48,57)
const SYMBOLS_CHAR = arrayLoop( 33,47).concat(arrayLoop(58,64) ).concat(arrayLoop(91,96)).concat(arrayLoop(123,126))

numAmount.addEventListener("input", syncAmount)
rangeAmount.addEventListener("input", syncAmount)

form.addEventListener("submit", e => {
    e.preventDefault()
    const amount = numAmount.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(amount,includeUppercase,includeNumbers,includeSymbols)
    display.innerText = password
})

function generatePassword(amount,includeUppercase,includeNumbers,includeSymbols){
    let allChars = LOWERCASE_CHAR
    if(includeUppercase) allChars = allChars.concat(UPPERCASE_CHAR)
    if(includeSymbols) allChars = allChars.concat (SYMBOLS_CHAR)
    if(includeNumbers) allChars = allChars.concat(NUMBERS_CHAR)

    const passwordChar = []

    for(let i = 0;i < amount;i++){
        const char = allChars[Math.floor(Math.random() * allChars.length )]
        passwordChar.push(String.fromCharCode(char))
    }
    return passwordChar.join( "" )
}
function arrayLoop(start,end){
    const array = []
    for(i = start ; i<= end;i++){
        array.push(i)
    }
    return array 
}

function syncAmount (e){
    const value = e.target.value
    numAmount.value = value
    rangeAmount.value = value
}

