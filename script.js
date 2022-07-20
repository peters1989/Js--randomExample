let kolvo = +prompt('Введите колво примеров');
let min = +prompt('Введите min число');
let max = +prompt('Введте max число');
 let zn


function prim (min, max){
    return Math.floor(Math.random() * max + min)
    console.log(prim());
}
function oper (){
    let zn = Math.floor(Math.random() * 4 + 1)
    return zn
    
    
    console.log(oper);
    
}   
    let axampleAnswer




 for(let i = 0; i < kolvo; i++){

    let num1 = prim(min, max);
    let num2 = prim(min, max);
    let zn = oper();
    if(zn == 1){
        zn = '+'
        axampleAnswer = (num1 + num2)
    }else if(zn == 2){
        zn = '-'
        axampleAnswer = (num1 - num2)
    } else if (zn == 3){
        zn = '*'
        axampleAnswer = (num1 * num2)
    } else if (zn == 4){
        zn = '/'
        axampleAnswer = (num1 / num2)
    }
    

    
    let zadacha = prompt('Введите правельный ответ '+ num1 + '' + zn + '' + num2 + ' = ?');
    let answer = axampleAnswer == zadacha ? 'Правельно '+ axampleAnswer : 'Ваш ответ '+ zadacha + ' Правельный ответ '+ axampleAnswer
    console.log(answer);
} 

    
    

    






