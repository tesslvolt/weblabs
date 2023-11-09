//zadacha 1 
let button = document.getElementById('button');
let result = document.getElementById('result');
let res2 = document.getElementById('res2');
let button2 = document.getElementById('button2');
button.onclick = function f1(){
let sp1 = document.getElementById('sp1').value;
let sp2 = document.getElementById('sp2').value;
let ns = Math.pow(sp1, sp2);
result.innerHTML = ns;
}
//zadacha 2
let arr1 = ["Нету", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let enter = document.getElementById('enter');
let res = document.getElementById('res');
enter.onclick = function f2(){
let sp3 = document.getElementById('sp3').value;
let a = arr1[sp3];
res.innerHTML =a ;
}
// задание 3

let huhu = document.getElementById('huhu');

let rh = document.getElementById('rh');
let arr2 = [90, 140, 123, 12, 89];
button2.onclick = function maximality() {
huhu.innerHTML = arr2;
    let max = Math.max(...arr2);
    console.log(max);
    range(max);
 }
     function range(max) {

    if (max < 10) {
        rh.innerHTML = "Максимальный элемент находится в диапазоне от 0 до 9";
    }
    if (max >= 10 && max <= 100) {
        rh.innerHTML = "Максимальный элемент находится в диапазоне от 10 до 100";
        
    } 
    if(max>= 100) {
        rh.innerHTML = "Максимальный элемент находится в диапазоне свыше 100";
    }

}

let button3 = document.getElementById('button3');
let otvet = document.getElementById('otvet');
let new_str = ' ';
button3.onclick = function repeat() {
    let str = document.getElementById('str').value;
    let kol = document.getElementById('kol').value;
    if (kol>1) {
        for (kol; kol>0; kol--)
        {
        new_str += str + " ";
        }
      otvet.innerHTML = new_str;
      }
      else {
       for (let it=2; it>0; it--)
       {
        new_str += str + " ";
       }
       otvet.innerHTML = new_str;
      }
      new_str = '';
      }
      // Первое на второе и делить на третье
      let b5 = document.getElementById('b5');
      let otvetik = document.getElementById('otvetik');
      b5.onclick = function multy() {
      let h1 = document.getElementById('h1').value;
      let h2 = document.getElementById('h2').value;
      let h3 = document.getElementById('h3').value;
      let res = (h1*h2)/h3
      otvetik.innerHTML = res;
      }
// let j = new Function('a,b,c,  return a*b/c; ')