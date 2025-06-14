fetch('ski.json')

     .then(response => response.json())

     .then(data => {

       document.getElementById('preline').textContent = ski.content;

     })

     .catch(error => console.error('載入失敗:', error));