
//this var is only a placeholder.. Abhi should have a better var for pulling the zip code from her Tom Tom API

var lat = 36.102;
var long = -78.713;


let client = new jso.JSO({
	providerID: "meetup",
    client_id: "en8q3fp8surbmul0tk8u1o676j",
    redirect_uri: "http://localhost:8080/", 
    authorization: "https://secure.meetup.com/oauth2/authorize",
    response_type: 'code',
    client_secret: 'ju13k7bsdleo9adn23886dpj2n',
    token: "https://secure.meetup.com/oauth2/access?",
})

client.getToken()
    .then((token) => {
    	console.log("I got the token: ", token)
    });

//to simulate log out, call client.wipeTokens()

//API call stuff - of course, this will evolve
meetUpApi(lat, long);

function meetUpApi(lat, long){
    let muf = new Fetcher(client)
    let  url = 'https://api.meetup.com/find/groups?&sign=true&photo-host=public&lon=' + long + '&text=dogs&lat=' + lat + '&page=20'
    muf.fetch(url, {})
        .then((data) => {
        return data.json()
        })
        .then((data) => {
            console.log("I got json data from the API", data)
        })
        .catch((err) => {
            console.error("Error from fetcher", err)
        })
  };




