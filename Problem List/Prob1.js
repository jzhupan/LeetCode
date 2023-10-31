//Two Sum

// var twoSum = function(nums, target) {
    
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 0; j < nums.length; j++){
//             if(nums[i] + nums[j] === target && i != j){
//                 return [i, j]
//             }
//         }
//     }
//  };

var twoSum = function(nums, target) {
    let seenNums = []

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if(!seenNums.includes(diff)){
            seenNums.push(nums[i])
           
        } else {
            return [seenNums.indexOf(diff),i]
        }
    }
    
};