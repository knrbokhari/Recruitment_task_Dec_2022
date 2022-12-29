## Address Book REST Full API

## Built With
* Node.js
* Express.js
* MongoDB


## Requirements

For development, you will only need Node.js v16+ installed in your environnement.


## Install 
    using SSH:
    $ git clone git@github.com:knrbokhari/Recruitment_task_Dec_2022.git
    or using HTTPS:
    $ git clone https://github.com/knrbokhari/Recruitment_task_Dec_2022.git
    $ cd Recruitment_task_Dec_2022/order_api
    $ npm install


## Configure app
Create a `.env` file. Open `.env` then You will need to give your mongo_DB URL:

```
MONGO_DB = 
```
### Run the server with nodemon
    $ npm run dev
### Run the server 
    $ npm start
### Run the test 
    $ npm run test

<!-- ### API Documentation
Check out the API documentation by visiting this [Link](https://documenter.getpostman.com/view/21641752/2s8YzS1j4s). -->

### Live server link
Check out the API by visiting this [Link](https://order-api-rxy0.onrender.com/).

```
https://order-api-rxy0.onrender.com/
```

### API Documentation

#### GET API
    $ GET /api/v1/order

API endpoints return an array of Orders.
```
{
  "success": true,
  "data": [
    {
      "_id": "63ada542ee9b9077f88a1284",
      "orderItems": [
        {
          "_id": "63ada542ee9b9077f88a1281",
          "product": "Orange",
          "quantity": 8
        },
        {
          "_id": "63ada542ee9b9077f88a1282",
          "product": "Banana",
          "quantity": 10
        }
      ],
      "phone": "+420702241333",
      "createdAt": "2022-12-29T14:33:38.703Z",
      "updatedAt": "2022-12-29T14:33:38.703Z"
    },
  ]
}
```
#### POST API

    $ POST /api/v1/order

This API take JSON as a body.
```
{
    "orderItems" : [
        {
        "quantity": 3,
        "product" : "Orange"
        },
        {
        "quantity": 1,
        "product" : "Banana"
        }
    ],
    "phone": "+420702241333"
}
```
and API endpoints return a success message.
```
{
    "success": true,
    "message": "New order created successfully"
}
```