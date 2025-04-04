// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/
describe("Iteration 3 | Calculate Area", () => {
    describe("Function calculateArea", () => {
    
        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
          });
      
          it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
          });
      
          it("should return the division of the two numbers", () => {
            expect(calculateArea(4, 2)).toEqual(8);
            expect(calculateArea(8, 4)).toEqual(32);
            expect(calculateArea(9, 3)).toEqual(27);
          });
      
          it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
          });
        });
      });