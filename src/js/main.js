$(document).ready(function() {
    templateHandler.loadTemplates([
        'NewTodoAdderTemplate',
        'TodoItemTemplate',
        'TodoHeaderTemplate',
        'TodoItemsListTemplate'
    ], bootstrap);
});

function bootstrap() {
    $('#container').append((new TodoAppView()).render().$el);
}