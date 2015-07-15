define({ "api": [  {    "type": "POST",    "url": "/users",    "title": "Create new user",    "name": "AddUser",    "group": "Users",    "version": "0.0.0",    "filename": "routes/users/users.js",    "groupTitle": "Users"  },  {    "type": "DELETE",    "url": "/users/:id",    "title": "Delete user",    "name": "DeleteUsers",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p> "          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -X DELETE http://localhost:3000/users/559f3355ccee0d035611e142",        "type": "curl"      }    ],    "version": "0.0.0",    "filename": "routes/users/users.js",    "groupTitle": "Users"  },  {    "type": "GET",    "url": "/users/:id",    "title": "Get user by id",    "name": "GetUser",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p> "          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -X GET http://localhost:3000/users/559f3355ccee0d035611e142",        "type": "curl"      }    ],    "version": "0.0.0",    "filename": "routes/users/users.js",    "groupTitle": "Users"  },  {    "type": "GET",    "url": "/users",    "title": "Get users",    "name": "GetUsers",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Object</p> ",            "optional": false,            "field": "sort",            "description": ""          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "search",            "description": ""          },          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": false,            "field": "start",            "description": ""          },          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": false,            "field": "limit",            "description": ""          }        ]      }    },    "examples": [      {        "title": "Get all users:",        "content": "curl -X GET http://localhost:3000/users/",        "type": "curl"      }    ],    "version": "0.0.0",    "filename": "routes/users/users.js",    "groupTitle": "Users"  },  {    "type": "PUT",    "url": "/users/:id",    "title": "Update user by id",    "name": "UpdateUser",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "id",            "description": "<p>Users unique ID.</p> "          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -X PUT http://localhost:3000/users/559f3355ccee0d035611e142",        "type": "curl"      }    ],    "version": "0.0.0",    "filename": "routes/users/users.js",    "groupTitle": "Users"  }] });