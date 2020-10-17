import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID n1WXMHaNuC_GfYm5efkwQrAZzldJ8ZvqJovbtUyzDPs'
    }
})