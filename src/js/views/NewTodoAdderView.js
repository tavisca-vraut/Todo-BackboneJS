const NewTodoAdderView = Backbone.View.extend({
    events: {
        'keypress #new-todo-item': 'onKeyPress'
    },

    onKeyPress: function(e) {
        if (utility.isEventEnterKeyPress(e)) {
            this.addTodo();
        }
    },

    addTodo: function() {
        
        
        const $textBox = this.$('#new-todo-item');

        const newTodoItemDescription = $textBox.val();
        const newTodoItem = new TodoItem({ description: newTodoItemDescription });
        
        bus.trigger('new-item-added', newTodoItem);

        $textBox.val('');
    },

    render: function() {
        const source = templateHandler.get('NewTodoAdderTemplate');
        const template = _.template(source);
        const html = template();
        this.$el.html(html);

        return this;
    }
});