; (function (Vue) {
    new Vue({
        el: '#app',
        data: {
            loading: false,
            contacts: [],
            input: {
                search: '',
            }
        },
        mounted() {
            this.loading = true
            axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
                .then((res) => {
                    this.contacts = res.data.features
                    this.loading = false

                }).catch((err) => {
                    console.log(err);
                })
        },
        computed: {
            searchMenu() {
                if (this.input.search) {
                    return this.contacts.filter(item => {
                        let menu_address = item.properties.address
                        let search_address = this.input.search
                        return menu_address.indexOf(search_address) !== -1
                    })
                } else {
                    return this.contacts.filter(item => {
                        let menu_address = item.properties.address
                        let search_address = this.input.search
                        return menu_address.indexOf('台北市') !== -1
                    })
                }
            }
        }
    })
})(Vue)