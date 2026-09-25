const storyButton = document.querySelector(".story-button");
const fullStory = document.querySelector(".full-story");

storyButton.addEventListener("click", () => {
    fullStory.classList.toggle("open");

    if (fullStory.classList.contains("open")) {
        storyButton.innerHTML = 'Hide My Full Story <span class="story-arrow">↑</span>';
    } else {
        storyButton.innerHTML = 'Read My Full Story <span class="story-arrow">↓</span>';
    }
});