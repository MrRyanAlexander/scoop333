/*global define*/

define([
    'jquery',
    'underscore',
    'parse',
    'views/header',
    'views/home',
    'vent',
    'control'
], function ($, _, Parse, Header, Home, vent, Control) {
    'use strict';

    var Router = Parse.Router.extend({
        routes: {
        	"": 									"home",
        	"*oops": 								"home"

        },

        views: {},

        initialize: function() {       	
        	_.bindAll(this, 'home', 'setView');
        	this.Control = Control;
        	this.views.header = new Header({vent:vent});
        	this.views.home = new Home({vent:vent});

        	this.view = this.views.header;
        	this.view.render();
        },

        home: function() {
        	this.Control.showView(this.views.home);
        	//vent.trigger("home", this);
        	//this.setView(this.views.home);
        	//this.view.render();
        },

        setView: function(view) {
            if (typeof view.body !== 'undefined') {
                //unrender the current view
                this.view.body.unrender();
                //set the new view    
                this.view.body = view;
                console.log(view);

                //view is now useable after call
            }
        }

    });

    return Router;
});