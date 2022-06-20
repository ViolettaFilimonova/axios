const axios = require('axios').default
axios.get('https://raw.githubusercontent.com/ViolettaFilimonova/data-json-wds/main/data.json')
.then(response => {
    console.log(response.data)
}).catch(err => console.error(err))