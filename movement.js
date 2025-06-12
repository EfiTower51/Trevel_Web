fetch('sky.json')

     .then(response => response.json())

     .then(data => {

       document.getElementById('preline').textContent = sky.content;

     })

     .catch(error => console.error('載入失敗:', error));