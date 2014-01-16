/*global define*/

define([
    'jquery',
    'underscore',
    'parse',
    'templates',
    'modules/Data'
], function ($, _, Parse, JST, Data) {
    'use strict';

    var Home = Parse.View.extend({
        template: JST['app/scripts/templates/home.html'](),
        el: '#wrapper',
        events: {
        'submit #contact':          'send'
        },
        initialize: function(options) {
        	_.bindAll(this, 'render', 'unrender', 'send');
        	//options.vent.bind("home", this.render);

        	return this;
        },
        render: function() {
        	this.$el.html(this.template);
        },
        unrender: function() {
        	this.$el.fadeOut();
    	},
        send: function(e) {
            e.preventDefault();
            var fn = $('#contact input[name=firstName]').val(),
                ln = $('#contact input[name=lastName]').val(),
                co = $('#contact input[name=company]').val(),
                po = $('#contact input[name=position]').val(),
                e = $('#contact input[name=email]').val(),
                b = $('#contact input[name=back]:checked').val(),
                f = $('#contact input[name=front]:checked').val(),
                ms = $('#contact textarea').val();
                Data.com(fn, ln, co, po, e, b, f, ms);
        }
    });

    return Home;
});