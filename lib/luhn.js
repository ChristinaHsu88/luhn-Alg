
function check(numberInput) {
  var processedNum = ''; //select number * 2. its a string
  var newNum = [];
  var number = '';
  number = numberInput.substring(0, numberInput.length -1);
  //console.log(number); //7992739871
  for (count in number) {
    if (count % 2 == 1) {
       newNum = number[count] * 2;
       processedNum += newNum; //store number
     } else {
      processedNum += number[count]; //processed the numbers with odd index
     }
  }
  //console.log(processedNum); //718947691672
  var finalNum = 0;
  var lastDig; //3
  for (count in processedNum) {
    finalNum += parseInt(processedNum[count]);    //finalNum += processedNum[count];
  }
  finalNum = finalNum * 9;
  lastDig = finalNum % 10;
  //console.log(lastDig);

  if (numberInput[numberInput.length - 1] == lastDig) {
    return true;
  } else {
    return false;
  }
}


module.exports = check;