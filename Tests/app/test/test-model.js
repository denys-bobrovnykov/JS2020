import TestView from "./test-view.js";

export default class TestModel{

  constructor(){

    this.chaptersRanges = {
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
    this.questions = JSON.parse(localStorage.getItem('questions'));
    this.answers = JSON.parse(localStorage.getItem('answers'));
    this.chapters = JSON.parse(localStorage.getItem('chapters'));
    this.forDisplay = 0; //question index in SELECTed questions array to display
    this.forCheck; //question number to check with ANSWERS db
    this.checkedAnsw; //ticked answers array
    this.correctAnsw; //number of question in database for answer check
    this.correct; //bool oveall answer correctness 
    this.questionTotal = 0; // total questions in the SELECT
    this.selectedQuestions = []; // SELECTed questions array
    this.wrongAnswersList = []; // wrong answers array
    this.correctAnswList = []; // correct answers array
    this.answeredList = []; // viewed qlready questions 

    this.view = new TestView();
    this.selectChapters(); // select questions in the SELECT
    
  }

  selectChapters() {
    for ( let j of this.chapters) {
      for ( let k = this.chaptersRanges[j][0]; k <= this.chaptersRanges[j][1]; k++ ) {
        const obj = {num: k, text: this.questions[k].text, a: this.questions[k].a};
        this.selectedQuestions.push(obj);
      }
    }
    this.questionTotal = this.selectedQuestions.length;
  }

  randomise() {
    for ( let i = 0; i < this.selectedQuestions.length; i++ ) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.selectedQuestions[i], this.selectedQuestions[j]] = [this.selectedQuestions[j],this.selectedQuestions[i]];
    }
  }

  check(nodeList, n = this.selectedQuestions[this.forDisplay].num) {
    this.checkedAnsw = [];
    this.correctAnsw = [];
    this.correct = false;
    const checked = Array.from(nodeList).reduce((acc, el) => el.checked ? acc.concat(el.value) : acc, []).join(','); 
    this.checkedAnsw=checked.split(',');// checked answers

    console.log('checked', this.checkedAnsw);

    this.correctAnsw.push(...this.answers[n].split(','));// correct answers

    console.log('correct', this.correctAnsw);
    console.log('forDisp', this.forDisplay);

    const answer = {'questionNum': n, 'yourAnsw': checked, 'correctAnsw': this.correctAnsw};

    if ( !this.answeredList.includes(this.forDisplay) ){
      if ( checked == this.answers[n] || checked + '.' == this.answers[n]) {
        this.correct = true;
        this.correctAnswList.push(answer);
        localStorage.setItem('correctAnswers', JSON.stringify(this.correctAnswList))
      } else {
        this.correct = false;
        this.wrongAnswersList.push(answer);
        localStorage.setItem('wrongAnswers', JSON.stringify(this.wrongAnswersList));
        console.log(this.wrongAnswers);
      }
    }
  }

  selectNext() {
    console.log(this.questionTotal);
    if( this.questionTotal - 1 > 0){
      this.questionTotal -= 1;
      this.forDisplay += 1;
    } else {
      alert('The End');
    }
    console.log(this.forDisplay);
  }

  selectPrev() {
    console.log(this.questionTotal);
    if( this.questionTotal % this.selectedQuestions.length ){
      this.questionTotal += 1;
      this.forDisplay -= 1;
    } else {
      alert('The beginning');
    }
    console.log(this.forDisplay);
  }

  updateAnsweredList() {
    if ( !this.answeredList.includes(this.forDisplay) )this.answeredList.push(this.forDisplay);
    console.log('viewed', this.answeredList);
  }

}