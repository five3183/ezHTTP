const http = new EasyHTTP

// GET request
// http.get('https://jsonplaceholder.typicode.com/users')
//    .then(data => console.log(data))
//    .catch(err => console.log(err))

// User data
const data = {
   name: 'John Doe',
   username: 'JohnnyTheDoeBoy',
   email: 'jdoe@gmail.com'
}

// POST request
// http.post(`https://jsonplaceholder.typicode.com/users`, data)
//    .then(data => console.log(data))
//    .catch(err => console.log(err))


// PUT request
// http.put(`https://jsonplaceholder.typicode.com/users/2`, data)
//    .then(data => console.log(data))
//    .catch(err => console.log(err))

// DELETE request 
http.delete(`https://jsonplaceholder.typicode.com/users/2`)
   .then(data => console.log(data))
   .catch(err => console.log(err))