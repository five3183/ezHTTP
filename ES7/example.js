// // BELOW is a simple example of what await and promise does 
// // adding in async will return a promise 

// const myFunc = async () => {
//    const promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve('Hello'), 3 * 1000)
//    })
//    const error = false

//    if(!error) {
//       const res = await promise // Wait until the promise is resolved to return res
//       return res
//    } else {
//       await Promise.reject(new Error ('Shit is fucked up!'))
//    }
//    }


// myFunc()
//    .then(res => console.log(res))
//    .catch(err => console.log(err))
// // **********  END OF EXAMPLE *******************

const getUsers = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users')

   const data = await response.json()

   return data
}

getUsers()
   .then(users => console.log(users))