// probedock: { contributors: 'laurent.prevost@probedock.io', tickets: [ 'feature-1', 'feature-2', 'feature-3', 'feature-4' ], tags: 'mixed' }
describe ('Mixed operations', function() {
	it ('should allow to mix different operations', function() {
		// 5 / ((20 + (0 - 10)) / (1 * 2)) = 1
		expect(
			new calc.OperationDiv(
        5,
        new calc.OperationDiv(
          new calc.OperationAdd(
            20,
            new calc.OperationSub(0, 10)
          ),
          new calc.OperationMul(1, 2)
        )
      ).process()
    ).toEqual(1);
	});

	it ('should be able to calculate: (6 + 30) - (2 * (15 / 5)) = 30', function() {
		expect(
			new calc.OperationSub(
				new calc.OperationAdd(6, 30),
				new calc.OperationMul(
					2,
					new calc.OperationDiv(15, 5)
				)
			).process()
		).toEqual(30);
	});

	it ('should not be possible to process operation if deep division operation has right operand equal to zero', function() {
		// 5 + (5 - (5 / (5 * (5 + (10 - 15))))) = division by zero
		expect(function() {
			new calc.OperationAdd(
				5,
				new calc.OperationSub(
					5,
					new calc.OperationDiv(
						5,
						new calc.OperationMul(
							5,
							new calc.OperationAdd(
								5,
								new calc.OperationSub(10, 15)
							)
						)
					)
				)
			).process();
		}).toThrow(new Error('Cannot divide by zero'));
	});
});
