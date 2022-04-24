const URL = "https://corona.lmao.ninja/v2/all?yesterday=";
let app = angular.module("MyApp", []);
app.controller("MyCtrl", ($scope, $http) => {
  $scope.title = "Stay Home Stay Safe";
  console.log("app loaded");
  //calling app
  $http.get(URL).then(
    (response) => {
      console.log(response);
      $scope.all_data = response.data;
    },
    (error) => {
      console.log(error);
    }
  );
  //get country

  $scope.get_c_data = () => {
    let country = $scope.c;
    if (country == "") {
      $scope.c_data = undefined;
      return;
    }

    $http
      .get(
        `${"https://corona.lmao.ninja/v2/"}countries/${country}?yesterday=true&strict=true&query`
      )
      .then(
        (response) => {
          console.log(response.data);
          $scope.c_data = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
  };
});
