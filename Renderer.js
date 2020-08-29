class Renderer {
    constructor () {
    }
    renderUser () {
        $('.container').empty()
        const source = $('#user-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(apiManager.data);
        $('.container').append(newHTML);
    }
    
    
    renderFriends() {
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(apiManager.data.friends);
        $('.container').append(newHTML);
    }
}


const renderer = new Renderer ()
