angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  // variables
  $scope.stepsQa = [];
  $scope.viewStep = 0;
  // variables end
  $scope.stepsQa = [
  {
    "question" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit animi doloribus, suscipit perspiciatis veniam exercitationem. Et optio corporis dolorem necessitatibus laborum aut, ratione laboriosam culpa distinctio nemo perspiciatis sunt!",
    "chooseAns" : [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis."
    ]
  },
  {
    "question" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit animi doloribus, suscipit perspiciatis veniam exercitationem. Et optio corporis dolorem necessitatibus laborum aut, ratione laboriosam culpa distinctio nemo perspiciatis sunt!",
    "chooseAns" : [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis."
    ]
  },
  {
    "question" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit animi doloribus, suscipit perspiciatis veniam exercitationem. Et optio corporis dolorem necessitatibus laborum aut, ratione laboriosam culpa distinctio nemo perspiciatis sunt!",
    "chooseAns" : [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis."
    ]
  },
  {
    "question" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit animi doloribus, suscipit perspiciatis veniam exercitationem. Et optio corporis dolorem necessitatibus laborum aut, ratione laboriosam culpa distinctio nemo perspiciatis sunt!",
    "chooseAns" : [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis."
    ]
  },
  {
    "question" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit animi doloribus, suscipit perspiciatis veniam exercitationem. Et optio corporis dolorem necessitatibus laborum aut, ratione laboriosam culpa distinctio nemo perspiciatis sunt!",
    "chooseAns" : [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis."
    ]
  },
  {
    "question" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit animi doloribus, suscipit perspiciatis veniam exercitationem. Et optio corporis dolorem necessitatibus laborum aut, ratione laboriosam culpa distinctio nemo perspiciatis sunt!",
    "chooseAns" : [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis."
    ]
  },
  {
    "question" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit animi doloribus, suscipit perspiciatis veniam exercitationem. Et optio corporis dolorem necessitatibus laborum aut, ratione laboriosam culpa distinctio nemo perspiciatis sunt!",
    "chooseAns" : [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis."
    ]
  },
  {
    "question" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit animi doloribus, suscipit perspiciatis veniam exercitationem. Et optio corporis dolorem necessitatibus laborum aut, ratione laboriosam culpa distinctio nemo perspiciatis sunt!",
    "chooseAns" : [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis."
    ]
  },
  {
    "question" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit animi doloribus, suscipit perspiciatis veniam exercitationem. Et optio corporis dolorem necessitatibus laborum aut, ratione laboriosam culpa distinctio nemo perspiciatis sunt!",
    "chooseAns" : [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis."
    ]
  },
  {
    "question" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit animi doloribus, suscipit perspiciatis veniam exercitationem. Et optio corporis dolorem necessitatibus laborum aut, ratione laboriosam culpa distinctio nemo perspiciatis sunt!",
    "chooseAns" : [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis."
    ]
  },
  {
    "question" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, reprehenderit animi doloribus, suscipit perspiciatis veniam exercitationem. Et optio corporis dolorem necessitatibus laborum aut, ratione laboriosam culpa distinctio nemo perspiciatis sunt!",
    "chooseAns" : [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure culpa exercitationem dolorem! Delectus id, animi minima neque cupiditate. Nisi suscipit beatae, necessitatibus molestiae fugit quasi quia inventore consequatur quo omnis."
    ]
  },
  ];
  $scope.nextStep = function(){
    if($scope.viewStep < $scope.stepsQa.length - 1){
      
    }
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
