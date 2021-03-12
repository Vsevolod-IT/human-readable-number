module.exports = function toReadable (number) {
  let dict = {
        0: 'zero',1: 'one',2: 'two',3: 'three',4: 'four',5: 'five',6: 'six',7: 'seven',8: 'eight',9: 'nine',
        10: 'ten',11: 'eleven',12: 'twelve',13: 'thirteen',14: 'fourteen',15: 'fifteen',16: 'sixteen',17: 'seventeen',
        18: 'eighteen',19: 'nineteen',20: 'twenty',30: 'thirty',40: 'forty',50: 'fifty',60: 'sixty',70: 'seventy',
        80: 'eighty',90: 'ninety',100: 'hundred',
    };
    function get_num(number){ 
        return dict[number]};
    function les_100 (number){ 
        if(number <= 20 || number % 10 === 0){
            return get_num(number);
         } else{ 
            return `${get_num(Math.floor(number / 10) * 10)} ${get_num(number % 10)}`;}
        }
    function big_100(number){
        return `${get_num(Math.floor(number / 100))} hundred`;
    }

    if (number <= 20) {
         return get_num(number); 
        } else if (number < 100) {
             return les_100(number); 
        } else if (number >= 100){
             return number % 100 === 0 ? big_100(number) : `${big_100(number)} ${les_100(number % 100)}`; }
}
