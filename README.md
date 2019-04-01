# rest-api
## **List Route**
| Route | HTTP | Header(s) | Body |Description |
| ----- | ---- | --------- | ---- | ----------- |
| <span style="color:red">/api/signup</span>    | POST   | none      |  <span style="color:red">username:String</span> (**Required**),<br><span style="color:red">password:String</span> (**Required**),<br><span style="color:red">role:String</span> (**Required**) | Sign up with new user info |
| <span style="color:red">/api/signin</span>    | POST   | none      |  <span style="color:red">username:String</span> (**Required**),<br><span style="color:red">password:String</span> (**Required**)  | Sign in and get an access token based on credentials |
| <span style="color:red">/api/users</span>     | GET    | token     | none | Get all the users info |
| <span style="color:red">/api/users/:id</span> | GET    | token | none | Get a single user info |
| <span style="color:red">/api/users</span>     | POST   | token     | <span style="color:red">username:String</span> (**Required**),<br><span style="color:red">password:String</span> (**Required**),<br><span style="color:red">role:String</span> (**Required**) | Create a user |
| <span style="color:red">/api/users/:id</span> | DELETE | token |  <span style="color:red">username:String</span> (**Required**),<br><span style="color:red">password:String</span> (**Required**),<br><span style="color:red">role:String</span> (**Required**) | Delete a user |
| <span style="color:red">/api/users</span>     | PUT    | token     | <span style="color:red">username:String</span> (**Required**),<br><span style="color:red">password:String</span> (**Required**),<br><span style="color:red">role:String</span> (**Required**) | Update a user with new info |

## **Usage**
Make sure you have Node.js and npm installed in your compoter, and then run these commands:<br>
<span style="color:blue">$ </span>npm install<br>
<span style="color:blue">$ </span>nodemon app.js

Access the API via <span style="color:red">http://localhost:5000/api/users</span>