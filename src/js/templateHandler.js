templateHandler = {
    templates: {},
 
    loadTemplates: function(templateNames, callback) {
 
        const that = this;
 
        const loadTemplate = function(index) {
            const name = templateNames[index];
            
            $.get('/src/templates/' + name + '.html', function(data) {
                that.templates[name] = data;
                index++;
                if (index < templateNames.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        };
 
        loadTemplate(0);
    },
 
    get: function(name) {
        return this.templates[name];
    }
 
};