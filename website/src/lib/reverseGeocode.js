import townJSON from "./US.json"

function toRadian (num) {
    return (num * Math.PI) / 180
}

function dist(start, end) {
    // init constants
    const km = 6371
    const mile = 3960
  
    // convert everything to radians
    const R = mile
    const dLat = toRadian(end.latitude - start.latitude)
    const dLon = toRadian(end.longitude - start.longitude)
    const lat1 = toRadian(start.latitude)
    const lat2 = toRadian(end.latitude)
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    return R * c
  }

 export default function lookup (latitude, longitude) {
    let minDistance = Infinity
    let city = {}
  
    // start with inout values
    const start = { latitude, longitude }
  
    // iterate through all locations
  
      const otherCountryOrigin = townJSON
      
      otherCountryOrigin.forEach(location => {
        const distance = dist(start, location)
        if (distance < minDistance) {
          city = location
          minDistance = distance
        }
      })
    
    return city
  }

 