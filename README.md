# BFHL API

A REST API built for the VIT Full Stack assignment.



##  Setup

1. **Install dependencies**

   npm install

2. **Run the server**

   npm start

3. **For development (auto-restart with nodemon)**


   npm run dev

##  API Endpoints

### **POST /bfhl**

Processes an array of data and returns categorized results.

**Request Example**

json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}

**Response Example**

json
{
  "is_success": true,
  "user_id": "csharikrishna",
  "email": "harikrishna.22bce9001@vitapstudent.ac.in
",
  "roll_number": "22BCE9001",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}

### **GET /bfhl**

Returns an operation code for testing.

## Deployment

This API can be deployed on:

* Vercel
* Railway
* Render
* Heroku


## Important Notes

* **Update Personal Details** in `server.js` before deployment:

  * `user_id`: Use the format `"firstname_lastname_ddmmyyyy"`
  * `email`: Your actual email
  * `roll_number`: Your VIT roll number

## Installation Commands

npm init -y
npm install express cors
npm install --save-dev nodemon

## Testing

You can test the API using **Postman** or **curl**:

curl -X POST http://localhost:3000/bfhl \
-H "Content-Type: application/json" \
-d '{"data": ["a","1","334","4","R", "$"]}'





