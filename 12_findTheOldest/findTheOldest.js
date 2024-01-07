const findTheOldest = function(a) {
    let result = [];
    for(i=0;i<a.length;i++){
        if(a[i].yearOfDeath-a[i].yearOfBirth>0){
            result[i] = a[i].yearOfDeath-a[i].yearOfBirth
        }else{result[i]=new Date().getFullYear()-a[i].yearOfBirth}
    }
   let index =result.indexOf(Math.max(...result));
   return a[index]//.name
};

// Do not edit below this line
module.exports = findTheOldest;
