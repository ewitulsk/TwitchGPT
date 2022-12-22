import "dotenv/config";

export default class Bot {
    name;
    traits;
    mood;

    gpt;

    constructor(gpt, name, traits, initMood){
        this.name = name;
        this.traits = traits;
        this.mood = initMood;   
        this.gpt = gpt
    }

    async getResponse(input) {
        return await this.gpt.ask(input)
    }
}