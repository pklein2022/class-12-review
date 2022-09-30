//Define a function called updateNames with one parameter. 
//This function will replace the name John with the given parameter.


let name = "Amy";
function updateNames(name) {
    
    let sentence = "Hello, my name is John. My friend's name is also John.";
    let result = sentence.replaceAll("John", name);
    console.log(result);
}

updateNames(name); // "Hello, my name is Amy. My friend's name is also Amy."

//return.sentence.replace(/John/g, name)
//regex expression - regexr.com
