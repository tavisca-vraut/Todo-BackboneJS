const utility = (function() {
    
    class Utility {
        constructor() {
            this.errorMessages = {
                invalidArgumentTypeExpectedEvent: 'Invalid argument type. Expected type Event or $.Event',
                invalidArgumentTypeExpectedNumber: 'Invalid argument type. Expected argument of type Number.',
                invalidArgumentTypeExpectedPositiveInteger: 
                                    'Invalid argument value for argument "number". Expected a non-negative integer',
            };
        }

        isEventEnterKeyPress(event) {
            if (event instanceof Event || event instanceof $.Event) {
                return event.key === 'Enter' || event.keyCode === 13;
            }

            throw new Error(this.errorMessages.invalidArgumentTypeExpectedEvent);
        }

        isNumber(number) {
            return Number(number) === number;
        }

        isInt(number) {
            if (this.isNumber(number)) {
                return number % 1 == 0;
            }

            throw new Error(this.errorMessages.invalidArgumentTypeExpectedNumber);
        }

        isNegative(number) {
            if (this.isNumber(number)) {
                return number < 0;
            }

            throw new Error(this.errorMessages.invalidArgumentTypeExpectedNumber);
        }

        getSampleTodoItems(number) {
            if ( this.isInt(number) === false || this.isNegative(number)) {
                throw new Error(this.errorMessages.invalidArgumentTypeExpectedPositiveInteger);
            }

            const todoItems = new TodoItems();
            
            for (let i = 0; i < number; i++) {
                todoItems.add(new TodoItem({ description: `Todo Item: ${i + 1}` }));
            }
            
            return todoItems
        }
    }

    return new Utility();
})();

const bus = _.extend({}, Backbone.Events);
