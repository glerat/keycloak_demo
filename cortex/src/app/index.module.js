(function() {
    'use strict';

    angular
        .module('cortex', [
            'angular-loading-bar',
            'ngAnimate',
            'ngSanitize',
            'ngRoute',
            'toastr',
            'ui.bootstrap',
            'cortex.user',
            'cortex.cargo',
            'cortex.detail',
            'cortex.cargoService',
            'cortex.locationService',
            'cortex.jobService'
        ]);

})();
