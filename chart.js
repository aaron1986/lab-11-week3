const resultButton = document.getElementById('resultButton')

const handleImageClick = function() {
    const images = localStorage.getItem('images')
    const parseImages = JSON.parse(images)
    console.log(parsedImages);

    for (let i = 0; i < parseImages.length; i++) {
        const newCat = new Cat(parseImages[i].name)
        state.allImages.push()
        new Images.render()
    }

}

resultButton.addEventListener('click', handleButtonClick)

function handleSubmit(event) {

    event.preventDefault();
    
    const newImg  = new Images(imagesArray.value)
    imagesArray.allImages.push(newImg);
    imgForm.reset();
    newImg.render();
}

newImg.addEventListener('submit', handleSubmit);