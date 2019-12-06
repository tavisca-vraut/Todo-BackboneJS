const TodoItem = Backbone.Model.extend({
    defaults: {
        isCompleted: false
    },
    initialize: function(options) {
        if (!this.isValid()) {
            console.log(this.validationError);
        }
    },

    validate: function(attributes) {
        if (!attributes.description) {
            throw new Error('Description of a Todo-Item cannot be empty.');
        }
    },

    toggleComplete: function() {
        this.set('isCompleted', !this.get('isCompleted'))
    }
});