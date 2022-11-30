import { letters } from "../constants"

export const Encryption = (plaintext, key) => {

    let newText = '';
    let spiltPlaintext = plaintext.split("");

    for(const letter of spiltPlaintext) {
        if(!letters.includes(letter)){
            continue
        }

        const indexLetter = letters.findIndex((item) => item === letter);
        let indexNewLetter = indexLetter + Number(key);

        if(indexNewLetter > 25){
            indexNewLetter -= 26;
        }
        newText += letters[indexNewLetter];
    }

    return newText;
}

export const Decryption = (chippertext, key) =>{
    let newText = '';
    let splitChippertext = chippertext.split("");

    for(const letter of splitChippertext) {
        if(!letters.includes(letter)){
            continue
        }

        const indexLetter = letters.findIndex((item) => item === letter);
        let indexNewLetter = indexLetter - Number(key);

        if(indexNewLetter > 25){
            indexNewLetter += 26;
        }
        newText += letters[indexNewLetter];
    }

    return newText;
}