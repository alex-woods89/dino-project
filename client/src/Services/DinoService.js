const baseURL = 'http://localhost:3000/api/fav_dinos/'

export default {
    getFavoriteDinosaurs(){
        return fetch(baseURL)
        .then(res => res.json())
    },
    postFavoriteDinosaur(payload){
        // console.log(payload)
        return fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        }). then(res => res.json())

    },
    deleteFavoriteDinosaur(id){
        return fetch(baseURL + id, {
            method:"DELETE"
        })
    }

}
