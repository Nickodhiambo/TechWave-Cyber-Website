const slideButtons = document.querySelectorAll(".slide-buttons");
const imageList = document.querySelector(".image-list");
const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

const initSlider = () => {
    slideButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const direction = btn.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    // Hide slide buttons when there are no more images to display
    imageList.addEventListener("scroll", handleSlideButtons);
}

window.addEventListener("load", initSlider)