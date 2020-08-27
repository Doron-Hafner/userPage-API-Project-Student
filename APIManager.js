class APIManager {
    constructor() {
        this.data = {
            friends: []
        }
    }
    getUserData() {
        $.ajax({
            type: "GET",
            url: "https://randomuser.me/api/?results=7",
            success: (response) => {
                console.log(this);
                let users = response.results
                this.data.userName = `${users[0].name.first} ${users[0].name.last}`
                this.data.location = `${users[0].location.city}, ${users[0].location.state}`
                this.data.image = users[0].picture.large
                users.splice(0, 1)
                users.forEach(element => {
                    this.data.friends.push(`${element.name.first} ${element.name.last}`)
                });
            },
            error: function () {
                alert('something wrong try to refresh')
            }
        });
        this.getQuote()
        this.getPokemon()
        this.getIpsum()
    }


    getQuote() {
        $.ajax({
            type: "GET",
            url: "https://api.kanye.rest",
            success: (response) => {
                let quote = response.quote
                this.data.quote = quote
            },
            error: function () {
                alert('something wrong try to refresh')
            }
        });
    }

    getPokemon() {
        $.ajax({
            type: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/1/",
            success: (response) => {
                let pokemon = response.species.name
                this.data.pokemon = pokemon
            },
            error: function () {
                alert('something wrong try to refresh')
            }
        });
    }

    getIpsum() {
        $.ajax({
            type: "GET",
            url: "https://baconipsum.com/api/?type=meat-and-filler",
            success: (response) => {
                this.data.about = response[0]
            },
            error: function () {
                alert('something wrong try to refresh')
            }
        });
    }
}
const apiManager = new APIManager();


