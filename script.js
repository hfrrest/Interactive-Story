const storyText = document.getElementById("storyText");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const storyImage = document.getElementById("storyImage");
const decisionCount = document.getElementById("decisionCount");

const story = [
{
    text: "You are standing in a dark forest. You hear a rustling in the bushes. Do you investigate or run away?",
    img: "images_forest.png",
    option1: "Investigate",
    option2: "Run Away",
    next1: 1,
    next2: 2
},
{
    text: "You find a small, frightened fox hiding beneath a bush. Its tail trembles as it watches you. Do you help it or leave it alone?",
    img: "images_fox.png",
    option1: "Help It",
    option2: "Leave It Alone",
    next1: 3,
    next2: 4
},
{
    text: "You run from the rustling sound and discover a mysterious crystal cave glowing with blue light.",
    img: "images_crystalcave.png",
    option1: "Enter Cave",
    option2: "Keep Walking",
    next1: 5,
    next2: 6
},
{
    text: "The fox becomes your friend and leads you along a forest trail toward a sparkling river.",
    img: "images_river.png",
    option1: "Follow Fox",
    option2: "Explore Alone",
    next1: 7,
    next2: 8
},
{
    text: "You continue alone and discover an ancient treasure map hidden beneath a giant oak tree.",
    img: "images_treasure.png",
    option1: "Follow Map",
    option2: "Ignore Map",
    next1: 9,
    next2: 10
},
{
    text: "Inside the cave, glowing crystals illuminate the walls. A magical humming sound echoes around you.",
    img: "images_crystalcave2.png",
    option1: "Collect Crystal",
    option2: "Explore Deeper",
    next1: 11,
    next2: 12
},
{
    text: "The path opens into a magical garden filled with giant flowers, butterflies, and singing birds.",
    img: "images_garden.png",
    option1: "Explore Garden",
    option2: "Rest by Pond",
    next1: 13,
    next2: 14
},
{
    text: "The fox leads you to a sparkling river crossed by an old stone bridge. Beyond it stands a magnificent castle.",
    img: "images_river_bridge.png",
    option1: "Cross Bridge",
    option2: "Find Another Way",
    next1: 15,
    next2: 16
},
{
    text: "You discover a crossroads. One path climbs into snowy mountains while another winds deep into the forest.",
    img: "images_crossroads.png",
    option1: "Mountain Path",
    option2: "Forest Trail",
    next1: 17,
    next2: 18
},
{
    text: "The treasure map leads you to an ancient chest buried beneath soft earth in a hidden clearing. Strange symbols glow faintly on the lock.",
    img: "images_treasure_chest.png",
    option1: "Open the Chest",
    option2: "Protect the Treasure",
    next1: 19,
    next2: 20
},
{
    text: "You leave the map behind and trust your instincts. At sunset, you discover a campfire surrounded by friendly travelers.",
    img: "images_campfire.png",
    option1: "Share Stories",
    option2: "Continue Alone",
    next1: 21,
    next2: 22
},
{
    text: "The crystal glows brighter than ever. Magical creatures emerge from hidden tunnels and gather around you.",
    img: "images_crystalcave3.png",
    option1: "Guard Crystal",
    option2: "Follow Creatures",
    next1: 23,
    next2: 24
},
{
    text: "Ancient symbols reveal clues to a forgotten kingdom hidden beneath the mountains.",
    img: "images_symbols.png",
    option1: "Explore Kingdom",
    option2: "Record History",
    next1: 25,
    next2: 26
},
{
    text: "The enchanted garden becomes more beautiful with every step. Animals gather around as though welcoming you.",
    img: "images_enchanted_garden.png",
    option1: "Stay in Garden",
    option2: "Visit Castle",
    next1: 27,
    next2: 28
},
{
    text: "The pond shows reflections of possible futures. One future is filled with adventure, the other with wisdom.",
    img: "images_pond_reflections.png",
    option1: "Choose Adventure",
    option2: "Choose Wisdom",
    next1: 29,
    next2: 30
},
{
    text: "Inside the castle, the king asks for help protecting the kingdom from mysterious shadows.",
    img: "images_castle_king.png",
    option1: "Become Hero",
    option2: "Ride with Dragon",
    next1: 31,
    next2: 32
},
{
    text: "Near the river, a friendly dragon offers to help you explore lands beyond the mountains.",
    img: "images_dragon.png",
    option1: "Ride Dragon",
    option2: "Explore Alone",
    next1: 32,
    next2: 33
},
{
    text: "The mountain path reaches the clouds. No explorer has ever mapped these peaks.",
    img: "images_mountain.png",
    option1: "Map Mountains",
    option2: "Return Home",
    next1: 34,
    next2: 35
},
{
    text: "At a warm campfire beneath the stars, travelers ask you to tell the story of your adventure.",
    img: "images_campfire.png",
    option1: "Tell Story",
    option2: "Listen",
    next1: 36,
    next2: 36
},

/* ENDINGS */

{
    text: "TREASURE KEEPER ENDING: You open the chest and discover magical treasures. You share them with villages across the kingdom, becoming famous for your generosity.",
    img: "images_chest_open.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "TREASURE GUARDIAN ENDING: You choose to protect the treasure. Future adventurers remember you as the wise guardian of ancient wonders.",
    img: "images_treasure_chest.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "CAMPFIRE STORYTELLER ENDING: Your stories inspire every traveler around the fire. Your adventures become legends throughout the land.",
    img: "images_campfire.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "LONE WANDERER ENDING: You continue your journey alone and discover many hidden wonders. New adventures always await beyond the next hill.",
    img: "images_ending.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "CRYSTAL GUARDIAN ENDING: You become the protector of the magical crystal cave. The crystals shine brighter under your care.",
    img: "images_crystalcave3.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "FOREST PROTECTOR ENDING: Following the magical creatures, you learn the secrets of the forest and dedicate your life to protecting it.",
    img: "images_magical_creatures.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "LOST KINGDOM SCHOLAR ENDING: You uncover the forgotten kingdom's greatest secrets and preserve its stories for future generations.",
    img: "images_forgotten_kingdom.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "ROYAL HISTORIAN ENDING: Your records become treasured across the kingdom and are studied for centuries.",
    img: "images_kingdom.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "GARDEN FRIEND ENDING: The enchanted garden becomes your home. Every flower, butterfly, and woodland animal becomes part of your story.",
    img: "images_enchanted_garden.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "CASTLE VISITOR ENDING: You visit the castle and make friends throughout the kingdom. New adventures await whenever you return.",
    img: "images_castle_friends.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "ADVENTURE SEEKER ENDING: You choose a life of adventure, exploring distant lands and discovering countless mysteries.",
    img: "images_mysteries.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "WISE EXPLORER ENDING: Your wisdom helps travelers navigate safely through the magical world for many generations.",
    img: "images_river.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "CASTLE HERO ENDING: You bravely defend the kingdom and become one of its greatest heroes.",
    img: "images_castle.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "DRAGON RIDER ENDING: You soar across the clouds on your dragon friend, discovering lands beyond imagination.",
    img: "images_dragon.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "SKY EXPLORER ENDING: You continue traveling alone, charting new territories no one has ever seen before.",
    img: "images_dragon.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "MOUNTAIN EXPLORER ENDING: Your maps of the mountains become famous throughout the kingdom and inspire future adventurers.",
    img: "images_crossroads.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "JOURNEY COMPLETE ENDING: You return home wiser and happier, carrying wonderful memories of your magical adventure.",
    img: "images_ending.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
},
{
    text: "CAMPFIRE STORYTELLER ENDING: Your tales inspire countless adventurers to begin their own journeys.",
    img: "images_campfire.png",
    option1: "Play Again",
    option2: "The End",
    next1: 0,
    next2: null
}
];

let currentStep = 0;

function updateStory() {
    const step = story[currentStep];

    storyText.textContent = step.text;
    storyImage.src = step.img;
    storyImage.alt = step.text;

    option1.textContent = step.option1;
    option2.textContent = step.option2;

    decisionCount.textContent = `Decision ${Math.min(currentStep + 1, 20)} of 20`;

    if (step.next2 === null) {
        option2.style.display = "none";
    } else {
        option2.style.display = "inline-block";
    }
}

option1.addEventListener("click", () => {
    currentStep = story[currentStep].next1;
    updateStory();
});

option2.addEventListener("click", () => {
    if (story[currentStep].next2 !== null) {
        currentStep = story[currentStep].next2;
        updateStory();
    }
});

updateStory();