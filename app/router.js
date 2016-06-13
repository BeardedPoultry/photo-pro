import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('portfolio', function() {
    this.route('family');
    this.route('nature');
    this.route('mn');
    this.route('special-event');
    this.route('portfolio');
  });

  this.route('about', function() {
    this.route('blog');
  });
  this.route('booking');
  this.route('login');

  this.route('users', function() {
    this.route('current');
    this.route('create');
  });
});

export default Router;
