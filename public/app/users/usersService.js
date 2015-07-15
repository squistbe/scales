(function() {
    'use strict';
    angular.module('usersService', ['ngResource'])
            .factory('UsersService', users);

    users.$inject = ['$resource'];
    function users($resource) {
        return $resource('users/:id', {}, {
            query: {
                method: 'GET'
            },
            update: { 
                method: 'PUT'
            },
            create: {
                method: 'POST'
            },
            remove: {
                method: 'DELETE'
            }
        });
    }
})();