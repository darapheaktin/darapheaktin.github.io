document.addEventListener("DOMContentLoaded", function() {
    // Select all abstract sections with 'more' links
    const abstracts = document.querySelectorAll(".abstract-toggle");

    abstracts.forEach((abstract) => {
        const moreLink = abstract.querySelector(".more-link");
        const fullText = abstract.querySelector(".full-text");
        const previewText = abstract.querySelector(".preview-text");

        // Initially, hide the full text and display preview text
        fullText.style.display = "none";
        
        moreLink.addEventListener("click", function(event) {
            event.preventDefault();

            // Toggle between preview and full text
            if (fullText.style.display === "none") {
                fullText.style.display = "inline";
                previewText.style.display = "none";
                moreLink.textContent = "Show less";
            } else {
                fullText.style.display = "none";
                previewText.style.display = "inline";
                moreLink.textContent = "Show more";
            }
        });
    });
});
