(function () {
    'use strict';
    angular.module('userController', ['usersService'])
    .controller('users', Users);

    Users.$inject = ['$scope', 'UsersService'];
    function Users($scope, UsersService) {
    	$scope.userList = UsersService.query();
    }
})();