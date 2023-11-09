let firstArray = [1, 2, 3];
let secondArray = ['a', 'b', 'c', 'd'];
let thirdArray = [4, 5, 6, 7, 8];
let fourthArray = firstArray.concat(secondArray, thirdArray )

let out = document.getElementById('out');
for (let i = 0; i < fourthArray.length; i ++){
if(i in fourthArray)
  out.innerHTML += i + ' --- ' + fourthArray[i] + '<br>'
}

let firthArray = fourthArray
 firthArray.unshift(82, 34)
 firthArray.push(55, 66)
 let out1 = document.getElementById('out1');
 for (let i = 0; i < firthArray.length; i ++){
 if(i in firthArray)
   out1.innerHTML += i + ' --- ' + firthArray[i] + '<br>'
 }

 firthArray.splice(0,2)
 firthArray.splice(12,2)
 let out2 = document.getElementById('out2');
 for (let i = 0; i < firthArray.length; i ++){
 if(i in firthArray)
   out2.innerHTML += i + ' --- ' + firthArray[i] + '<br>'
  }


delete firthArray[2];
delete firthArray[4];
delete firthArray[6];
  let out3 = document.getElementById('out3');
  for (let i = 0; i < firthArray.length; i ++){
  if(i in firthArray)
    out3.innerHTML += i + ' --- ' + firthArray[i] + '<br>'
   }

   let out4 = document.getElementById('out4');
   {
     out4.innerHTML =  firthArray.length + '<br>'
    }

    function removeDuplicates(array) {
      return Array.from(new Set(array.map(item => item.toLowerCase())));
  }
    
    // Пример использования
  let initialArray = ["apple", "Banana", "apple", "Orange", "banana"];
  let resultArray = removeDuplicates(initialArray);
  let firstzadanie = document.getElementById('firstzadanie');
  firstzadanie.innerHTML = resultArray;
  
  
  const array = [5, 2, 9, 1, 8, 3];
  // Сортировка массива в порядке убывания
  // Вывод отсортированного массива
  let secondzadanie = document.getElementById('secondzadanie');
  secondzadanie.innerHTML = array.sort((a, b) => b - a);;
 

