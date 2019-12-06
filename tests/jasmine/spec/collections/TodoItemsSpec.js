describe('Todo Items Collection suite', function() {

    let model;

    beforeEach(function() {
        model = new TodoItems();
    });

    it('should be empty if no TodoItem instances are provided', function() {
        expect(model.length).toEqual(0);
    });

    it('adding some TodoItem instances to the model, should change the models length property\'s value', 
        function() {
            model.add(new TodoItem({ description: 'Some Description 1' }));
            model.add(new TodoItem({ description: 'Some Description 2' }));
            model.add(new TodoItem({ description: 'Some Description 3' }));
            model.add(new TodoItem({ description: 'Some Description 4' }));

            expect(model.length).toEqual(4);
        }
    );

});