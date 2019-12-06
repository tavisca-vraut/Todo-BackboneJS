templateHandler.loadTemplates([
  'NewTodoAdderTemplate',
  'TodoItemTemplate',
  'TodoHeaderTemplate',
  'TodoItemsListTemplate'
], () => {
  beforeEach(function () {
    jasmine.addMatchers({
      toBePlaying: function () {
        return {
          compare: function (actual, expected) {
            var player = actual;
  
            return {
              pass: player.currentlyPlayingSong === expected && player.isPlaying
            };
          }
        };
      }
    });
  });
})