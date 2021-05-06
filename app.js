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
    16 : "Beloga-Whale",
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
    21 : "Clouded-Leopard",
    22 : "Cottontop-Tamarin",
    23 : "Cougar",
    24 : "Darwin's-Fox",
    25 : "Dolphin",
    26 : "Duck-Billed-Platypus",
    27 : "Eagle",
    28 : "Elephant-Seal",
    29 : "Emerald-Hummingbird",
    30 : "Emperor-Penguin", 
    31 : "Emperor-Penguin-Chick",
    32 : "Emperpor-Tamarin", 
    33 : "Female-Orangutan", 
    34 : "Fennec-Fox", 
    35 : "Flamingo", 
    36 : "Fossa",
    37 : "Frog", 
    38 : "Gentoo-Penguin",
    39 : "Giant-Tortoise",
    40 : "Giraffe",
    41 : "Golden-Eagle",
    42 : "Golden-Lion-Tamarin", 
    43 : "Gorilla", 
    44 : "Gray-Wolf",
    45 : "Great-White-Shark",
    46 : "Green-Turtle",
    47 : "Grizzly-Bear",
    48 : "Hammerhead-Shark",
    49 : "Harbor-Seal",
    50 : "Harpy-Eagle",
    51 : "Hawksbill-Bale",
    52 : "Hedgehog", 
    53 : "Hippopotamus", 
    54 : "Honey-Badger",
    55 : "Honeybee",
    56 : "Humpback-Whale",
    57 : "Jaguar",
    58 : "Jerboa", 
    59 : "Kangaroo",
    60 : "Kingfisher",
    61 : "Koala", 
    62 : "Komodo-Dragon", 
    63 : "Ladybug", 
    64 : "Leopard",
    65 : "Leopard-Shark",
    66 : "Lion",
    67 : "Lion-Cub", 
    68 : "Lioness", 
    69 : "Llama", 
    70 : "Loggerhead-Turtle",
    71 : "Lynx", 
    72 : "Macaw",
    73 : "Male-Orangutan",
    74 : "Manatee",
    75 : "Meerkat",
    76 : "Monarch-Butterfly", 
    77 : "Moose",
    78 : "Mouse-Lemur",
    79 : "Musk-Ox", 
    80 : "Narwhal",
    81 : "Ocelot", 
    82 : "Octopus", 
    83 : "Okapi",
    84 : "Orca",
    85 : "Panda",
    86 : "Pangolin",
    87 : "Peacock",
    88 : "Polar-Bear",
    89 : "Praire-Dog",
    90 : "Pronghorn-Antelope",
    91 : "Przewalski's-Horse",
    92 : "Pygmy-Elephant",
    93 : "Pygmy-Rabbit",
    94 : "Quokka",
    95 : "Red-Fox", 
    96 : "Red-Maned-Wolf",
    97 : "Red-Panda",
    98 : "Red-Footed-Booby",
    99 : "Ring-Tailed-Lemur",
    100 : "River-Otter",
    101 : "Sea-Lion",
    102 : "Sea-Otter",
    103 : "Sea-Turtle-Hatchling",
    104 : "Seahorse",
    105 : "Serval", 
    106 : "Sloth-Bear",
    107 : "Slow-Loris", 
    108 : "Snow-Leopard",
    109 : "Snowy-Owl", 
    110 : "Spotted-Turtle", 
    111 : "Sturgeon",
    112 : "Sumatran-Rhino",
    113 : "Tarantula",
    114 : "Tasmanian-Devil", 
    115 : "Three-Toed-Sloth",
    116 : "Tiger",
    117 : "Two-Toed-Sloth", 
    118 : "Vampire-Bat", 
    119 : "Vaquita", 
    120 : "Wallaby", 
    121 : "Walrus", 
    122 : "Warthog",
    123 : "Whale-Shark", 
    124 : "Wolverine", 
    125 : "Wombat", 
    126 : "Woodpecker",
    127 : "Zebra" 
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
    //let randInt = Math.floor(Math.random()*Object.keys(animal_list).length);
    let randInt = Math.floor(Math.random() * 11);
    let animal = get_animal(randInt);

    image_set(animal);
    output.innerHTML = `Your chosen animal is the <span>${animal}</span>. They call upon you for help. Click the link down below to help.<br></br><a href="${get_url(randInt)}" target="_blank">${get_url(randInt)}</a>`
})

