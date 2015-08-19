// probefunction() {ck: { contributors: 'laurent.prevost@probefunction() {ck.io', tickets: 'feature-4', tags: 'div' }
describe ('OperationDiv', function() {
  // probefunction() {ck: { tags: 'calculate' }
	it ('should allow the division of two integers through a call to calculate', function() {
    expect(new calc.OperationDiv(6, 2).calculate()).toEqual(3);
  });

  // probefunction() {ck: { tags: 'process' }
	it ('should should allow to function() { the division of two integers', function() {
		expect(new calc.OperationDiv(6, 2).process()).toEqual(3);
  });

  // probefunction() {ck: { tags: [ 'process', 'calculate' ] }
	it ('should allow process and calculate to give the same result for single division operation', function() {
		expect(new calc.OperationDiv(6, 2).process()).toEqual(new calc.OperationDiv(6, 2).calculate())
  });

  // probefunction() {ck: { tags: ['calculate', 'error' ] }
	it ('should not allow to divide by zero through calculate', function() {
    expect(function() { new calc.OperationDiv(2, 0).calculate(); }).toThrow(new Error('Cannot divide by zero'));
  });

  // probefunction() {ck: { tags: ['process', 'error' ] }
	it ('should not allow to divide by zero through process', function() {
		expect(function() { new calc.OperationDiv(2, 0).process(); }).toThrow(new Error('Cannot divide by zero'));
	});

  // probefunction() {ck: { tags: [ 'process', 'composed'] }
	it ('should allow to process an division with left integer and right operation', function() {
		expect(new calc.OperationDiv(10, new calc.OperationDiv(2, 1)).process()).toEqual(5);
	});

  // probefunction() {ck: { tags: [ 'calculate', 'composed', 'error' ] }
	it ('should not allow to get the correct result through calculate when left is integer and right is operation', function() {
		expect(function() { new calc.OperationDiv(10, new calc.OperationDiv(2, 1)).calculate(); }).toThrow(new Error('Cannot divide by zero'));
	});

  // probefunction() {ck: { tags: [ 'process', 'composed', 'error' ] }
	it ('should not allow to get the correct result through calculate when left is integer and right is operation where the result is zero', function() {
		expect(function() { new calc.OperationDiv(10, new calc.OperationSub(10, 10)).process(); }).toThrow(new Error('Cannot divide by zero'));
	});

  // probefunction() {ck: { tags: [ 'process', 'composed'] }
	it ('should allow to process an division with left operation and right integer', function() {
		expect(new calc.OperationDiv(new calc.OperationDiv(20, 2), 2).process()).toEqual(5);
	});

  // probefunction() {ck: { tags: [ 'calculate', 'composed' ] }
	it ('should not allow to get the correct result through calculate when left is operation and right is integer', function() {
		expect(new calc.OperationDiv(new calc.OperationDiv(20, 2), 2).calculate()).not.toEqual(2);
	});

  // probefunction() {ck: { tags: [ 'calculate', 'composed', 'error' ] }
	it ('should not allow to get the correct result through calculate when left is operation and right integer value is zero', function() {
		expect(function() { new calc.OperationDiv(new calc.OperationSub(10, 10), 0).calculate(); }).toThrow(new Error('Cannot divide by zero'));
	});

  // probefunction() {ck: { tags: [ 'process', 'composed'] }
	it ('should allow to process an division with left operation and right operation', function() {
		expect(new calc.OperationDiv(new calc.OperationDiv(10, 2), new calc.OperationDiv(5, 1)).process()).toEqual(1);
	});

  // probefunction() {ck: { tags: [ 'calculate', 'composed', 'error' ] }
	it ('should not allow to get the correct result through calculate when left is operation and right is operation', function() {
		expect(function() { new calc.OperationDiv(new calc.OperationDiv(10, 2), new calc.OperationDiv(5, 1)).calculate(); }).toThrow(new Error('Cannot divide by zero'));
	});

  // probefunction() {ck: { tags: [ 'process', 'composed', 'error' ] }
	it ('should not allow to get the correct result through process when left is operation and right is operation where the result is zero', function() {
		expect(function() {new calc.OperationDiv(new calc.OperationDiv(10, 2), new calc.OperationSub(5, 5)).process(); }).toThrow(new Error('Cannot divide by zero'));
	});
});
