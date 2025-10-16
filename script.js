document.addEventListener("DOMContentLoaded", () => {

//Data for the actual items in the boxes  

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
          { id: "box1-m1-s1", name: "Wild Horseradish", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png", tooltipText: "Foraging in Spring OR Spring Seeds (25%)" },
          { id: "box1-m1-s2", name: "Daffodil", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/4/4b/Daffodil.png", tooltipText: "Foraging in Spring OR Spring Seeds (25%) OR Pierre's shop during Flower Dance" },
          { id: "box1-m1-s3", name: "Leek", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png", tooltipText: "Foraging in Spring OR Spring Seeds (25%)" },
          { id: "box1-m1-s4", name: "Dandelion", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/b/b1/Dandelion.png", tooltipText: "Foraging in Spring OR Spring Seeds (25%) OR Pierre's shop during Flower Dance" },
        ],
      },
      {
        id: "box1-m2",
        title: "Summer Foraging",
        required: 4,
        items: [
          { id: "box1-m2-s1", name: "Grape", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png", tooltipText: "Foraging in Summer OR Summer Seeds (33%) OR Grape Starter (Fall Crop)" },
          { id: "box1-m2-s2", name: "Spice Berry", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/c/c6/Spice_Berry.png", tooltipText: "Foraging in Summer OR Summer Seeds (33%) OR Fruit Bat Cave" },
          { id: "box1-m2-s3", name: "Sweet Pea", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/d/d9/Sweet_Pea.png", tooltipText: "Foraging in Summer OR Summer Seeds (33%)" },
          { id: "box1-m2-s4", name: "Red Baneberry", amount: 1, image: "https://i.imgur.com/vcBKLph_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Foraging in Secret Woods during Summer" },
        ],
      },
      {
        id: "box1-m3",
        title: "Fall Foraging",
        required: 5,
        items: [
          { id: "box1-m3-s1", name: "Common Mushroom", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/2/2e/Common_Mushroom.png", tooltipText: "Foraging in Fall OR Fall Seeds (25%)" },
          { id: "box1-m3-s2", name: "Wild Plum", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Wild_Plum.png", tooltipText: "Foraging in Fall OR Fall Seeds (25%)" },
          { id: "box1-m3-s3", name: "Hazelnut", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/3/31/Hazelnut.png", tooltipText: "Foraging in Fall OR Fall Seeds (25%)" },
          { id: "box1-m3-s4", name: "Blackberry", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/2/25/Blackberry.png", tooltipText: "Foraging in Fall OR Fall Seeds (25%)" },
          { id: "box1-m3-s5", name: "Mushroom Colony", amount: 1, image: "https://i.imgur.com/PbxvnYX_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Foraging in Fall (Secret Woods / West Cindersap / Jumino Woods)" },
        ],
      },
      {
        id: "box1-m4",
        title: "Winter Foraging",
        required: 5,
        items: [
          { id: "box1-m4-s1", name: "Winter Root", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/1/11/Winter_Root.png", tooltipText: "Foraging in Winter OR Winter Seeds (25%) OR Winter Tilling" },
          { id: "box1-m4-s2", name: "Crystal Fruit", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/1/16/Crystal_Fruit.png", tooltipText: "Foraging in Winter OR Winter Seeds (25%)" },
          { id: "box1-m4-s3", name: "Snow Yam", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/3/3f/Snow_Yam.png", tooltipText: "Foraging in Winter OR Winter Seeds (25%) OR Winter Tilling" },
          { id: "box1-m4-s4", name: "Crocus", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Crocus.png", tooltipText: "Foraging in Winter OR Winter Seeds (25%)" },
          { id: "box1-m4-s5", name: "Bearberry", amount: 1, image: "https://i.imgur.com/chGc2Og_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Foraging in Secret Woods during Winter" },
        ],
      },
      {
        id: "box1-m5",
        title: "Construction",
        required: 4,
        items: [
          { id: "box1-m5-s1", name: "Wood", amount: 499, image: "https://stardewvalleywiki.com/mediawiki/images/d/df/Wood.png", tooltipText: "Chopping trees OR Crates in mines" },
          { id: "box1-m5-s2", name: "Clay", amount: 10, image: "https://stardewvalleywiki.com/mediawiki/images/a/a2/Clay.png", tooltipText: "Tilling ground" },
          { id: "box1-m5-s3", name: "Stone", amount: 199, image: "https://stardewvalleywiki.com/mediawiki/images/d/d4/Stone.png", tooltipText: "Mining rocks" },
          { id: "box1-m5-s4", name: "Hardwood", amount: 30, image: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png", tooltipText: "Mahogany Trees OR Large Stumps/Logs OR Crates in mines" },
        ],
      },
      {
        id: "box1-m6",
        title: "Exotic Foraging",
        required: 8,
        items: [
          { id: "box1-m6-s1", name: "Coconut", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Coconut.png", tooltipText: "Foraging in Calico Desert" },
          { id: "box1-m6-s2", name: "Cactus Fruit", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png", tooltipText: "Foraging in Calico Desert" },
          { id: "box1-m6-s3", name: "Cave Carrot", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/3/34/Cave_Carrot.png", tooltipText: "Tilling in mines" },
          { id: "box1-m6-s4", name: "Red Mushroom", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Red_Mushroom.png", tooltipText: "Foraging in caves on mushroom floors (starting floor 81) OR Secret Woods OR Mushroom Cave on Farm" },
          { id: "box1-m6-s5", name: "Purple Mushroom", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/4/4b/Purple_Mushroom.png", tooltipText: "Foraging in caves starting floor 81 OR Mushroom Cave on Farm (rare)" },
          { id: "box1-m6-s6", name: "Fir Wax", amount: 1, image: "https://i.imgur.com/HxkHTUj_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Placing Tapper on Fir Tree OR Sold from Bear" },
          { id: "box1-m6-s7", name: "Birch Water", amount: 1, image: "https://i.imgur.com/2HZiSgc_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Placing Tapper on Birch Tree OR Sold from Bear" },
          { id: "box1-m6-s8", name: "Pine Tar", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/c/ce/Pine_Tar.png", tooltipText: "Placing Tapper on Pine Tree OR Sold from Bear" },
        ],
      },
    ],
  },
];

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
          { id: "box2-m1-s1", name: "Parsnip", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png", tooltipText: "Spring Crop" },
          { id: "box2-m1-s2", name: "Green Bean", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png", tooltipText: "Spring Crop" },
          { id: "box2-m1-s3", name: "Cauliflower", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png", tooltipText: "Spring Crop" },
          { id: "box2-m1-s4", name: "Potato", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png", tooltipText: "Spring Crop" },
          { id: "box2-m1-s5", name: "Cucumber", amount: 1, image: "https://i.imgur.com/YG9296O_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Spring Crop" },
        ],
      },
      {
        id: "box2-m2",
        title: "Summer Crops",
        required: 5,
        items: [
          { id: "box2-m2-s1", name: "Tomato", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png", tooltipText: "Summer Crop" },
          { id: "box2-m2-s2", name: "Hot Pepper", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png", tooltipText: "Summer Crop" },
          { id: "box2-m2-s3", name: "Blueberry", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png", tooltipText: "Summer Crop" },
          { id: "box2-m2-s4", name: "Melon", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png", tooltipText: "Summer Crop" },
          { id: "box2-m2-s5", name: "Butternut Squash", amount: 1, image: "https://i.imgur.com/YbvyJxf_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Summer Crop" },
        ],
      },
      {
        id: "box2-m3",
        title: "Fall Crops",
        required: 5,
        items: [
          { id: "box2-m3-s1", name: "Corn", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png", tooltipText: "Summer Crop OR Fall Crop" },
          { id: "box2-m3-s2", name: "Eggplant", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png", tooltipText: "Fall Crop" },
          { id: "box2-m3-s3", name: "Pumpkin", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png", tooltipText: "Fall Crop" },
          { id: "box2-m3-s4", name: "Yam", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/5/52/Yam.png", tooltipText: "Fall Crop" },
          { id: "box2-m3-s5", name: "Sweet Potato", amount: 1, image: "https://i.imgur.com/bdKAySr_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Fall Crop" },
        ],
      },
      {
        id: "box2-m4",
        title: "Quality Crops",
        required: 5,
        items: [
          { id: "box2-m4-s1", name: "Gold quality Parsnip", amount: 5, image: "https://stardewvalleywiki.com/mediawiki/images/d/db/Parsnip.png", tooltipText: "Spring Crop" },
          { id: "box2-m4-s2", name: "Gold quality Melon", amount: 5, image: "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png", tooltipText: "Summer Crop" },
          { id: "box2-m4-s3", name: "Gold quality Pumpkin", amount: 5, image: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png", tooltipText: "Fall Crop" },
          { id: "box2-m4-s4", name: "Gold quality Corn", amount: 5, image: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png", tooltipText: "Summer Crop OR Fall Crop" },
          { id: "box2-m4-s5", name: "Gold quality Cucumber", amount: 5, image: "https://i.imgur.com/YG9296O_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Spring Crop" },
          { id: "box2-m4-s6", name: "Gold quality Butternut Squash", amount: 5, image: "https://i.imgur.com/YbvyJxf_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Summer Crop" },
          { id: "box2-m4-s7", name: "Gold quality Sweet Potato", amount: 5, image: "https://i.imgur.com/bdKAySr_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Fall Crop" },
        ],
      },
      {
        id: "box2-m5",
        title: "Animal",
        required: 5,
        items: [
          { id: "box2-m5-s1", name: "Large Milk", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/6/67/Large_Milk.png", tooltipText: "Happy Cows" },
          { id: "box2-m5-s2", name: "Large Goat Milk", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Large_Goat_Milk.png", tooltipText: "Happy Goats" },
          { id: "box2-m5-s3", name: "Wool", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/3/34/Wool.png", tooltipText: "Rabbits OR Sheep" },
          { id: "box2-m5-s4", name: "Duck Egg", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/3/31/Duck_Egg.png", tooltipText: "Ducks" },
          { id: "box2-m5-s5", name: "Large Egg (white)", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/5/5d/Large_Egg.png", tooltipText: "Happy White Chickens" },
          { id: "box2-m5-s6", name: "Large Egg (brown)", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/9/91/Large_Brown_Egg.png", tooltipText: "Happy Brown Chickens" },
        ],
      },
      {
        id: "box2-m6",
        title: "Artisan",
        required: 8,
        items: [
          { id: "box2-m6-s1", name: "Truffle Oil", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/3/3d/Truffle_Oil.png", tooltipText: "Truffle (from pigs) in Oil Maker" },
          { id: "box2-m6-s2", name: "Cloth", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/5/51/Cloth.png", tooltipText: "Wool in Loom" },
          { id: "box2-m6-s3", name: "Goat Cheese", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/c/c8/Goat_Cheese.png", tooltipText: "Goat Milk in Cheese Press" },
          { id: "box2-m6-s4", name: "Cheese", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/a/a5/Cheese.png", tooltipText: "Milk in Cheese Press" },
          { id: "box2-m6-s5", name: "Honey", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/c/c6/Honey.png", tooltipText: "Bee House (Except in Winter)" },
          { id: "box2-m6-s6", name: "Jelly", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/0/05/Jelly.png", tooltipText: "Putting any fruit into a Preserves Jar" },
          { id: "box2-m6-s7", name: "Apricot", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Apricot.png", tooltipText: "Apricot Tree (During Spring) OR Fruit Bat Farm Cave" },
          { id: "box2-m6-s8", name: "Orange", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/4/43/Orange.png", tooltipText: "Orange Tree (During Summer) OR Fruit Bat Farm Cave" },
          { id: "box2-m6-s9", name: "Pear", amount: 1, image: "https://i.imgur.com/LXf5KmR_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Pear Tree (During Spring)" },
          { id: "box2-m6-s10", name: "Nectarine", amount: 1, image: "https://i.imgur.com/9pY4s9t_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Nectarine Tree (During Summer)" },
          { id: "box2-m6-s11", name: "Butter", amount: 1, image: "https://i.imgur.com/tB6RZ1D_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Any Milk into Butter Churner" },
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
          { id: "box3-m1-s1", name: "Sunfish", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/5/56/Sunfish.png", tooltipText: "Spring / Summer | Rivers | Not Raining | Before 7pm" },
          { id: "box3-m1-s2", name: "Catfish", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/9/99/Catfish.png", tooltipText: "Spring / Fall | Rivers | Raining | Before 12am OR Any Season | Secret Woods | Raining | Before 12am" },
          { id: "box3-m1-s3", name: "Shad", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/e/ef/Shad.png", tooltipText: "Not Winter | Rivers | Raining | 9am - 2am" },
          { id: "box3-m1-s4", name: "Tiger Trout", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/0/01/Tiger_Trout.png", tooltipText: "Fall / Winter | Rivers | Any Weather | Before 7pm" },
          { id: "box3-m1-s5", name: "Minnow", amount: 1, image: "https://i.imgur.com/zRp6rWB_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Any Season | Any Freshwater (except Adventurer's Summit & Farm) | Any Weather| Before 6pm OR Not Winter | Any Freshwater | Any Weather | Before 6pm" },
          { id: "box3-m1-s6", name: "Goldfish", amount: 1, image: "https://i.imgur.com/6zVbLZZ_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Spring | Bluemoon Vineyard River / Pelican Town | Sunny Weather | 10am - 5pm" },
        ],
      },
      {
        id: "box3-m2",
        title: "Lake Fish",
        required: 5,
        items: [
          { id: "box3-m2-s1", name: "Largemouth Bass", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/1/11/Largemouth_Bass.png", tooltipText: "Any Season | Mountain Lake | Any Weather | Before 7pm" },
          { id: "box3-m2-s2", name: "Carp", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/a/a8/Carp.png", tooltipText: "Any Season | Secret Woods / Sewers | Any Weather | All Day OR Not Winter | Mountain Lake | Any Weather | All Day" },
          { id: "box3-m2-s3", name: "Bullhead", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/d/db/Bullhead.png", tooltipText: "Any Season | Mountain Lake | Any Weather | All Day" },
          { id: "box3-m2-s4", name: "Sturgeon", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/4/42/Sturgeon.png", tooltipText: "Summer / Winter | Mountain Lake | Any Weather | Before 7pm" },
          { id: "box3-m2-s5", name: "Tadpole", amount: 1, image: "https://i.imgur.com/IWjBBCo_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Spring / Summer | Mountain Lake | Any Weather | All Day" },
        ],
      },
      {
        id: "box3-m3",
        title: "Ocean Fish",
        required: 5,
        items: [
          { id: "box3-m3-s1", name: "Sardine", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/0/04/Sardine.png", tooltipText: "Not Summer | Ocean | Any Weather | Before 7pm" },
          { id: "box3-m3-s2", name: "Tuna", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/c/c5/Tuna.png", tooltipText: "Summer / Winter | Ocean | Any Weather | Before 7pm" },
          { id: "box3-m3-s3", name: "Red Snapper", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/d/d3/Red_Snapper.png", tooltipText: "Not Spring | Ocean | Rain | Before 7pm" },
          { id: "box3-m3-s4", name: "Tilapia", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/7/73/Tilapia.png", tooltipText: "Summer / Fall | Ocean | Any Weather | Before 2pm" },
          { id: "box3-m3-s5", name: "Starfish", amount: 1, image: "https://i.imgur.com/pfoghZG_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Not Fall | Beach (Ocean) | Any Weather | Before 10pm" },
        ],
      },
      {
        id: "box3-m4",
        title: "Night Fishing",
        required: 4,
        items: [
          { id: "box3-m4-s1", name: "Walleye", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/0/05/Walleye.png", tooltipText: "Fall / Winter | Rivers / Mountain Lake | Rain | 12pm-2am" },
          { id: "box3-m4-s2", name: "Bream", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png", tooltipText: "Any Season | Rivers | Any Weather | 6pm-2am" },
          { id: "box3-m4-s3", name: "Eel", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/9/91/Eel.png", tooltipText: "Spring / Fall | Ocean | Rain | 4pm-2am" },
          { id: "box3-m4-s4", name: "Frog", amount: 1, image: "https://i.imgur.com/jcQoBz3_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Spring / Summer | Mountain Lake | Rain | 6pm-2am" },
        ],
      },
      {
        id: "box3-m5",
        title: "Crab Pot",
        required: 10,
        items: [
          { id: "box3-m5-s1", name: "Lobster", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/9/9f/Lobster.png", tooltipText: "Any Season | Crab Pots: Saltwater" },
          { id: "box3-m5-s2", name: "Crayfish", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/5/53/Crayfish.png", tooltipText: "Any Season | Crab Pots: Freshwater" },
          { id: "box3-m5-s3", name: "Crab", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/6/63/Crab.png", tooltipText: "Any Season | Crab Pots: Saltwater OR Occasionally dropped by (Rock/Lava) Crabs in Mines" },
          { id: "box3-m5-s4", name: "Cockle", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/a/ad/Cockle.png", tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging" },
          { id: "box3-m5-s5", name: "Mussel", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Mussel.png", tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging" },
          { id: "box3-m5-s6", name: "Shrimp", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/9/91/Shrimp.png", tooltipText: "Any Season | Crab Pots: Saltwater" },
          { id: "box3-m5-s7", name: "Snail", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/d/d2/Snail.png", tooltipText: "Any Season | Crab Pots: Freshwater" },
          { id: "box3-m5-s8", name: "Periwinkle", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Periwinkle.png", tooltipText: "Any Season | Crab Pots: Freshwater" },
          { id: "box3-m5-s9", name: "Oyster", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/5/54/Oyster.png", tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging" },
          { id: "box3-m5-s10", name: "Clam", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Clam.png", tooltipText: "Any Season | Crab Pots: Saltwater OR Beach Foraging" },
        ],
      },
      {
        id: "box3-m6",
        title: "Specialty Fish",
        required: 6,
        items: [
          { id: "box3-m6-s1", name: "Pufferfish", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/b/ba/Pufferfish.png", tooltipText: "Summer | Ocean | Sunny | 12pm-4pm OR Traveling Cart" },
          { id: "box3-m6-s2", name: "Ghostfish", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/7/72/Ghostfish.png", tooltipText: "Any Season | Floor (20/60) in Mines | All Day OR Traveling Cart" },
          { id: "box3-m6-s3", name: "Sandfish", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/b/bb/Sandfish.png", tooltipText: "Any Season | The Desert | Before 8pm OR Traveling Cart" },
          { id: "box3-m6-s4", name: "Woodskip", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/9/97/Woodskip.png", tooltipText: "Any Season | Secret Woods | Any Weather | All Day OR Traveling Cart" },
          { id: "box3-m6-s5", name: "King Salmon", amount: 1, image: "https://i.imgur.com/qzAAfED_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Spring / Summer | Bottom of Forest West | Any Weather | Before 8pm" },
          { id: "box3-m6-s6", name: "Butterfish", amount: 1, image: "https://i.imgur.com/8bMKbYe_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Not Winter | Shearwater Bridge | Sunny | All Day OR Summer | Forest West | Sunny | All Day" },
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
          { id: "box4-m1-s1", name: "Copper Bar", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Copper_Bar.png", tooltipText: "5 Copper into Furnace" },
          { id: "box4-m1-s2", name: "Iron Bar", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/6/6c/Iron_Bar.png", tooltipText: "5 Iron into Furnace" },
          { id: "box4-m1-s3", name: "Gold Bar", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Gold_Bar.png", tooltipText: "5 Gold into Furnace" },
        ],
      },
      {
        id: "box4-m2",
        title: "Geologist's",
        required: 4,
        items: [
          { id: "box4-m2-s1", name: "Quartz", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Quartz.png", tooltipText: "Foraging in Mines OR Stone Golems (floors 31–39, 10% Chance)" },
          { id: "box4-m2-s2", name: "Earth Crystal", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/7/74/Earth_Crystal.png", tooltipText: "Foraging in Mines (floors 1–39) OR Geodes / Omni-Geodes OR Duggies (10% Chance)" },
          { id: "box4-m2-s3", name: "Frozen Tear", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/e/ec/Frozen_Tear.png", tooltipText: "Foraging in Mines (floors 41–79) OR Frozen Geodes / Omni-Geodes OR Dust Mites (2% Chance)" },
          { id: "box4-m2-s4", name: "Fire Quartz", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/5/5b/Fire_Quartz.png", tooltipText: "Foraging in Mines (floors 80+) OR Magma Geodes / Omni-Geodes" },
        ],
      },
      {
        id: "box4-m3",
        title: "Adventurer's",
        required: 2,
        items: [
          { id: "box4-m3-s1", name: "Slime", amount: 99, image: "https://stardewvalleywiki.com/mediawiki/images/3/38/Slime.png", tooltipText: "Killing Slimes in Mines (Any Floor)" },
          { id: "box4-m3-s2", name: "Bat Wings", amount: 10, image: "https://stardewvalleywiki.com/mediawiki/images/3/35/Bat_Wing.png", tooltipText: "Killing Bats in Mines (Any Floor past 30)" },
          { id: "box4-m3-s3", name: "Solar Essence", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/f/f4/Solar_Essence.png", tooltipText: "Ghosts (51–79) OR Metal Heads (81–119) OR Squid Kids (91–119)" },
          { id: "box4-m3-s4", name: "Void Essence", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/1/1f/Void_Essence.png", tooltipText: "Shadow Brutes / Shamans (Floors 80+)" },
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
          { id: "box5-m1-s1", name: "Maple Syrup", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/6/6a/Maple_Syrup.png", tooltipText: "Placing Tapper on Maple Tree OR Sold from Bear" },
          { id: "box5-m1-s2", name: "Fiddlehead Fern", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/4/48/Fiddlehead_Fern.png", tooltipText: "Summer | Foraging in Secret Woods" },
          { id: "box5-m1-s3", name: "Truffle", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Truffle.png", tooltipText: "Not Winter | Happy Pigs outside" },
          { id: "box5-m1-s4", name: "Poppy", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png", tooltipText: "Summer Crop" },
          { id: "box5-m1-s5", name: "Maki Roll", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/b/b6/Maki_Roll.png", tooltipText: "Cooking (need recipe from TV Show) OR Occasionally sold by Gus OR Occasionally sold by Krobus on Saturdays" },
          { id: "box5-m1-s6", name: "Fried Egg", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/1/18/Fried_Egg.png", tooltipText: "Cooking OR Occasionally sold by Gus OR Occasionally sold by Krobus on Saturdays" },
          { id: "box5-m1-s7", name: "Candy", amount: 1, image: "https://i.imgur.com/D7eF9MR_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Cooking (need recipe sold by Gus)" },
        ],
      },
      {
        id: "box5-m2",
        title: "Fodder",
        required: 3,
        items: [
          { id: "box5-m2-s1", name: "Wheat", amount: 10, image: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Wheat.png", tooltipText: "Summer and Fall Crop" },
          { id: "box5-m2-s2", name: "Hay", amount: 10, image: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Hay.png", tooltipText: "Not Winter | Scything grass when Silo is on the Farm" },
          { id: "box5-m2-s3", name: "Apple", amount: 3, image: "https://stardewvalleywiki.com/mediawiki/images/7/7d/Apple.png", tooltipText: "Apple trees during Fall OR Fruit Bat Cave on Farm" },
        ],
      },
      {
        id: "box5-m3",
        title: "Enchanter's",
        required: 5,
        items: [
          { id: "box5-m3-s1", name: "Oak Resin", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/4/40/Oak_Resin.png", tooltipText: "Placing Tapper on Oak Tree OR Sold from Bear" },
          { id: "box5-m3-s2", name: "Wine", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/6/69/Wine.png", tooltipText: "Placing Fruit inside a Keg" },
          { id: "box5-m3-s3", name: "Rabbit's Foot", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/c/ca/Rabbit%27s_Foot.png", tooltipText: "Happy Rabbits OR Traveling Cart" },
          { id: "box5-m3-s4", name: "Pomegranate", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Pomegranate.png", tooltipText: "Pomegranate trees during Fall OR Fruit Bat Cave on Farm" },
          { id: "box5-m3-s5", name: "Four Leaf Clover", amount: 1, image: "https://i.imgur.com/tMbGSwi_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Spring / Summer | Secret Woods" },
        ],
      },
      {
        id: "box5-m4",
        title: "Field Research",
        required: 5,
        items: [
          { id: "box5-m4-s1", name: "Purple Mushroom", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/4/4b/Purple_Mushroom.png", tooltipText: "Foraging in caves starting floor 81 OR Mushroom Cave on Farm (rare)" },
          { id: "box5-m4-s2", name: "Nautilus Shell", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Nautilus_Shell.png", tooltipText: "Winter | Foraging at the Beach" },
          { id: "box5-m4-s3", name: "Chub", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/b/bd/Chub.png", tooltipText: "Any Season | Moutain Lake / Forest River | Any Weather | All Day" },
          { id: "box5-m4-s4", name: "Frozen Geode", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/b/bf/Frozen_Geode.png", tooltipText: "Mining in floors 41-79 OR Treasure from fishing" },
          { id: "box5-m4-s5", name: "Amber", amount: 1, image: "https://i.imgur.com/3vKMwCh_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Artifact Spots in The Adventures Summit (most common here) / The Mountain / The Railroad / The Mines" },
        ],
      },
      {
        id: "box5-m5",
        title: "Dye",
        required: 7,
        items: [
          { id: "box5-m5-s1", name: "Red Mushroom", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/e/e1/Red_Mushroom.png", tooltipText: "Foraging in caves on mushroom floors (chance to spawn starting floor 81) OR Secret Woods Foragable (Summer/Fall) OR Mushroom Cave on Farm" },
          { id: "box5-m5-s2", name: "Sea Urchin", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/e/e7/Sea_Urchin.png", tooltipText: "Any Season | Right of the bridge on the Beach OR Summer | Anywhere on the Beach" },
          { id: "box5-m5-s3", name: "Sunflower", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/8/81/Sunflower.png", tooltipText: "Summer / Fall crop" },
          { id: "box5-m5-s4", name: "Duck Feather", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/f/f9/Duck_Feather.png", tooltipText: "Happy Ducks" },
          { id: "box5-m5-s5", name: "Aquamarine", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/a/a2/Aquamarine.png", tooltipText: "(Gem Nodes / Aquamarine Nodes) after floor 40" },
          { id: "box5-m5-s6", name: "Red Cabbage", amount: 1, image: "https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png", tooltipText: "Summer Crop (sold by Pierre starting year 2) OR seeds sold at Traveling Cart" },
          { id: "box5-m5-s7", name: "Persimmon", amount: 1, image: "https://i.imgur.com/3tK0TvC_d.webp?maxwidth=760&fidelity=grand", tooltipText: "Persimmon Trees during Fall" },
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
          { id: "box6-m1-s1", name: "G", amount: 2500, image: "https://stardewvalleywiki.com/mediawiki/images/e/e2/2500_Bundle.png", tooltipText: " ‎ " },
        ],
      },
      {
        id: "box6-m2",
        title: "G #2",
        required: 1,
        items: [
          { id: "box6-m2-s1", name: "G", amount: 5000, image: "https://stardewvalleywiki.com/mediawiki/images/1/17/5000_Bundle.png", tooltipText: " ‎ " },
        ],
      },
      {
        id: "box6-m3",
        title: "G #3",
        required: 1,
        items: [
          { id: "box6-m3-s1", name: "G", amount: 10000, image: "https://stardewvalleywiki.com/mediawiki/images/1/11/10000_Bundle.png", tooltipText: " ‎ " },
        ],
      },
      {
        id: "box6-m4",
        title: "G #4",
        required: 1,
        items: [
          { id: "box6-m4-s1", name: "G", amount: 25000, image: "https://stardewvalleywiki.com/mediawiki/images/a/a7/25000_Bundle.png", tooltipText: " ‎ " },
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

  
  // Misc Functions
  
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



  
  
    // Generate medium and small boxes !! DO NOT TOUCH THIS !!
  const bigBox = document.getElementById("box1");
  const mediumContainer = bigBox.querySelector(".medium-container");

  
  
  
  
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
document.addEventListener("click", (event) => {
  const smallBox = event.target.closest(".small-box");
  if (!smallBox) return; // clicked outside any small box

  const mediumBox = smallBox.closest(".medium-box");
  const titleElement = mediumBox.querySelector(".medium-title");

  // Toggle completion
  smallBox.classList.toggle("completed");

  // Count progress
  const totalRequired = mediumBox.querySelectorAll(".small-box").length;
  const completedCount = mediumBox.querySelectorAll(".small-box.completed").length;

  const titleText = titleElement.textContent.replace(/^\d+\/\d+\s*/, "");
  titleElement.textContent = `${completedCount}/${totalRequired} ${titleText}`;
});
// --- End of Small Box Completion Code ---

  
  
  
  
  
  

});