export default class TestView{

    constructor(submitAnsw, checkBox, nextQ, prevQ, gotoMain, saveSession){

      //Elements select
      this.answerInput = document.querySelector('.answer-input');
      this.controlsContainer= document.querySelector('.test-controls');
      this.progressView = document.querySelector('.prog-data');
      this.questionText = document.querySelector('.question-text');
      this.submitForm = document.querySelector('#answer-form');
      this.testContainer = document.querySelector('.test-container');
      //Elements create
      this.submitButton = document.createElement('button');
      this.submitButton.type = 'submit';
      this.submitButton.innerHTML = 'Перевірити';
      this.submitButton.classList.add('check-button');
      //Buttons select
      this.homeButton = document.querySelector('.nav-home');
      this.nextButton = document.querySelector('.next-button');
      this.prevButton = document.querySelector('.prev-button');
      // Listeners
      this.homeButton.addEventListener('click', gotoMain);
      this.nextButton.addEventListener('click', nextQ);
      this.prevButton.addEventListener('click', prevQ);
      this.submitForm.addEventListener('submit', submitAnsw);
      this.submitForm.addEventListener('click', checkBox);
      window.onunload = saveSession;//presumably saves session on unload
      
      // window.addEventListener('scroll', this.stickControls.bind(this)); // Stick controls
    }

    clear() {
        this.questionText.innerHTML = '';
        this.submitForm.innerHTML = '';
    }

    renderProgress(answeredList, questionLeft, wrongAnswers){

        this.progressView.innerHTML = `Всього питань: ${questionLeft} , Переглянуто питань: ${answeredList}, Помилок: ${wrongAnswers}`;
            //       Всього питань: questionLeft
            // Переглянуто питань: answeredList
            // Помилок: wrongAnswers
      
    }

    renderQuestion(n = forDisplay, selectedQuestions, correctFields) {

        this.clear();
        let color;
        let checked;
        this.questionText.innerHTML = '<p>' + selectedQuestions[n].text + '</p>';

        for ( let key in selectedQuestions[n].a ) {
          if (correctFields && correctFields.includes(key)){
            color = ' ' + 'correct-color';// adds modificator to answer <div> class
            checked = 'checked';
          } else {
            color = '';
            checked = '';
          }
          this.submitForm.innerHTML += ` <div class="answer${color}">
                                            <input type="checkbox" value="${key}" id="${key}" name="answer" class="options" ${checked}/>${selectedQuestions[n].a[key]}
                                        </div>`;
        }

        this.submitForm.append(this.submitButton);// Insert Submit button
        
    }

    renderResult(options, checked, correct){
      options.forEach(el => {
        if( checked.includes(el.id) && !correct.includes(el.id) ) {
          el.parentElement.classList.add('wrong-color');
        }
        if ( correct.includes(el.id) && !checked.includes(el.id) && correct.length > 1 ) {
          el.parentElement.classList.add('wrong-color');
          el.checked = true;
        }
        if ( correct.includes(el.id) && !checked.includes(el.id) && correct.length ==1 ) {
          el.parentElement.classList.add('correct-color');
          el.checked = true;
        }
        if ( correct.includes(el.id) && checked.includes(el.id) ) {
          el.parentElement.classList.add('correct-color');
          el.checked = true;
        }
      })
    }

    selectAnswers(){
      return document.querySelectorAll('.options');
    }

    stickControls(){// switched off 
      if(this.nextButton.getBoundingClientRect().top < 0) {
        this.controlsContainer.classList.add('stick');
      } 
      if( this.testContainer.getBoundingClientRect().top >= this.controlsContainer.offsetHeight ) {
        this.controlsContainer.classList.remove('stick');      
      }
    }
}