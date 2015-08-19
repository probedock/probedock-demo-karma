// probedock: { contributors: 'laurent.prevost@probedock.io', tickets: 'feature-1', tags: 'add' }
describe ('OperationAdd', function() {
  // probedock: { tags: 'calculate' }
	it ('should allow the addition of two integers through a call to calculate', function() {
     expect(new calc.OperationAdd(1, 3).calculate()).toEqual(4);
  });

  // probedock: { tags: 'process' }
	it ('should should allow to do the addition of two integers', function() {
		expect(new calc.OperationAdd(1, 3).process()).toEqual(4);
  });

  // probedock: { tags: [ 'process', 'calculate' ] }
	it ('should allow process and calculate to give the same result for single addition operation', function() {
		expect(new calc.OperationAdd(1, 3).process()).toEqual(new calc.OperationAdd(1, 3).calculate());
  });

  // probedock: { tags: [ 'process', 'composed'] }
	it ('should allow to process an addition with left integer and right operation', function() {
		expect(new calc.OperationAdd(1, new calc.OperationAdd(1, 2)).process()).toEqual(4);
  });

  // probedock: { tags: [ 'calculate', 'composed' ] }
	it ('should not allow to get the correct result through calculate when left is integer and right is operation', function() {
		expect(new calc.OperationAdd(1, new calc.OperationAdd(1, 2)).calculate()).not.toEqual(4);
  });

  // probedock: { tags: [ 'process', 'composed'] }
	it ('should allow to process an addition with left operation and right integer', function() {
		expect(new calc.OperationAdd(new calc.OperationAdd(1, 2), 1).process()).toEqual(4);
  });

  // probedock: { tags: [ 'calculate', 'composed' ] }
	it ('should not allow to get the correct result through calculate when left is operation and right is integer', function() {
		expect(new calc.OperationAdd(new calc.OperationAdd(1, 2), 1).calculate()).not.toEqual(4);
  });

  // probedock: { tags: [ 'process', 'composed'] }
	it ('should allow to process an addition with left operation and right operation', function() {
		expect(new calc.OperationAdd(new calc.OperationAdd(1, 2), new calc.OperationAdd(1, 0)).process()).toEqual(4);
  });

  // probedock: { tags: [ 'calculate', 'composed' ] }
	it ('should not allow to get the correct result through calculate when left is operation and right is operation', function() {
		expect(new calc.OperationAdd(new calc.OperationAdd(1, 2), new calc.OperationAdd(1, 0)).calculate()).not.toEqual(4);
  });
});

