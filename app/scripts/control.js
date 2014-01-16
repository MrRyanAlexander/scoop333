/*global define*/

define([
    'jquery',
    'underscore',
    'parse'
], function ($, _, Backbone) {
    'use strict';

    /* unbind all and remove this view on close */
    Backbone.View.prototype.close = function(){
      //empty() dom element preseving selector
      //NOTE remove() deletes selector
      this.$el.empty();
      this.unbind();
        if (this.onClose){
          this.onClose();
        }
    }

    /* control view state middleman */
   	var Control = {
 
   		showView: function(view) {	
        if ( !Parse.User.current() ) {
          
        }
    		if (typeof this.currentView !== "undefined"){
      			this.currentView.close();//need to make close(); work?
    		}
    		this.currentView = view;
    		this.currentView.render();
  		}
	};
	return Control;
});
