angular.module('directory.services', [])

    .factory('EmployeeService', function($q) {

        var employees = [
            {"id": 1, "firstName": "Gari",  "pic": "bg.png"},
            { "id": 1, "firstName": "Gari", "pic": "bg.png" },
            { "id": 1, "firstName": "Gari", "pic": "bg.png" },
            { "id": 1, "firstName": "Gari", "pic": "bg.png" },
            { "id": 1, "firstName": "Gari", "pic": "James_King.jpg" }
        ];

        // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
        // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
        // service with a JSON service that gets its data from a remote server without having to changes anything
        // in the modules invoking the data service since the api is already async.

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(employees);
                return deferred.promise;
            }
           
        }

    });