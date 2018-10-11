function easyHTTP() {
   this.http = new XMLHttpRequest()
}
let url
//  GET request
easyHTTP.prototype.get= function(url, callback) {
   this.http.open('GET', url, true)
   
   // In ES5 'this is bound to the function scope'. To overcome this we set another variable to 'this' and pass it into the function. Arrow functions can overcome this with a lexical 'this'
   let self = this

   this.http.onload = function() {
      if(self.http.status === 200) {
         callback(null, self.http.responseText)
      } 
      else {
         callback(`Error ${self.http.status}`)
      }
   }
   this.http.send()
}

// POST request
easyHTTP.prototype.post = function(url, data, callback) {
   this.http.open('POST', url, true)
   this.http.setRequestHeader('Content-type', 'application/json')

   let self = this

   this.http.onload = function() {
      callback(null, self.http.responseText)
   }

   this.http.send(JSON.stringify(data))
}

// PUT request
easyHTTP.prototype.put = function(url, data, callback) {
   this.http.open('PUT', url, true)
   this.http.setRequestHeader('Content-type', 'application/json')

   let self = this

   this.http.onload = function() {
      callback(null, self.http.responseText)
   }

   this.http.send(JSON.stringify(data))
}

easyHTTP.prototype.delete = function(url, callback) {
   this.http.open('DELETE', url, true)

   let self = this
   this.http.onload = function() {
      if(self.http.status === 200) {
         callback(null, 'Post deleted!')
      } else {
         console.log(`ERRROR: ${self.http.status}`)
      }
   }
   this.http.send()
}