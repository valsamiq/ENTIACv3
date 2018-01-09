app.controller('tableController',
    ["$scope",function($scope){
        $scope.curs1="Grau1"; //Enlloc d'String, hi correspon el camp adhient de la resposta SQL
        $scope.nom1="Doe";
        $scope.est1="Retard";
        $scope.date1="18-11-17 8:36";

        //S'omple amb ng-repeat.

        //tester per a la taula
        $scope.curs2="Artist";
        $scope.nom2="Moe";
        $scope.est2="Absencia";
        $scope.date2="15-11-17";

        $scope.curs3="Grau2";
        $scope.nom3="Dooley";
        $scope.est3="Retard";
        $scope.date3="11-11-17 8:38";
    }]);


//Aqui residirán els valors que resideixen a la taula de resultats