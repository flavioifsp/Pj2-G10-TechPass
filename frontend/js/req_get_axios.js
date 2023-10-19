const axios = require('axios')

async function axiosGet(url) {
    let er = null, data
    try {
        data = (await axios.get(url)).data
    } catch (erro) {
        er = erro
    }

    return {data, er}
}

module.exports = axiosGet 