document.addEventListener('DOMContentLoaded', () => {

  class Navbar {
    navHome = document.querySelector('.nav-home')
  }


  class TestMenu {

    questions = JSON.parse(localStorage.getItem('questions'));
    answers = JSON.parse(localStorage.getItem('answers'));
    chapters = JSON.parse(localStorage.getItem('chapters'));
    chaptersRanges = {
      1: [1,213],
      2: [214,293],
      3: [294,346],
      4: [347,412],
      5: [413, 481],
      6: [482, 603],
      7: [604, 702],
      8: [703, 886],
      9: [887, 1002],
      10: [1003, 1092],
      11: [1093, 1239],
      12: [1240, 1469],
      13: [1470, 1508],
      14: [1509, 1661],
      15: [1662, 1706]
    }
    selectedQuestions = [];
    forDisplay; //index of array of selected questions
    forCheck; //number of question in database for answer check
    questionTotal = 0;// Total questions in selected chapters
    constructor(){
      this.testContainer = document.querySelector('.test-container');
      this.questionText = document.querySelector('.question-text');
      this.submitAnswer = document.querySelector('.submit-answer');
      this.answerInput = document.querySelector('.answer-input');
      this.submitForm = document.querySelector('#answer-form');
    }
    selectChapters() {
      for ( let j of this.chapters) {
          for ( let k = this.chaptersRanges[j][0]; k <= this.chaptersRanges[j][1]; k++ ) {
            const obj = {num: k, text: this.questions[k].text, a: this.questions[k].a};
            this.selectedQuestions.push(obj);
          }
      }
      this.forDisplay = 0;
      this.questionTotal = this.selectedQuestions.length;
    }
    randomise() {
      for ( let i = 0; i < this.selectedQuestions.length; i++ ) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.selectedQuestions[i], this.selectedQuestions[j]] = [this.selectedQuestions[j],this.selectedQuestions[i]];
      }
    }
    clear() {
      this.questionText.innerHTML = '';
      this.submitForm.innerHTML = '';
    }
    renderQuestion(n = this.forDisplay) {
      this.questionText.innerHTML = '<p>' + this.selectedQuestions[n].text + '</p>';
      for ( let key in this.selectedQuestions[n].a ) {
        this.submitForm.innerHTML += `<input type="checkbox" value="${key}" name="answer" class="options"/> <span>${this.selectedQuestions[n].a[key]}</span><br>`;
      }
      this.submitForm.innerHTML += '<input type="submit" />';
      this.questionTotal -= 1;
    }
    check(n = this.selectedQuestions[this.forDisplay].num) {
      const checked = Array.from(document.querySelectorAll('.options')).reduce((acc, el) => el.checked ? acc.concat(el.value) : acc, []).join(','); 
      if ( checked == this.answers[n] || checked + '.' == this.answers[n]) {
        alert('Correct');
      } else {
        alert(this.selectedQuestions[this.forDisplay].a[this.answers[n]] || this.answers[n]);
      }

    }
    renderNext() {
      console.log(this.questionTotal);
      if( this.questionTotal > 0){
        this.forDisplay += 1;
        this.clear();
        this.renderQuestion(this.forDisplay);
      } else {
        alert('The End');
      }
    }
  }


// ------------- Main ------------ //
  const test = new TestMenu();

  test.selectChapters();

  test.randomise();

  test.renderQuestion();

  test.submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    test.check();
  })

  document.querySelector('.next-question').addEventListener('click', () => {
    test.renderNext();
  })
  // ------------------------------------- //

})