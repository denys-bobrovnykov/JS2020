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
            const result = (item.correctAnswList.length/item.answeredList.length * 100).toFixed(0);
            let count = 0;
            for(let key of item.chapters){
                count += chaptersRanges[key][1] - chaptersRanges[key][0];
            }
            this.container.innerHTML += `<div>
                                            <p>Time started(Початок): ${item.start}</p>
                                            <p>Time finished(Кінець): ${item.finish}</p>
                                            <p>Chapters selected(Розділи): ${item.chapters.join(',')}</p>
                                            <p>Answered questions(Перевірені питання): ${item.answeredList.length}</p>
                                            <p>Total questions in selected chapters(Усього питань у роздлах): ${count}</p>
                                            <p>Result of session(Результат): ${isNaN(result) ? 0 : result}%</p>
                                        </div>
                                        <hr>`;
        }
    }
}