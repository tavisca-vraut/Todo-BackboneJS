describe('Todo Item\'s view\'s suite', function() {

    let model;
    let view;

    beforeEach(function() {
        model = new TodoItem({ description: 'Some Todo ' });
        view = new TodoItemView({ model: model });
        view.render();
    });

    it('should throw error if no model is provided', function() {
        expect(() => {
            view = new TodoItemView();
        }).toThrowError('Required property "model" not found.');
    });

    it('default tag element of the view should be li', function() {
        expect(view.tagName).toEqual('li');
    });

    describe('click events', function() {
        it('clicking on element or checkbox should invoke the toggleComplete method of Model', function() {
            spyOn(model, 'toggleComplete');
    
            view.$('#toggle').click();
    
            expect(model.toggleComplete).toHaveBeenCalled();
        });
    
        it('clicking on delete should invoke the destroy and off method of the model', function() {
            spyOn(model, 'destroy');
            spyOn(model, 'off');
    
            view.$('#delete').click();
    
            expect(model.destroy).toHaveBeenCalled();
            expect(model.off).toHaveBeenCalled();
        });
    });

    it('should invoke destroy and off methods of Model if close is called on its view', function() {
        spyOn(model, 'destroy');
            spyOn(model, 'off');
    
            view.close();
    
            expect(model.destroy).toHaveBeenCalled();
            expect(model.off).toHaveBeenCalled();
    });

});