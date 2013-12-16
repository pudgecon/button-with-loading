App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  actions: {
    save: function(resolve, reject) {
      Ember.run.later(this, function() {
        resolve();
      }, 3000);
    }
  }
});

App.ButtonWithLoadingComponent = Ember.Component.extend({
  classNameBindings: 'disabled:disabled',
  disabled: false,

  click: function() {
    var _this = this;

    this.set('disabled', true);
    this.sendAction('action', function() {
      _this.set('disabled', false);
    });
  }
});
