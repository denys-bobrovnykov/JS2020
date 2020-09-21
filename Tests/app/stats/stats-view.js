export default class StatsView{
    constructor(gotoMain){
        //View container
        this.container = document.querySelector('.stats-container');
        //Buttons
        this.gotoMain = document.querySelector('.nav-home');
        //Listeners
        this.gotoMain.addEventListener('click', gotoMain);
    }
    renderList(data){
        this.container.innerHTML = '';
        for (let i = 0, last = data.length; i < last; i++) {
            const item = data[i];
            const chaptersRanges = JSON.parse(localStorage.getItem('chaptersRanges'));
            let count = 0;
            const result = (item.correctAnswList.length/item.answeredList.length * 100).toFixed(0);
            for(let key of item.chapters){
                count += chaptersRanges[key][1] - chaptersRanges[key][0];
            }
            this.container.innerHTML += `<div>
                                            <p>Time started: ${item.start}</p>
                                            <p>Time finished: ${item.finish}</p>
                                            <p>Chapters selected: ${item.chapters.join(',')}</p>
                                            <p>Answered questions: ${item.answeredList.length}</p>
                                            <p>Total questions in selected chapters: ${count}</p>
                                            <p>Result of session: ${isNaN(result) ? 0 : result}%</p>
                                        </div>
                                        <hr>`;
        }
    }
}