describe("greetApp", function(){

	beforeEach(module("greetApp"));

	describe("greetController", function(){
		it("Should have name initialized to empty string", inject(function($controller){
			var dummyScope = {};
			$controller("greetController", {$scope : dummyScope});

			expect(dummyScope.name).toBe('');
		}));
	});

	describe("greetController", function(){
		it("Should have greetMsg initialized to empty string", inject(function($controller){
			var dummyScope = {};
			$controller("greetController", {$scope : dummyScope});

			expect(dummyScope.greetMsg).toBe('');
		}));
	});

	describe("greetController", function(){
		it("Should populate the greetMsg when greeted", inject(function($controller){
			var dummyScope = {};
			$controller("greetController", {$scope : dummyScope});

			dummyScope.name = 'Magesh';
			dummyScope.greet();

			expect(dummyScope.greetMsg).toBe('Hi Magesh');
		}));
	});

	describe("greetFactory", function(){
		it("greet Factory", inject(function(greet){
			expect(greet.whoAmI).toBe("I am a greetService")
		}));
	});
})
