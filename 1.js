new Vue({
    el: "#app",

    data: {
        title1: "Hello Vue.js!",
        button: "hello button.",
        par: "<font face='tahoma' color='red'><b>this is a paragraph</b></font>",
        google: "https://www.google.com",
        number: 0,
    },

    methods: {

        increment(e) {
            this.number++;
        },

        inputcrement(e) {
            if (e.keyCode == 13) {
                this.number += parseInt(e.target.value);
                document.querySelector("input").value = "";
            }
        }
    }
});