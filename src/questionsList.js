import { createAccordion, accordionCtrl } from "./accordion";

const questionsList = res => {
  // accordion filled with list of questions
  const html = createAccordion(res);
  document.getElementById("faq").innerHTML += html;
  // attach the click and remove event
  accordionCtrl();
};

export default questionsList;
