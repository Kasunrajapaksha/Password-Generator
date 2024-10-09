const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "~@#$%^&*()_-+={[}]|'<>?/";

const alChars = upperCase + lowerCase + numbers + symbol;

const createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    console.log(password);

    while(length > password.length){
        password += alChars[Math.floor(Math.random() * alChars.length)];
    }
    console.log(password);
    passwordBox.value = password;
}

const copyPassword = () => {
    passwordBox.select();
    document.execCommand("copy");
}