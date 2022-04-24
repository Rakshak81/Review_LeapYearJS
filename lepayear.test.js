const Leapyear = require('./leapyear')
describe("leapyear", () => {
    it ("year 400 is a leap year" , () => {
      const leapyear  = new Leapyear;
      expect(leapyear.year(400)).toBe(true);
    
    })

    it ("year 100 is not a leap year", () => {
        const leapyear  = new Leapyear;
      expect(leapyear.year(100)).toBe(false);
    })
})