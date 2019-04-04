import axios from 'axios';

export default {
    getConfiguratorData
};

function getConfiguratorData() {
    return new Promise((resolve, reject) => {
        axios.get(process.env.REACT_APP_GET_CONFIGURATOR_DATA).then(response => {
            if (response.status === 200) { resolve(response); }
        }).catch(err => { reject(err); });
    })
}