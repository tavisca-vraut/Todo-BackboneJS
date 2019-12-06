const TodoHeaderView = Backbone.View.extend({

    id: 'todo-header',

    render: function() {
        this.$el.html(templateHandler.get('TodoHeaderTemplate'));

        return this;
    }

});