//btnを習得し、定数の代入
const btn = document.getElementById('btn');

//textを習得し、定数を代入
const text = document.getElementById('text');

btn.addEventListener('click' , () =>{
//新しいli要素
const childList = document.createElement('li');
//テキストの追加
childList.textContent = 'ボタンをクリックしました';
//末尾に追加
text.appendChild(childList);

text.textContent = 'ボタンをクリックしました';
});