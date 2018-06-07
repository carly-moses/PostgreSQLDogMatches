"use strict";

const matches = {
    template: `
    <h4>Matches</h4>
    <section ng-repeat="match in $ctrl.matches">
        <p>{{match.owner_name}} matches with {{match.dog_name}} they both like {{match.keyword}}.</p>
    </section>
    `,

    controller: ["MatchService", function(MatchService){
        const vm=this;

        MatchService.getMatches().then((response)=>{
            console.log(response.data);
            vm.matches=response.data; 
        });
    }]
};

angular
    .module("app")
    .component("matches", matches); 