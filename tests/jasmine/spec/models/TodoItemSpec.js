describe('Todo Item Model suite', function() {

    let model;

    beforeEach(function() {
        model = new TodoItem({ description: 'Some description' });
    });

    it('should throw error if description is not provided', function() {
        expect(() => {
            model = new TodoItem()
        }).toThrowError('Description of a Todo-Item cannot be empty.');
    });

    it('default isCompleted value should be False', function() {
        expect(model.get('isCompleted')).toEqual(false);
    });

    it('toggleComplete should change the isComplete state to opposite of what it is', function() {
        
        expect(model.get('isCompleted')).toEqual(false);
        model.toggleComplete();
        expect(model.get('isCompleted')).toEqual(true);
        model.toggleComplete();
        expect(model.get('isCompleted')).toEqual(false);
    });

});