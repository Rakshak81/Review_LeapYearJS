class Leapyear {
 constructor () {

 }
    year(year) {
        if (year % 400 === 0){
            return "leapyear"
        }
      
    else {
        return "not a leapyear"
    }
        
    }

}

module.exports = Leapyear;