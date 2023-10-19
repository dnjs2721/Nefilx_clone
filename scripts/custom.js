$(document).ready(function(){
    const previousButtons = document.querySelectorAll('.row-item-section #previousButton');
    const nextButtons = document.querySelectorAll('.row-item-section #nextButton');
    const videoRowItems = document.querySelectorAll('.video-row-item');
    let scrollAmounts = new Array(videoRowItems.length).fill(0);

    previousButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            scrollAmounts[index] = Math.max(scrollAmounts[index] - 1180, 0);
            $(videoRowItems[index]).animate({ scrollLeft: scrollAmounts[index] }, 'slow');
        });
    });

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            scrollAmounts[index] = Math.min(scrollAmounts[index] + 1180, videoRowItems[index].scrollWidth - videoRowItems[index].clientWidth);
            $(videoRowItems[index]).animate({ scrollLeft: scrollAmounts[index] }, 'slow');
        });
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function showSearchBar() {
    var searchBar = document.querySelector(".search-bar");
    if (searchBar.style.display === "none") {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
}