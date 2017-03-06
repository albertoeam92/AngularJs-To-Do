angular
    .module("angularJsToDoList.list")
    .config(listConfig);

function listConfig($stateProvider){
    $stateProvider.state({
        name: "list",
        url: "/list",
        templateUrl: "/angularJsToDoList/features/list/list.html",
        controller: "ListCtrl",
        controllerAs: "ListVM"
    })

}