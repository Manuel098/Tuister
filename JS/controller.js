tuister.controller('Demo', function($scope, $http, fileUpload){
    $scope.token = window.localStorage.getItem("token");
    $scope.respuesta={};
    $scope.post={};
    $scope.coment={};
    $scope.likes={};
    $scope.nLikesPost={};
    $scope.likPost=[];
    
    $http.get("http://tuister.com/posts", {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined,
                  'token':window.localStorage.getItem("token")},
     }).then(function(response){
        $scope.respuesta= response.data[0];
        // LIKE'S
        $http.get("http://tuister.com/likes",{
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined,
                    'token':window.localStorage.getItem("token")},
        }).then(function(response){
            $scope.nLikesPost= response.data[0];
            var cont=0;
            for(i=0; i<$scope.respuesta.length; i++){
                for(j=0; j<$scope.nLikesPost.length; j++){
                    if($scope.respuesta[i]["id"]==$scope.nLikesPost[j]["post_id"]){
                        cont++;
                    }
                }
                like={"id":$scope.respuesta[i]["id"],
                    "val":cont}
                $scope.likPost.push(like);
                cont = 0;
            }
        });
    });

    $scope.likePost = function(id){
        var uploadUrl = "http://tuister.com/likePost";
        var data = {
            "user_id": window.localStorage.getItem("user_id"),
            "post_id": id
        }
        console.log(data);
        fileUpload.insert(uploadUrl, data);
    }

    // POST'S
    $scope.uploadFile = function(){
        var file =$scope.myFile;
        if(file){
            var uploadUrl = "http://tuister.com/post";
            var data = {
                "title": $scope.post.title,
                "body":$scope.post.body,
                "user_id":window.localStorage.getItem("user_id")
            }
            fileUpload.uploadFileToUrl(file, uploadUrl, data);
        }
        else{
            var uploadUrl = "http://tuister.com/post";
            var data = {
                "title": $scope.post.title,
                "body":$scope.post.body,
                "user_id":window.localStorage.getItem("user_id")
            }
            fileUpload.insert(uploadUrl, data);
        }
    }

    // COMENT'S
    $scope.uploadComentFile = function(id){
        var file =$scope.comentFile;
        if(file){
            var uploadUrl = "http://tuister.com/comment";
            var data = {
                "title": $scope.coment.title,
                "body":$scope.coment.body,
                "user_id":window.localStorage.getItem("user_id"),
                "post_id":id
            }
            $scope.coment.title = "";
            $scope.coment.body = "";
            fileUpload.uploadFileToUrl(file, uploadUrl, data);
        }
        else{
            var uploadUrl = "http://tuister.com/comment";
            var data = {
                "title": $scope.coment.title,
                "body":$scope.coment.body,
                "user_id":window.localStorage.getItem("user_id"),
                "post_id":id
            }
            $scope.coment.title = "";
            $scope.coment.body = "";
            fileUpload.insert(uploadUrl, data);
        }
    }

    // SESIÓN
    $scope.logOut = function(){
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user_id");
        window.location.href = "#/";
    }
});