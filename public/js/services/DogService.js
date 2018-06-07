"use strict";

function DogService($http) {
    const getDogs = () =>{
        return $http({
            method: "GET",
            url: "/portal/dogs"
        });
    };

    const addDog = (newDog) => {
        return $http({
            method: "POST",
            url: "/portal/dogs",
            data: newDog
        });
    };

    const deleteDog = (id) => {
        return $http({
            method: "DELETE",
            url: "/portal/dogs/" + id
        });
    };

    const updateDogs = (dog) => {
        return $http({
            method: "PUT",
            url: "/portal/dogs/" + dog.dog_id,
            data: dog
        });
    };

    return {
        getDogs,
        addDog,
        deleteDog,
        updateDogs
    };
};

angular
    .module("app")
    .factory("DogService", DogService);