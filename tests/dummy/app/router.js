import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('single');
  this.route('multiple');
  this.route('blockless-single');
  this.route('blockless-multiple');
});

export default Router;
