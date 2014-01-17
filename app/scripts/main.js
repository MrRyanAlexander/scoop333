/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        parse: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Parse'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        facebook : {
            exports: 'FB'
        }

    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        parse: '../bower_components/parse/parse-1.2.13.min',
        underscore: '../bower_components/underscore/underscore',
        text: '../bower_components/requirejs-text/text',
        respond: '../bower_components/boot/respond.min',
        facebook: '//connect.facebook.net/en_US/all'
    }
});

require([
    'app', 'fb'
], function (App) {
 
    Parse.initialize("NGiOi6UQcghss7w5zpoknj960LkCXKYlkAzbzKx2", "SrgXpn6tCAjlnihvoJ1LjwcBNBhAlLQ1ZXZGa3li");
    App.initialize();

});