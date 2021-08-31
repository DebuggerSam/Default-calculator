const input = document.getElementById('display');
let firstValue = '';
let operandValue = '';
let secondValue = '';


function digit(number) {
  console.log('works ' + number);

  if (operandValue) {
    secondValue += number;
    write(secondValue);
  }else{
    firstValue += number;
    write(firstValue);

  }


}

function write(number){
  input.value = number;
}


function operand(plus){
  console.log(`opernad  ${plus}`);

  write('');

  operandValue = plus;
}

function getResult(){

  let result = '';

  switch (true) {
    case (operandValue === '+'):
      result = (+firstValue + +secondValue);
      break;
    case (operandValue === '-'):
      result = (+firstValue - +secondValue);
      break;
    case (operandValue === '*'):
      result = (+firstValue * +secondValue);
      break;
    case (operandValue === '/'):
      result = (+firstValue / +secondValue);
      break;
    default:
      break;
  }


  write(result);
  setInitionValue(result);
}


function setInitionValue(firstValueByDefault = '') {
  firstValue = firstValueByDefault;
  operandValue = '';
  secondValue = '';
}
