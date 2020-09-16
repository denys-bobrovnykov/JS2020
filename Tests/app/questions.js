document.addEventListener('DOMContentLoaded', () => {

  fetch('./questions/QuestionsObj.json')
              .then(res => res.json())
              .then(data => {
                storeData(data);
              })
              .catch(err => console.error(err));
  function storeData(data) {
      localStorage.setItem('questions', JSON.stringify(data));
  }
})