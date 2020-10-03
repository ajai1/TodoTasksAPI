# TodoTasksAPI

Todo Tasks API endpoints creation using Node, MongoDB and Express

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm start
```

| HTTP methods | End Points  | Actions                 |
| ------------ | ----------- | ----------------------- |
| GET          | /todos      | Get all the todos       |
| GET          | /todos/{id} | Get todo based on Id    |
| POST         | /todos      | Create a todo           |
| PUT          | /todos/{id} | Update todo based on Id |
| DELETE       | /todos/{id} | Delete todo based on Id |

### Request Body

```sh
{
        "name": "Todo Name",
        "description": "Todo Description",
        "tasks": [
            {
                "name": "Task 1 Name",
                "description": "Task 1 Description"
            },
            {
                "name": "Task 2 Name",
                "description": "Task 2 Description"
            }
        ]
    }
```

Use the above Request template
