import axios from 'axios';

const slider = {
    title: "Our customers love us",
    reviews: [{
        name: "Pete Zahut",
        position: "Chief @ Maniak",
        comment: "It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail"
    }, 
    {
        name: "Bernabe",
        position: "Tech Lead @ Maniak",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus quam. Curabitur ultricies pretium orci nec finibus. Nullam congue quis tortor a tempus. Morbi rutrum, nunc at hendrerit gravida, tortor turpis molestie nibh, vel varius augue ante eu velit."
    },
    {
        name: "Kike",
        position: "El Momo",
        comment: "aosdnoaisndoiasndoinasoidnoasidnoas asindoiasndoinas9id aissndiansdias."
    },]
}

export default {
    getTestimonials
};

function getTestimonials() {
    return new Promise((resolve, reject) => {
        resolve(slider);
        /* axios.get(process.env.REACT_APP_GET_GLOBAL_DATA).then(response => {
            if (response.status === 200) { resolve(response); }
        }).catch(err => { reject(err); }); */
    })
}