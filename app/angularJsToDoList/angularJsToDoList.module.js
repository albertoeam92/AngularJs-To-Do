angular
    .module("angularJsToDoList",[
        "ui.router",
        "angularJsToDoList.list",
        "angularJsToDoList.create",
        "angularJsToDoList.complete"
        
    ])

    .config(angularJsToDoListConfig);

function angularJsToDoListConfig($urlRouterProvider){
    $urlRouterProvider.otherwise("/");

}