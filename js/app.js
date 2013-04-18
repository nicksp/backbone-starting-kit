(function() {

window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

/* Helper template method */
window.template = function(id) {
	return _.template( $('#' + id).html() );
};

/* Put your logic in here */

})();