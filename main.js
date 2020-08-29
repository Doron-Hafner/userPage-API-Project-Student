$('.buttons #DisplayUser').on('click', function () {
    if (apiManager.data.userName){
        renderer.renderUser()
        renderer.renderFriends()
    }
});
$('.buttons #loadUserData').on('click', function () {
    apiManager.getUserData()
    apiManager.getQuote()
    apiManager.getPokemon()
    apiManager.getIpsum()
});