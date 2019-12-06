const TodoItemView = Backbone.View.extend({
    tagName: 'li',
    initialize: function(options) {
        if (!(options && options.model)) {
            throw new Error('Required property "model" not found.');
        }

        this.model.on('change', this.render, this);
    },

    events: {
        'click #toggle': 'onClickToggle',
        'click #delete': 'close'
    },

    onClickToggle: function() {
        this.model.toggleComplete();
    },

    render: function() {
        this.$el.toggleClass('completed', this.model.get('isCompleted'));

        const source = templateHandler.get('TodoItemTemplate');
        const template = _.template(source);
        const html = template(this.model.toJSON());
        this.$el.html(html);

        return this;
    },

    close: function() {
        this.model.off();
        this.model.destroy();
        this.$el.remove();
    }
    
});