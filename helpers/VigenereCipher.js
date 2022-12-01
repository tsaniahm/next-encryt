import { VigenereCipher } from "../constants"

export const Encryption = (plaintext, key) => {
    if( typeof(plaintext) !== "string" ){
      return "invalid plaintext. Must be string, not " + typeof(plaintext);
    }
    if( typeof(key) !== "string" ){
      return "invalid key. Must be string, not " + typeof(key);
    }

    plaintext = plaintext.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    let ciphertext = "";
    let specialCharacterCount = 0;

    for( let i = 0; i < plaintext.length; i++ ){
      let keyLetter = (i - specialCharacterCount) % key.length;
      let keyIndex = VigenereCipher._tabulaRecta.a.indexOf(key[keyLetter]);

      if( VigenereCipher._tabulaRecta[plaintext[i]] ){
        ciphertext += VigenereCipher._tabulaRecta[plaintext[i]][keyIndex];
      }else{
        ciphertext += plaintext[i];
        specialCharacterCount++;
      }
    }

    return ciphertext;
  }

export const Decryption = (ciphertext, key) => {
    if( typeof(ciphertext) !== "string" ){
      return "invalid ciphertext. Must be string, not " + typeof(ciphertext);
    }
    if( typeof(key) !== "string" ){
      return "invalid key. Must be string, not " + typeof(key);
    }

    ciphertext = ciphertext.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    let decryptedText = "";
    let specialCharacterCount = 0;

    for( let i = 0; i < ciphertext.length; i++ ){
      let keyLetter = (i - specialCharacterCount) % key.length;
      let keyRow = VigenereCipher._tabulaRecta[key[keyLetter]];

      if( keyRow.indexOf(ciphertext[i]) !== -1 ){
        decryptedText += VigenereCipher._tabulaRecta.a[keyRow.indexOf(ciphertext[i])];
      }else{
        decryptedText += ciphertext[i];
        specialCharacterCount++;
      }
    }

    return decryptedText;
  }