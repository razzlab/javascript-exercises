const sumAll = function(a,b) {
    let sum = 0;
  // 
  if((a<0 || b<0 )||( typeof a !== 'number' || typeof b !== 'number')){
    sum = "ERROR";
  }else{
   
    if(a<b){
    for (i=a;i<=b;i++){
      sum += i
     }
    }else{
        for (i=b;i<=a;i++){
            sum += i}
    }
  }
  
  
  
    return sum
};

// Do not edit below this line
module.exports = sumAll;
