tuister.controller('SignUp', function($scope,$http)
{
    $scope.holi="hola dsd login";
    $scope.usuario={};
    $scope.respuesta={};

    $scope.crearUsuario=function(){
        console.log ($scope.usuario);
        $http.post("http://tuister.com/user",$scope.usuario).then(function(response){
            $scope.respuesta= response.data;
            console.log(response);
            window.localStorage.setItem("token",$scope.respuesta.token);
            window.localStorage.setItem("user_id",$scope.respuesta.id);
            window.location.href = "#/";
        });
    }
});
