describe('New Todo Adder\'s View\'s suite', function() {

    let view;
    let enterKeyPress;

    beforeEach(function() {
        view = new NewTodoAdderView();
        view.render();

        enterKeyPress = $.Event('keypress', { keyCode: 13 });
    });

    it('should throw error if enter key is pressed when the input box is empty', function() {

        expect(() => {
            view.$('#new-todo-item').trigger(enterKeyPress);
        }).toThrowError('Description of a Todo-Item cannot be empty.');

    });

    it('should clear the input box if after the todo is added to the list view', function(done) {

        view.$('#new-todo-item').val('Some todo description');

        view.$('#new-todo-item').trigger(enterKeyPress);

        setTimeout(() => {

            expect(view.$('#new-todo-item').val()).toEqual('');
            done();

        }, 100);

    });

});