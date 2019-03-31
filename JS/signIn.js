tuister.controller('SignIn', function($scope, $http){
    $scope.holi="hola dsd login";
    $scope.usuario={};
    $scope.respuesta={};
    $scope.inicio={
        "nickname":$scope.usuario.nickname,
        "password":$scope.usuario.password
    }
    $scope.signIn=function(){
        $http.post("http://tuister.com/login",$scope.usuario).then(function(response){
            $scope.respuesta= response.data;
            console.log(response);
            window.localStorage.setItem("token",$scope.respuesta.token);
            window.localStorage.setItem("user_id",$scope.respuesta.id);
            window.location.href = "#/index";
        });
    }
});