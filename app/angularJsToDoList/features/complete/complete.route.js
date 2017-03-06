angular
    .module("angularJsToDoList.complete")
    .config(completeConfig);

function completeConfig($stateProvider){
    $stateProvider.state({
        name: "complete",
        url: "/complete",
        templateUrl: "/angularJsToDoList/features/complete/complete.html",
        controller: "CompleteCtrl",
        controllerAs: "CompleteVM"
    })

}