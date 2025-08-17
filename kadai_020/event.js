//btnを習得し、定数の代入
const btn = document.getElementById('btn');

//textを習得し、定数を代入
const text = document.getElementById('text');

btn.addEventListener('click' , () =>{

text.textContent = 'ボタンをクリックしました';
});