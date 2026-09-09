const PhoenixBrain = {

identity: {
name: "PHOENIX",
purpose: "Understand user intent and coordinate useful actions."
},

memory: [],

understand(input) {
return {
original: input,
intent: this.detectIntent(input),
timestamp: Date.now()
};
},

detectIntent(input) {
const text = input.toLowerCase();

if (text.includes("help")) return "HELP";
if (text.includes("remember")) return "MEMORY";
if (text.includes("what")) return "QUESTION";
if (text.includes("open")) return "ACTION";

return "UNKNOWN";

},

remember(data) {
this.memory.push(data);
},

process(input) {
const result = this.understand(input);

if (result.intent === "MEMORY") {
  this.remember(result);
}

return result;

}
};

window.PhoenixBrain = PhoenixBrain;
