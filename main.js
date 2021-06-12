const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: "I love"
        }
    },

})


// createApp expects an option object to configure the initial vue app.
// This object expects a data attribute which is a fonction
// The data function equally creates attributes of the vue app.