const reviews = document.querySelectorAll(".reviews");
let currentIndex = 0;

const displayReviews = () => {
    // Hide all reviews
    reviews.forEach(review => {
        review.style.display = "none";
    });

    // Display the current review
        reviews[currentIndex].style.display = "block";

    // Move on to the next review then cycle back
    currentIndex = (currentIndex + 1) % reviews.length;
}


document.addEventListener("DOMContentLoaded", displayReviews);
setInterval(displayReviews, 5000); // Displays a review every 5 seconds