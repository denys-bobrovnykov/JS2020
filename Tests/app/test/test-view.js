export default class TestView{

    constructor(submitAnsw, checkBox, nextQ, prevQ){

      //Elements select
      this.testContainer = document.querySelector('.test-container');
      this.questionText = document.querySelector('.question-text');
      this.answerInput = document.querySelector('.answer-input');
      this.submitForm = document.querySelector('#answer-form');
      //Elements create
      this.submitButton = document.createElement('input');
      this.submitButton.type = 'submit';
      //Buttons select
      this.nextButton = document.querySelector('.next-question');
      this.prevButton = document.querySelector('.prev-button');
      // Listeners
      this.submitForm.addEventListener('submit', submitAnsw);
      this.submitForm.addEventListener('click', checkBox);
      this.nextButton.addEventListener('click', nextQ);
      this.prevButton.addEventListener('click', prevQ);

    }

    clear() {
        this.questionText.innerHTML = '';
        this.submitForm.innerHTML = '';
    }

    renderQuestion(n = forDisplay, selectedQuestions) {
        console.log(n, selectedQuestions.length);
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