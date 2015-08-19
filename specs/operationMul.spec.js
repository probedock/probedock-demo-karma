describe ('OperationMul @probedock(contributor=laurent.prevost@probedock.io ticket=feature-3 tag=mul)', function() {
	it ('should allow the multiplication of two integers through a call to calculate @probedock(tag=calculate)', function() {
     expect(new calc.OperationMul(2, 3).calculate()).toEqual(6);
	});

	it ('should should allow tofunction() { the multiplication of two integers @probedock(tag=process)', function() {
		expect(new calc.OperationMul(2, 3).process()).toEqual(6);
	});

	it ('should allow process and calculate to give the same result for single multiplication operation @probedock(tag=calculate tag=process)', function() {
		expect(new calc.OperationMul(2, 3).process()).toEqual(new calc.OperationMul(2, 3).calculate());
	});

	it ('should allow to process an multiplication with left integer and right operation @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationMul(2, new calc.OperationMul(1, 3)).process()).toEqual(6);
	});

	it ('should not allow to get the correct result through calculate when left is integer and right is operation @probedock(tag=calculate) tag=composed', function() {
		expect(new calc.OperationMul(2, new calc.OperationMul(1, 3)).calculate()).not.toEqual(6);
	});

	it ('should allow to process an multiplication with left operation and right integer @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationMul(new calc.OperationMul(2, 3), 2).process()).toEqual(12);
	});

	it ('should not allow to get the correct result through calculate when left is operation and right is integer @probedock(tag=calculate tag=composed)', function() {
		expect(new calc.OperationMul(new calc.OperationMul(2, 3), 2).calculate()).not.toEqual(12);
	});

	it ('should allow to process an multiplication with left operation and right operation @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationMul(new calc.OperationMul(2, 2),  new calc.OperationMul(2, 1)).process()).toEqual(8);
	});

	it ('should not allow to get the correct result through calculate when left is operation and right is operation @probedock(tag=calculate tag=composed)', function() {
		expect(new calc.OperationMul(new calc.OperationMul(2, 2), new calc.OperationMul(2, 1)).calculate()).not.toEqual(8);
	});
});
