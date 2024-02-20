const storyTextElement = document.getElementById('story-text');
const choicesContainerElement = document.getElementById('choices-container');

let state = {};

function startGame() {
    state = {}; // Reset game state
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    storyTextElement.innerText = textNode.text;
    // Clear previous choices
    while (choicesContainerElement.firstChild) {
        choicesContainerElement.removeChild(choicesContainerElement.firstChild);
    }
    // Show new choices
    textNode.choices.forEach(choice => {
        if (showChoice(choice)) {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectChoice(choice));
            choicesContainerElement.appendChild(button);
        }
    });
}

function showChoice(choice) {
    return choice.requiredState == null || choice.requiredState(state);
}

function selectChoice(choice) {
    const nextTextNodeId = choice.nextText;
    if (nextTextNodeId <= 0) {
        startGame(); // Restart the game
    } else {
        state = Object.assign(state, choice.setState);
        showTextNode(nextTextNodeId);
    }
}

const textNodes = [
    {
        id: 1,
        text: 'You are Baheer, a dedicated computer science student in Kabul. As you approach your final year, you face a choice.',
        choices: [
            {
                text: 'Continue studies in Kabul',
                nextText: 2
            },
            {
                text: 'Move to Qatar for the final year',
                setState: { qatar: true },
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'You decided to stay in Kabul. You miss out on the opportunity in Qatar but make the best of your situation. Late one night, you encounter a mysterious figure offering you a chance to change your destiny.',
        choices: [
            {
                text: 'Accept the offer',
                setState: { destinyChanged: true },
                nextText: 6
            },
            {
                text: 'Politely decline',
                nextText: 7
            },
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 3,
        text: 'You chose to move to Qatar for your final year. Life in Qatar is vibrant and full of opportunities. You start going to the gym and enjoy exploring the city.',
        choices: [
            {
                text: 'Explore more about the city',
                nextText: 4
            },
            {
                text: 'Focus on studies',
                nextText: 5
            }
        ]
    },
    {
        id: 4,
        text: 'Exploring Qatar enriches your life with unforgettable experiences and friendships. However, you make sure not to neglect your studies.',
        choices: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 5,
        text: 'Focusing on your studies pays off, and you excel in your final year. Qatar provides a unique backdrop to your academic achievements.',
        choices: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'The figure touches your forehead, and suddenly, you\'re able to see the future outcomes of your decisions. With this new power, you must decide how to use it.',
        choices: [
            {
                text: 'Use your power to excel academically',
                setState: { futureSight: true },
                nextText: 8
            },
            {
                text: 'Explore the limits of your new ability',
                setState: { explorePowers: true },
                nextText: 9
            }
        ]
    },
    {
        id: 7,
        text: 'You wake up the next morning wondering if it was all just a dream. However, you decide to take your life into your own hands and work harder than ever.',
        choices: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 8,
        text: 'Your foresight leads you to unparalleled academic success, but it comes at the cost of personal relationships. You ponder if the trade-off was worth it.',
        choices: [
            {
                text: 'Reflect on your choices',
                nextText: 10
            },
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 9,
        text: 'In exploring your powers, you uncover a hidden world of magic and supernatural beings. This new world offers you adventures but also presents dangers.',
        choices: [
            {
                text: 'Dive deeper into the supernatural',
                setState: { supernaturalWorld: true },
                nextText: 11
            },
            {
                text: 'Decide to focus back on your studies',
                nextText: 5
            }
        ]
    },
    {
        id: 10,
        text: 'As you reflect on your journey, you realize that success isn\'t just about academic achievement but also about the connections you make along the way.',
        choices: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 11,
        text: 'Your adventures in the supernatural world have led you to uncover ancient secrets and form alliances with magical beings, forever altering your destiny.',
        choices: [
            {
                text: 'Embrace your new life',
                nextText: 12
            },
            {
                text: 'Long for your old life',
                nextText: 13
            }
        ]
    },
    {
        id: 12,
        text: 'You become a renowned figure in both the human and supernatural worlds, using your knowledge to bridge the two worlds together.',
        choices: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 13,
        text: 'Despite the wonders you\'ve seen, part of you misses the simplicity of your old life. Yet, you realize that there\'s no going back, and you must forge ahead.',
        choices: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    }
];

startGame();
