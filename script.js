const panels = document.querySelectorAll(".panel");
for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener("click", () => {
    console.log(i);
    removeActiveClasses();
    panels[i].classList.add("active");
  });
}
function removeActiveClasses() {
  for (let i = 0; i < panels.length; i++) {
    panels[i].classList.remove("active");
    console.log(i);
  }
}

// const panels = document.querySelectorAll('.panel')

// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses()
//         panel.classList.add('active')
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active')
//     })
// }
