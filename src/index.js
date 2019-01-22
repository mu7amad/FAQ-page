import "./styles.scss";
import questionsList from "./questionsList";
import faq from "./faqModal";
import { faqform, formHandler } from "./addQuestion";

faq.then(res => {
  questionsList(res);
});

document.getElementById("new_question").innerHTML = faqform;
formHandler();
