describe('Utility functions specs suite', function() {

    describe('specs for isEventEnterKeyPress', function() {

        it('should throw error if argument to isEventEnterKeyPress is not of type Event', function() {

            expect(() => {
                utility.isEventEnterKeyPress(123);
            }).toThrowError(utility.errorMessages.invalidArgumentTypeExpectedEvent);

        });

        it('should return False if event is not Keyboard Event', function() {

            const event = new Event('click');
            
            expect(utility.isEventEnterKeyPress(event)).toBeFalse();

        });

        it('should return False if event is not "enter keypress"', function() {

            const event = $.Event('keypress', { keyCode: 37 });
            
            expect(utility.isEventEnterKeyPress(event)).toBeFalse();

        });

        it('should return True if event is "enter keypress"', function() {

            const event = $.Event('keypress', { keyCode: 13 });
            
            expect(utility.isEventEnterKeyPress(event)).toBeTrue();

        });

    });

    describe('specs for isNumber', function() {

        it('should return false if the argument passed is of type "string"', function() {

            expect(utility.isNumber('a')).toBeFalse();

        });

        it('should return false if the argument passed is of type "Event"', function() {

            expect(utility.isNumber(new Event('click'))).toBeFalse();

        });

        it('should return true if the argument passed is of type "Number"', function() {

            expect(utility.isNumber(123)).toBeTrue();

        });

    });

    describe('specs for isInt', function() {

        it('should throw Error if the argument passed is not of type "Number".', function() {

            expect(() => {
                utility.isInt('aaa')}
                ).toThrowError(utility.errorMessages.invalidArgumentTypeExpectedNumber);

        });

        it('should return false if the argument passed is not of type "Integer".', function() {

            expect(utility.isInt(12.324)).toBeFalse();

        });

        it('should return true if the argument passed is of type "Integer".', function() {

            expect(utility.isInt(12.0)).toBeTrue();
            expect(utility.isInt(12)).toBeTrue();

        });

    });

    describe('specs for isNegative', function() {

        it('should throw Error if the argument passed is not of type "Number".', function() {

            expect(() => {
                utility.isNegative('aaa');
            }).toThrowError(utility.errorMessages.invalidArgumentTypeExpectedNumber);

        });

        it('should return false if the argument passed is not negative', function() {

            expect(utility.isNegative(12.324)).toBeFalse();
            expect(utility.isNegative(0)).toBeFalse();

        });

        it('should return true if the argument passed is negative.', function() {

            expect(utility.isNegative(-12)).toBeTrue();

        });

    });

    describe('specs for getTodoItems', function() {

        it('should throw an error if the argument passed is not number', function() {

            expect(() => {
                utility.getSampleTodoItems('aaa');
            }).toThrowError(utility.errorMessages.invalidArgumentTypeExpectedNumber);

        });

        it('should throw an error if the argument passed is not integer', function() {

            expect(() => {
                utility.getSampleTodoItems(12.32);
            }).toThrowError(utility.errorMessages.invalidArgumentTypeExpectedPositiveInteger);

        });

        it('should throw an error if the argument passed is negative', function() {

            expect(() => {
                utility.getSampleTodoItems(-12);
            }).toThrowError(utility.errorMessages.invalidArgumentTypeExpectedPositiveInteger);

        });

    });

});