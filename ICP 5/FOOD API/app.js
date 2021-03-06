// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {

                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=F3B10TC3W0XFCVC5QXMPOSOKYZBBOPY04FCBMN42MIATV4DI" +
                    "&client_secret=P4BHI3ZTQYBGT0NFFMZI5OYDPKYPG1FQJGFVS4AV0E1DFHWZ\n" +
                    "&v=20160215&limit=5" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);


                handler.success(function (data) {

                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                        // Tie an array named "venueList" to the scope which is an array of objects.
                        // Each object should have key value pairs where the keys are "name", "id" , "location" and values are their corresponding values from the response
                        // Marks will be distributed between logic, implementation and UI


                        var myList = document.querySelector('ul');

                        for(var i = 0; i < 8; i++) {
                          var listItem = document.createElement('li');
                          listItem.innerHTML += '<p> ';
                          listItem.innerHTML = "NAME: "+ data.response.venues[i].name;
                          listItem.innerHTML += '<br>';
                          listItem.innerHTML += " LOCATION: "+ data.response.venues[i].location.address+ " "+data.response.venues[i].location.crossStreet;
                          listItem.innerHTML += '<br>';
                          listItem.innerHTML += '</p> ';
                          myList.appendChild(listItem);
                        }


                    }
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }
    });
