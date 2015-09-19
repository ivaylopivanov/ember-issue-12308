var App = Ember.Application.create();

App.Router.map(function() {
    this.resource('posts', function() {
        this.route('post', { path: 'post'});
    });	
});

App.PostsController = Ember.ArrayController.extend({
	queryParams: ['param'],
	param: null
});

App.PostsPostController = Ember.ArrayController.extend({
	queryParams: ['param'],
	param: null
});

