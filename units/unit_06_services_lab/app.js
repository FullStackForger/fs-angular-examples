"use strict";
(function () {
	angular
		.module('myApp', [])
		.controller('ActorController', ActorController)
		.factory('actorService', actorService);

	function actorService ($http, $q) {

		return {
			getActor: getActor
		}

		function getActor() {
			return $q(function (resolve, reject) {
				$http
					.get('./api/actors-harrison.json_')
					.then(function (response) {
						resolve(parseActorData(response.data));
					})
					.catch(function (error) {
						reject('Server is not responding ok');
					})
			})


		}
		function parseActorData(actor) {
			actor.dob = new Date(actor.dob);
			actor.nameUppercased = upperCaseLName(actor.name);
			return actor;
		}

		function upperCaseLName(name) {
			var parts = name.split(' ');
			var fName = parts[0];
			var lName = parts[1];
			return fName + ' ' + lName.toUpperCase();
		}
	}

	function ActorController ($scope, actorService) {
			actorService
				.getActor()
				.then(function (actorData) {
					$scope.actor = actorData;
				})
				.catch(function (errorMsg) {
					$scope.error = errorMsg;
				})
	}

})()