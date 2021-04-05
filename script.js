const checkbox = document.getElementById("check-box");
const socialArea = document.getElementById("social-area");
const profile = document.getElementById("profileId");
const cardFooter = document.getElementById("card-footer");

checkbox.addEventListener("click", function (e) {
    socialArea.classList.toggle("active");
    cardFooter.classList.toggle("active");
    profile.classList.toggle("active");
});
