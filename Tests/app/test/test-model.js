import TestView from "./test-view.js";

export default class TestModel{

  constructor(){
    // Get local storage variables
    this.answers = JSON.parse(localStorage.getItem('answers'));
    this.chapters = JSON.parse(localStorage.getItem('chapters'));
    this.chaptersRanges = JSON.parse(localStorage.getItem('chaptersRanges'));
    this.questions = JSON.parse(localStorage.getItem('questions'));
    // Set initial state variables
    this.answeredList = []; // viewed already questions 
    this.checkedAnsw; //ticked answers array
    this.correctAnsw; //number of question in database for answer check
    this.correctAnswList = []; // correct answers array
    this.correct; //bool oveall answer correctness 
    this.forCheck; //question number to check with ANSWERS db
    this.forDisplay = 0; //question index in SELECTed questions array to display
    this.questionLeft = 0; // total questions in the SELECT
    this.selectedQuestions = []; // SELECTed questions array
    this.wrongAnswersList = []; // wrong answers array
    // Init TestView
    this.view = new TestView();
    // Select questions for display
    this.selectChapters(); // select questions in the SELECT
  }

  check(nodeList, n = this.selectedQuestions[this.forDisplay].num) {
    this.checkedAnsw = [];
    this.correctAnsw = [];
    this.correct = false;
    const checked = Array.from(nodeList).reduce((acc, el) => el.checked ? acc.concat(el.value) : acc, []).join(','); 
    this.checkedAnsw=checked.split(',');// checked answers
    this.correctAnsw.push(...this.answers[n].split(','));// correct answers
    const answer = {'questionNum': n, 'yourAnsw': checked, 'correctAnsw': this.correctAnsw};

    if ( !this.answeredList.includes(this.forDisplay) ){
      if ( checked == this.answers[n] ) {
        this.correct = true;
        this.correctAnswList.push(answer);
      } else {
        this.correct = false;
        this.wrongAnswersList.push(answer);
      }
    }
  }

  getCorrectAnswers() {

    if ( this.answeredList.includes(this.forDisplay) ){
      return this.answers[this.selectedQuestions[this.forDisplay].num].split(',');
    } else {
      return;
    }

  }

  randomise() {
    for ( let i = 0; i < this.selectedQuestions.length; i++ ) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.selectedQuestions[i], this.selectedQuestions[j]] = [this.selectedQuestions[j],this.selectedQuestions[i]];
    }
  }

  selectChapters() {
    for ( let j of this.chapters) {
      for ( let k = this.chaptersRanges[j][0]; k <= this.chaptersRanges[j][1]; k++ ) {
        console.log(this.chaptersRanges[j][1]);
        const obj = {num: k, text: this.questions[k].text, a: this.questions[k].a};
        this.selectedQuestions.push(obj);
      }
    }
    this.questionLeft = this.selectedQuestions.length;
  }

  selectNext() {
    if ( this.questionLeft - 1 > 0 ) {

      this.questionLeft -= 1;
      this.forDisplay += 1;

    }
  }

  selectPrev() {
    if( this.questionLeft % this.selectedQuestions.length ) {

      this.questionLeft += 1;
      this.forDisplay -= 1;

    }
  }

  updateAnsweredList() {

    if ( !this.answeredList.includes(this.forDisplay) ) {
      this.answeredList.push(this.forDisplay); 
    }
  }

}