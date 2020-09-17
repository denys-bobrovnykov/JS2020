export default class TestView{

    constructor(submitAnsw, checkBox, nextQ){

      this.testContainer = document.querySelector('.test-container');
      this.questionText = document.querySelector('.question-text');
      this.submitAnswer = document.querySelector('.submit-answer');
      this.answerInput = document.querySelector('.answer-input');
      this.submitForm = document.querySelector('#answer-form');
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
        this.submitForm.innerHTML += '<input type="submit" />';
    }

    selectAnswers(){
      return document.querySelectorAll('.options');
    }

    renderResult(options, checked, correct){
      console.log(options);
      options.forEach(el => {
        let id;
        if( checked.includes(el.id) && !correct.includes(el.id)) {
          el.parentElement.style.backgroundColor = 'orange';
          id = el.id;
        }
        if ( correct.includes(el.id) ) el.parentElement.style.backgroundColor = 'green';
      })
    }
}