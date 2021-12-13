const toggleIcon = document.querySelector(".sidebar-toggle");
const closeIcon = document.querySelector(".close-icon")
const sidebar = document.querySelector(".sidebar");

toggleIcon.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
});

closeIcon.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
});


