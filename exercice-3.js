let list =  [{x:parseFloat((Math.random()*10).toFixed(2)), y:1},{x:parseFloat((Math.random()*10).toFixed(2)), y:5},{x:parseFloat((Math.random()*10).toFixed(2)), y:8}];
let z = parseFloat((Math.random()*10).toFixed(2));

console.log(list, z)

let xCloseToZ = (list, z) => {
    
    let result = list[0];
    let difference =  list[0].x < z ? z - list[0].x : list[0].x - z;

    for(let i = 1; i < list.length ; i++){

        let newDifference = list[i].x < z ? z - list[i].x : list[i].x - z;

        if(newDifference < difference){
            result = list[i];
            difference = newDifference; 
        }
    }

    return result;
}

console.log(xCloseToZ(list,z));