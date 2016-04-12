
angular.module('starter.services', [])
.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        face: 'img/max.png'
    }, {
        id: 2,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        face: 'img/adam.jpg'
    }, {
        id: 3,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Mike Harrington',
        lastText: 'This is wicked good ice cream.',
        face: 'img/mike.png'
    }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
})
.factory('Posts', function ($http) {
    return {
        getallusers: function () {
            var url = "http://wcf.masterek.org/MasterEKService.svc/GetArchiveSubNews";
            return $http.post(url, { objInput: { "LanguageID": 1 } });
        }
    };
})
//Narendra Starting
 .factory('archiveimg', function ($http, $ionicPopup) {
     //if (window.Connection) {
     //    if (navigator.connection.type == Connection.NONE) {
     //        $ionicPopup.confirm({
     //            title: "Alert!",
     //            content: "No Internet connection Available.Please check your connection and try again."
     //        }).then(function (result) {
     //            if (!result) {
     //                ionic.Platform.exitApp();
     //            }
     //        });
     //    }
     //    else
     //        if (navigator.connection.type != Connection.NONE) {
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
     //        }
     //}


 })

 .factory('getimgcontroller', function ($http, $ionicPopup) {

     return {
         GetImages: function () {
             //if (window.Connection) {
             //    if (navigator.connection.type == Connection.NONE) {
             //        $ionicPopup.confirm({
             //            title: "Alert!",
             //            content: "No Internet connection Available.Please check your connection and try again."
             //        }).then(function (result) {
             //            if (!result) {
             //                return ("No Internet connection Available.Please check your connection and try again.");
             //            }
             //        });
             //    }
             //    else {
                    // if (navigator.connection.type != Connection.NONE) {
                         var url = "http://wcf.masterek.org/MasterEKService.svc/GetImages";
                         return $http.post(url);
                    // }

             //    }
             //}

         },
         GetLoadImages: function (ImageEventId) {
             //if (window.Connection) {
             //    if (navigator.connection.type == Connection.NONE) {
             //        $ionicPopup.confirm({
             //            title: "Alert!",
             //            content: "No Internet connection Available.Please check your connection and try again."
             //        }).then(function (result) {
             //            if (!result) {
             //                return ("No Internet connection Available.Please check your connection and try again.");
             //            }
             //        });
             //    }
             //    else {
                     //if (navigator.connection.type != Connection.NONE) {
                          var url = "http://wcf.masterek.org/MasterEKService.svc/GetLoadImages";
             return $http.post(url, { ObjInput: { "ImageEventId": ImageEventId } });
                   //  }

             //    }
             //}
          

         }
     };

 })

.factory('homeController', function ($http, $ionicPopup) {
    //if (window.Connection) {
    //    if (navigator.connection.type == Connection.NONE) {
    //        $ionicPopup.confirm({
    //            title: "Alert!",
    //            content: "No Internet connection Available.Please check your connection and try again."
    //        }).then(function (result) {
    //            if (!result) {
    //                ionic.Platform.exitApp();
    //            }
    //            else {
    //                return ("No Internet connection Available.Please check your connection and try again.");
    //            }
    //        });
    //    }
    //    else
    //        if (navigator.connection.type != Connection.NONE) {
                return {
                    GetArchiveSubNews: function () {
                        var url = "http://wcf.masterek.org/MasterEKService.svc/GetArchiveSubNews";
                        return $http.post(url, { objInput: { "LanguageID": 1 } });
                    }
                };
    //        }
    //}

})

.factory('cnewsController', function ($http, $ionicPopup) {
    //if (window.Connection) {
    //    if (navigator.connection.type == Connection.NONE) {

    //        $ionicPopup.confirm({
    //            title: "Alert!",
    //            content: "No Internet connection Available.Please check your connection and try again."
    //        }).then(function (result) {
    //            if (!result) {
    //                ionic.Platform.exitApp();
    //            }
    //        });


    //    }
    //    else
            //if (navigator.connection.type != Connection.NONE) {
                return {
                    GetCurrentSubNews: function () {
                        var url = "http://wcf.masterek.org/MasterEKService.svc/GetCurrentSubNews";
                        return $http.post(url, { objInput: { "LanguageID": 1 } });
                    }
                };

    //        }
    //}

})

.factory('eventscontroller', function ($http, $ionicPopup) {
    //if (window.Connection) {
    //    if (navigator.connection.type == Connection.NONE) {
    //        $ionicPopup.confirm({
    //            title: "Alert!",
    //            content: "No Internet connection Available.Please check your connection and try again."

    //        }).then(function (result) {
    //            if (!result) {
    //                ionic.Platform.exitApp();
    //            }
    //        });
    //    }
    //    else
    //        if (navigator.connection.type != Connection.NONE) {
                return {
                    DisplayEvents: function () {
                        var url = "http://wcf.masterek.org/MasterEKService.svc/DisplayEvents";
                        return $http.post(url);
                    }
                };
    //        }

    //}


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
