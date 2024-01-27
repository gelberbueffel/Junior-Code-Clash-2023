document.getElementById("searchbar").addEventListener("input", function() {
    var input = this.value.toLowerCase();
    var article = document.querySelectorAll(".article");

    article.forEach(function(article) {
        var titleSearch = article.querySelector("h2").innerText.toLowerCase();
        var contentSearch = article.querySelector("p").innerText.toLowerCase();
        var shown = titleSearch.includes(input) || contentSearch.includes(input);

        article.style.display = shown ? "block" : "none";
    });
});
