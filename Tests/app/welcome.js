// ------------- DATABASE LOAD ------------- // 
if ( !localStorage.getItem('questions') ) {
  console.group('Loading questions db');
  fetch('./questions/QuestionsObj.json')
  .then(res => res.json())
  .then(data => {
    storeData(data,'questions');
    console.log('db loaded')
    if ( !localStorage.getItem('answers') ) {
      console.group('Loading answers db');
      fetch('./answers/answersObj.json')
      .then(res => res.json())
      .then(data => {
        storeData(data, 'answers');
        console.log('db loaded')
      })
      .catch(err => console.error(err));
    }
  })
  .catch(err => console.error(err));
}
function storeData(data, name) {
  localStorage.setItem(name, JSON.stringify(data));

} 

document.addEventListener('DOMContentLoaded', () => {
    
// ---------------  Classes --------------- //  
class MainMenu {
  constructor(){
    this.modeSelect = document.querySelector('#mode-select');
    this.goButton = document.querySelector('.go-button');
    this.selectElement = document.querySelector('#chapters-select');
    this.selectedChapters;
  }
  selectChapter() {
    this.selectedChapters = Array.from(this.selectElement.options)
                    .reduce((acc, opt) => opt.selected ? acc.concat(opt.value) : acc,[]);
    ;
    console.log(this.selectedChapters);
  }
  start() {
    localStorage.setItem('mode',this.modeSelect.mode.value);
    localStorage.setItem('chapters', this.selectElement.options.selected);
    localStorage.setItem('chapters',JSON.stringify(this.selectedChapters) || JSON.stringify(this.selectElement[0].value))

  }
} 
// ------------- Main code ------------ //

const menu = new MainMenu();

menu.goButton.addEventListener('click', () => menu.start());
menu.selectElement.addEventListener('change', () => menu.selectChapter());

// ------------------------------------- //


})