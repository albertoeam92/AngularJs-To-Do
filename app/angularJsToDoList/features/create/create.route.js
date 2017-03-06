angular
    .module("angularJsToDoList.create")
    .config(createConfig);

function createConfig($stateProvider){
    $stateProvider.state({
        name: "create",
        url: "/create",
        templateUrl: "/angularJsToDoList/features/create/create.html",
        controller: "CreateCtrl",
        controllerAs: "CreateVM"
    })

}