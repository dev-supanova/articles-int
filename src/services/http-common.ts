import axios from 'axios';

export default axios.create({
    baseURL: "http://api.nytimes.com/svc/",
    headers: {
        "Content-type": "application/json"
    }
});
