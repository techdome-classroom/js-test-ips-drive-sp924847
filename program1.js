 
    function smallestMissingPositiveInteger(nums) {
      const n = nums.length;
      
       let j = 0;
      for (let i = 0; i < n; i++) {
          if (nums[i] <= 0) {
              [nums[i], nums[j]] = [nums[j], nums[i]];
              j++;
          }
      }
      
       const positiveNumber = nums.slice(j);
      
       for (let i = 0; i < positiveNumber.length; i++) {
          const index = Math.abs(positiveNumber[i]) - 1;
          if (index < positiveNumber.length && positiveNumber[index] > 0) {
            positiveNumber[index] = -positiveNumber[index];
          }
      }
      
       for (let i = 0; i < positiveNumber.length; i++) {
          if (positiveNumber[i] > 0) {
              return i + 1;
          }
      }
      
       return positiveNumber.length + 1;
  }
    
  module.exports = smallestMissingPositiveInteger;
