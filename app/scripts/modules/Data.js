/*global define*/

define(['jquery',
		'parse'
], function ($, Parse) {
	'use strict';

	return {
		com: function (fn, ln, co, po, e, b, f, ms){
			Parse.Cloud.run('con',{ 
				fn:fn,ln:ln,co:co,po:po,e:e,b:b,f:f,ms:ms
				}, {
                success: function() {
                    alert("Thanks " + fn + ". You're message was sent and I will be right with you!");
                },
                error: function(error) {
                    $('#contact-error').html('Oops, something went wrong!').removeClass("hidden").addClass('.contact-error');
                }
            });	
		}
    }
});