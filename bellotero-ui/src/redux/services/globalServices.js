import axios from 'axios';

export default {
    getGlobalData
};

function getGlobalData() {
    return new Promise((resolve, reject) => {
        axios.get(process.env.REACT_APP_GET_GLOBAL_DATA).then(response => {
            if (response.status === 200) { resolve(response); }
        }).catch(err => { reject(err); });
    })
}