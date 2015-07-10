(function () {
    'use strict';
    angular.module('userController', ['usersService'])
    .controller('users', Users);

    Users.$inject = ['$scope', 'UsersService'];
    function Users($scope, UsersService) {
    	$scope.userList = UsersService.query();
    	$scope.getRandomUrl = getRandomUrl;

    	function getRandomUrl() {
    		var randomNumber = Math.random();

    		if (randomNumber < .33) return 'http://fillmurray.com/100/100';
    		else if (randomNumber > .66) return 'http://www.placecage.com/100/100';
    		else return 'http://stevensegallery.com/100/100';
    	}
    }
})();