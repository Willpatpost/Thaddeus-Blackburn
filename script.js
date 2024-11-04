// Basic script to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Define the story prompts, choices, and scoring
const prompts = [
  {
    prompt: "Introduction: Jamie is open to hearing about automation but hasn't considered it before.",
    choices: [
      { text: "Encourage Jamie to share about their current process.", points: 2 },
      { text: "Jump straight to explaining automation benefits.", points: 1 }
    ]
  },
  {
    prompt: "Building Rapport: Jamie mentions they rely on manual tracking, which is time-consuming.",
    choices: [
      { text: "Show empathy about the time-consuming nature of manual tracking.", points: 2 },
      { text: "Suggest that automation is a better solution than manual tracking.", points: 1 }
    ]
  },
  {
    prompt: "SPIN Selling: Jamie shares details about their current inventory tracking process.",
    choices: [
      { text: "Ask if the manual tracking is affecting other important tasks.", points: 2 },
      { text: "Mention automation could reduce the labor needed for tracking.", points: 1 }
    ]
  },
  {
    prompt: "Discussing Features: Jamie is concerned about ease of use for their team.",
    choices: [
      { text: "Emphasize ease of use and offer training to help Jamie's team adapt.", points: 3 },
      { text: "Assure Jamie that the team will get used to it over time.", points: 0 }
    ]
  },
  {
    prompt: "Handling Objections: Jamie is concerned about the cost and ROI.",
    choices: [
      { text: "Discuss potential ROI and share examples from similar clients.", points: 3 },
      { text: "Reassure Jamie that it will save time and resources.", points: 0 }
    ]
  },
  {
    prompt: "Closing: Jamie is open to a trial but wants a low-risk option.",
    choices: [
      { text: "Offer a pilot program to try the solution without a long-term commitment.", points: 2 },
      { text: "Suggest moving forward with a contract.", points: 1 }
    ]
  }
];

let currentPromptIndex = 0;
let score = 0;

// Display the first prompt
function displayPrompt() {
  const currentPrompt = prompts[currentPromptIndex];
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
  const resultMessage = score >= 8
    ? "Great job! You made effective choices and successfully navigated the sales conversation."
    : "The conversation could have gone better. Try again to improve your sales approach!";
  document.getElementById("prompt").textContent = resultMessage;
  document.getElementById("options").style.display = "none";
  document.getElementById("next-button").style.display = "none";
}

// Initialize the game
displayPrompt();
