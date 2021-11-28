new Vue({
    el: "#app",
    data: {
        number: 1001,
        age: 0
    },
    methods: {
        increment() {
            this.number++
        },
        ageWriter() {
            return this.age >= 18 ? 'reşit' : 'değil'
        }
    },
    computed: {
        computed() {
            return this.age >= 18 ? 'reşit' : 'değil'
        }

    },
    watch: {
        age(newvalue, oldvalue) {
            console.log("newvalue: " + newvalue);
            console.log("oldvalue: " + oldvalue);
        }
    }
});