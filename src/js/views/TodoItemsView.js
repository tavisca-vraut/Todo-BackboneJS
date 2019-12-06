const TodoItemsView = Backbone.View.extend({
    initialize: function(options) {
        if (!(options && options.model)) {
            throw new Error('Required property "model" not found.');
        }

        this.model.on('add', this.onAddTodoItem, this);
        this.model.on('destroy', this.onRemoveTodoItem, this);
        
        try {
            bus.on('new-item-added', (todoItem) => {
                this.model.add(todoItem);
            }, this);
        } catch(e) {}
    },

    onRemoveTodoItem: function(todoItem) {
        this.model.remove(todoItem);
    },

    onAddTodoItem: function(todoItem) {
        const todoItemView = new TodoItemView({ model: todoItem });
        this.$('#todo-items').append(todoItemView.render().$el);
    },
    
    render: function() {
        this.$el.html(templateHandler.get('TodoItemsListTemplate'));

        this.model.each(todoItem => {
            const todoItemView = new TodoItemView({ model: todoItem });
            this.$('#todo-items').append(todoItemView.render().$el);

        }, this);

        return this;
    },

    close: function() {
        this.model.off();
        this.$el.remove();
    }
});