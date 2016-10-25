/// <reference path="angular.min.js" />
angular.module("myApp")
    .component("greetUser", {
        template: '<ul class="list-group">' +
                    '<greet-user-item></greet-user-item>' + 
                  '</ul>'
    });

