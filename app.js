var app=angular.module('entiAC',['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app',{
        url:'/',
        views:{'battlefield':{templateUrl:'dynamicArea/table.html',
            controller:"tableController"},
            'buttonArea':{templateUrl:'dynamicArea/buttonArea.html'}
        }
    }).state('app.scriptField',{
        url:'scriptField',
        views:{
            'battlefield@':{templateUrl:'dynamicArea/scriptField.html'}
        }
    }).state('app.searchByDate', {
        url: 'searchByDate',
        views: {
           'battlefield@': {templateUrl: 'dynamicArea/searchByDate.html'}
        }
        });
    $urlRouterProvider.otherwise("/");
});