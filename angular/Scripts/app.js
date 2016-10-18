/// <reference path="angular.js" />
var app = angular.module("sepet", []);
app.factory('sepetService', function () {
    var dollarvalue = 3.10;
    return {
        checkdollarcurrency: function (tl) {
            return tl * 3;
        }
    }
});
app.directive("moSepet", function () {
    return {
        template: '<li ng-repeat="urun in sepet">{{urun.name}} - {{urun.count}} adet= {{urun.value*urun.count}}</li>'
    };
})
app.controller("sepetCtrl", function ($scope, $http, sepetService) {
    console.log("kontroller çalıştı")
    $scope.urunler = [
        {
            id: 1,
            name: "Gömlek",
            value: 55
        },
        {
            id: 2,
            name: "Pantolon",
            value: 123.50
        },
        {
            id: 3,
            name: "Tişört",
            value: 32.5
        }
    ]
    $scope.sepet = [];
    $scope.total = 0;
    $scope.sepeteekle = function (urun) {
        var urunvarmi = false;
        for (var i = 0; i < $scope.sepet.length; i++) {
            if ($scope.sepet[i].id == urun.id) {
                urunvarmi = true;
                urun.count++;
            }
        }
        if (urunvarmi == false) {
            urun.count = 1;
            $scope.sepet.push(urun);
        }
        sepetiHesapla();
    };
    function sepetiHesapla() {
        $scope.total = 0;
        for (var i = 0; i < $scope.sepet.length; i++) {
            $scope.total += $scope.sepet[i].count * $scope.sepet[i].value;
        }
    }
    $scope.sepetiOnayla = function () {
       var dolar= sepetService.checkdollarcurrency($scope.total);
       console.log(dolar);
    };

});