if ( !localStorage.getItem('questions') ) {
    console.group('Loading questions db');
    fetch('./questions/QuestionsObj.json')
    .then(res => res.json())
    .then(data => {
        storeData(data,'questions');
        console.log('db loaded')
    })
    .catch(err => console.error(err));
}
    
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

function storeData(data, name) {
localStorage.setItem(name, JSON.stringify(data));

}
