var dropdown = document.getElementsByClassName("dropdown-btn");
var hiddenLinks = document.getElementById('toggle-links');
hiddenLinks.classList.toggle('hidden');
var i;
var isActive = true;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("bg-green-600");
        this.classList.toggle("text-white");
        console.log("clicked");
        hiddenLinks.classList.toggle('hidden');
    });
}
