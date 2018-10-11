const http = new easyHTTP

// GET POSTS
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, res) {
//    if(err) {
//       console.log(err)
//    }
//    else { 
//       console.log(res)
//    }
// })

// GET single posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, res) {
//    if(err) {
//       console.log(err)
//    }
//    else { 
//       console.log(res)
//    }
// })

// Create Data for post

const data = {
   title: 'Test Post',
   body: 'This is a test post'
}

// POST request
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res) {
//    if(err) {
//       console.log(err)
//    } else {
//       console.log(res)
//    }
// })

// PUT request
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, res) {
//    if(err) {
//       console.log(error)
//    } else {
//       console.log (res)
//    }
// })

// DELETE request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, res) {
   if (err) {
      console.log(err) 
   } else {
      console.log(res)
   }
})