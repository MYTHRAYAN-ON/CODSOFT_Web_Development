const navItems = document.getElementsByClassName("nav-item");

// Iterate over the collection and add the event listener to each element
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', () => {
    // Remove the "active" class from all nav-items
    for (let j = 0; j < navItems.length; j++) {
      navItems[j].classList.remove("active");
    }
    // Add the "active" class to the clicked nav-item
    this.classList.add("active");
  });
}


document.getElementById("menu-icon").addEventListener("click", function() {
  this.classList.toggle("active");
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});
