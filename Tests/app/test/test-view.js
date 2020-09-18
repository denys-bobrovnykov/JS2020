export default class TestView{

    constructor(submitAnsw, checkBox, nextQ, prevQ, gotoMain, saveSession){

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
      this.homeButton = document.querySelector('.nav-home');
      // Listeners
      this.submitForm.addEventListener('submit', submitAnsw);
      this.submitForm.addEventListener('click', checkBox);
      this.nextButton.addEventListener('click', nextQ);
      this.prevButton.addEventListener('click', prevQ);
      this.homeButton.addEventListener('click', gotoMain);
      window.onunload = saveSession;

    }

    clear() {
        this.questionText.innerHTML = '';
        this.submitForm.innerHTML = '';
    }

    renderQuestion(n = forDisplay, selectedQuestions, correctFields) {
        console.log(n, selectedQuestions.length);
        this.clear();
        let color;
        this.questionText.innerHTML = '<p>' + selectedQuestions[n].text + '</p>';
        for ( let key in selectedQuestions[n].a ) {
          color = correctFields && correctFields.includes(key) ? 'correct-color' : null;// correctFields go from answers db
          this.submitForm.innerHTML += ` <span class="answers ${color}" ><input type="checkbox" value="${key}" id="${key}" name="answer" class="options" />${selectedQuestions[n].a[key]}</span><br>`;
        }
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