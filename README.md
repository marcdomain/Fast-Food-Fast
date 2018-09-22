# Fast-Food-Fast
[![Build Status](https://travis-ci.org/marcdomain/Fast-Food-Fast.svg?branch=develop)](https://travis-ci.org/marcdomain/Fast-Food-Fast) [![Coverage Status](https://coveralls.io/repos/github/marcdomain/Fast-Food-Fast/badge.svg?branch=develop)](https://coveralls.io/github/marcdomain/Fast-Food-Fast?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/2d74b6d3d4da8005455f/maintainability)](https://codeclimate.com/github/marcdomain/Fast-Food-Fast/maintainability)

## Description
Fast-Food-Fast​ is a food delivery service app for a restaurant.

<br/><b>UI-pages:</b> https://marcdomain.github.io/Fast-Food-Fast/UI
 <br/><b> API documentation: </b> https://marcus-fast-food-fast.herokuapp.com/api/v1/

## Features
Below are the features of Fast-Food-Fast Application at this point


###
- User can Signup <br>
- User can Login <br>
- User can Post Orders to the app:
```
    Required Inputs
    {
      email:
      phone:
      item:
      price:
      quantity:
    }
```
- Get list of all Oders<br/>
- Get a Specific order<br/>
- Update a specific order status
```
  Required Inputs
  {
    status:
  }
```
- Delete a specific order
<br/>

## API Endpoints

<table>

<tr><th>HTTP VERB</th><th>API ENDPOINT</th><th>FUNCTION</th><th>INPUT</th></tr>

<tr>
<td>POST</td> <td>api/v1/auth/signup</td>  <td>Signup user</td>
<td>
{<br> name: "string",<br>email: "string",<br>phone: "string",<br> address: "string",<br>password: "string"<br>}
</td>
</tr>

<tr>
<td>POST</td> <td>api/v1/auth/login</td>  <td>Login user</td>
<td>
{<br> email: "string",<br>password: "string"<br>}
</td>
</tr>

<tr><td>POST</td> <td>api/v1/orders</td>  <td>Place order</td> <td></td></tr>

<tr><td>GET</td> <td>api/v1/orders</td>  <td>List of all orders</td> <td></td></tr>

<tr><td>GET</td> <td>api/v1/orders/:orderId</td>  <td>Get a specific order</td> <td></td></tr>

<tr><td>PUT</td> <td>api/v1/orders/:orderId</td> <td>Update an order status</td> <td></td></tr>

<tr><td>DELETE</td> <td>api/v1/orders/:orderId</td> <td>Delete an order</td> <td></td></tr>

</table>

## Installation
1. Clone this repository below:
```
https://github.com/marcdomain/Fast-Food-Fast
```
2. cd into the repository:
```
cd Fast-Food-Fast
```
3. Open the repository in terminal and Install dependencies by running:
```
npm install
```
4. Run "npm start" to start the app

5. Use Postman to test all endpoints

6. Run "npm test" to test all endpoints


## Technologies

ES6: See [here](https://en.wikipedia.org/wiki/ECMAScript) for details.

NodeJS: An open-source, cross-platform JavaScript run-time environment which allows you enjoy the features of Javascript off the web browsers and implement server-side web development. Visit [here](https://nodejs.org/en/) for details.

ExressJS: This is the web application framework for Node.js Visit [here](https://expressjs.com) for details

Airbnb JavaScript style guide was adopted as a coding convention, see [here](https://github.com/airbnb/javascript) for details.
