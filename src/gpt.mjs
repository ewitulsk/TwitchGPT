import {ChatGPTAPIBrowser} from "chatgpt";

export default class GPT{
    gpt;
    constructor(){
        this.gpt = new ChatGPTAPIBrowser({
            email: process.env.OPENAI_EMAIL,
            password: process.env.OPENAI_PASS
        })
    }

    async init(){
        await this.gpt.initSession();
    }

    async ask(input){
        const result = await this.gpt.sendMessage(input);
        return result.response;
    }
}