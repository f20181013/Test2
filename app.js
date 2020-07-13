(function (){
	angular.module("ShoppingListApp",[])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService)

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var showList = this;
		showList.buyItems = ShoppingListCheckOffService.getItems();
		showList.EverythingBought = "";
		showList.removeItem = function(index){
			ShoppingListCheckOffService.removeItem(index);
			if(showList.buyItems.length==0) showList.EverythingBought="Everything Bought";
		};
		console.log(showList.EverythingBought);
	}

	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var showList = this;
		//showList.NothingBought="";
		showList.listItems = ShoppingListCheckOffService.getBoughtItems();
		showList.NothingBought="Nothing Bought";
		console.log(showList.NothingBought);
	}

	function ShoppingListCheckOffService(){
		var service = this;
		var listItems = [{name:"cookies",quantity:10},
						 {name:"chips",quantity:5},
						 {name:"coke",quantity:2},
						 {name:"soda",quantity:1},
						 {name:"wine",quantity:5}];
		var boughtItems = [];
		service.getItems = function(){
			return listItems;
		}
		service.getBoughtItems = function(){
			return boughtItems;
		}

		service.removeItem = function(index){
			if(listItems.length==0){
				message1 = "All items Bought";
				message2 = "";
				return;
			}
			boughtItems.push(listItems[index]);
			listItems.splice(index,1);
		};
	}
})();