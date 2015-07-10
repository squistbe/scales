(function() {
    'use strict';
    angular.module('usersService', ['ngResource'])
            .factory('UsersService', users);

    users.$inject = ['$resource'];
    function users($resource) {
        return $resource('users/userlist/:id', {}, {
            query: {
                method: 'GET'
            },
            edit: { 
                method: 'PUT'
            }
        });
    }
})();