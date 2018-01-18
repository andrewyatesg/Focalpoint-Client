<style src="./HeaderOne.css"></style>
<template src="./HeaderOne.html"></template>
<script>
  import VLink from '../../components/VLink.vue'

  export default {
    data() {
        return {
            sidePanelOpen: false,
            username: '',
            password: '',
            loggedIn: false,
            user: {},
            errors: null
        }
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    components: {
      VLink
    },
    created() {
        let vm = this;
        _api.currentUser(function (err, res) {
            if (err) {
                console.log("Not logged in.");
            }
            else if (res.data)
            {
                vm.loggedIn = true;
                vm.user = res.data;
            }
        });
    },
    methods: {
        togglePanel(e) {
            if (this.sidePanelOpen) {
                this.clearVars(); //CLEARS VARS
                document.getElementById("side-panel").style.width = "0";
                this.sidePanelOpen = false;
            } else if (!this.loggedIn) {
                document.getElementById("side-panel").style.width = "20%";
                this.sidePanelOpen = true;
            }
        },
        login() {
            let vm = this;

            _api.login(this.username, this.password, function (err, res) {
                if (err)
                {
                    vm.errors = err.errors[0].message; //TODO: Join multiple errors together. don't just use first one
                    vm.loggedIn = false;
                }
                else if (res.data)
                {
                    vm.loggedIn = true;
                    vm.user = res.data;
                    vm.togglePanel();
                }
                else
                {
                    vm.errors = _const.headerOne.loginError;
                }
            });
        },
        logout() {
            let vm = this;

            _api.logout(function (err, res) {
                if (err)
                {
                    vm.loggedIn = false;
                    return console.log(err);
                }
                vm.loggedIn = false;
            });
        },
        loginButtonDisplay() {
            let vm = this;

            if (vm.loggedIn) return vm.user.username;
            else return _const.headerOne.loginButton;
        },
        clearVars() {
            console.log('CLEARING VARS IN HEADER-ONE!');
            this.username = '';
            this.password = '';
            this.errors = null;
        }
    }
  }
</script>
