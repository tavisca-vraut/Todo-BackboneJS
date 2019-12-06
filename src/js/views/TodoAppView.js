const TodoAppView = Backbone.View.extend({

    initialize: function() {
        this.header = new TodoHeaderView();
        this.newTodoAdder =  new NewTodoAdderView();
    },

    addTodoHeaderToView: function() {
        this.$el.append(this.header.render().$el);
    },
    
    addNewTodoItemAdderToView: function() {
        this.$el.append(this.newTodoAdder.render().$el);
    },
    
    initializeTodoItemsView: function() {
        const defaultTodoItems = utility.getSampleTodoItems(5);

        const todoItemsView = new TodoItemsView({ model: defaultTodoItems });
        this.$el.append(todoItemsView.render().$el);
    },

    render: function() {
        this.$el.html('');

        this.addTodoHeaderToView();
        this.addNewTodoItemAdderToView();
        this.initializeTodoItemsView();

        return this;
    }
});