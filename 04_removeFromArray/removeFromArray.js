const removeFromArray = function(arr, ...args) {
    
    
    for(let arg = 1; arg <arguments.length; arg++){
    let val = arguments[arg]
    for (let i = 0; i < arr.length; i++) {
        
        
        if (arr.indexOf(val)>=0) {
             let index = arr.indexOf(val);
            arr.splice(index, 1);
        }
    }
    
};   return arr
}

// Do not edit below this line
module.exports = removeFromArray;
