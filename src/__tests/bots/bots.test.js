import TwitchBot from "../../bots/TwitchBot.mjs"
import GPT from "../../gpt.mjs"

const gpt = new GPT();

describe("Bot Tests", () => {
    it("Should abstract bot", async () => {
        const bot = new TwitchBot(gpt, 'bot1', ["selfish"], "angry")
        console.log(await bot.getResponse("Hi!"));
    }).timeout(30000)
})