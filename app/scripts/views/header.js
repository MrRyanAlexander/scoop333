/*global define*/

define([
    'jquery',
    'underscore',
    'parse',
    'templates',
    'vent'
], function ($, _, Parse, JST, vent) {
    'use strict';

    var Header = Parse.View.extend({
        template: JST['app/scripts/templates/header.html'],
        el: '#navbar',
        events: {
            'click #pull':              "magic",
            'window resize':            "resize"
        },
        initialize: function(options) {
        	_.bindAll(this, 'render', 'unrender', 'magic');
            //options.vent.bind("home", this.render);
        	return this;
        },
        render: function() {
        	this.$el.html(this.template);
        },
        unrender: function() {
        	this.$el.fadeOut();
    	},
        magic: function(e) {
            e.preventDefault();

                var menu        = $('nav ul'),
                menuHeight  = menu.height();
                    
                menu.slideToggle();
        },
        resize: function() {
            var w = $(window).width(),
            menu        = $('nav ul');
                if(w > 320 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
        }
    });
    return Header;
});