"use strict";

const owners = {
    template: `
    <h4>Owners</h4>
   
    <section ng-repeat="owner in $ctrl.owners">
        <input ng-blur="$ctrl.updateOwner(owner);" ng-model="owner.owner_name">
        <input ng-blur="$ctrl.updateOwner(owner);" ng-model="owner.owner_address">
        <input ng-blur="$ctrl.updateOwner(owner);" ng-model="owner.owner_age">
        <input ng-blur="$ctrl.updateOwner(owner);" ng-model="owner.dog_name">
        <input ng-blur="$ctrl.updateOwner(owner);" ng-model="owner.keyword">
        <a href=""ng-click="$ctrl.deleteOwner(owner.owner_id);">Delete Owner</a>
    </section>

    <form ng-submit="$ctrl.addOwner($ctrl.newOwner);">
        <input type="text" placeholder="owner name" ng-model="$ctrl.newOwner.owner_name">
        <input type="text" placeholder="owner address" ng-model="$ctrl.newOwner.owner_address">
        <input type="text" placeholder="owner age" ng-model="$ctrl.newOwner.owner_age">
        <input type="text" placeholder="dog name" ng-model="$ctrl.newOwner.dog_name">
        <input type="text" placeholder="Keyword" ng-model="$ctrl.newOwner.keyword">
        <button>Add Owner </button>
    </form>
    
    
    `,

    controller: ["OwnerService", function (OwnerService) {
        const vm = this;

        OwnerService.getOwners().then((response) => {
            vm.owners = response.data;
        });

        vm.addOwner =(newOwner) => {
            OwnerService.addOwner(newOwner).then((response) => {
                vm.owners = response.data;
            });
            vm.newOwner = {};
        };

        vm.deleteOwner=(id) => {
            OwnerService.deleteOwner(id).then((response)=> {
                vm.owners =response.data;
            });
        };

        vm.updateOwner=(owner) => {
            OwnerService.updateOwner(owner).then((response) =>  {
                vm.owners =response.data;
            });
        };
    }]
}


angular
    .module("app")
    .component("owners", owners);