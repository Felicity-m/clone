
import axios from "axios"

const KEY = "AIzaSyC80HFWkmrdbcCw8hdWI1W-kIpb6Kxi08Y"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})
