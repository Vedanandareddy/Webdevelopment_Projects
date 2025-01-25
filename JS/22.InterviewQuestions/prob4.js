// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function PasswordValidation(pass){
    let hasuppercase=false;
    let haslowercase=false;
    let hasdigit=false;

    let carr=[...pass]
    for (const e of pass) {
        let val=e.charCodeAt(0)
        if(val>=48 && val<=57 ){
            hasdigit=true
        }
        else if(val>=65 && val<=90){
            hasuppercase=true
        }
        else if(val>=97 && val<=122){
            haslowercase=true
        }
    }
    console.log(hasuppercase,haslowercase,hasdigit);
    if(pass.length>=8 && hasuppercase && haslowercase && hasdigit  ){
        
        return true;

    }
    else{
        return false
    }
}







let strng="Vedananda9"
console.log(PasswordValidation(strng));

