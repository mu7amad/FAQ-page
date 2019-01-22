import questionsList from "./questionsList";

const formHandler = callback => {
  document
    .getElementById("submit_question")
    .addEventListener("click", function(e) {
      e.preventDefault();
      // create quetion
      const question = [
        {
          title: document.getElementById("faq_question").value,
          body: document.getElementById("faq_answer").value
        }
      ];
      document.getElementById("faq_question").value = "";
      document.getElementById("faq_answer").value = "";
      // add the question to list of FAQ
      questionsList(question);
    });
};

const faqform = `<form id="faqform">
<fieldset>
<!-- Form Name -->
<legend><h2>Add new question</h2></legend>

<!-- Text input-->
<div class="form-group">
  <label class="col-md-4 control-label" for="faq_question">Question</label>  
  <div class="col-md-4">
  <input id="faq_question" name="faq_question" type="text" placeholder="Question" class="form-control input-md">
    
  </div>
</div>

<!-- Textarea -->
<div class="form-group">
  <label class="col-md-4 control-label" for="answer">Answer</label>
  <div class="col-md-4">                     
    <textarea class="form-control" id="faq_answer" name="faq_answer" placeholder="Answer"></textarea>
  </div>
</div>

<!-- Button -->
<div class="form-group">
  <div class="col-md-4">
    <button id="submit_question" name="singlebutton" class="btn btn-primary">Submit</button>
  </div>
</div>
</fieldset>
</form>
`;

export { faqform, formHandler };
