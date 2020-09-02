class Animal{
    constructor(numLegs, voice){
        this.numLegs = numLegs;
        this.voice = voice;
    }

    getNumLegs(){
        return this.numLegs;
    }

    getVoice(){
        return this. voice;
    }

}

Kitty = new Animal(4, "meow");
console.log("Kitties have " + Kitty.getNumLegs() + " legs and they " + Kitty.getVoice());

Birdy = new Animal(2, "chirp");
console.log("Brids have " + Birdy.getNumLegs() + " legs and they " + Birdy.getVoice());