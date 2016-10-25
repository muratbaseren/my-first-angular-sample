/// <reference path="angular.min.js" />
angular.module("myApp")
    .component("greetUserItem", {
        template: '<li class="list-group-item" ng-repeat="user in $ctrl.users">' +
                        '{{user.firstname}} {{user.secondname}} - {{user.surname}}' +
                  '</li>',
        require: {
            'parent': '^greetUser'
        },
        controller: function () {
            this.users = [
                {
                    firstname: "Kadir1",
                    secondname: "Murat1",
                    surname: "Başeren1"
                },
                {
                    firstname: "Kadir2",
                    secondname: "Murat2",
                    surname: "Başeren2"
                },
                {
                    firstname: "Kadir3",
                    secondname: "Murat3",
                    surname: "Başeren3"
                }
            ];
        }
    });


