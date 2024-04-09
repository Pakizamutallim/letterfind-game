// const image = document.querySelector('img');
const imageDiv = document.querySelector('.left');
const wrongletters = document.querySelector('span');
const timer = document.querySelector('.timer');
const timeCounter = timer.querySelector('p');
const trueName = document.querySelector('.true-name');
const letterdiv = document.querySelector('.letter');


const arrayOfFilms = [
    {
        name: "parfumer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS5bfW_6-6WMDPsBl5J2pKB72Wvq8kNFhnHC8h6wiuw&s"
    },
    {
        name: "intersteller",
        img: "https://images.bauerhosting.com/legacy/media/619d/adf6/5165/4363/823b/7bf0/31%20Interstellar.jpg?auto=format&w=768&q=80"
    },
    {
        name: "pianist",
        img: "https://www.austinchronicle.com/binary/2e41/pianist.jpg"
    },
    {
        name: "amelie",
        img: "https://images.bauerhosting.com/legacy/media/619d/5a19/5165/432a/703b/7912/IMG_0299.jpeg?auto=format&w=768&q=80"
    },
    {
        name: "up",
        img: "https://images.bauerhosting.com/legacy/media/619d/84db/3ebe/47eb/e69c/e2c2/IMG_0271.jpeg?auto=format&w=768&q=80"
    },
    {
        name: "gotfather",
        img: "https://images.bauerhosting.com/legacy/media/619d/b89c/dbee/afac/6469/00c1/14%20Godfather%202.jpg?auto=format&w=768&q=80"
    }
]
let trueLetter = [];
let wrongLetter = [];
// let letter = e.target.keydown;

n = arrayOfFilms.length;
const randomFilmId = Math.floor(Math.random() * n);

nameLen = arrayOfFilms[randomFilmId].name.split("").length;
nameLetters = arrayOfFilms[randomFilmId].name.split("");
// console.log(nameLetters);

function addRandomFilm() {
    console.log(arrayOfFilms[randomFilmId].name);
    for (let index = 0; index < nameLen; index++) {
        trueName.innerHTML += '<div class="letter"></div>'
    }
    imageDiv.innerHTML = `<h1>Which film is it?</h1>
    <img src="${arrayOfFilms[randomFilmId].img}" alt="">`
};
addRandomFilm();

const addLetterToArray = (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        currentLetter = e.key;
        if (nameLetters.includes(currentLetter)) {
            // trueLetter.push(currentLetter);
            console.log(currentLetter);
        }
    }
}

document.addEventListener('keydown', addLetterToArray);


console.log({trueLetter, nameLetters});





// console.log(nameLen, nameLetters[1]);



















