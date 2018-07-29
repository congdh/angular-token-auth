(function () {

    'use strict';

    angular
        .module('tokenAuthApp.components.auth', [])
        .controller('authLoginController', authLoginController)
        .controller('authRegisterController', authRegisterController)
        .controller('authStatusController', authStatusController);


    authLoginController.$inject = ['authService'];
    authRegisterController.$inject = ['authService'];
    authStatusController.$inject = ['authService'];


    function authLoginController(authService) {
        /*jshint validthis: true */
        const vm = this;
        vm.test = 'just a test';
        const sampleUser = {
            email: 'michael@gmail.com',
            password: 'herman'
        };
        vm.user = sampleUser;
        vm.onLogin = function () {
            authService.login(vm.user)
                .then((user) => {
                    localStorage.setItem('token', user.data.auth_token);
                    console.log(user.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    }

    function authRegisterController(authService) {
        /*jshint validthis: true */
        const vm = this;
        vm.user = {};
        const sampleUser = {
            email: 'michael@gmail.com',
            password: 'herman'
        };
        vm.user = sampleUser;
        vm.onRegister = function () {
            authService.register(vm.user)
                .then((user) => {
                    localStorage.setItem('token', user.data.auth_token);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
    }

    function authStatusController(authService) {
        /*jshint validthis: true */
        const vm = this;
        vm.isLoggedIn = false;
        const token = localStorage.getItem('token');
        if (token) {
            authService.ensureAuthenticated(token)
                .then((user) => {
                    if (user.data.status === 'success');
                    vm.isLoggedIn = true;
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

})();