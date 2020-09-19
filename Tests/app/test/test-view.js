export default class TestView{

    constructor(submitAnsw, checkBox, nextQ, prevQ, gotoMain, saveSession){

      //Elements select
      this.testContainer = document.querySelector('.test-container');
      this.questionText = document.querySelector('.question-text');
      this.answerInput = document.querySelector('.answer-input');
      this.submitForm = document.querySelector('#answer-form');
      this.controlsContainer= document.querySelector('.test-controls');
      //Elements create
      this.submitButton = document.createElement('input');
      this.submitButton.type = 'submit';
      this.submitButton.classList.add('check-button');
      //Buttons select
      this.nextButton = document.querySelector('.next-button');
      this.prevButton = document.querySelector('.prev-button');
      this.homeButton = document.querySelector('.nav-home');
      // Listeners
      this.submitForm.addEventListener('submit', submitAnsw);
      this.submitForm.addEventListener('click', checkBox);
      this.nextButton.addEventListener('click', nextQ);
      this.prevButton.addEventListener('click', prevQ);
      this.homeButton.addEventListener('click', gotoMain);
      window.onunload = saveSession;

      window.addEventListener('scroll', this.stickControls.bind(this));
    }

    clear() {
        this.questionText.innerHTML = '';
        this.submitForm.innerHTML = '';
    }

    renderQuestion(n = forDisplay, selectedQuestions, correctFields) {
        // console.log(n, selectedQuestions.length);
        this.clear();
        let color;
        let checked;
        this.questionText.innerHTML = '<p>' + selectedQuestions[n].text + '</p>';
        for ( let key in selectedQuestions[n].a ) {
          if (correctFields && correctFields.includes(key)){
            color = 'correct-color';
            checked = 'checked';
          } else {
            color = '';
            checked = '';
          }// correctFields go from answers db
          this.submitForm.innerHTML += ` <div class="answers ${color}"><input type="checkbox" value="${key}" id="${key}" name="answer" class="options" ${checked}/>${selectedQuestions[n].a[key]}</div>`;
        }
        this.submitForm.append(this.submitButton);
        
    }

    selectAnswers(){
      return document.querySelectorAll('.options');
    }

    renderResult(options, checked, correct){
      options.forEach(el => {
        if( checked.includes(el.id) && !correct.includes(el.id)) {
          el.parentElement.classList.add('wrong-color');
        }
        if ( correct.includes(el.id) ) {
          el.parentElement.classList.add('correct-color');
          el.checked = true;
        }
      })
    }
    stickControls(){
      if(this.nextButton.getBoundingClientRect().top < 0) {
        this.controlsContainer.classList.add('stick');
      } 
      if( this.testContainer.getBoundingClientRect().top >= this.controlsContainer.offsetHeight ) {
        this.controlsContainer.classList.remove('stick');      
      }
    }
}