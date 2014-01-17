define(['facebook'], function(){
    'use strict';

        FB.init({
            appId      : '440191646108097',
        });

        FB.getLoginStatus(function(response) {
            console.log(response);
        });

        FB.ui(
            {
             method: 'feed'
            }
        );

});
