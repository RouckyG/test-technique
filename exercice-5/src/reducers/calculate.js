export default function calculate(expression){

let newExpression = expression.split('');

console.log(newExpression);

while(newExpression.includes('²')){

    let counter = 1;

    while(!isNaN(newExpression[newExpression.indexOf('²')-counter]) || newExpression[newExpression.indexOf('²')-counter] ==='.'){
        console.log('test',newExpression[newExpression.indexOf('²')-counter])
        counter++
    }
    console.log("counter :",counter)

    newExpression.splice(newExpression.indexOf('²') - (counter-1) , 0, 'Math.pow(');
    newExpression[newExpression.indexOf('²')] = ',2)' ;

    console.log(newExpression);
}

while(newExpression.includes('√')){

    let counter = 1;

    while(!isNaN(newExpression[newExpression.indexOf('√')+counter]) || newExpression[newExpression.indexOf('√')+counter] === ',2)' || newExpression[newExpression.indexOf('√')+counter] === 'Math.pow(' || newExpression[newExpression.indexOf('√')+counter] ==='.'){
        console.log('test',newExpression[newExpression.indexOf('√')]+counter)
        counter++
    }

    newExpression.splice(newExpression.indexOf('√') + (counter) ,0, ')');
    newExpression[newExpression.indexOf('√')] = 'Math.sqrt(' ;

    console.log(newExpression);
}

while(newExpression.includes('x')){
    newExpression[newExpression.indexOf('x')] = '*' ;
}

console.log(newExpression.join(''));

    return expression === "" ? "" : eval(newExpression.join('')).toString();
}

export {calculate}