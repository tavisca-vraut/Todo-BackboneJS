describe('Todo item\'s view\'s suite', function() {

    let model;
    let view;

    let todoItem1;
    let todoItem2;
    let todoItem3;

    beforeEach(function() {
        todoItem1 = new TodoItem({ description: 'Todo Item 1' });
        todoItem2 = new TodoItem({ description: 'Todo Item 2' });
        todoItem3 = new TodoItem({ description: 'Todo Item 3' });

        model = new TodoItems([
            todoItem1,
            todoItem2,
            todoItem3
        ]);
        view = new TodoItemsView({ model: model });
        view.render();
    });

    afterEach(function() {
        if (view) {
            view.close();
        }
    });

    it('should throw Error if no model is provided to the TodoItemsView', function() {

        expect(() => {
            view = new TodoItemsView();
        }).toThrowError('Required property "model" not found.');

    });

    it('destuction of a todoItem should trigger the remove method on the collection', function() {
        spyOn(model, 'remove');

        todoItem1.destroy();

        expect(model.remove).toHaveBeenCalled();
    });

    it('adding a new todo item to the model should trigger' + 
    'the append to view method on the view of model', function() {

        const countOfTodosPriorToAddingNewTodo = view.$('#todo-items li').length;

        const newTodo = new TodoItem({ description: 'New Todo' });
        model.add(newTodo);

        const newCountOfTodos = view.$('#todo-items li').length;

        expect(newCountOfTodos).toEqual(countOfTodosPriorToAddingNewTodo + 1);

    });

    it('invoking the close method on the view should trigger the off method in the model', function() {

        spyOn(model, 'off');

        view.close();

        expect(model.off).toHaveBeenCalled();

    });

});