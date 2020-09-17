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
    this.forDisplay = 0;
    this.forCheck;
    this.checkedAnsw;
    this.correctAnsw; //number of question in database for answer check
    this.correct;//bool correctness
    // this.selectChapters();
    this.questionTotal = 0;
    this.selectedQuestions = [];
    this.questionTotal = 0;// Total questions in selected chapters
    this.wrongAnswers = [];

    this.view = new TestView();
    this.selectChapters();
    
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
    this.checkedAnsw.push(checked);// checked answers

    console.log('checked', checked);

    this.correctAnsw.push(...this.answers[n].split(','));// correct answers

    console.log('correct', this.correctAnsw);

    if ( checked == this.answers[n] || checked + '.' == this.answers[n]) {
      this.correct = true;
    } else {
      this.correct = false;
      // alert(this.selectedQuestions[this.forDisplay].a[this.answers[n]] || this.answers[n]);
      const wrongAnswer = {'questionNum': n, 'yourAnsw': checked, 'correcAnsw': this.correctAnsw};
      this.wrongAnswers.push(wrongAnswer);
      localStorage.setItem('wrongAnswers', this.wrongAnswers);
      console.log(this.wrongAnswers);
    }
  }

  selectNext() {
    console.log(this.forDisplay);
    console.log(this.questionTotal);
    this.questionTotal -= 1;
    if( this.questionTotal > 0){
      this.forDisplay += 1;
    } else {
      alert('The End');
    }
  }
  
}