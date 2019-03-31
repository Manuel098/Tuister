tuister.service('fileUpload', ['$http', function ($http) 
{
   this.uploadFileToUrl = function(file, uploadUrl, data) {
      var fd = new FormData();
      fd.append('imagen', file);
      console.log(fd);
   
      $http.post(uploadUrl, fd, {
         transformRequest: angular.identity,
         headers: {'Content-Type': undefined,
                   'token':window.localStorage.getItem("token")},
         params : data
      }).then(function(response){
         console.log(response);
      }), function(error){
         console.log(error);
      }
   }
   this.insert = function (uploadUrl, data) {
      console.log(data);
      $http.post(uploadUrl,data,{
         headers: {'token':window.localStorage.getItem("token")},
      }).then(function(response){
         console.log(response);
      });
   }
   this.update = function(uploadUrl, data){
      console.log(data);
      $http.put(uploadUrl,data,{
         headers: {'token':window.localStorage.getItem("token")},
      }).then(function(response){
         console.log(response);
      });
   }
   this.deleate = function(uploadUrl){
      $http.delete(uploadUrl,{
         headers: {'token':window.localStorage.getItem("token")},
      }).then(function(response){
         console.log(response);
      });
   }
}]);