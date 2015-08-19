describe ('OperationDiv @probedock(contributor=laurent.prevost@probedock.io ticket=feature-4 tag=div)', function() {
	it ('should allow the division of two integers through a call to calculate @probedock(tag=calculate)', function() {
    expect(new calc.OperationDiv(6, 2).calculate()).toEqual(3);
  });

	it ('should should allow to function() { the division of two integers @probedock(tag=process)', function() {
		expect(new calc.OperationDiv(6, 2).process()).toEqual(3);
  });

	it ('should allow process and calculate to give the same result for single division operation @probedock(tag=calculate tag=process)', function() {
		expect(new calc.OperationDiv(6, 2).process()).toEqual(new calc.OperationDiv(6, 2).calculate())
  });

	it ('should not allow to divide by zero through calculate @probedock(tag=calculate tag=error)', function() {
    expect(function() { new calc.OperationDiv(2, 0).calculate(); }).toThrow(new Error('Cannot divide by zero'));
  });

	it ('should not allow to divide by zero through process @probedock(tag=process tag=error)', function() {
		expect(function() { new calc.OperationDiv(2, 0).process(); }).toThrow(new Error('Cannot divide by zero'));
	});

	it ('should allow to process an division with left integer and right operation @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationDiv(10, new calc.OperationDiv(2, 1)).process()).toEqual(5);
	});

	it ('should not allow to get the correct result through calculate when left is integer and right is operation @probedock(tag=calculate tag=composed tag=error)', function() {
		expect(function() { new calc.OperationDiv(10, new calc.OperationDiv(2, 1)).calculate(); }).toThrow(new Error('Cannot divide by zero'));
	});

	it ('should not allow to get the correct result through calculate when left is integer and right is operation where the result is zero @probedock(tag=process tag=composed tag=error)', function() {
		expect(function() { new calc.OperationDiv(10, new calc.OperationSub(10, 10)).process(); }).toThrow(new Error('Cannot divide by zero'));
	});

	it ('should allow to process an division with left operation and right integer @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationDiv(new calc.OperationDiv(20, 2), 2).process()).toEqual(5);
	});

	it ('should not allow to get the correct result through calculate when left is operation and right is integer @probedock(tag=calculate tag=composed)', function() {
		expect(new calc.OperationDiv(new calc.OperationDiv(20, 2), 2).calculate()).not.toEqual(2);
	});

	it ('should not allow to get the correct result through calculate when left is operation and right integer value is zero @probedock(tag=calculate tag=composed tag=error)', function() {
		expect(function() { new calc.OperationDiv(new calc.OperationSub(10, 10), 0).calculate(); }).toThrow(new Error('Cannot divide by zero'));
	});

	it ('should allow to process an division with left operation and right operation @probedock(tag=process tag=composed)', function() {
		expect(new calc.OperationDiv(new calc.OperationDiv(10, 2), new calc.OperationDiv(5, 1)).process()).toEqual(1);
	});

	it ('should not allow to get the correct result through calculate when left is operation and right is operation @probedock(tag=calculate tag=composed tag=error)', function() {
		expect(function() { new calc.OperationDiv(new calc.OperationDiv(10, 2), new calc.OperationDiv(5, 1)).calculate(); }).toThrow(new Error('Cannot divide by zero'));
	});

	it ('should not allow to get the correct result through process when left is operation and right is operation where the result is zero @probedock(tag=process tag=composed tag=error)', function() {
		expect(function() {new calc.OperationDiv(new calc.OperationDiv(10, 2), new calc.OperationSub(5, 5)).process(); }).toThrow(new Error('Cannot divide by zero'));
	});
});
