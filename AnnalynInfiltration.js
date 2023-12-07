const knightIsAwake = true;
const archerIsAwake = false;
const prisonerIsAwake = true;
const petDogIsPresent = true;

const canExecuteFastAttack = () => !knightIsAwake;
console.log(canExecuteFastAttack())
const canSpy = (knight, archer, prisoner) => {
    return (knight || archer || prisoner)    
}
console.log(canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake))
const canSignalPrisioner = (archer, prisoner) => prisoner && !archer

console.log(canSignalPrisioner(archerIsAwake, prisonerIsAwake));
const canFreePrisoner = (
    knightIsAwake,
    archerIsAwake,
    prisonerIsAwake,
    petDogIsPresent
) =>    petDogIsPresent && !archerIsAwake || !petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake;

console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));
