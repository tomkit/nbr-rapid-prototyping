var _ = require('underscore');
var app = require("table");''

module.exports = Backbone.Router.extend({
    routes : {
    },
    initialize : function(data) {
        this.data = data;

       this.loadView();
    },
    loadView : function() {
        var container = document.getElementById("table");
        var component = React.renderComponent(app(this.data), container);
    }
});
