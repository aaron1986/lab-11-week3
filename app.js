// Dom nodes
let imageContainer = document.getElementById("section-images");

// I wanted to use this code so I can write new ways of writing code
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:last-child");

// Variables to keep track of user selections and rounds
let rounds = 0;
const maxRounds = 25;

function Images(name, src) {
    this.name = name;
    this.src = src;
    this.views = 0;
    this.clicks = 0;
}

// Function to choose a random image
function getRandomIndex() {
    return Math.floor(Math.random() * imagesArray.length);
}

  //imagesArray
  const imagesArray = [
    new Images("Unspecificed Droid Bag", "./img/bag.jpg"),
    new Images("Fraudulent Banana Slicer", "./img/banana.jpg"),
    new Images("iWiper", "./img/bathroom.jpg"),
    new Images("Salacious Yellow Boots", "./img/boots.jpg"),
    new Images("Breakfast For Gnomes", "./img/breakfast.jpg"),
    new Images("Meatball Bubblegum", "./img/bubblegum.jpg"),
    new Images("Unsettling Chair", "./img/chair.jpg"),
    new Images("Cthulhu", "./img/cthulhu.jpg"),
    new Images("Duck Mask For Dogs", "./img/dog-duck.jpg"),
    new Images("Tinned Dragon Meat", "./img/dragon.jpg"),
    new Images("Cutlery Extensions For Biro", "./img/pen.jpg"),
    new Images("Pet Sweep Cleaning System", "./img/pet-sweep.jpg"),
    new Images("Pizza Scissors Version 2", "./img/scissors.jpg"),
    new Images("Terrifying Shark Sleeping Bag", "./img/shark.jpg"),
    new Images("Baby Sweep Cleaning System", "./img/sweep.png"),
    new Images("Terrifying Tauntaun Sleeping Bag", "./img/tauntaun.jpg"),
    new Images("Tinned Unicorn Meat", "./img/unicorn.jpg"),
    new Images("Infinite Watering Can", "./img/water-can.jpg"),
    new Images("Why?-n Glass", "./img/wine-glass.jpg"),
  ];


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

   //change name of our 3 images
   image1.alt = imagesArray[img1Index].name;
   image2.alt = imagesArray[img2Index].name;
   image3.alt = imagesArray[img3Index].name;

   // increase the image views
   imagesArray[img1Index].views++;
   imagesArray[img2Index].views++;
   imagesArray[img3Index].views++;
}

// Modified handleImageClick function
function handleImageClick(event) {
    if (rounds >= maxRounds) {
        alert("You have completed all rounds.");
        return;
    }
<<<<<<< HEAD
  
    // Increment the rounds counter
    rounds++;
=======

 // increase the number of times the user has clicked
  rounds++;
>>>>>>> 08a28d0289052a2f7415e9e0c1685324438acb1f

    // Get the name of the image clicked
    let clickedImage = event.target.alt;

<<<<<<< HEAD
    for(let i = 0; i < imagesArray.length; i++) {
      if(clickedImage === imagesArray[i].name) {
=======
    // Check if the click is on an image
    for(let i = 0; i < imagesArray.length; i++) {
        if (clickedImage === imagesArray[i].name) {
            imagesArray[i].clicks[i]++;
            break;
        }
    }

        // Render more images
        renderImages();
    }

    // Add event listener for image clicks
image1.addEventListener("click", handleImageClick);
image2.addEventListener("click", handleImageClick);
image3.addEventListener("click", handleImageClick);



    // Clear the existing results list
    let resultsList = document.querySelector("ul");
    const resultItem = document.createElement("li");

    resultItem.textContent = `Round ${rounds}: ${clickedImage}`;
    resultsList.appendChild(resultItem);
  
    for (let i = 0; i < imagesArray.length; i++) {
      // Check if the name of the image in the array matches the alt tag of our image
      if (clickedImage === imagesArray[i].name) {
        // Increase the number of clicks
>>>>>>> 08a28d0289052a2f7415e9e0c1685324438acb1f
        imagesArray[i].clicks++;
        break;
      }

    }
  
<<<<<<< HEAD
    renderImages();
  }

    image1.addEventListener("click", handleImageClick);
    image2.addEventListener("click", handleImageClick);
    image3.addEventListener("click", handleImageClick);

    function showResults() {
      const results = document.querySelector("ul");

      for(let i = 0; i < imagesArray.length; i++) {
          const li = document.createElement("li");
          const product = imagesArray[i];
          li.textContent = `${product.name} clicked ${product.clicks} times`;
          results.appendChild(li);
      }
=======
    // Check if the user has 25 rounds
    if (rounds >= maxRounds) {
      alert("You have completed all rounds.");
    }
>>>>>>> 08a28d0289052a2f7415e9e0c1685324438acb1f
  
    }
    const viewResults = document.getElementById("view-results");
    viewResults.addEventListener("click", showResults);

<<<<<<< HEAD
    renderImages();
=======

  // add the event listener to the images
  imageContainer.addEventListener("click", handleImageClick);

  renderImages();

   
>>>>>>> 08a28d0289052a2f7415e9e0c1685324438acb1f
