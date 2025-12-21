document.addEventListener("DOMContentLoaded", () => {

//Data for the actual items in the boxes  

  const SEASONS = {
  SPRING: "Spring",
  SUMMER: "Summer",
  FALL: "Fall",
  WINTER: "Winter",
  ANY: "Any"
};

// --- Start of Crafts Room (BB1) Code ---
  

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
          { id: "box1-m1-s1", name: "Wild Horseradish", season: [SEASONS.SPRING], amount: 1, image: "Spring_Foraging/Wild_Horseradish.png", tooltipText: "Foraging in Spring OR Spring Seeds (25%)", completed: false},
          { id: "box1-m1-s2", name: "Daffodil", season: [SEASONS.SPRING], amount: 1, image: "Spring_Foraging/Daffodil.png", tooltipText: "Foraging in Spring OR Spring Seeds (25%) OR Pierre's shop during Flower Dance", completed: false},
          { id: "box1-m1-s3", name: "Leek", season: [SEASONS.SPRING], amount: 1, image: "Spring_Foraging/Leek.png", tooltipText: "Foraging in Spring OR Spring Seeds (25%)", completed: false},
          { id: "box1-m1-s4", name: "Dandelion", season: [SEASONS.SPRING], amount: 1, image: "Spring_Foraging/Dandelion.png", tooltipText: "Foraging in Spring OR Spring Seeds (25%) OR Pierre's shop during Flower Dance", completed: false},
        ],
      },

      {
        id: "box1-m2",
        title: "Summer Foraging",
        required: 4,
        items: [
          { id: "box1-m2-s1", name: "Grape", season: [SEASONS.SUMMER, SEASONS.FALL], amount: 1, image: "Summer_Foraging/Grape.png", tooltipText: "Foraging in Summer OR Summer Seeds (33%) OR Grape Starter (Fall Crop)", completed: false},
          { id: "box1-m2-s2", name: "Spice Berry", season: [SEASONS.SUMMER], amount: 1, image: "Summer_Foraging/Spice_Berry.png", tooltipText: "Foraging in Summer OR Summer Seeds (33%) OR Fruit Bat Cave", completed: false},
          { id: "box1-m2-s3", name: "Sweet Pea", season: [SEASONS.SUMMER], amount: 1, image: "Summer_Foraging/Sweet_Pea.png", tooltipText: "Foraging in Summer OR Summer Seeds (33%)", completed: false},
          { id: "box1-m2-s4", name: "Red Baneberry", season: [SEASONS.SUMMER], amount: 1, image: "Summer_Foraging/Red_Baneberry.png", tooltipText: "Foraging in Secret Woods during Summer", completed: false},
        ],
      },

      {
        id: "box1-m3",
        title: "Fall Foraging",
        required: 5,
        items: [
          { id: "box1-m3-s1", name: "Common Mushroom", season: [SEASONS.FALL], amount: 1, image: "Fall_Foraging/Common_Mushroom.png", tooltipText: "Foraging in Fall OR Fall Seeds (25%)", completed: false},
          { id: "box1-m3-s2", name: "Wild Plum", season: [SEASONS.FALL], amount: 1, image: "Fall_Foraging/Wild_Plum.png", tooltipText: "Foraging in Fall OR Fall Seeds (25%)", completed: false},
          { id: "box1-m3-s3", name: "Hazelnut", season: [SEASONS.FALL], amount: 1, image: "Fall_Foraging/Hazelnut.png", tooltipText: "Foraging in Fall OR Fall Seeds (25%)", completed: false},
          { id: "box1-m3-s4", name: "Blackberry", season: [SEASONS.FALL], amount: 1, image: "Fall_Foraging/Blackberry.png", tooltipText: "Foraging in Fall OR Fall Seeds (25%)", completed: false},
          { id: "box1-m3-s5", name: "Mushroom Colony", season: [SEASONS.FALL], amount: 1, image: "Fall_Foraging/Mushroom_Colony.png", tooltipText: "Foraging in Fall (Secret Woods / West Cindersap / Jumino Woods)", completed: false},
        ],
      },

      {
        id: "box1-m4",
        title: "Winter Foraging",
        required: 5,
        items: [
          { id: "box1-m4-s1", name: "Winter Root", season: [SEASONS.WINTER], amount: 1, image: "Winter_Foraging/Winter_Root.png", tooltipText: "Foraging in Winter OR Winter Seeds (25%) OR Winter Tilling", completed: false},
          { id: "box1-m4-s2", name: "Crystal Fruit", season: [SEASONS.WINTER], amount: 1, image: "Winter_Foraging/Crystal_Fruit.png", tooltipText: "Foraging in Winter OR Winter Seeds (25%)", completed: false},
          { id: "box1-m4-s3", name: "Snow Yam", season: [SEASONS.WINTER], amount: 1, image: "Winter_Foraging/Snow_Yam.png", tooltipText: "Foraging in Winter OR Winter Seeds (25%) OR Winter Tilling", completed: false},
          { id: "box1-m4-s4", name: "Crocus", season: [SEASONS.WINTER], amount: 1, image: "Winter_Foraging/Crocus.png", tooltipText: "Foraging in Winter OR Winter Seeds (25%)", completed: false},
          { id: "box1-m4-s5", name: "Bearberry", season: [SEASONS.WINTER], amount: 1, image: "Winter_Foraging/Bearberry.png", tooltipText: "Foraging in Secret Woods during Winter", completed: false},
        ],
      },

      {
        id: "box1-m5",
        title: "Construction",
        required: 4,
        items: [
          { id: "box1-m5-s1", name: "Wood", season: [SEASONS.ANY], amount: 499, image: "Construction/Wood.png", tooltipText: "Chopping trees OR Crates in mines", completed: false},
          { id: "box1-m5-s2", name: "Clay", season: [SEASONS.ANY], amount: 10, image: "Construction/Clay.png", tooltipText: "Tilling ground", completed: false},
          { id: "box1-m5-s3", name: "Stone", season: [SEASONS.ANY], amount: 199, image: "Construction/Stone.png", tooltipText: "Mining rocks", completed: false},
          { id: "box1-m5-s4", name: "Hardwood", season: [SEASONS.ANY], amount: 30, image: "Construction/Hardwood.png", tooltipText: "Mahogany Trees OR Large Stumps/Logs OR Crates in mines", completed: false},
        ],
      },

      {
        id: "box1-m6",
        title: "Exotic Foraging",
        required: 8,
        items: [
          { id: "box1-m6-s1", name: "Coconut", season: [SEASONS.ANY], amount: 1, image: "Exotic_Foraging/Coconut.png", tooltipText: "Foraging in Calico Desert", completed: false},
          { id: "box1-m6-s2", name: "Cactus Fruit", season: [SEASONS.ANY], amount: 1, image: "Exotic_Foraging/Cactus_Fruit.png", tooltipText: "Foraging in Calico Desert", completed: false},
          { id: "box1-m6-s3", name: "Cave Carrot", season: [SEASONS.ANY], amount: 1, image: "Exotic_Foraging/Cave_Carrot.png", tooltipText: "Tilling in mines", completed: false},
          { id: "box1-m6-s4", name: "Red Mushroom", season: [SEASONS.ANY], amount: 1, image: "Exotic_Foraging/Red_Mushroom.png", tooltipText: "Foraging in caves OR Secret Woods OR Mushroom Cave on Farm", completed: false},
          { id: "box1-m6-s5", name: "Purple Mushroom", season: [SEASONS.ANY], amount: 1, image: "Exotic_Foraging/Purple_Mushroom.png", tooltipText: "Foraging in caves OR Mushroom Cave on Farm (rare)", completed: false},
          { id: "box1-m6-s6", name: "Fir Wax", season: [SEASONS.ANY], amount: 1, image: "Exotic_Foraging/Fir_Wax.png", tooltipText: "Placing Tapper on Fir Tree OR Sold from Bear", completed: false},
          { id: "box1-m6-s7", name: "Birch Water", season: [SEASONS.ANY], amount: 1, image: "Exotic_Foraging/Birch_Water.png", tooltipText: "Placing Tapper on Birch Tree OR Sold from Bear", completed: false},
          { id: "box1-m6-s8", name: "Pine Tar", season: [SEASONS.ANY], amount: 1, image: "Exotic_Foraging/Pine_Tar.png", tooltipText: "Placing Tapper on Pine Tree OR Sold from Bear", completed: false},
        ],
      },
    ],
  },
];

  
  
  //GOTTA CLEAN UP
  
  
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
    smallBox.dataset.seasons = JSON.stringify(item.season);


    // Create image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "small-box-img";

    // Create label (amount + name)
    const label = document.createElement("div");
    label.className = "small-box-label";
    label.textContent = `${item.amount} ${item.name}`;

    // Append image + label
    smallBox.appendChild(img);
    smallBox.appendChild(label);

    // Tooltip text
    smallBox.dataset.tooltipText = item.tooltipText || "";

    smallContainer.appendChild(smallBox);
  });
});
// --- End of Crafts Room (BB1) Code ---

  
// --- Start of Pantry (BB2) Code ---
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
          { id: "box2-m1-s1", name: "Parsnip", amount: 1, image: "Spring_Crops/Parsnip.png", tooltipText: "Spring Crop", season: [SEASONS.SPRING], completed: false},
          { id: "box2-m1-s2", name: "Green Bean", amount: 1, image: "Spring_Crops/Green_Bean.png", tooltipText: "Spring Crop", season: [SEASONS.SPRING], completed: false},
          { id: "box2-m1-s3", name: "Cauliflower", amount: 1, image: "Spring_Crops/Cauliflower.png", tooltipText: "Spring Crop", season: [SEASONS.SPRING], completed: false},
          { id: "box2-m1-s4", name: "Potato", amount: 1, image: "Spring_Crops/Potato.png", tooltipText: "Spring Crop", season: [SEASONS.SPRING], completed: false},
          { id: "box2-m1-s5", name: "Cucumber", amount: 1, image: "Spring_Crops/Cucumber.png", tooltipText: "Spring Crop", season: [SEASONS.SPRING], completed: false}
        ]
      },
      {
        id: "box2-m2",
        title: "Summer Crops",
        required: 5,
        items: [
          { id: "box2-m2-s1", name: "Tomato", amount: 1, image: "Summer_Crops/Tomato.png", tooltipText: "Summer Crop", season: [SEASONS.SUMMER], completed: false},
          { id: "box2-m2-s2", name: "Hot Pepper", amount: 1, image: "Summer_Crops/Hot_Pepper.png", tooltipText: "Summer Crop", season: [SEASONS.SUMMER], completed: false},
          { id: "box2-m2-s3", name: "Blueberry", amount: 1, image: "Summer_Crops/Blueberry.png", tooltipText: "Summer Crop", season: [SEASONS.SUMMER], completed: false},
          { id: "box2-m2-s4", name: "Melon", amount: 1, image: "Summer_Crops/Melon.png", tooltipText: "Summer Crop", season: [SEASONS.SUMMER], completed: false},
          { id: "box2-m2-s5", name: "Butternut Squash", amount: 1, image: "Summer_Crops/Butternut_Squash.png", tooltipText: "Summer Crop", season: [SEASONS.SUMMER], completed: false}
        ]
      },
      {
        id: "box2-m3",
        title: "Fall Crops",
        required: 5,
        items: [
          { id: "box2-m3-s1", name: "Corn", amount: 1, image: "Fall_Crops/Corn.png", tooltipText: "Summer Crop OR Fall Crop", season: [SEASONS.SUMMER, SEASONS.FALL], completed: false},
          { id: "box2-m3-s2", name: "Eggplant", amount: 1, image: "Fall_Crops/Eggplant.png", tooltipText: "Fall Crop", season: [SEASONS.FALL], completed: false},
          { id: "box2-m3-s3", name: "Pumpkin", amount: 1, image: "Fall_Crops/Pumpkin.png", tooltipText: "Fall Crop", season: [SEASONS.FALL], completed: false},
          { id: "box2-m3-s4", name: "Yam", amount: 1, image: "Fall_Crops/Yam.png", tooltipText: "Fall Crop", season: [SEASONS.FALL], completed: false},
          { id: "box2-m3-s5", name: "Sweet Potato", amount: 1, image: "Fall_Crops/Sweet_Potato.png", tooltipText: "Fall Crop", season: [SEASONS.FALL], completed: false}
        ]
      },
      {
        id: "box2-m4",
        title: "Quality Crops",
        required: 5,
        items: [
          { id: "box2-m4-s1", name: "Gold quality Parsnip", amount: 5, image: "Quality_Crops/Parsnip(1).png", tooltipText: "Spring Crop", season: [SEASONS.SPRING], completed: false},
          { id: "box2-m4-s2", name: "Gold quality Melon", amount: 5, image: "Quality_Crops/Melon(1).png", tooltipText: "Summer Crop", season: [SEASONS.SUMMER], completed: false},
          { id: "box2-m4-s3", name: "Gold quality Pumpkin", amount: 5, image: "Quality_Crops/Pumpkin(1).png", tooltipText: "Fall Crop", season: [SEASONS.FALL], completed: false},
          { id: "box2-m4-s4", name: "Gold quality Corn", amount: 5, image: "Quality_Crops/Corn(1).png", tooltipText: "Summer Crop OR Fall Crop", season: [SEASONS.SUMMER, SEASONS.FALL], completed: false},
          { id: "box2-m4-s5", name: "Gold quality Cucumber", amount: 5, image: "Quality_Crops/Cucumber(1).png", tooltipText: "Spring Crop", season: [SEASONS.SPRING], completed: false},
          { id: "box2-m4-s6", name: "Gold quality Butternut Squash", amount: 5, image: "Quality_Crops/Butternut_Squash(1).png", tooltipText: "Summer Crop", season: [SEASONS.SUMMER], completed: false},
          { id: "box2-m4-s7", name: "Gold quality Sweet Potato", amount: 5, image: "Quality_Crops/Sweet_Potato(1).png", tooltipText: "Fall Crop", season: [SEASONS.FALL], completed: false}
        ]
      },
      {
        id: "box2-m5",
        title: "Animal",
        required: 5,
        items: [
          { id: "box2-m5-s1", name: "Large Milk", amount: 1, image: "Animal/Large_Milk.png", tooltipText: "Happy Cows", season: [SEASONS.ANY], completed: false},
          { id: "box2-m5-s2", name: "Large Goat Milk", amount: 1, image: "Animal/Large_Goat_Milk.png", tooltipText: "Happy Goats", season: [SEASONS.ANY], completed: false},
          { id: "box2-m5-s3", name: "Wool", amount: 1, image: "Animal/Wool.png", tooltipText: "Rabbits OR Sheep", season: [SEASONS.ANY], completed: false},
          { id: "box2-m5-s4", name: "Duck Egg", amount: 1, image: "Animal/Duck_Egg.png", tooltipText: "Ducks", season: [SEASONS.ANY], completed: false},
          { id: "box2-m5-s5", name: "Large Egg (white)", amount: 1, image: "Animal/Large_Egg.png", tooltipText: "Happy White Chickens", season: [SEASONS.ANY], completed: false},
          { id: "box2-m5-s6", name: "Large Egg (brown)", amount: 1, image: "Animal/Large_Brown_Egg.png", tooltipText: "Happy Brown Chickens", season: [SEASONS.ANY], completed: false}
        ]
      },
      {
        id: "box2-m6",
        title: "Artisan",
        required: 8,
        items: [
          { id: "box2-m6-s1", name: "Truffle Oil", amount: 1, image: "Artisan/Truffle_Oil.png", tooltipText: "Truffle (from pigs) in Oil Maker", season: [SEASONS.ANY], completed: false},
          { id: "box2-m6-s2", name: "Cloth", amount: 1, image: "Artisan/Cloth.png", tooltipText: "Wool in Loom", season: [SEASONS.ANY], completed: false},
          { id: "box2-m6-s3", name: "Goat Cheese", amount: 1, image: "Artisan/Goat_Cheese.png", tooltipText: "Goat Milk in Cheese Press", season: [SEASONS.ANY], completed: false},
          { id: "box2-m6-s4", name: "Cheese", amount: 1, image: "Artisan/Cheese.png", tooltipText: "Milk in Cheese Press", season: [SEASONS.ANY], completed: false},
          { id: "box2-m6-s5", name: "Honey", amount: 1, image: "Artisan/Honey.png", tooltipText: "Bee House (Except in Winter)", season: [SEASONS.SPRING, SEASONS.SUMMER, SEASONS.FALL], completed: false},
          { id: "box2-m6-s6", name: "Jelly", amount: 1, image: "Artisan/Jelly.png", tooltipText: "Putting any fruit into a Preserves Jar", season: [SEASONS.ANY], completed: false},
          { id: "box2-m6-s7", name: "Apricot", amount: 1, image: "Artisan/Apricot.png", tooltipText: "Apricot Tree (During Spring) OR Fruit Bat Farm Cave", season: [SEASONS.SPRING], completed: false},
          { id: "box2-m6-s8", name: "Orange", amount: 1, image: "Artisan/Orange.png", tooltipText: "Orange Tree (During Summer) OR Fruit Bat Farm Cave", season: [SEASONS.SUMMER], completed: false},
          { id: "box2-m6-s9", name: "Pear", amount: 1, image: "Artisan/Pear.png", tooltipText: "Pear Tree (During Spring)", season: [SEASONS.SPRING], completed: false},
          { id: "box2-m6-s10", name: "Nectarine", amount: 1, image: "Artisan/Nectarine.png", tooltipText: "Nectarine Tree (During Summer)", season: [SEASONS.SUMMER], completed: false},
          { id: "box2-m6-s11", name: "Butter", amount: 1, image: "Artisan/Butter.png", tooltipText: "Any Milk into Butter Churner", season: [SEASONS.ANY], completed: false}
        ]
      }
    ]
  }
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
    smallBox.dataset.seasons = JSON.stringify(item.season);


    // Create image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "small-box-img";

    // Create label (amount + name)
    const label = document.createElement("div");
    label.className = "small-box-label";
    label.textContent = `${item.amount} ${item.name}`;

    // Append image + label
    smallBox.appendChild(img);
    smallBox.appendChild(label);

    // Tooltip text
    smallBox.dataset.tooltipText = item.tooltipText || "";

    smallContainer.appendChild(smallBox);
  });
});
// --- End of Pantry (BB2) Code ---

  
  
  
// --- Start of Fish Tank (BB3) Code ---
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
          { id: "box3-m1-s1", name: "Sunfish", season: [SEASONS.SPRING, SEASONS.SUMMER], amount: 1, image: "River_Fish/Sunfish.png", tooltipText: "Spring / Summer | Rivers | Not Raining | Before 7pm", completed: false},
          { id: "box3-m1-s2", name: "Catfish", season: [SEASONS.SPRING, SEASONS.FALL, SEASONS.ANY], amount: 1, image: "River_Fish/Catfish.png", tooltipText: "Spring / Fall | Rivers | Raining | Before 12am OR Any Season | Secret Woods | Raining | Before 12am", completed: false},
          { id: "box3-m1-s3", name: "Shad", season: [SEASONS.SPRING, SEASONS.SUMMER, SEASONS.FALL], amount: 1, image: "River_Fish/Shad.png", tooltipText: "Not Winter | Rivers | Raining | 9am - 2am", completed: false},
          { id: "box3-m1-s4", name: "Tiger Trout", season: [SEASONS.FALL, SEASONS.WINTER], amount: 1, image: "River_Fish/Tiger_Trout.png", tooltipText: "Fall / Winter | Rivers | Any Weather | Before 7pm", completed: false},
          { id: "box3-m1-s5", name: "Minnow", season: [SEASONS.ANY], amount: 1, image: "River_Fish/Minnow.png", tooltipText: "Any Season | Any Freshwater (except Adventurer's Summit & Farm) | Any Weather| Before 6pm OR Not Winter | Any Freshwater | Any Weather | Before 6pm", completed: false},
          { id: "box3-m1-s6", name: "Goldfish", season: [SEASONS.SPRING], amount: 1, image: "River_Fish/Goldfish.png", tooltipText: "Spring | Bluemoon Vineyard River / Pelican Town | Sunny Weather | 10am - 5pm", completed: false},
        ],
      },
      {
        id: "box3-m2",
        title: "Lake Fish",
        required: 5,
        items: [
          { id: "box3-m2-s1", name: "Largemouth Bass", season: [SEASONS.ANY], amount: 1, image: "Lake_Fish/Largemouth_Bass.png", tooltipText: "Any Season | Mountain Lake | Any Weather | Before 7pm", completed: false},
          { id: "box3-m2-s2", name: "Carp", season: [SEASONS.ANY, SEASONS.SPRING, SEASONS.SUMMER, SEASONS.FALL], amount: 1, image: "Lake_Fish/Carp.png", tooltipText: "Any Season | Secret Woods / Sewers | Any Weather | All Day OR Not Winter | Mountain Lake | Any Weather | All Day", completed: false},
          { id: "box3-m2-s3", name: "Bullhead", season: [SEASONS.ANY], amount: 1, image: "Lake_Fish/Bullhead.png", tooltipText: "Any Season | Mountain Lake | Any Weather | All Day", completed: false},
          { id: "box3-m2-s4", name: "Sturgeon", season: [SEASONS.SUMMER, SEASONS.WINTER], amount: 1, image: "Lake_Fish/Sturgeon.png", tooltipText: "Summer / Winter | Mountain Lake | Any Weather | Before 7pm", completed: false},
          { id: "box3-m2-s5", name: "Tadpole", season: [SEASONS.SPRING, SEASONS.SUMMER], amount: 1, image: "Lake_Fish/Tadpole.png", tooltipText: "Spring / Summer | Mountain Lake | Any Weather | All Day", completed: false},
        ],
      },
      {
        id: "box3-m3",
        title: "Ocean Fish",
        required: 5,
        items: [
          { id: "box3-m3-s1", name: "Sardine", season: [SEASONS.SPRING, SEASONS.FALL, SEASONS.WINTER], amount: 1, image: "Ocean_Fish/Sardine.png", tooltipText: "Not Summer | Ocean | Any Weather | Before 7pm", completed: false},
          { id: "box3-m3-s2", name: "Tuna", season: [SEASONS.SUMMER, SEASONS.WINTER], amount: 1, image: "Ocean_Fish/Tuna.png", tooltipText: "Summer / Winter | Ocean | Any Weather | Before 7pm", completed: false},
          { id: "box3-m3-s3", name: "Red Snapper", season: [SEASONS.SUMMER, SEASONS.FALL, SEASONS.WINTER], amount: 1, image: "Ocean_Fish/Red_Snapper.png", tooltipText: "Not Spring | Ocean | Rain | Before 7pm", completed: false},
          { id: "box3-m3-s4", name: "Tilapia", season: [SEASONS.SUMMER, SEASONS.FALL], amount: 1, image: "Ocean_Fish/Tilapia.png", tooltipText: "Summer / Fall | Ocean | Any Weather | Before 2pm", completed: false},
          { id: "box3-m3-s5", name: "Starfish", season: [SEASONS.SPRING, SEASONS.SUMMER, SEASONS.WINTER], amount: 1, image: "Ocean_Fish/Starfish.png", tooltipText: "Not Fall | Beach (Ocean) | Any Weather | Before 10pm", completed: false},
        ],
      },
      {
        id: "box3-m4",
        title: "Night Fishing",
        required: 4,
        items: [
          { id: "box3-m4-s1", name: "Walleye", season: [SEASONS.FALL, SEASONS.WINTER], amount: 1, image: "Night_Fishing/Walleye.png", tooltipText: "Fall / Winter | Rivers / Mountain Lake | Rain | 12pm-2am", completed: false},
          { id: "box3-m4-s2", name: "Bream", season: [SEASONS.ANY], amount: 1, image: "Night_Fishing/Bream.png", tooltipText: "Any Season | Rivers | Any Weather | 6pm-2am", completed: false},
          { id: "box3-m4-s3", name: "Eel", season: [SEASONS.SPRING, SEASONS.FALL], amount: 1, image: "Night_Fishing/Eel.png", tooltipText: "Spring / Fall | Ocean | Rain | 4pm-2am", completed: false},
          { id: "box3-m4-s4", name: "Frog", season: [SEASONS.SPRING, SEASONS.SUMMER], amount: 1, image: "Night_Fishing/Frog.png", tooltipText: "Spring / Summer | Mountain Lake | Rain | 6pm-2am", completed: false},
        ],
      },
      {
        id: "box3-m5",
        title: "Crab Pot",
        required: 10,
        items: [
          { id: "box3-m5-s1", name: "Lobster", season: [SEASONS.ANY], amount: 1, image: "Crab_Pot/Lobster.png", tooltipText: "Any Season | Crab Pots: Saltwater", completed: false},
          { id: "box3-m5-s2", name: "Crayfish", season: [SEASONS.ANY], amount: 1, image: "Crab_Pot/Crayfish.png", tooltipText: "Any Season | Crab Pots: Freshwater", completed: false},
          { id: "box3-m5-s3", name: "Crab", season: [SEASONS.ANY], amount: 1, image: "Crab_Pot/Crab.png", tooltipText: "Any Season | Crab Pots: Saltwater OR Occasionally dropped by (Rock/Lava) Crabs in Mines", completed: false},
          { id: "box3-m5-s4", name: "Cockle", season: [SEASONS.ANY], amount: 1, image: "Crab_Pot/Cockle.png", tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging", completed: false},
          { id: "box3-m5-s5", name: "Mussel", season: [SEASONS.ANY], amount: 1, image: "Crab_Pot/Mussel.png", tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging", completed: false},
          { id: "box3-m5-s6", name: "Shrimp", season: [SEASONS.ANY], amount: 1, image: "Crab_Pot/Shrimp.png", tooltipText: "Any Season | Crab Pots: Saltwater", completed: false},
          { id: "box3-m5-s7", name: "Snail", season: [SEASONS.ANY], amount: 1, image: "Crab_Pot/Snail.png", tooltipText: "Any Season | Crab Pots: Freshwater", completed: false},
          { id: "box3-m5-s8", name: "Periwinkle", season: [SEASONS.ANY], amount: 1, image: "Crab_Pot/Periwinkle.png", tooltipText: "Any Season | Crab Pots: Freshwater", completed: false},
          { id: "box3-m5-s9", name: "Oyster", season: [SEASONS.ANY], amount: 1, image: "Crab_Pot/Oyster.png", tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging", completed: false},
          { id: "box3-m5-s10", name: "Clam", season: [SEASONS.ANY], amount: 1, image: "Crab_Pot/Clam.png", tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging", completed: false},
        ],
      },
      {
        id: "box3-m6",
        title: "Specialty Fish",
        required: 6,
        items: [
          { id: "box3-m6-s1", name: "Pufferfish", season: [SEASONS.SUMMER], amount: 1, image: "Specialty_Fish/Pufferfish.png", tooltipText: "Summer | Ocean | Sunny | 12pm-4pm OR Traveling Cart", completed: false},
          { id: "box3-m6-s2", name: "Ghostfish", season: [SEASONS.ANY], amount: 1, image: "Specialty_Fish/Ghostfish.png", tooltipText: "Any Season | Floor (20/60) in Mines | All Day OR Traveling Cart", completed: false},
          { id: "box3-m6-s3", name: "Sandfish", season: [SEASONS.ANY], amount: 1, image: "Specialty_Fish/Sandfish.png", tooltipText: "Any Season | The Desert | Before 8pm OR Traveling Cart", completed: false},
          { id: "box3-m6-s4", name: "Woodskip", season: [SEASONS.ANY], amount: 1, image: "Specialty_Fish/Woodskip.png", tooltipText: "Any Season | Secret Woods | Any Weather | All Day OR Traveling Cart", completed: false},
          { id: "box3-m6-s5", name: "King Salmon", season: [SEASONS.SPRING, SEASONS.SUMMER], amount: 1, image: "Specialty_Fish/King_Salmon.png", tooltipText: "Spring / Summer | Bottom of Forest West | Any Weather | Before 8pm", completed: false},
          { id: "box3-m6-s6", name: "Butterfish", season: [SEASONS.SPRING, SEASONS.SUMMER, SEASONS.FALL], amount: 1, image: "Specialty_Fish/Butterfish.png", tooltipText: "Not Winter | Shearwater Bridge | Sunny | All Day OR Summer | Forest West | Sunny | All Day", completed: false},
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
    smallBox.dataset.seasons = JSON.stringify(item.season);


    // Create image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "small-box-img";

    // Create label (amount + name)
    const label = document.createElement("div");
    label.className = "small-box-label";
    label.textContent = `${item.amount} ${item.name}`;

    // Append image + label
    smallBox.appendChild(img);
    smallBox.appendChild(label);

    // Tooltip text
    smallBox.dataset.tooltipText = item.tooltipText || "";

    smallContainer.appendChild(smallBox);
  });
});
// --- End of Fish Tank (BB3) Code ---

  
  
  
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
          { id: "box4-m1-s1", name: "Copper Bar", season: [SEASONS.ANY], amount: 1, image: "Blacksmith/Copper_Bar.png", tooltipText: "5 Copper into Furnace", completed: false},
          { id: "box4-m1-s2", name: "Iron Bar", season: [SEASONS.ANY], amount: 1, image: "Blacksmith/Iron_Bar.png", tooltipText: "5 Iron into Furnace", completed: false},
          { id: "box4-m1-s3", name: "Gold Bar", season: [SEASONS.ANY], amount: 1, image: "Blacksmith/Gold_Bar.png", tooltipText: "5 Gold into Furnace", completed: false},
        ],
      },
      {
        id: "box4-m2",
        title: "Geologist's",
        required: 4,
        items: [
          { id: "box4-m2-s1", name: "Quartz", season: [SEASONS.ANY], amount: 1, image: "Gelogist/Quartz.png", tooltipText: "Foraging in Mines OR Stone Golems (floors 31–39, 10% Chance)", completed: false},
          { id: "box4-m2-s2", name: "Earth Crystal", season: [SEASONS.ANY], amount: 1, image: "Gelogist/Earth_Crystal.png", tooltipText: "Foraging in Mines (floors 1–39) OR Geodes / Omni-Geodes OR Duggies (10% Chance)", completed: false},
          { id: "box4-m2-s3", name: "Frozen Tear", season: [SEASONS.ANY], amount: 1, image: "Gelogist/Frozen_Tear.png", tooltipText: "Foraging in Mines (floors 41–79) OR Frozen Geodes / Omni-Geodes OR Dust Mites (2% Chance)", completed: false},
          { id: "box4-m2-s4", name: "Fire Quartz", season: [SEASONS.ANY], amount: 1, image: "Gelogist/Fire_Quartz.png", tooltipText: "Foraging in Mines (floors 80+) OR Magma Geodes / Omni-Geodes", completed: false},
        ],
      },
      {
        id: "box4-m3",
        title: "Adventurer's",
        required: 2,
        items: [
          { id: "box4-m3-s1", name: "Slime", season: [SEASONS.ANY], amount: 99, image: "Adventurer/Slime.png", tooltipText: "Killing Slimes in Mines (Any Floor)", completed: false},
          { id: "box4-m3-s2", name: "Bat Wings", season: [SEASONS.ANY], amount: 10, image: "Adventurer/Bat_Wing.png", tooltipText: "Killing Bats in Mines (Any Floor past 30)", completed: false},
          { id: "box4-m3-s3", name: "Solar Essence", season: [SEASONS.ANY], amount: 1, image: "Adventurer/Solar_Essence.png", tooltipText: "Ghosts (51–79) OR Metal Heads (81–119) OR Squid Kids (91–119)", completed: false},
          { id: "box4-m3-s4", name: "Void Essence", season: [SEASONS.ANY], amount: 1, image: "Adventurer/Void_Essence.png", tooltipText: "Shadow Brutes / Shamans (Floors 80+)", completed: false},
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
    smallBox.dataset.seasons = JSON.stringify(item.season);


    // Create image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "small-box-img";

    // Create label
    const label = document.createElement("div");
    label.className = "small-box-label";
    label.textContent = item.name;

    // Append image + label
    smallBox.appendChild(img);
    smallBox.appendChild(label);

    // Tooltip text
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
          { id: "box5-m1-s1", name: "Maple Syrup", season: [SEASONS.ANY], amount: 1, image: "Chef/Maple_Syrup.png", tooltipText: "Placing Tapper on Maple Tree OR Sold from Bear", completed: false},
          { id: "box5-m1-s2", name: "Fiddlehead Fern", season: [SEASONS.SUMMER], amount: 1, image: "Chef/Fiddlehead_Fern.png", tooltipText: "Summer | Foraging in Secret Woods", completed: false},
          { id: "box5-m1-s3", name: "Truffle", season: [SEASONS.SPRING, SEASONS.SUMMER, SEASONS.FALL], amount: 1, image: "Chef/Truffle.png", tooltipText: "Not Winter | Happy Pigs outside", completed: false},
          { id: "box5-m1-s4", name: "Poppy", season: [SEASONS.SUMMER], amount: 1, image: "Chef/Poppy.png", tooltipText: "Summer Crop", completed: false},
          { id: "box5-m1-s5", name: "Maki Roll", season: [SEASONS.ANY], amount: 1, image: "Chef/Maki_Roll.png", tooltipText: "Cooking (need recipe from TV Show) OR Occasionally sold by Gus OR Occasionally sold by Krobus on Saturdays", completed: false},
          { id: "box5-m1-s6", name: "Fried Egg", season: [SEASONS.ANY], amount: 1, image: "Chef/Fried_Egg.png", tooltipText: "Cooking OR Occasionally sold by Gus OR Occasionally sold by Krobus on Saturdays", completed: false},
          { id: "box5-m1-s7", name: "Candy", season: [SEASONS.ANY], amount: 1, image: "Chef/Candy.png", tooltipText: "Cooking (need recipe sold by Gus)", completed: false},
        ],
      },
      {
        id: "box5-m2",
        title: "Fodder",
        required: 3,
        items: [
          { id: "box5-m2-s1", name: "Wheat", season: [SEASONS.SUMMER, SEASONS.FALL], amount: 10, image: "Fodder/Wheat.png", tooltipText: "Summer and Fall Crop", completed: false},
          { id: "box5-m2-s2", name: "Hay", season: [SEASONS.SPRING, SEASONS.SUMMER, SEASONS.FALL], amount: 10, image: "Fodder/Hay.png", tooltipText: "Not Winter | Scything grass when Silo is on the Farm", completed: false},
          { id: "box5-m2-s3", name: "Apple", season: [SEASONS.FALL], amount: 3, image: "Fodder/Apple.png", tooltipText: "Apple trees during Fall OR Fruit Bat Cave on Farm", completed: false},
        ],
      },
      {
        id: "box5-m3",
        title: "Enchanter's",
        required: 5,
        items: [
          { id: "box5-m3-s1", name: "Oak Resin", season: [SEASONS.ANY], amount: 1, image: "Enchanter/Oak_Resin.png", tooltipText: "Placing Tapper on Oak Tree OR Sold from Bear", completed: false},
          { id: "box5-m3-s2", name: "Wine", season: [SEASONS.ANY], amount: 1, image: "Enchanter/Wine.png", tooltipText: "Placing Fruit inside a Keg", completed: false},
          { id: "box5-m3-s3", name: "Rabbit's Foot", season: [SEASONS.ANY], amount: 1, image: "Enchanter/Rabbit's_Foot.png", tooltipText: "Happy Rabbits OR Traveling Cart", completed: false},
          { id: "box5-m3-s4", name: "Pomegranate", season: [SEASONS.FALL], amount: 1, image: "Enchanter/Pomegranate.png", tooltipText: "Pomegranate trees during Fall OR Fruit Bat Cave on Farm", completed: false},
          { id: "box5-m3-s5", name: "Four Leaf Clover", season: [SEASONS.SPRING, SEASONS.SUMMER], amount: 1, image: "Enchanter/Four_Leaf_Clover.png", tooltipText: "Spring / Summer | Secret Woods", completed: false},
        ],
      },
      {
        id: "box5-m4",
        title: "Field Research",
        required: 5,
        items: [
          { id: "box5-m4-s1", name: "Purple Mushroom", season: [SEASONS.ANY], amount: 1, image: "Field_Research/Purple_Mushroom (1).png", tooltipText: "Foraging in caves starting floor 81 OR Mushroom Cave on Farm (rare)", completed: false},
          { id: "box5-m4-s2", name: "Nautilus Shell", season: [SEASONS.WINTER], amount: 1, image: "Field_Research/Nautilus_Shell.png", tooltipText: "Winter | Foraging at the Beach", completed: false},
          { id: "box5-m4-s3", name: "Chub", season: [SEASONS.ANY], amount: 1, image: "Field_Research/Chub.png", tooltipText: "Any Season | Moutain Lake / Forest River | Any Weather | All Day", completed: false},
          { id: "box5-m4-s4", name: "Frozen Geode", season: [SEASONS.ANY], amount: 1, image: "Field_Research/Frozen_Geode.png", tooltipText: "Mining in floors 41-79 OR Treasure from fishing", completed: false},
          { id: "box5-m4-s5", name: "Amber", season: [SEASONS.ANY], amount: 1, image: "Field_Research/Amber.png", tooltipText: "Artifact Spots in The Adventures Summit (most common here) / The Mountain / The Railroad / The Mines", completed: false},
        ],
      },
      {
        id: "box5-m5",
        title: "Dye",
        required: 7,
        items: [
          { id: "box5-m5-s1", name: "Red Mushroom", season: [SEASONS.SUMMER, SEASONS.FALL, SEASONS.ANY], amount: 1, image: "Dye/Red_Mushroom (1).png", tooltipText: "Foraging in caves on mushroom floors (chance to spawn starting floor 81) OR Secret Woods Foragable (Summer/Fall) OR Mushroom Cave on Farm", completed: false},
          { id: "box5-m5-s2", name: "Sea Urchin", season: [SEASONS.ANY, SEASONS.SUMMER], amount: 1, image: "Dye/Sea_Urchin.png", tooltipText: "Any Season | Right of the bridge on the Beach OR Summer | Anywhere on the Beach", completed: false},
          { id: "box5-m5-s3", name: "Sunflower", season: [SEASONS.SUMMER, SEASONS.FALL], amount: 1, image: "Dye/Sunflower.png", tooltipText: "Summer / Fall crop", completed: false},
          { id: "box5-m5-s4", name: "Duck Feather", season: [SEASONS.ANY], amount: 1, image: "Dye/Duck_Feather.png", tooltipText: "Happy Ducks", completed: false},
          { id: "box5-m5-s5", name: "Aquamarine", season: [SEASONS.ANY], amount: 1, image: "Dye/Aquamarine.png", tooltipText: "(Gem Nodes / Aquamarine Nodes) after floor 40" },
          { id: "box5-m5-s6", name: "Red Cabbage", season: [SEASONS.SUMMER], amount: 1, image: "Dye/Red_Cabbage.png", tooltipText: "Summer Crop (sold by Pierre starting year 2) OR seeds sold at Traveling Cart", completed: false},
          { id: "box5-m5-s7", name: "Persimmon", season: [SEASONS.FALL], amount: 1, image: "Dye/Persimmon.png", tooltipText: "Persimmon Trees during Fall", completed: false},
        ],
      },
    ],
  },
];


bulletinBoardData[0].bundles.forEach(bundle => {
  const mediumBox = document.getElementById(bundle.id);
  const titleElement = mediumBox.querySelector(".medium-title");
  titleElement.textContent = `0/${bundle.required} ${bundle.title}`;

  const smallContainer = document.createElement("div");
  smallContainer.className = "small-container";
  mediumBox.appendChild(smallContainer);

  bundle.items.forEach(item => {
    const smallBox = document.createElement("div");
    smallBox.className = "small-box";
    smallBox.id = item.id;
    smallBox.dataset.seasons = JSON.stringify(item.season);


    // Create image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "small-box-img";

    // Create label
    const label = document.createElement("div");
    label.className = "small-box-label";
    label.textContent = item.name;

    // Append image + label
    smallBox.appendChild(img);
    smallBox.appendChild(label);

    // Tooltip
    smallBox.dataset.tooltipText = item.tooltipText || "";

  

    smallContainer.appendChild(smallBox);
  });
});  
  
  
  
  //  ‎ 
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
          { id: "box6-m1-s1", name: "G", season: [SEASONS.ANY], amount: 2500, image: "Vault/2500_Bundle.png", tooltipText: " ‎ ", completed: false},
        ],
      },
      {
        id: "box6-m2",
        title: "G #2",
        required: 1,
        items: [
          { id: "box6-m2-s1", name: "G", season: [SEASONS.ANY], amount: 5000, image: "Vault/5000_Bundle.png", tooltipText: " ‎ ", completed: false},
        ],
      },
      {
        id: "box6-m3",
        title: "G #3",
        required: 1,
        items: [
          { id: "box6-m3-s1", name: "G", season: [SEASONS.ANY], amount: 10000, image: "Vault/10000_Bundle.png", tooltipText: " ‎ ", completed: false},
        ],
      },
      {
        id: "box6-m4",
        title: "G #4",
        required: 1,
        items: [
          { id: "box6-m4-s1", name: "G", season: [SEASONS.ANY], amount: 25000, image: "Vault/25000_Bundle.png", tooltipText: " ‎ ", completed: false},
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
    smallBox.dataset.seasons = JSON.stringify(item.season);


    // Create image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "small-box-img";

    // Create label (amount + name)
    const label = document.createElement("div");
    label.className = "small-box-label";
    label.textContent = `${item.amount} ${item.name}`;

    // Append image + label
    smallBox.appendChild(img);
    smallBox.appendChild(label);

    // Tooltip text
    smallBox.dataset.tooltipText = item.tooltipText || "";

    smallContainer.appendChild(smallBox);
  });
});
// --- End of Vault (BB6) Code ---

 // --- Misc Functions ---

// Add minimize buttons to all Big Boxes
document.querySelectorAll(".big-box").forEach(bigBox => {
  const minimizeButton = document.createElement("button");
  minimizeButton.className = "minimize-button";
  minimizeButton.textContent = "–"; // Start with minus sign

  // Basic positioning
  bigBox.style.position = "relative";
  Object.assign(minimizeButton.style, {
    position: "absolute",
    top: "5px",
    left: "5px",
    width: "25px",
    height: "25px",
    border: "none",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "22px"
  });

  bigBox.appendChild(minimizeButton);

  minimizeButton.addEventListener("click", () => {
    bigBox.classList.toggle("minimized");
    minimizeButton.textContent = bigBox.classList.contains("minimized") ? "+" : "–";
  });
});

// Generate medium and small boxes placeholder
// (Assume your bundle generation code runs elsewhere)

// --- Tooltips (delegated to handle dynamic SBs) ---
document.addEventListener("mouseover", e => {
  const settingsBtn = e.target.closest("#settingsBtn");
  if (!settingsBtn) return;

  tooltip.innerHTML = `<div class="tooltip-header">Open Settings</div>`;
  tooltip.style.display = "block";
});

  
  
  const tooltip = document.createElement("div");
tooltip.className = "tooltip"; // style this in CSS
document.body.appendChild(tooltip);

document.addEventListener("mouseover", e => {
  const smallBox = e.target.closest(".small-box");
  if (!smallBox) return;

  const itemName = smallBox.textContent.replace(/^\d+\s/, '');
  const tooltipText = smallBox.dataset.tooltipText;
  const isVaultItem = smallBox.closest("#box6") !== null;

  if (isVaultItem) {
    tooltip.innerHTML = `<div class="tooltip-header">Vault Bundle</div><div class="tooltip-text">${smallBox.textContent}</div>`;
  } else if (tooltipText && tooltipText.trim() !== "") {
    const sources = tooltipText.split(/\b(?:OR|,|;)\b/i).map(s => s.trim()).filter(s => s.length);
    const sourceListHTML = sources.map(s => `<li>${s}</li>`).join("");
    tooltip.innerHTML = `<div class="tooltip-header">${itemName}</div><div class="tooltip-subheader">Sources</div><hr class="tooltip-divider"><ul class="tooltip-list">${sourceListHTML}</ul>`;
  }
  tooltip.style.display = "block";
});

document.addEventListener("mousemove", e => {
  if (tooltip.style.display === "block") {
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
  }
});

document.addEventListener("mouseout", e => {
  if (e.target.closest(".small-box")) tooltip.style.display = "none";
});

// --- Small Box Completion (delegated) ---
document.addEventListener("click", e => {
  const smallBox = e.target.closest(".small-box");
  if (!smallBox) return;

  const mediumBox = smallBox.closest(".medium-box");
  const titleElement = mediumBox.querySelector(".medium-title");

  smallBox.classList.toggle("completed");
  saveProgress();

  const total = mediumBox.querySelectorAll(".small-box").length;
  const completed = mediumBox.querySelectorAll(".small-box.completed").length;
  const cleanTitle = titleElement.textContent.replace(/^\d+\/\d+\s*/, "");
  titleElement.textContent = `${completed}/${total} ${cleanTitle}`;
});

  
  
// --- Season Filter Handler ---
const selectedSeasons = new Set();
document.querySelectorAll(".season-btn").forEach(btn => {
 
 btn.addEventListener("click", () => {
  const season = btn.dataset.season;
  const seasonClass = season.toLowerCase(); // spring, summer, fall, winter

  if (selectedSeasons.has(season)) {
    selectedSeasons.delete(season);
    btn.classList.remove("active", seasonClass);
  } else {
    selectedSeasons.add(season);
    btn.classList.add("active", seasonClass);
  }

  applySeasonFilter();
});

});

function applySeasonFilter() {
  document.querySelectorAll(".small-box").forEach(box => {
    const itemSeasons = JSON.parse(box.dataset.seasons);
    box.style.display = selectedSeasons.size === 0 ||
                        itemSeasons.includes("Any") ||
                        [...selectedSeasons].some(s => itemSeasons.includes(s)) ? "" : "none";
  });
}
  
  
  

});


/*
THINGS IVE CHANGED

1. Added season sorter to make items only gettable in certain seasons shown

2. Added saving information so reloading the page wont reset your progress

3. Styling for season tracker box


THINGS TO CHANGE BEFORE DEADLINE

1. Make images Files instead of links (was the main goal and i should of done from the start)

2. Progress bar like cod zomvies camo tracker


4. " ? " circle in bottom left corner, explaining changes made and how stuff works

5. " 🤑 " emoji in the bottom right corner, shameless plug to support me (may need to make it a image if the emoji stays italizaed (or js rotate the emoji)

6. Exclusitivty or accessible feature for seasons sorter. 

7. Feild Research purple mushroom and Dye red mushroom file names having a space between them and the (1) (there should be no space)





*/
