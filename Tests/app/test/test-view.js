export default class TestView{

    constructor(submitAnsw, checkBox, nextQ){

      this.testContainer = document.querySelector('.test-container');
      this.questionText = document.querySelector('.question-text');
      this.submitAnswer = document.querySelector('.submit-answer');
      this.answerInput = document.querySelector('.answer-input');
      this.submitForm = document.querySelector('#answer-form');
      this.submitButton = document.createElement('input');
      this.submitButton.type = 'submit';

      this.nextButton = document.querySelector('.next-question');

      this.submitForm.addEventListener('submit', submitAnsw);
      this.submitForm.addEventListener('click', checkBox);
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
          this.submitForm.innerHTML += ` <span class="answers" ><input type="checkbox" value="${key}" id="${key}" name="answer" class="options" />${selectedQuestions[n].a[key]}</span><br>`;
        }
        // this.submitButton.disabled = false;
        this.submitForm.append(this.submitButton);
    }

    selectAnswers(){
      return document.querySelectorAll('.options');
    }

    renderResult(options, checked, correct){
      // this.submitButton.disabled = true;
      console.log(options);
      options.forEach(el => {
        if( checked.includes(el.id) && !correct.includes(el.id)) {
          el.parentElement.classList.add('wrong-color');
        }
        if ( correct.includes(el.id) ) el.parentElement.classList.add('correct-color');
      })

    }
}