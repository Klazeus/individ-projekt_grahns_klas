const toggleIcon = document.querySelector(".sidebar-toggle");
const toggleIconMobile = document.querySelector(".sidebar-toggle-mobile");
const closeIcon = document.querySelector(".close-icon");
const sidebar = document.querySelector(".sidebar");

toggleIcon.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
});

toggleIconMobile.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
});

closeIcon.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
});


