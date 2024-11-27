let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});

let gamesJSON = [
  {
    "title": "Soul Snatcher",
    "description": "A turn-based strategy roguelike where the player gains the abilities of defeated enemies.",
    "image": "SoulSnatcher.png",
    "link": "https://teddyclark.itch.io/soul-snatcher",
    "colorBackground": "#4CAF50"
  },
  {
    "title": "Space Turret",
    "description": "Press space to shoot.",
    "image": "SpaceTurret.png",
    "link": "https://novany.itch.io/space-turret",
    "colorBackground": "#FF5722"
  },
  {
    "title": "Inky Escape",
    "description": "Escape the facility using ink to swim on the walls.",
    "image": "InkyEscape.png",
    "link": "https://scuffedpotatoes.itch.io/inky-escape",
    "colorBackground": "#8BC34A"
  },
  {
    "title": "Skeet Shooting",
    "description": "Toggle Game Feel!",
    "image": "SkeetShooting.png",
    "link": "https://justincai.itch.io/arcade-skeet-shooting",
    "colorBackground": "#8D775F"
  },
  {
    "title": "Kitsune Outfoxed",
    "description": "Solve puzzles to outfox your adversary!",
    "image": "KitsuneOutfoxed.png",
    "link": "https://scuffedpotatoes.itch.io/kitsuneoutfoxed",
    "colorBackground": "#A71D31"
  },
]

function createGridItem(gameData) {
  let gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridItem.style.backgroundColor = gameData.colorBackground;

  let newContentHeading = document.createElement('h3');
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = gameData.title;
  gridItem.appendChild(newContentHeading);

  let imgElement = document.createElement('img');
  imgElement.src = gameData.image;
  imgElement.style.width = "100%"; 
  gridItem.appendChild(imgElement);

  let newContentDescription = document.createElement('p');
  newContentDescription.classList.add('contentDescription');
  newContentDescription.innerText = gameData.description;
  gridItem.appendChild(newContentDescription);

  let link = document.createElement('a');
  link.href = gameData.link;
  link.innerText = "Play Now";
  link.style.color = "darkBlue";
  gridItem.appendChild(link);

  contentGridElement.appendChild(gridItem);

  msnry.appended(gridItem);
}

imagesLoaded(contentGridElement, function () {
  msnry.layout();
});

gamesJSON.forEach((gameData) => createGridItem(gameData));