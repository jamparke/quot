angular.module("quoteBook").controller("mainCtrl",function($scope, mainSrvc){

    $scope.quotes = mainSrvc.getQuotes();
   
    $scope.deleteMe = function(textToDelete){
  mainSrvc.removeData(textToDelete);
}

$scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if(mainSrvc.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
  }

    }
});
