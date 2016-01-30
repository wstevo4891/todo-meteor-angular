Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  
  angular.module('simple-todos', ['angular-meteor']);

  angular.module('simple-todos').controller('TodosListCtrl', ['$scope', '$meteor', 
    function ($scope, $meteor) {
/*   
    $scope.helpers({
      tasks() {
        return Tasks;
      },
      addTask() {
        return function(newTask) {
          tasks.push({
            text: newTask,
            createdAt: new Date()
          });
        }
      }
    });
*/
    $scope.tasks = $meteor.collection( function() {
      return Tasks.find({}, { sort: { createdAt: -1 } });
    });

    $scope.addTask = function(newTask) {
      $scope.tasks.push({
        text: newTask,
        createdAt: new Date()
      });
    };
  }]);
}

























