
let memo = {}
async function fetchPhoto(searchString) {

    // if (searchString in imageURLStore) return memo[searchString]

    const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1794210267430a8299b7a8239ec1dd69&text=${searchString}&per_page=3&format=json&nojsoncallback=1`)
    const data = await response.json()
    const topResult = data.photos.photo[0];
    
    const { farm, server, id, secret } = topResult;
    const imageURL = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
    // memo[searchString] = imageURL
    return imageURL
}

export default fetchPhoto