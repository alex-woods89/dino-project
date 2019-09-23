const baseURL = 'http://localhost:3000/api/dinosaur/'

export default {
    getFavoriteDinosaurs(){
        return fetch(baseURL)
        .then(res => res.json())
    },
    postFavoriteDinosaur(payload){
        return fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        }). then(res => res.json())
    },
    deleteFavoriteDinosaur(dinosaur){
        return fetch(baseURL + dinosaur, {
            method:"DELETE"
        })
    }

}