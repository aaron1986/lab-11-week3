// Dom nodes
let imageContainer = document.getElementById("section-images");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:last-child");

const htmlFilePath = './chart.html';

// Variables to keep track of user selections and rounds
let rounds = 0;
const maxRounds = 25;

const products = [];

//
let previous = [];

function Images(name, src, views, clicks) {
    this.name = name;
    this.src = src;
    this.views = views;
    this.clicks = clicks;
    products.push(this);
}

// Check if data exists in localStorage
const storedProducts = localStorage.getItem("products");

if (storedProducts) {
    // Data exists in localStorage, parse and use it
    const parsedProducts = JSON.parse(storedProducts);
    products.push(...parsedProducts);
} else {
    new Images("Unspecificed Droid Bag", "./img/bag.jpg", 0,0);
    new Images("Fraudulent Banana Slicer", "./img/banana.jpg", 0,0);
    new Images("iWiper", "./img/bathroom.jpg", 0,0);
    new Images("Salacious Yellow Boots", "./img/boots.jpg", 0,0);
    new Images("Breakfast For Gnomes", "./img/breakfast.jpg", 0,0);
    new Images("Meatball Bubblegum", "./img/bubblegum.jpg", 0,0);
    new Images("Unsettling Chair", "./img/chair.jpg", 0,0);
    new Images("Cthulhu", "./img/cthulhu.jpg", 0,0);
    new Images("Duck Mask For Dogs", "./img/dog-duck.jpg", 0,0);
    new Images("Tinned Dragon Meat", "./img/dragon.jpg", 0,0);
    new Images("Cutlery Extensions For Biro", "./img/pen.jpg", 0,0);
    new Images("Pet Sweep Cleaning System", "./img/pet-sweep.jpg", 0,0);
    new Images("Pizza Scissors Version 2", "./img/scissors.jpg", 0,0);
    new Images("Terrifying Shark Sleeping Bag", "./img/shark.jpg", 0,0);
    new Images("Baby Sweep Cleaning System", "./img/sweep.png", 0,0);
    new Images("Terrifying Tauntaun Sleeping Bag", "./img/tauntaun.jpg", 0,0);
    new Images("Tinned Unicorn Meat", "./img/unicorn.jpg", 0,0);
    new Images("Infinite Watering Can", "./img/water-can.jpg", 0,0);
    new Images("Why?-n Glass", "./img/wine-glass.jpg", 0,0);
}

function getRandomIndex() {
    return Math.floor(Math.random() * products.length);
}

function renderImages() {
    let img1Index = getRandomIndex();
    let img2Index = getRandomIndex();
    let img3Index = getRandomIndex();

    while (img1Index === img2Index || img1Index === img3Index || img2Index === img3Index || previous.includes(img1Index) || previous.includes(img2Index) || previous.includes(img3Index)) {
        img1Index = getRandomIndex();
        img2Index = getRandomIndex();
        img3Index = getRandomIndex();
    }

    previous = [img1Index, img2Index, img3Index];

    image1.src = products[img1Index].src;
    image2.src = products[img2Index].src;
    image3.src = products[img3Index].src;

    image1.alt = products[img1Index].name;
    image2.alt = products[img2Index].name;
    image3.alt = products[img3Index].name;

    products[img1Index].views++;
    products[img2Index].views++;
    products[img3Index].views++;

    viewCounts[img1Index]++;
    viewCounts[img2Index]++;
    viewCounts[img3Index]++;
}

const viewCounts = [];
for (let i = 0; i < products.length; i++) {
    viewCounts.push(0);
}

const clickCounts = [];
for (let i = 0; i < products.length; i++) {
    clickCounts.push(0);
}

image1.addEventListener("click", handleImageClick);
image2.addEventListener("click", handleImageClick);
image3.addEventListener("click", handleImageClick);

function handleImageClick(event) {
    if (rounds >= maxRounds) {
        //alert("You have completed all rounds.");
        document.getElementById("view-results");
        return;
    }

    rounds++;
    let clickedImage = event.target.alt;

    for (let i = 0; i < products.length; i++) {
        if (clickedImage === products[i].name) {
            products[i].clicks++
            break;
        }
    }

    localStorage.setItem("products", JSON.stringify(products));
    renderImages();
}

function loadComplete() {
    window.open(htmlFilePath, '_blank');
}

renderImages();

