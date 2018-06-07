 class Utils {
     static isEmpty(input) {
         return typeof input !== 'string' || input.trim().length === 0;
     }
     static isValidEmail(input) {
         console.log(input);
         return new RegExp('.+@.+\..+').test(input);
     }
     static isMinLength(input, min) {
         return input.trim().length >= min;
     }
 }