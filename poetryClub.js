const POEM_SENTENCES = "Stands so high";
   
const frontDoorPassword = word => word[0]

console.log(frontDoorPassword(POEM_SENTENCES));

const backDoorResponse = (line) => {
    const newWord = frontDoorPassword(line);
    const firstLetter = newWord[0].toUpperCase();

    return firstLetter;
}
console.log(backDoorResponse(POEM_SENTENCES))

const backDoorPassword = word => {    
   const noSpaces = word.trim();
   const result = noSpaces.slice(noSpaces.length - 1)
   return result;
}

console.log(backDoorPassword(POEM_SENTENCES))

const AMAZING_NAME = 'SOPHIA';
const blablahfunc = word => {
    const firstLetter = word[0].toUpperCase();
    const nextLetters = word.slice(1).toLowerCase();
    return `${firstLetter}${nextLetters}`
}
console.log(blablahfunc(AMAZING_NAME));

const frontDoorResponse = (word) => {
    return `${blablahfunc(word)}, please`;
}
console.log(frontDoorResponse(AMAZING_NAME));

