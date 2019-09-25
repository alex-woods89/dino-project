const baseURL = 'http://localhost:3000/api/upload_pics/'

export default {
    getUploadedPic(){
        return fetch(baseURL)
        .then(res => res.json())
    },
    postUploadedPic(payload){
        // console.log(payload)
        return fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        }). then(res => res.json())
    },

}
