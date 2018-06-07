"use strict";

function MatchService($http) {
    const getMatches = () =>{
        return $http({
            method: "GET",
            url: "/portal/matches"
        });
    };

    return {
        getMatches
    };

}

angular
    .module("app")
    .factory("MatchService", MatchService);
