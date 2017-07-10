angular.module('demoApp', ['ui.router']);
angular.module('demoApp').config(function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');
    
    $stateProvider
    	.state('root', {
    		url :'/',
    		templateUrl : 'home.html'
    	})
    	.state('dashboard', {
    		url :'/dashboard',
    		templateUrl : 'dashboard.html',
    		controller : function($scope){
    			$scope.state1=function(){
    				console.log("state1");
    			}
    			$scope.state2=function(){
    				console.log("state2");
    			}
    		}
    	})
    	.state('dashboard.state1', {
    		templateUrl : 'dashboard_state1.html'
    	})
    	.state('dashboard.state2', {
    		templateUrl : 'dashboard_state2.html'
    	})
    	.state('login', {
    		url :'/login',
    		templateUrl : 'login.html'
    	});
});