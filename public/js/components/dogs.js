"use strict";

const dogs = {
    template:`

    <h4>Dogs</h4>
    <section ng-repeat="dog in $ctrl.dogs">
        <input ng-blur="$ctrl.updateDogs(dog);" ng-model="dog.dog_name">
        <input ng-blur="$ctrl.updateDogs(dog);" ng-model="dog.dog_age">
        <input ng-blur="$ctrl.updateDogs(dog);" ng-model="dog.dog_breed">
        <input ng-blur="$ctrl.updateDogs(dog);" ng-model="dog.dog_color">
        <input ng-blur="$ctrl.updateDogs(dog);" ng-model="dog.keyword">
        <a href="" ng-click="$ctrl.deleteDog(dog.dog_id);">Delete Dog </a>
    </section>

    <form ng-submit="$ctrl.addDog($ctrl.newDog);">
        <input type="text" placeholder="Dog Name" ng-model="$ctrl.newDog.dog_name">
        <input type="text" placeholder="Dog Age" ng-model="$ctrl.newDog.dog_age">
        <input type="text" placeholder="Dog Breed" ng-model="$ctrl.newDog.dog_breed">
        <input type="text" placeholder="Dog Color" ng-model="$ctrl.newDog.dog_color">
        <input type="text" placeholder="Keyword" ng-model="$ctrl.newDog.keyword">
        <button> Add Dog </button>
    </form>
    `,

    controller: ["DogService", function(DogService){
        const vm= this; 

        DogService.getDogs().then((response)=>{
            vm.dogs = response.data;
        });

        vm.addDog = (newDog) => {
            DogService.addDog(newDog).then((response)=>{
                vm.dogs = response.data;
            });
            vm.newDog = {};
        };

        vm.updateDogs =(dog) =>{
            DogService.updateDogs(dog).then((response)=>{
                vm.dogs = response.data; 
            });
        };

        vm.deleteDog = (id) => {
            DogService.deleteDog(id).then((response)=>{
                vm.dogs = response.data; 
            });
        };
    }]
};

angular
    .module("app")
    .component("dogs", dogs); 