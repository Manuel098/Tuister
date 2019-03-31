tuister.controller('Info', function($scope, $http){
    $scope.respuesta={};
      
    $scope.getPosts=function(){
        $http.get("http://tuister.com/posts").then(function(response)
        {
            $scope.respuesta=response.data[0];
            console.log(response);
        });
    }
    $scope.getPosts();
});