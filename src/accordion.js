const createAccordion = res => {
  let accordion = "";
  res.some((item, i) => {
    // use some to display the first 5 items
    if (i === 5) {
      return true;
    }
    accordion += `<div class="collapse">
          <button class="accordion">${item.title}</button>
          <div class="panel">
            <p>${item.body}</p>
            <button class='btn remove'>Remove</button>
          </div>
        </div>`;
  });
  return accordion;
};
// add collape and remove items functionalty to the accordion
const accordionCtrl = () => {
  const acc = document.getElementsByClassName("accordion");
  const remove = document.getElementsByClassName("remove");
  for (let i in acc) {
    // collapse
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
    // remove
    remove[i].addEventListener("click", function() {
      this.parentNode.parentNode.parentNode.removeChild(
        this.parentNode.parentNode
      );
    });
  }
};
export { createAccordion, accordionCtrl };
