function moveButton(button) {
    var newX = Math.random() * (window.innerWidth - 100);
    var newY = Math.random() * (window.innerHeight - 100);

    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

function changeTextAndMove() {
    var foodQuestion = document.getElementById('foodQuestion');
    foodQuestion.innerHTML = "I KNEW IT!!";

    // Hide the paragraph text with opacity
    foodQuestion.style.transition = 'opacity 0.5s ease-in-out'; // Transition property
    foodQuestion.style.opacity = '0';

    // Move the paragraph text to the top center of the page with a smooth transition
    setTimeout(function () {
        foodQuestion.style.transition = 'top 0.5s ease-in-out'; // Transition property
        foodQuestion.style.position = 'absolute';
        foodQuestion.style.top = '10px';
        foodQuestion.style.left = '50%';
        foodQuestion.style.transform = 'translateX(-50%)';
        foodQuestion.style.opacity = '1'; // Show the text with opacity
    }, 500); // Delayed transition to ensure the text is hidden before moving

    // Hide both buttons
    var yesButton = document.querySelector('.staticButton');
    var noButton = document.querySelector('.randomButton');

    yesButton.style.display = 'none';
    noButton.style.display = 'none';

    // Create a new image element
    var popupImage = document.createElement('img');
    popupImage.src = 'dance.gif'; // Replace with the actual path to your image
    popupImage.alt = 'Popup Image';
    popupImage.style.position = 'fixed';
    popupImage.style.top = '50%';
    popupImage.style.left = '50%';
    popupImage.style.transform = 'translate(-50%, -50%) scale(0)'; // Initial scale set to 0
    popupImage.style.zIndex = '9999';
    popupImage.style.opacity = '0'; // Set initial opacity to 0

    // Append the image to the body
    document.body.appendChild(popupImage);

    // Triggering reflow to enable the transition effect
    void popupImage.offsetWidth;

    // Set opacity to 1 and scale to 1 for a smooth transition
    popupImage.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'; // Transition property
    popupImage.style.opacity = '1';
    popupImage.style.transform = 'translate(-50%, -50%) scale(1)';
}