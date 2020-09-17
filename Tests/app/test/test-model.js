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
    this.forCheck; //number of question in database for answer check
    // this.selectChapters();
    this.questionTotal = 0;
    this.selectedQuestions = [];
    this.questionTotal = 0;// Total questions in selected chapters

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
  const checked = Array.from(nodeList).reduce((acc, el) => el.checked ? acc.concat(el.value) : acc, []).join(','); 
  console.log(n);
  console.log(nodeList);
  if ( checked == this.answers[n] || checked + '.' == this.answers[n]) {
    alert('Correct');
    } else {
        alert(this.selectedQuestions[this.forDisplay].a[this.answers[n]] || this.answers[n]);
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