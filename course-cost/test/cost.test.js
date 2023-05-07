//add a description of what the function should do
describe("courseCost", function(){
    it('should be able to get 40% discount for Ruby on rails intro', function(){
        var courses = {
            status : "success",
            code: "r1",
            description : "Ruby on Rails intro",
            cost : 5675.00,
            discounts : 2270.00,
            amountDue : 3405.00
        }

        assert.deepEqual(courses, courseCost("r1", "2023-05-21"))
    })

    it('should be able to get 20% discount for Ruby on Rails intro', function(){
        var courses = {
            status : "success",
            code: "r1",
            description : "Ruby on Rails intro",
            cost : 5675.00,
            discounts : 1135.00,
            amountDue : 4540.00
        }

        assert.deepEqual(courses, courseCost("r1", "2023-05-11"))
    })

    it("return 'Invalid code' when entered code is incorrect", function(){

        var course = {
            status : "Invalid code",
        }

        assert.deepEqual(course, courseCost("r2", "2023-05-11"))
    })
    
    it("return 'Invalid day' when the entered date is incorrect", function(){

        var day = {
            status : "Invalid day",
        }

        assert.deepEqual(day, courseCost("r1", "Sunday"))
    })
})
