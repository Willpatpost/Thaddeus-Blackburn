// Function to open the roleplay modal
function openRoleplay() {
  document.getElementById("roleplay-modal").style.display = "block";
}

// Function to close the roleplay modal
function closeRoleplay() {
  document.getElementById("roleplay-modal").style.display = "none";
}

// Define the story prompts, choices, and scoring
const prompts = [
  {
    prompt: "Introduction: Jamie is open to hearing about automation but hasn't considered it before.",
    choices: [
      { text: "“That’s great to hear, Jamie! I’ve worked with many companies just like yours who initially weren’t sure about automation but ended up seeing huge improvements. Could you tell me a bit more about your current process and what you’d like to improve?”", points: 2 },
      { text: "“Perfect! I’d love to jump right in and show you how automation could fit in your company.”", points: 1 }
    ]
  },
  {
    prompt: "Building Rapport: Jamie mentions they rely on manual tracking, which is time-consuming.",
    choices: [
      { text: "“I completely understand. Manual tracking can be reliable, but as the business grows, it often takes more time and creates opportunities for errors. How is this impacting your team’s workload or your ability to meet demand?”", points: 2 },
      { text: "“Manual tracking is outdated, and automation could solve that problem for you. I’m sure your team would prefer it.”", points: 1 }
    ]
  },
  {
    prompt: "SPIN Selling: Jamie shares details about their current inventory tracking process.",
    choices: [
      { text: "“Got it. Would you say the time spent on this is affecting your team’s ability to focus on other important tasks, like customer support or improving stock selection?”", points: 2 },
      { text: "“I see. It sounds like a good fit for automation then, as it would reduce that labor.”", points: 1 }
    ]
  },
  {
    prompt: "SPIN Selling (continued): Jamie mentions the manual tracking affects their workload.",
    choices: [
      { text: "“Understood. And if inventory was handled more efficiently, would that allow your team to focus more on strategic areas, like analyzing top-selling items or enhancing customer experience?”", points: 3 },
      { text: "“That’s why automated software is the way to go—it takes care of inventory so you don’t have to.”", points: 0 }
    ]
  },
  {
    prompt: "Features, Advantages, Benefits (FABs): Jamie is concerned about ease of use.",
    choices: [
      { text: "“Absolutely, and ease of use is a big focus for us. Most clients find our software intuitive, and we offer training so that your team can quickly get comfortable. You’ll have less time on manual entries and more on high-priority tasks. How does that sound?”", points: 3 },
      { text: "“It’s straightforward, and your team should get used to it in time. It’ll definitely save you time on manual tasks.”", points: 0 }
    ]
  },
  {
    prompt: "Handling Objections: Jamie raises a concern about the cost.",
    choices: [
      { text: "“I completely understand, Jamie. Many clients have similar concerns initially. Our solution typically pays for itself within months by reducing overstock and missed sales from stockouts. If we could show this type of return for your business, would that help you feel confident in the investment?”", points: 3 },
      { text: "“Cost is always a factor, but our system really will save you time and resources.”", points: 0 }
    ]
  },
  {
    prompt: "Closing: Jamie expresses interest but wants a low-risk option.",
    choices: [
      { text: "“How about we set up a pilot program so you can test the solution with no long-term commitment? You’ll get a feel for the benefits and can see firsthand how it fits your needs.”", points: 2 },
      { text: "“I can send over the contract, and we can start as soon as you’re ready.”", points: 1 }
    ]
  }
];

let currentPromptIndex = 0;
let score = 0;

// Function to shuffle choices for each prompt
function shuffleChoices(choices) {
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
}

// Display the first prompt
function displayPrompt() {
  const currentPrompt = prompts[currentPromptIndex];
  shuffleChoices(currentPrompt.choices); // Shuffle choices before displaying
  document.getElementById("prompt").textContent = currentPrompt.prompt;
  document.getElementById("options").children[0].textContent = currentPrompt.choices[0].text;
  document.getElementById("options").children[1].textContent = currentPrompt.choices[1].text;
  document.getElementById("next-button").disabled = true;
}

// Handle the selection of an option
function selectOption(optionIndex) {
  const choice = prompts[currentPromptIndex].choices[optionIndex];
  score += choice.points;
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("next-button").disabled = false;
}

// Advance to the next prompt
function nextPrompt() {
  currentPromptIndex++;
  if (currentPromptIndex < prompts.length) {
    displayPrompt();
  } else {
    displayEndMessage();
  }
}

// Display the end message based on score
function displayEndMessage() {
  const resultMessage = score >= 12
    ? "Great job! You made effective choices and successfully navigated the sales conversation."
    : "The conversation could have gone better. Try again to improve your sales approach!";
  document.getElementById("prompt").textContent = resultMessage;
  document.getElementById("options").style.display = "none";
  document.getElementById("next-button").style.display = "none";
}

// Initialize the game
displayPrompt();
