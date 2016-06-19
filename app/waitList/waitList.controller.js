(function() {
    'use strict'
    angular.module('app.waitList').controller('WaitListController', WaitListController);
    WaitListController.$inject = [ "firebaseDataService", "partyService"]

    function WaitListController(firebaseDataService, partyService) {
        var vm = this;

        // var fireParties = new Firebase(FIREBASE_URL + 'parties')
        // var fireTextMessages = new Firebase(FIREBASE_URL + 'textMessages')


        //methods
        vm.newParty = new partyService.Party()
        // vm.parties = $firebaseArray(fireParties)
        vm.parties = partyService.parties
        vm.addParty = addParty
        vm.removeParty = removeParty
        vm.sendTextMessage = sendTextMessage
        vm.toggleDone = toggleDone

        function addParty() {
            vm.parties.$add(vm.newParty)
            vm.newParty = new partyService.Party()
        }

        function removeParty(party) {
            vm.parties.$remove(party)
        }

        function sendTextMessage(party) {
            var newTextMessage = {
                phoneNumber: party.phone,
                size: party.size,
                name: party.name,
            }
            // fireTextMessages.push(newTextMessage)
            firebaseDataService.textMessages.push(newTextMessage);
            party.notified = true;
            vm.parties.$save(party);
        }

        function toggleDone(party) {
            vm.parties.$save(party);
        }
    }
})();
