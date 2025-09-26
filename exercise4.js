//counts the number of consonants in a given string
function ConsonantCount (str)  {
    let count = 0; // Counter for consonants
    let consonantsregex = /[bcdfghjklmnpqrstvwxyz]/i; // Regex pattern for consonants
    for (let i=0; i< str.length; i++){
        if (consonantsregex.test(str[i])){
            count++;
        }
    }
    return count;
    }
    console.log(ConsonantCount("ConsonantCount")); 