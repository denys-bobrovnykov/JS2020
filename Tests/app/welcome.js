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