// این فایل رو اصلا بلد نیستم صرفا بخاطر اینکه پروژم کار کنه این کد ها رو کپی رایت میکنم
// set up nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
