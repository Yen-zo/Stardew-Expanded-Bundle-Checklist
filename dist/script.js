document.addEventListener("DOMContentLoaded", () => {

//Data for the actual items in the boxes  

  // --- Crafts Room (BB1) small boxes generation ---
const craftsRoomData = [
  {
    id: "box1",
    title: "Crafts Room",
    bundles: [
      {
        id: "box1-m1",
        title: "Spring Foraging",
        required: 4,
        items: [
          { id: "box1-m1-s1", name: "Wild Horseradish", amount: 1, tooltipText: "Foraging in Spring OR Spring Seeds (25%)" },
          { id: "box1-m1-s2", name: "Daffodil", amount: 1, tooltipText: "Foraging in Spring OR Spring Seeds (25%) OR Pierre's shor during Flower Dance" },
          { id: "box1-m1-s3", name: "Leek", amount: 1, tooltipText: "Foraging in Spring OR Spring Seeds (25%)" },
          { id: "box1-m1-s4", name: "Dandelion", amount: 1, tooltipText: "Foraging in Spring OR Spring Seeds (25%) OR Pierre's shor during Flower Dance" },
        ],
      },
      {
        id: "box1-m2",
        title: "Summer Foraging",
        required: 4,
        items: [
          { id: "box1-m2-s1", name: "Grape", amount: 1, tooltipText: "Foraing in Summer OR Summer Seeds (33%) OR Grape Starter (Fall Crop)" },
          { id: "box1-m2-s2", name: "Spice Berry", amount: 1, tooltipText: "Foraing in Summer OR Summer Seeds (33%) OR Fruit Bat Cave" },
          { id: "box1-m2-s3", name: "Sweet Pea", amount: 1, tooltipText: "Foraing in Summer OR Summer Seeds (33%)" },
          { id: "box1-m2-s4", name: "Red Baneberry", amount: 1, tooltipText: "Foraing in Secret Woods during Summer" },
        ],
      },
      {
        id: "box1-m3",
        title: "Fall Foraging",
        required: 5,
        items: [
          { id: "box1-m3-s1", name: "Common Mushroom", amount: 1, tooltipText: "Foraging in Fall OR Fall Seeds (25%)" },
          { id: "box1-m3-s2", name: "Wild Plum", amount: 1, tooltipText: "Foraging in Fall OR Fall Seeds (25%)" },
          { id: "box1-m3-s3", name: "Hazelnut", amount: 1, tooltipText: "Foraging in Fall OR Fall Seeds (25%)" },
          { id: "box1-m3-s4", name: "Blackberry", amount: 1, tooltipText: "Foraging in Fall OR Fall Seeds (25%)" },
          { id: "box1-m3-s5", name: "Mushroom Colony", amount: 1, tooltipText: "Foarging in Fall (Secret Woods / West Cindersap / Jumino Woods)" },
        ],
      },
      {
        id: "box1-m4",
        title: "Winter Foraging",
        required: 5,
        items: [
          { id: "box1-m4-s1", name: "Winter Root", amount: 1, tooltipText: "Foraging in Winter OR Winter Seeds (25%) OR Winter Tilling" },
          { id: "box1-m4-s2", name: "Crystal Fruit", amount: 1, tooltipText: "Foraging in Winter OR Winter Seeds (25%)" },
          { id: "box1-m4-s3", name: "Snow Yam", amount: 1, tooltipText: "Foraging in Winter OR Winter Seeds (25%) OR Winter Tilling" },
          { id: "box1-m4-s4", name: "Crocus", amount: 1, tooltipText: "Foraging in Winter OR Winter Seeds (25%)" },
          { id: "box1-m4-s5", name: "Bearberry", amount: 1, tooltipText: "Foraging in Secret Woods during Winter" },
        ],
      },
      {
        id: "box1-m5",
        title: "Construction",
        required: 4,
        items: [
          { id: "box1-m5-s1", name: "Wood", amount: 499, tooltipText: "Chopping trees OR Crates in mines" },
          { id: "box1-m5-s2", name: "Clay", amount: 10, tooltipText: "Tilling ground" },
          { id: "box1-m5-s3", name: "Stone", amount: 199, tooltipText: "Mining rocks" },
          { id: "box1-m5-s4", name: "Hardwood", amount: 30, tooltipText: "Mahogany Trees OR Large (Stumps/Logs) Or Crates in mines" },
        ],
      },
      {
        id: "box1-m6",
        title: "Exotic Foraging",
        required: 8,
        items: [
          { id: "box1-m6-s1", name: "Coconut", amount: 1, tooltipText: "Foraging in Calico Desert" },
          { id: "box1-m6-s2", name: "Cactus Fruit", amount: 1, tooltipText: "Foraging in Calico Desert" },
          { id: "box1-m6-s3", name: "Cave Carrot", amount: 1, tooltipText: "Tilling in mines" },
          { id: "box1-m6-s4", name: "Red Mushroom", amount: 1, tooltipText: "Foraging in caves on mushroom floors (chance to spawn starting floor 81) OR Secret Woods Foragable (Summer/Fall) OR Mushroom Cave on Farm" },
          { id: "box1-m6-s5", name: "Purple Mushroom", amount: 1, tooltipText: "Foraging in caves starting floor 81 OR Mushroom Cave on Farm (rare)" },
          { id: "box1-m6-s6", name: "Fir Wax", amount: 1, tooltipText: "Placing Tapper on Fir Tree OR Sold from Bear" },
          { id: "box1-m6-s7", name: "Birch Water", amount: 1, tooltipText: "Placing Tapper on Birch Tree OR Sold from Bear" },
          { id: "box1-m6-s8", name: "Pine Tar", amount: 1, tooltipText: "Placing Tapper on Pine Tree OR Sold from Bear" },
        ],
      },
    ],
  },
];

  
  
  

  // Generate medium and small boxes !! DO NOT TOUCH THIS !!
  const bigBox = document.getElementById("box1");
  const mediumContainer = bigBox.querySelector(".medium-container");

  craftsRoomData[0].bundles.forEach(bundle => {
  const mediumBox = document.getElementById(bundle.id);

  // Set medium box title with 0/x
  const titleElement = mediumBox.querySelector(".medium-title");
  titleElement.textContent = `0/${bundle.required} ${bundle.title}`;

  // Create container for small boxes
  const smallContainer = document.createElement("div");
  smallContainer.className = "small-container";
  mediumBox.appendChild(smallContainer);

  // Generate small boxes
  bundle.items.forEach(item => {
    const smallBox = document.createElement("div");
    smallBox.className = "small-box";
    smallBox.id = item.id;
    smallBox.textContent = `${item.amount} ${item.name}`;

    // Add tooltip text to the small box
    smallBox.dataset.tooltipText = item.tooltipText || "";

    smallContainer.appendChild(smallBox);
  });
});

  
// --- Pantry (BB2) small boxes generation ---

  
  
  const pantryData = [
  {
    id: "box2",
    title: "Pantry",
    bundles: [
      {
        id: "box2-m1",
        title: "Spring Crops",
        required: 5,
        items: [
          { id: "box2-m1-s1", name: "Parsnip", amount: 1, tooltipText: "Spring Crop" },
          { id: "box2-m1-s2", name: "Green Bean", amount: 1, tooltipText: "Spring Crop" },
          { id: "box2-m1-s3", name: "Cauliflower", amount: 1, tooltipText: "Spring Crop" },
          { id: "box2-m1-s4", name: "Potato", amount: 1, tooltipText: "Spring Crop" },
          { id: "box2-m1-s5", name: "Cucumber", amount: 1, tooltipText: "Spring Crop" },
        ],
      },
      {
        id: "box2-m2",
        title: "Summer Crops",
        required: 5,
        items: [
          { id: "box2-m2-s1", name: "Tomato", amount: 1, tooltipText: "Summer Crop" },
          { id: "box2-m2-s2", name: "Hot Pepper", amount: 1, tooltipText: "Summer Crop" },
          { id: "box2-m2-s3", name: "Blueberry", amount: 1, tooltipText: "Summer Crop" },
          { id: "box2-m2-s4", name: "Melon", amount: 1, tooltipText: "Summer Crop" },
          { id: "box2-m2-s5", name: "Butternut Squash", amount: 1, tooltipText: "Summer Crop" },
        ],
      },
      {
        id: "box2-m3",
        title: "Fall Crops",
        required: 5,
        items: [
          { id: "box2-m3-s1", name: "Corn", amount: 1, tooltipText: "Summer Crop OR Fall Crop" },
          { id: "box2-m3-s2", name: "Eggplant", amount: 1, tooltipText: "Fall Crop" },
          { id: "box2-m3-s3", name: "Pumpkin", amount: 1, tooltipText: "Fall Crop" },
          { id: "box2-m3-s4", name: "Yam", amount: 1, tooltipText: "Fall Crop" },
          { id: "box2-m3-s5", name: "Sweet Potato", amount: 1, tooltipText: "Fall Crop" },
        ],
      },
      {
        id: "box2-m4",
        title: "Quality Crops",
        required: 5,
        items: [
          { id: "box2-m4-s1", name: "Gold quality Parsnip", amount: 5, tooltipText: "Spring Crop" },
          { id: "box2-m4-s2", name: "Gold quality Melon", amount: 5, tooltipText: "Summer Crop" },
          { id: "box2-m4-s3", name: "Gold quality Pumpkin", amount: 5, tooltipText: "Fall Crop" },
          { id: "box2-m4-s4", name: "Gold quality Corn", amount: 5, tooltipText: "Summer Crop OR Fall Crop" },
          { id: "box2-m4-s5", name: "Gold quality Cucumber", amount: 5, tooltipText: "Spring Crop" },
          { id: "box2-m4-s6", name: "Gold quality Butternut Squash", amount: 5, tooltipText: "Summer Crop" },
          { id: "box2-m4-s7", name: "Gold quality Sweet Potato", amount: 5, tooltipText: "Fall Crop" },
        ],
      },
      {
        id: "box2-m5",
        title: "Animal",
        required: 5,
        items: [
          { id: "box2-m5-s1", name: "Large Milk", amount: 1, tooltipText: "Happy Cows" },
          { id: "box2-m5-s2", name: "Large Goat Milk", amount: 1, tooltipText: "Happy Goats" },
          { id: "box2-m5-s3", name: "Wool", amount: 1, tooltipText: "Rabbits OR Sheep" },
          { id: "box2-m5-s4", name: "Duck Egg", amount: 1, tooltipText: "Ducks" },
          { id: "box2-m5-s5", name: "Large Egg (white)", amount: 1, tooltipText: "Happy White Chickens" },
          { id: "box2-m5-s6", name: "Large Egg (brown)", amount: 1, tooltipText: "Happy Brown Chickens" },
        ],
      },
      {
        id: "box2-m6",
        title: "Artisan",
        required: 8,
        items: [
          { id: "box2-m6-s1", name: "Truffle Oil", amount: 1, tooltipText: "Truffle (from pigs) in Oil Maker" },
          { id: "box2-m6-s2", name: "Cloth", amount: 1, tooltipText: "Wool in Loom" },
          { id: "box2-m6-s3", name: "Goat Cheese", amount: 1, tooltipText: "Goat Milk in Cheese Press" },
          { id: "box2-m6-s4", name: "Cheese", amount: 1, tooltipText: "Milk in Cheese Press" },
          { id: "box2-m6-s5", name: "Honey", amount: 1, tooltipText: "Bee House (Except in Winter)" },
          { id: "box2-m6-s6", name: "Jelly", amount: 1, tooltipText: "Putting any fruit into a Preserves Jar" },
          { id: "box2-m6-s7", name: "Apricot", amount: 1, tooltipText: "Apricot Tree (During Spring) OR Fruit Bat Farm Cave" },
          { id: "box2-m6-s8", name: "Orange", amount: 1, tooltipText: "Orange Tree (During Summer) OR Fruit Bat Farm Cave" },
          { id: "box2-m6-s9", name: "Pear", amount: 1, tooltipText: "Pear Tree (During Spring)" },
          { id: "box2-m6-s10", name: "Nectarine", amount: 1, tooltipText: "Nectarine Tree (During Summer)" },
          { id: "box2-m6-s11", name: "Butter", amount: 1, tooltipText: "Any Milk into Butter Churner" },
        ],
      },
    ],
  },
];

  

  
pantryData[0].bundles.forEach(bundle => {
  const mediumBox = document.getElementById(bundle.id);

  // Set medium box title with 0/x
  const titleElement = mediumBox.querySelector(".medium-title");
  titleElement.textContent = `0/${bundle.required} ${bundle.title}`;

  // Create container for small boxes
  const smallContainer = document.createElement("div");
  smallContainer.className = "small-container";
  mediumBox.appendChild(smallContainer);

  // Generate small boxes
  bundle.items.forEach(item => {
    const smallBox = document.createElement("div");
    smallBox.className = "small-box";
    smallBox.id = item.id;
    smallBox.textContent = `${item.amount} ${item.name}`;

    // Add tooltip text to the small box
    smallBox.dataset.tooltipText = item.tooltipText || "";

    smallContainer.appendChild(smallBox);
  });
});

  
  
  
// --- Fish Tank (BB3) small boxes generation ---
const fishTankData = [
  {
    id: "box3",
    title: "Fish Tank",
    bundles: [
      {
        id: "box3-m1",
        title: "River Fish",
        required: 6,
        items: [
          { id: "box3-m1-s1", name: "Sunfish", amount: 1, tooltipText: "Spring / Summer | Rivers | Not Raining | Before 7pm" },
          { id: "box3-m1-s2", name: "Catfish", amount: 1, tooltipText: "Spring / Fall | Rivers | Raining | Before 12am OR Any Season | Secret Woods | Raining | Before 12am" },
          { id: "box3-m1-s3", name: "Shad", amount: 1, tooltipText: "Not Winter | Rivers | Raining | 9am - 2am" },
          { id: "box3-m1-s4", name: "Tiger Trout", amount: 1, tooltipText: "Fal / Womter | Rivers | Any Weather | Before 7pm" },
          { id: "box3-m1-s5", name: "Minnow", amount: 1, tooltipText: "Any Season | Any Freshwater (except Adventurer's Summit & Farm) | Any Weather| Before 6pm OR Not Winter | Any Freshwater | Any Weather | Before 6pm" },
          { id: "box3-m1-s6", name: "Goldfish", amount: 1, tooltipText: " Spring | Bluemoon Vineyard River / Pelican Town | Sunny Weather | 10am - 5pm" },
        ],
      },
      {
        id: "box3-m2",
        title: "Lake Fish",
        required: 5,
        items: [
          { id: "box3-m2-s1", name: "Largemouth Bass", amount: 1, tooltipText: "Any Season | Moutain Lake | Any Weather | Before 7pm" },
          { id: "box3-m2-s2", name: "Carp", amount: 1, tooltipText: "Any Season | Secret Woods / Sewers | Any Weather | All Day OR Not Winter | Moutain Lake | Any Weather | All Day" },
          { id: "box3-m2-s3", name: "Bullhead", amount: 1, tooltipText: "Any Season | Moutain Lake | Any Weather | All Day" },
          { id: "box3-m2-s4", name: "Sturgeon", amount: 1, tooltipText: "Summer / Winter | Moutain Lake | Any Weather | Before 7pm" },
          { id: "box3-m2-s5", name: "Tadpole", amount: 1, tooltipText: "Spring / Summer | Moutain Lake | Any Weather | All Day" },
        ],
      },
      {
        id: "box3-m3",
        title: "Ocean Fish",
        required: 5,
        items: [
          { id: "box3-m3-s1", name: "Sardine", amount: 1, tooltipText: "Not Summer | Ocean | Any Weather | Before 7pm" },
          { id: "box3-m3-s2", name: "Tuna", amount: 1, tooltipText: "Summer / Winter | Ocean | Any Weather | Before 7pm" },
          { id: "box3-m3-s3", name: "Red Snapper", amount: 1, tooltipText: "Not Spring | Ocean | Rain | Before 7pm" },
          { id: "box3-m3-s4", name: "Tilapia", amount: 1, tooltipText: "Summer / Fall | Ocean | Any Weather | Before 2pm" },
          { id: "box3-m3-s5", name: "Starfish", amount: 1, tooltipText: "Not Fall | Beach (Ocean) | Any Weather | Before 10pm" },
        ],
      },
      {
        id: "box3-m4",
        title: "Night Fishing",
        required: 4,
        items: [
          { id: "box3-m4-s1", name: "Walleye", amount: 1, tooltipText: "Fall / Winter | Rivers / Moutain Lake | Rain | 12pm-2am" },
          { id: "box3-m4-s2", name: "Bream", amount: 1, tooltipText: "Any Season | Rivers | Any Weather | 6pm-2am" },
          { id: "box3-m4-s3", name: "Eel", amount: 1, tooltipText: "Spring / Fall | Ocean | Rain | 4pm-2am" },
          { id: "box3-m4-s4", name: "Frog", amount: 1, tooltipText: "Spring / Summer | Moutain Lake | Rain | 6pm-2am" },
        ],
      },
      {
        id: "box3-m5",
        title: "Crab Pot",
        required: 10,
        items: [
          { id: "box3-m5-s1", name: "Lobster", amount: 1, tooltipText: "Any Season | Crab Pots: Saltwater" },
          { id: "box3-m5-s2", name: "Crayfish", amount: 1, tooltipText: "Any Season | Crab Pots: Freshwater" },
          { id: "box3-m5-s3", name: "Crab", amount: 1, tooltipText: "Any Season | Crab Pots: Saltwater OR Occasioanly dropped by (Rock/Lava) Crabs in Mines" },
          { id: "box3-m5-s4", name: "Cockle", amount: 1, tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging" },
          { id: "box3-m5-s5", name: "Mussel", amount: 1, tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging" },
          { id: "box3-m5-s6", name: "Shrimp", amount: 1, tooltipText: "Any Season | Crab Pots: Saltwater" },
          { id: "box3-m5-s7", name: "Snail", amount: 1, tooltipText: "Any Season | Crab Pots: Freshwater" },
          { id: "box3-m5-s8", name: "Periwinkle", amount: 1, tooltipText: "Any Season | Crab Pots: Freshwater" },
          { id: "box3-m5-s9", name: "Oyster", amount: 1, tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging" },
          { id: "box3-m5-s10", name: "Clam", amount: 1, tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging" },
        ],
      },
      {
        id: "box3-m6",
        title: "Specialty Fish",
        required: 6,
        items: [
          { id: "box3-m6-s1", name: "Pufferfish", amount: 1, tooltipText: "Summer | Ocean | Sunny | 12pm-4pm OR Traveling Cart" },
          { id: "box3-m6-s2", name: "Ghostfish", amount: 1, tooltipText: "Any Season | Floor (20/60) in Mines | All Day OR Traveling Cart" },
          { id: "box3-m6-s3", name: "Sandfish", amount: 1, tooltipText: "Any Season | The Desert | Before 8pm OR Traveling Cart" },
          { id: "box3-m6-s4", name: "Woodskip", amount: 1, tooltipText: "Any Season | Secret Woods | Any Weather | All Day OR Traveling Cart" },
          { id: "box3-m6-s5", name: "King Salmon", amount: 1, tooltipText: "Spring / Summer | Bottom of Forest West | Any Weather | Before 8pm" },
          { id: "box3-m6-s6", name: "Butterfish", amount: 1, tooltipText: "Not Winter | Shearwater Bridge | Sunny | All Day OR Summer | Forest West | Sunny | All Day" },
        ],
      },
    ],
  },
];

  
  
  
fishTankData[0].bundles.forEach(bundle => {
  const mediumBox = document.getElementById(bundle.id);

  // Set medium box title with 0/x
  const titleElement = mediumBox.querySelector(".medium-title");
  titleElement.textContent = `0/${bundle.required} ${bundle.title}`;

  // Create container for small boxes
  const smallContainer = document.createElement("div");
  smallContainer.className = "small-container";
  mediumBox.appendChild(smallContainer);

  // Generate small boxes
  bundle.items.forEach(item => {
    const smallBox = document.createElement("div");
    smallBox.className = "small-box";
    smallBox.id = item.id;
    smallBox.textContent = `${item.amount} ${item.name}`;

    // Add tooltip text to the small box
    smallBox.dataset.tooltipText = item.tooltipText || "";

    smallContainer.appendChild(smallBox);
  });
});

  
  
  
// --- Boiler Room (BB4) small boxes generation ---
const boilerRoomData = [
  {
    id: "box4",
    title: "Boiler Room",
    bundles: [
      {
        id: "box4-m1",
        title: "Blacksmith's",
        required: 3,
        items: [
          { id: "box4-m1-s1", name: "Copper Bar", amount: 1, tooltipText: "5 Copper into Furnace" },
          { id: "box4-m1-s2", name: "Iron Bar", amount: 1, tooltipText: "5 Iron into Furnace" },
          { id: "box4-m1-s3", name: "Gold Bar", amount: 1, tooltipText: "5 Gold into Furnace" },
        ],
      },
      {
        id: "box4-m2",
        title: "Geologist's",
        required: 4,
        items: [
          { id: "box4-m2-s1", name: "Quartz", amount: 1, tooltipText: "Foaraging in Mines OR Stone Golems (In floors 31-39) (10% Chance)" },
          { id: "box4-m2-s2", name: "Earth Crystal", amount: 1, tooltipText: "Foaraging in Mines (espically floors 1-39) OR Geodes / Omni-Geodes OR Duggies (10% Chance) OR Treasure Chest from Fishing" },
          { id: "box4-m2-s3", name: "Frozen Tear", amount: 1, tooltipText: "Foaraging in Mines (floors 41-79) OR Frozen Geodes / Omni-Geodes OR Dust Mites (2% Chance) OR Treasure Chest from Fishing" },
          { id: "box4-m2-s4", name: "Fire Quartz", amount: 1, tooltipText: "Foaraging in Mines (floors 80+) OR Magma Geodes / Omni-Geodes OR Treasure Chest from Fishing" },
        ],
      },
      {
        id: "box4-m3",
        title: "Adventurer's",
        required: 2,
        items: [
          { id: "box4-m3-s1", name: "Slime", amount: 99, tooltipText: "Killing Slimes in Mines (Any Floor)" },
          { id: "box4-m3-s2", name: "Bat Wings", amount: 10, tooltipText: "Killing Bats in Mines (Any Floor past 30)" },
          { id: "box4-m3-s3", name: "Solar Essence", amount: 1, tooltipText: "Killing Ghost in Mines (51-79) OR Killing Metal Heads in Mines (81-119) OR Killing Squid Kids in Mines (91-119)" },
          { id: "box4-m3-s4", name: "Void Essence", amount: 1, tooltipText: "Killing Shadow (Brutes / Shaman) in Mines (Any Floor past 80)" },
        ],
      },
    ],
  },
];


boilerRoomData[0].bundles.forEach(bundle => {
  const mediumBox = document.getElementById(bundle.id);

  // Set medium box title with 0/x
  const titleElement = mediumBox.querySelector(".medium-title");
  titleElement.textContent = `0/${bundle.required} ${bundle.title}`;

  // Create container for small boxes
  const smallContainer = document.createElement("div");
  smallContainer.className = "small-container";
  mediumBox.appendChild(smallContainer);

  // Generate small boxes
  bundle.items.forEach(item => {
    const smallBox = document.createElement("div");
    smallBox.className = "small-box";
    smallBox.id = item.id;
    smallBox.textContent = `${item.amount} ${item.name}`;

    // Add tooltip text to the small box
    smallBox.dataset.tooltipText = item.tooltipText || "";

    smallContainer.appendChild(smallBox);
  });
});

  
  
  
  
// --- Bulletin Board (BB5) small boxes generation ---
const bulletinBoardData = [
  {
    id: "box5",
    title: "Bulletin Board",
    bundles: [
      {
        id: "box5-m1",
        title: "Chef's",
        required: 7,
        items: [
          { id: "box5-m1-s1", name: "Maple Syrup", amount: 1, tooltipText: "Placing Tapper on Maple Tree OR Sold from Bear" },
          { id: "box5-m1-s2", name: "Fiddlehead Fern", amount: 1, tooltipText: "Summer | Foraging in Secret Woods" },
          { id: "box5-m1-s3", name: "Truffle", amount: 1, tooltipText: "Not Winter | Happy Pigs outside" },
          { id: "box5-m1-s4", name: "Poppy", amount: 1, tooltipText: "Summer Crop" },
          { id: "box5-m1-s5", name: "Maki Roll", amount: 1, tooltipText: "Cooking (need recipe from TV Show) OR Occasionally sold by Gus OR Occasionally sold by Krobus on Saturdays" },
          { id: "box5-m1-s6", name: "Fried Egg", amount: 1, tooltipText: "Cooking OR Occasionally sold by Gus OR Occasionally sold by Krobus on Saturdays" },
          { id: "box5-m1-s7", name: "Candy", amount: 1, tooltipText: "Cooking (need recipe sold by Gus)" },
        ],
      },
      {
        id: "box5-m2",
        title: "Fodder",
        required: 3,
        items: [
          { id: "box5-m2-s1", name: "Wheat", amount: 10, tooltipText: "Summer and Fall Crop" },
          { id: "box5-m2-s2", name: "Hay", amount: 10, tooltipText: "Not Winter | Scything grass when Silo is on the Farm" },
          { id: "box5-m2-s3", name: "Apple", amount: 3, tooltipText: "Apple trees during Fall OR Fruit Bat Cave on Farm" },
        ],
      },
      {
        id: "box5-m3",
        title: "Enchanter's",
        required: 5,
        items: [
          { id: "box5-m3-s1", name: "Oak Resin", amount: 1, tooltipText: "Placing Tapper on Oak Tree OR Sold from Bear" },
          { id: "box5-m3-s2", name: "Wine", amount: 1, tooltipText: "Placing Fruit inside a Keg" },
          { id: "box5-m3-s3", name: "Rabbit's Foot", amount: 1, tooltipText: "Happy Rabbits OR Traveling Cart" },
          { id: "box5-m3-s4", name: "Pomegranate", amount: 1, tooltipText: "Pomegranate trees during Fall OR Fruit Bat Cave on Farm" },
          { id: "box5-m3-s5", name: "Four Leaf Clover", amount: 1, tooltipText: "Spring / Summer | Secret Woods" },
        ],
      },
      {
        id: "box5-m4",
        title: "Field Research",
        required: 5,
        items: [
          { id: "box5-m4-s1", name: "Purple Mushroom", amount: 1, tooltipText: "Foraging in caves starting floor 81 OR Mushroom Cave on Farm (rare)" },
          { id: "box5-m4-s2", name: "Nautilus Shell", amount: 1, tooltipText: "Winter | Foraging at the Beach" },
          { id: "box5-m4-s3", name: "Chub", amount: 1, tooltipText: "Any Season | Moutain Lake / Forest River | Any Weather | All Day" },
          { id: "box5-m4-s4", name: "Frozen Geode", amount: 1, tooltipText: "Mining in floors 41-79 OR Treasure from fishing" },
          { id: "box5-m4-s5", name: "Amber", amount: 1, tooltipText: "Artifact Spots in The Adventures Summit (most common here) / The Mountain / The Railroad / The Mines" },
        ],
      },
      {
        id: "box5-m5",
        title: "Dye",
        required: 7,
        items: [
          { id: "box5-m5-s1", name: "Red Mushroom", amount: 1, tooltipText: "Foraging in caves on mushroom floors (chance to spawn starting floor 81) OR Secret Woods Foragable (Summer/Fall) OR Mushroom Cave on Farm" },
          { id: "box5-m5-s2", name: "Sea Urchin", amount: 1, tooltipText: "Any Season | Right of the bridge on the Beach OR Summer | Anywhere on the Beach" },
          { id: "box5-m5-s3", name: "Sunflower", amount: 1, tooltipText: "Summer / Fall crop" },
          { id: "box5-m5-s4", name: "Duck Feather", amount: 1, tooltipText: "Happy Ducks" },
          { id: "box5-m5-s5", name: "Aquamarine", amount: 1, tooltipText: "(Gem Nodes / Aquamarine Nodes) after floor 40" },
          { id: "box5-m5-s6", name: "Red Cabbage", amount: 1, tooltipText: "Summer Crop (sold by Pierre starting year 2) OR seeds sold at Traveling Cart" },
          { id: "box5-m5-s7", name: "Persimmon", amount: 1, tooltipText: "Persimmon Trees during Fall" },
        ],
      },
    ],
  },
];

bulletinBoardData[0].bundles.forEach(bundle => {
  const mediumBox = document.getElementById(bundle.id);

  // Set medium box title with 0/x
  const titleElement = mediumBox.querySelector(".medium-title");
  titleElement.textContent = `0/${bundle.required} ${bundle.title}`;

  // Create container for small boxes
  const smallContainer = document.createElement("div");
  smallContainer.className = "small-container";
  mediumBox.appendChild(smallContainer);

  // Generate small boxes
  bundle.items.forEach(item => {
    const smallBox = document.createElement("div");
    smallBox.className = "small-box";
    smallBox.id = item.id;
    smallBox.textContent = `${item.amount} ${item.name}`;

    // Add tooltip text to the small box
    smallBox.dataset.tooltipText = item.tooltipText || "";

    smallContainer.appendChild(smallBox);
  });
});
  
  
  
  
  
 // --- Start of Vault (BB6) Code --- 
const vaultData = [
  {
    id: "box6",
    title: "Vault",
    bundles: [
      {
        id: "box6-m1",
        title: "G #1",
        required: 1,
        items: [
          { id: "box6-m1-s1", name: "G", amount: 2500, tooltipText: " ‎ " },
        ],
      },
      {
        id: "box6-m2",
        title: "G #2",
        required: 1,
        items: [
          { id: "box6-m2-s1", name: "G", amount: 5000 , tooltipText: "‎  " },
        ],
      },
      {
        id: "box6-m3",
        title: "G #3",
        required: 1,
        items: [
          { id: "box6-m3-s1", name: "G", amount: 10000, tooltipText: " ‎ " },
        ],
      },
      {
        id: "box6-m4",
        title: "G #4",
        required: 1,
        items: [
          { id: "box6-m4-s1", name: "G", amount: 25000  , tooltipText: "‎ " },
        ],
      },
    ],
  },
];


vaultData[0].bundles.forEach(bundle => {
  const mediumBox = document.getElementById(bundle.id);

  // Set medium box title with 0/x
  const titleElement = mediumBox.querySelector(".medium-title");
  titleElement.textContent = `0/${bundle.required} ${bundle.title}`;

  // Create container for small boxes
  const smallContainer = document.createElement("div");
  smallContainer.className = "small-container";
  mediumBox.appendChild(smallContainer);

  // Generate small boxes
  bundle.items.forEach(item => {
    const smallBox = document.createElement("div");
    smallBox.className = "small-box";
    smallBox.id = item.id;
    smallBox.textContent = `${item.amount} ${item.name}`;

    // Add tooltip text to the small box
    smallBox.dataset.tooltipText = item.tooltipText || "";

    smallContainer.appendChild(smallBox);
  });
});
  
  // Add minimize buttons to all Big Boxes
document.querySelectorAll(".big-box").forEach(bigBox => {
  const minimizeButton = document.createElement("button");
  minimizeButton.className = "minimize-button";
  minimizeButton.textContent = "–"; // Start with minus sign

  // Basic positioning
  bigBox.style.position = "relative";
  minimizeButton.style.position = "absolute";
  minimizeButton.style.top = "5px";
  minimizeButton.style.left = "5px";
  minimizeButton.style.width = "25px";
  minimizeButton.style.height = "25px";
  minimizeButton.style.border = "none";
  minimizeButton.style.borderRadius = "50%";
  minimizeButton.style.backgroundColor = "#ccc";
  minimizeButton.style.cursor = "pointer";
  minimizeButton.style.fontSize = "18px";
  minimizeButton.style.fontWeight = "bold";
  minimizeButton.style.lineHeight = "22px";

  bigBox.appendChild(minimizeButton);

  minimizeButton.addEventListener("click", () => {
    bigBox.classList.toggle("minimized");

    // Toggle the button icon
    const isMinimized = bigBox.classList.contains("minimized");
    minimizeButton.textContent = isMinimized ? "+" : "–";
  });
});


 // --- End of Vault (BB6) Code --- 
  
  
  
  
  
  
  
// --- Start of ToolTips Code ---

// Create a single tooltip div that will be reused
const tooltip = document.createElement("div");
tooltip.className = "tooltip"; // style this in CSS
document.body.appendChild(tooltip);

// Add hover events to all small boxes
document.querySelectorAll(".small-box").forEach(smallBox => {
  smallBox.addEventListener("mouseenter", e => {
    const itemName = smallBox.textContent.replace(/^\d+\s/, ''); // remove amount
    const tooltipText = smallBox.dataset.tooltipText;

    // Detect if this small box belongs to the Vault (box6)
    const isVaultItem = smallBox.closest("#box6") !== null;

    let displayHeader = itemName;
    let sourceListHTML = "";

    if (isVaultItem) {
      // Vault items: show gold amount instead of tooltip sources
      tooltip.innerHTML = `
        <div class="tooltip-header">Vault Bundle</div>
        <div class="tooltip-text">${smallBox.textContent}</div>
      `;
    } else {
      // Regular items — parse tooltipText for sources
      if (tooltipText && tooltipText.trim() !== "") {
        // Split by common separators (OR, comma, semicolon) for multiple sources
        const sources = tooltipText
          .split(/\b(?:OR|,|;)\b/i)
          .map(src => src.trim())
          .filter(src => src.length > 0);

        // Build bullet list HTML
        sourceListHTML = sources
          .map(src => `<li>${src}</li>`)
          .join("");

        tooltip.innerHTML = `
          <div class="tooltip-header">${displayHeader}</div>
          <div class="tooltip-subheader">Sources</div>
          <hr class="tooltip-divider">
          <ul class="tooltip-list">${sourceListHTML}</ul>
        `;
      }
    }

    tooltip.style.display = "block";
  });

  smallBox.addEventListener("mousemove", e => {
    if (tooltip.style.display === "block") {
      tooltip.style.left = e.pageX + 15 + "px"; // slight offset
      tooltip.style.top = e.pageY + 15 + "px";
    }
  });

  smallBox.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });
});

// --- End of ToolTips Code ---

  
  
// --- Start of Small Box Completion Code ---

document.querySelectorAll(".small-box").forEach(smallBox => {
  smallBox.addEventListener("click", () => {
    const mediumBox = smallBox.closest(".medium-box");
    const titleElement = mediumBox.querySelector(".medium-title");

    // Toggle completion class
    smallBox.classList.toggle("completed");

    // Count how many small boxes are completed
    const totalRequired = mediumBox.querySelectorAll(".small-box").length;
    const completedCount = mediumBox.querySelectorAll(".small-box.completed").length;

    // Extract the title text (after 0/x part)
    const titleText = titleElement.textContent.replace(/^\d+\/\d+\s*/, "");

    // Update the title (e.g., "1/4 Spring Foraging")
    titleElement.textContent = `${completedCount}/${totalRequired} ${titleText}`;
  });
});

// --- End of Small Box Completion Code ---

  
  
  
  
  
  

});