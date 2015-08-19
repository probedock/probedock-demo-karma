describe ('OperationSub @probedock(contributor=laurent.prevost@probedock.io ticket=feature-2 tag=sub)', function() {
	it ('should allow the subtraction of two integers through a call to calculate @probedock(tag=calculate)', function() {
     expect(new calc.OperationSub(1, 3).calculate()).toEqual(-2);
	});

	it ('should should allow tofunction() { the subtraction of two integers @probedock(tag=process)', function() {
		expect(new calc.OperationSub(1, 3).process()).toEqual(-2);
	});

	it ('should allow process and calculate to give the same result for single subtraction operation @probedock(tag=calculate tag=process)', function() {
		expect(new calc.OperationSub(1, 3).process()).toEqual(new calc.OperationSub(1, 3).calculate());
	});

	it ('should allow to process an subtraction with left integer and right operation @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationSub(1, new calc.OperationSub(1, 2)).process()).toEqual(2);
	});

	it ('should not allow to get the correct result through calculate when left is integer and right is operation @probedock(tag=calculate tag=composed)', function() {
		expect(new calc.OperationSub(1, new calc.OperationSub(1, 2)).calculate()).not.toEqual(-2);
	});

	it ('should allow to process an subtraction with left operation and right integer @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationSub(new calc.OperationSub(1, 2), 1).process()).toEqual(-2);
	});

	it ('should not allow to get the correct result through calculate when left is operation and right is integer @probedock(tag=calculate tag=composed)', function() {
		expect(new calc.OperationSub(new calc.OperationSub(1, 2), 1).calculate()).not.toEqual(-2);
	});

	it ('should allow to process an subtraction with left operation and right operation @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationSub(new calc.OperationSub(1, 2),	new calc.OperationSub(1, 0)).process()).toEqual(-2);
	});

	it ('should not allow to get the correct result through calculate when left is operation and right is operation  @probedock(tag=calculate tag=composed)', function() {
		expect(new calc.OperationSub(new calc.OperationSub(1, 2),	new calc.OperationSub(1, 0)).calculate()).not.toEqual(-2);
	});
});
