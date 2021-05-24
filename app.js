const button = document.querySelector('.button');
const output = document.querySelector('#output');
const picture = document.querySelector('.animal');
const panda = document.querySelector('.panda');
const card = document.querySelector('.card')
const front = document.querySelector('.front');

// List of animals to donate to
const animal_list = {
    0 : "African-Black-Footed-Penguin",
    1 : "African-Elephant",
    2 : "African-Elephant-Calf",
    3 : "African-Rhino", 
    4 : "African-Rhino-Calf",
    5 : "African-Wild-Dog",
    6 : "African-Wild-Dog-Pup",
    7 : "Amur-Leopard",
    8 : "Amur-Tiger",
    9 : "Andaconda", 
    10 : "Arctic-Fox",
    11 : "Arctic-Hare",
    12 : "Arctic-Wolf",
    13 : "Baby-Orangutan",
    14 : "Bactrian-Camel",
    15 : "Barn-Owl",
    16 : "Beluga-Whale",
    17 : "Bison",
    18 : "Bison-Calf",
    19 : "Black-Jaguar",
    20 : "Black-Footed-Cat",
    21 : "Black-Footed-Ferret", 
    22 : "Blue-Whale",
    23 : "Blue-Footed-Bobby",
    24 : "Bumblebee",
    25 : "California-Condor",
    26 : "Capuchin-Monkey",
    27 : "Capybara",
    28 : "Cheetah",
    29 : "Chimpanzee",
    30 : "Chinstrap-Penguin", 
    31 : "Clouded-Leopard",
    32 : "Cottontop-Tamarin",
    33 : "Cougar",
    34 : "Darwin's-Fox",
    35 : "Dolphin",
    36 : "Duck-Billed-Platypus",
    37 : "Eagle",
    38 : "Elephant-Seal",
    39 : "Emerald-Hummingbird",
    40 : "Emperor-Penguin", 
    41 : "Emperor-Penguin-Chick",
    42 : "Emperor-Tamarin", 
    43 : "Female-Orangutan", 
    44 : "Fennec-Fox", 
    45 : "Flamingo", 
    46 : "Fossa",
    47 : "Frog", 
    48 : "Gentoo-Penguin",
    49 : "Giant-Tortoise",
    50 : "Giraffe",
    51 : "Golden-Eagle",
    52 : "Golden-Lion-Tamarin", 
    53 : "Gorilla", 
    54 : "Gray-Wolf",
    55 : "Great-White-Shark",
    56 : "Green-Turtle",
    57 : "Grizzly-Bear",
    58 : "Hammerhead-Shark",
    59 : "Harbor-Seal",
    60 : "Harpy-Eagle",
    61 : "Hawksbill-Bale",
    62 : "Hedgehog", 
    63 : "Hippopotamus", 
    64 : "Honey-Badger",
    65 : "Honeybee",
    66 : "Humpback-Whale",
    67 : "Jaguar",
    68 : "Jerboa", 
    69 : "Kangaroo",
    70 : "Kingfisher",
    71 : "Koala", 
    72 : "Komodo-Dragon", 
    73 : "Ladybug", 
    74 : "Leopard",
    75 : "Leopard-Shark",
    76 : "Lion",
    77 : "Lion-Cub", 
    78 : "Lioness", 
    79 : "Llama", 
    80 : "Loggerhead-Turtle",
    81 : "Lynx", 
    82 : "Macaw",
    83 : "Male-Orangutan",
    84 : "Manatee",
    85 : "Meerkat",
    86 : "Monarch-Butterfly", 
    87 : "Moose",
    88 : "Mouse-Lemur",
    89 : "Musk-Ox", 
    90 : "Narwhal",
    91 : "Ocelot", 
    92 : "Octopus", 
    93 : "Okapi",
    94 : "Orca",
    95 : "Panda",
    96 : "Pangolin",
    97 : "Peacock",
    98 : "Polar-Bear",
    99 : "Praire-Dog",
    100 : "Pronghorn-Antelope",
    101 : "Przewalski's-Horse",
    102 : "Pygmy-Elephant",
    103 : "Pygmy-Rabbit",
    104 : "Quokka",
    105 : "Red-Fox", 
    106 : "Red-Maned-Wolf",
    107 : "Red-Panda",
    108 : "Red-Footed-Booby",
    109 : "Ring-Tailed-Lemur",
    110 : "River-Otter",
    111 : "Sea-Lion",
    112 : "Sea-Otter",
    113 : "Sea-Turtle-Hatchling",
    114 : "Seahorse",
    115 : "Serval", 
    116 : "Sloth-Bear",
    117 : "Slow-Loris", 
    118 : "Snow-Leopard",
    119 : "Snowy-Owl", 
    120 : "Spotted-Turtle", 
    121 : "Sturgeon",
    122 : "Sumatran-Rhino",
    123 : "Tarantula",
    124 : "Tasmanian-Devil", 
    125 : "Three-Toed-Sloth",
    126 : "Tiger",
    127 : "Two-Toed-Sloth", 
    128 : "Vampire-Bat", 
    129 : "Vaquita", 
    130 : "Wallaby", 
    131 : "Walrus", 
    132 : "Warthog",
    133 : "Whale-Shark", 
    134 : "Wolverine", 
    135 : "Wombat", 
    136 : "Woodpecker",
    137 : "Zebra" 
}

// These set the images and fixes the animation 
function set_animal(animal) {
    card.classList.add('flipped');
    panda.style.animationIterationCount = "1";
    picture.src = `images/${animal}.jpg`;
    card.style.transform = "rotateY(180deg)";
}
function set_panda(animal) {
    card.classList.remove('flipped');
    panda.src = `images/${animal}.jpg`;
    card.style.transform = "rotateY(0deg)";
}
function image_set(animal) {
    if (card.classList.contains('flipped')) {
        set_panda(animal);
    }
    else {
        set_animal(animal);
    }

}

function get_animal(randInt) {
    return animal_list[randInt];
}
function get_url(randInt) {
    let url = `https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/${get_animal(randInt)}.aspx`
    return url;
}

button.addEventListener('click', function() {
    // These two functions both use the same random number to return a url and animal name
    let randInt = Math.floor(Math.random()*Object.keys(animal_list).length);
    let animal = get_animal(randInt);

    image_set(animal);
    output.innerHTML = `Your chosen animal is the <span>${animal}</span>. They call upon you for help. Click the link down below to help.<br></br><a href="${get_url(randInt)}" target="_blank">${get_url(randInt)}</a>`
})

