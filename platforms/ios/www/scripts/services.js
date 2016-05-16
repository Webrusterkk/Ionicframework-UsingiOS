
angular.module('starter.services', [])


//Services Starting
 .factory('archiveimg', function ($http, $ionicPopup) {
     
                 return {
                     GetArchiveImages: function () {
                         var url = "http://wcf.masterek.org/MasterEKService.svc/GetArchiveImages";
                         return $http.post(url);
                     },
                     GetLoadImages: function (ImageEventId) {
                         var url = "http://wcf.masterek.org/MasterEKService.svc/GetLoadImages";
                         return $http.post(url, { ObjInput: { "ImageEventId": ImageEventId } });
                     }
                 };
             
     


 })

 .factory('getimgcontroller', function ($http, $ionicPopup) {

     return {
         GetImages: function () {            
                         var url = "http://wcf.masterek.org/MasterEKService.svc/GetImages";
                         return $http.post(url);
                 },
         GetLoadImages: function (ImageEventId) {            
                          var url = "http://wcf.masterek.org/MasterEKService.svc/GetLoadImages";
             return $http.post(url, { ObjInput: { "ImageEventId": ImageEventId } });
                     }

          
     };

 })

.factory('homeController', function ($http, $ionicPopup) {     
                return {
                    GetArchiveSubNews: function () {
                        var url = "http://wcf.masterek.org/MasterEKService.svc/GetArchiveSubNews";
                        return $http.post(url, { objInput: { "LanguageID": 1 } });
                    }
                };
   
})

.factory('cnewsController', function ($http, $ionicPopup) {
                return {
                    GetCurrentSubNews: function () {
                        var url = "http://wcf.masterek.org/MasterEKService.svc/GetCurrentSubNews";
                        return $http.post(url, { objInput: { "LanguageID": 1 } });
                    }
                };
})

.factory('eventscontroller', function ($http, $ionicPopup) {
    
                return {
                    DisplayEvents: function () {
                        var url = "http://wcf.masterek.org/MasterEKService.svc/DisplayEvents";
                        return $http.post(url);
                    }
                };
})




.factory('getcaptioncontroller', function ($http) {
    return {
        GetCaptions: function () {
            var url = "http://wcf.masterek.org/MasterEKService.svc/GetCaptions";
            return $http.post(url);
        }
    };

})


.factory('marqueeimagescontroller', function ($http) {
    return {
        MarqueeImages: function () {
            var url = "http://wcf.masterek.org/MasterEKService.svc/MarqueeImages";
            return $http.post(url);
        }
    };

})

.service('ModalService', function ($ionicModal, $rootScope) {
    var init = function (tpl, $scope) {

        var promise;
        $scope = $scope || $rootScope.$new();

        promise = $ionicModal.fromTemplateUrl(tpl, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
            return modal;
        });

        $scope.openModal = function () {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        });

        return promise;
    }

    return {
        init: init
    }

})
//ending;
