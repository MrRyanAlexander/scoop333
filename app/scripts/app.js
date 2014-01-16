/*global define*/

define([
    'jquery',
    'underscore',
    'parse',
    'routes/router'
], function($, _, Parse, Router){
    'use strict';

    var App = {
    
      initialize: function()  {  
        this.router = new Router();
        //another option for bad routes, but currently overriden by the routers *xyz
        /*http://stackoverflow.com/questions/11236338/is-there-a-way-to-catch-all-non-matched-routes-with-backbone*/
        Parse.history.start({pushState:true});
      }
    };
    return App;
});