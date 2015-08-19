// probedock: { contributors: 'laurent.prevost@probedock.io', tickets: 'feature-3', tags: 'mul' }
describe ('OperationMul', function() {
  // probedock: { tags: 'calculate' }
	it ('should allow the multiplication of two integers through a call to calculate', function() {
     expect(new calc.OperationMul(2, 3).calculate()).toEqual(6);
	});

  // probedock: { tags: 'process' }
	it ('should should allow tofunction() { the multiplication of two integers', function() {
		expect(new calc.OperationMul(2, 3).process()).toEqual(6);
	});

  // probedock: { tags: [ 'process', 'calculate' ] }
	it ('should allow process and calculate to give the same result for single multiplication operation', function() {
		expect(new calc.OperationMul(2, 3).process()).toEqual(new calc.OperationMul(2, 3).calculate());
	});

  // probedock: { tags: [ 'process', 'composed'] }
	it ('should allow to process an multiplication with left integer and right operation', function() {
		expect(new calc.OperationMul(2, new calc.OperationMul(1, 3)).process()).toEqual(6);
	});

  // probedock: { tags: [ 'calculate', 'composed' ] }
	it ('should not allow to get the correct result through calculate when left is integer and right is operation', function() {
		expect(new calc.OperationMul(2, new calc.OperationMul(1, 3)).calculate()).not.toEqual(6);
	});

  // probedock: { tags: [ 'process', 'composed'] }
	it ('should allow to process an multiplication with left operation and right integer', function() {
		expect(new calc.OperationMul(new calc.OperationMul(2, 3), 2).process()).toEqual(12);
	});

  // probedock: { tags: [ 'calculate', 'composed' ] }
	it ('should not allow to get the correct result through calculate when left is operation and right is integer', function() {
		expect(new calc.OperationMul(new calc.OperationMul(2, 3), 2).calculate()).not.toEqual(12);
	});

  // probedock: { tags: [ 'process', 'composed'] }
	it ('should allow to process an multiplication with left operation and right operation', function() {
		expect(new calc.OperationMul(new calc.OperationMul(2, 2),  new calc.OperationMul(2, 1)).process()).toEqual(8);
	});

  // probedock: { tags: [ 'calculate', 'composed' ] }
	it ('should not allow to get the correct result through calculate when left is operation and right is operation', function() {
		expect(new calc.OperationMul(new calc.OperationMul(2, 2), new calc.OperationMul(2, 1)).calculate()).not.toEqual(8);
	});
});
