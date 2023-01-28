const axios = require('axios')
const token = 'i4gp7kqnqbPIdgnuCvKsfM7FSmcXtSBh2zFfxYpVd08'

const body = {
    message: `Hello World ${new Date()}`,
    imageThumbnail: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    imageFullsize: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
}

axios.post('https://notify-api.line.me/api/notify', 
            body, 
            {headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/x-www-form-urlencoded'}}
    )
    .then(function(data){
        console.log(data)
    })
    .catch(function(err){
        console.log(err);
    })