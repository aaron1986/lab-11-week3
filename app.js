// Dom nodes
let imageContainer = document.getElementById("section-images");

// I wanted to use this code so I can write new ways of writing code
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:last-child");

// Variables to keep track of user selections and rounds
let rounds = 0;
const maxRounds = 25;

const products = [];

function Images(name, src, views, clicks) {
    this.name = name;
    this.src = src;
    this.views = views;
    this.clicks = clicks;
    products.push(this);
}

//new code
if(products!== null) {
 //imagesArray
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
} else {
const local = JSON.parse(products.getItem("products"));
}

// Function to choose a random image
function getRandomIndex() {
    return Math.floor(Math.random() * imagesArray.length);
}

function renderImages() {
    // get 2 random indexes from the images array
    let img1Index = getRandomIndex();
    let img2Index = getRandomIndex();
    let img3Index = getRandomIndex();

    // prevent the two images being the same goat
    while (img1Index === img2Index || img1Index === img3Index || img2Index === img3Index) {
        img2Index = getRandomIndex();
        img3Index = getRandomIndex();
    }

    // change the src of our 3 images
    image1.src = imagesArray[img1Index].src;
    image2.src = imagesArray[img2Index].src;
    image3.src = imagesArray[img3Index].src;

    // change name of our 3 images
    image1.alt = imagesArray[img1Index].name;
    image2.alt = imagesArray[img2Index].name;
    image3.alt = imagesArray[img3Index].name;

    // increase the image views
    imagesArray[img1Index].views++;
    imagesArray[img2Index].views++;
    imagesArray[img3Index].views++;

    viewCounts[img1Index]++;
    viewCounts[img2Index]++;
    viewCounts[img3Index]++;
}

// Create an array to store click counts
const viewCounts = [];
for(let i = 0; i < imagesArray.length; i++) {
    viewCounts.push(0);
}

// Create an array to store click counts
const clickCounts = [];
for(let i = 0; i < imagesArray.length; i++) {
    clickCounts.push(0);
}

// Create an array to store image names for the chart labels
const chartLabels = [];
for(let i = 0; i < imagesArray.length; i++) {
  chartLabels.push(imagesArray[i].name);
}

//Canvas for the chart
const chartCanvas = document.getElementById("chart");
const chartContext = chartCanvas.getContext("2d");

// Create the chart
const chart = new Chart(chartContext, {
    type: "bar",
    data: {
        labels: chartLabels,
        datasets: [{
            label: "Clicks",
            data: clickCounts,
            backgroundColor: ["rgba(39, 172, 245, 0.8)", "rgba(245, 40, 145, 0.8)", "rgba(39, 245, 193, 0.8)", "rgba(241, 245, 39, 0.8)", "rgba(245, 133, 39, 0.8)"],
        },
        {
            label: "Views",
            data: viewCounts,
            backgroundColor: ["#000"],
        },
    ],
    },
});

// Modified handleImageClick function
function handleImageClick(event) {
    if (rounds >= maxRounds) {
        alert("You have completed all rounds.");
        return;
    }

    // increase the number of times the user has clicked
    rounds++;

    // Get the name of the image clicked
    let clickedImage = event.target.alt;

    for (let i = 0; i < imagesArray.length; i++) {
        if (clickedImage === imagesArray[i].name) {
            clickCounts[i]++;
            break;
        }
    }

    // Update the chart with new data
    chart.update();

    // Render more images
    renderImages();
}

// Add event listener for image clicks
image1.addEventListener("click", handleImageClick);
image2.addEventListener("click", handleImageClick);
image3.addEventListener("click", handleImageClick);

// Render initial images
renderImages();


/*As a user, I would like my data to track totals between page refreshes, 
  so that I can keep track of the increasing number of votes. */

  //Implement local storage into your current application


  //Store the products array into local storage as a formatted JSON string#
  const imagesArrayString = JSON.stringify(imagesArray);
  localStorage.setItem("Images", imagesArrayString);

  //Retrieve the products array from local storage and then utilize the JSON.Parse() 
  const local = JSON.parse(localStorage.getItem("Images"));

  //loop
