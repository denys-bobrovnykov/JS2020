export default class TestView{

    constructor(submitAnsw, nextQ){

      this.testContainer = document.querySelector('.test-container');
      this.questionText = document.querySelector('.question-text');
      this.submitAnswer = document.querySelector('.submit-answer');
      this.answerInput = document.querySelector('.answer-input');
      this.submitForm = document.querySelector('#answer-form');
      this.nextButton = document.querySelector('.next-question');

      this.submitForm.addEventListener('submit', submitAnsw);
      this.nextButton.addEventListener('click', nextQ);
    }

    clear() {
        this.questionText.innerHTML = '';
        this.submitForm.innerHTML = '';
    }

    renderQuestion(n = forDisplay, selectedQuestions) {
        this.clear();
        this.questionText.innerHTML = '<p>' + selectedQuestions[n].text + '</p>';
        for ( let key in selectedQuestions[n].a ) {
          this.submitForm.innerHTML += `<input type="checkbox" value="${key}" name="answer" class="options"/> <span>${selectedQuestions[n].a[key]}</span><br>`;
        }
        this.submitForm.innerHTML += '<input type="submit" />';
    }

    selectAnswers(){
      return document.querySelectorAll('.options');
    }
  
}