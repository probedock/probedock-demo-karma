describe ('OperationAdd @probedock(contributor=laurent.prevost@probedock.io ticket=feature-1 tag=add)', function() {
	it ('should allow the addition of two integers through a call to calculate @probedock(tag=calculate)', function() {
     expect(new calc.OperationAdd(1, 3).calculate()).toEqual(4);
  });

	it ('should should allow to do the addition of two integers @probedock(tag=process)', function() {
		expect(new calc.OperationAdd(1, 3).process()).toEqual(4);
  });

	it ('should allow process and calculate to give the same result for single addition operation @probedock(tag=calculate tag=process)', function() {
		expect(new calc.OperationAdd(1, 3).process()).toEqual(new calc.OperationAdd(1, 3).calculate());
  });

	it ('should allow to process an addition with left integer and right operation @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationAdd(1, new calc.OperationAdd(1, 2)).process()).toEqual(4);
  });

	it ('should not allow to get the correct result through calculate when left is integer and right is operation @probedock(tag=calculate tag=composed)', function() {
		expect(new calc.OperationAdd(1, new calc.OperationAdd(1, 2)).calculate()).not.toEqual(4);
  });

	it ('should allow to process an addition with left operation and right integer @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationAdd(new calc.OperationAdd(1, 2), 1).process()).toEqual(4);
  });

	it ('should not allow to get the correct result through calculate when left is operation and right is integer @probedock(tag=calculate tag=composed)', function() {
		expect(new calc.OperationAdd(new calc.OperationAdd(1, 2), 1).calculate()).not.toEqual(4);
  });

	it ('should allow to process an addition with left operation and right operation @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationAdd(new calc.OperationAdd(1, 2), new calc.OperationAdd(1, 0)).process()).toEqual(4);
  });

	it ('should not allow to get the correct result through calculate when left is operation and right is operation @probedock(tag=calculate tag=composed)', function() {
		expect(new calc.OperationAdd(new calc.OperationAdd(1, 2), new calc.OperationAdd(1, 0)).calculate()).not.toEqual(4);
  });
});

