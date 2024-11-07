document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".read-more").forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const moreText = this.previousElementSibling.querySelector(".more-text");
            if (moreText.style.display === "inline") {
                moreText.style.display = "none";
                this.textContent = "Read more";
            } else {
                moreText.style.display = "inline";
                this.textContent = "Read less";
            }
        });
    });
});
