angular.module('starter.controller', ['ionic'])
    .controller('appController', function($scope, $stateParams, $http) {
        $scope.hold = "inter";
        $scope.m_inter = "active";
        $scope.m_national = "";
        $scope.m_sports = "";
        $http.get(" https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=f68c061d9afb40aba19c8928b95d1226")
            .then(function(articles) {
                $scope.stack = articles.data.articles;
                console.log($scope.stack);
                // console.log($scope.stack.data.articles.title);
            })

        $scope.inter = function() {
            console.log("international");
            $scope.stack = [];
            $http.get(" https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=f68c061d9afb40aba19c8928b95d1226")
                .then(function(articles) {
                    $scope.stack = articles.data.articles;
                    console.log($scope.stack);
                    $scope.m_inter = "active";
                    $scope.m_sports = "";
                    $scope.m_national = "";
                    // console.log($scope.stack.data.articles.title);
                })

        }
        $scope.national = function() {
            console.log("national");
            $scope.hold = "national";
            $http.get("https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=f68c061d9afb40aba19c8928b95d1226")
                .then(function(articles) {
                    $scope.stack = articles.data.articles;
                    console.log($scope.stack);
                    $scope.m_inter = "";
                    $scope.m_sports = "";
                    $scope.m_national = "active";
                    // console.log($scope.stack.data.articles.title);
                })
        }
        $scope.sports = function() {
            console.log("sports");
            $http.get("https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=f68c061d9afb40aba19c8928b95d1226")
                .then(function(articles) {
                    $scope.stack = articles.data.articles;
                    console.log($scope.stack);
                    $scope.m_inter = "";
                    $scope.m_sports = "active";
                    $scope.m_national = "";
                    // console.log($scope.stack.data.articles.title);
                })
        }
        $scope.doRefresh = function() {
            console.log("Hold is  :-" + $scope.hold);
            $scope.hold();
        }
    })