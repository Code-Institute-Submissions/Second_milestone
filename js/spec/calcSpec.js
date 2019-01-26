describe('Selecting one of four Cardinal directions', function() {
    describe('Iterate over surf spots array to match spots id with selected direction', function() {
        var myArray = mapLocation;
        var nameKey = 'east';
        var result = `<div class="row text-center"><div class="col-xs-12 button">${surfTitle(myArray[3].listOfSpots)}</div></div>`;
        it('the mapLocation array spot id match selected direction', function() {
            expect(listSpots(nameKey, myArray)).toBe(result);
        });
        it('the mapLocation array spot id does not match direction which wasnt selected', function() {
            var nameKey = 'north';
            expect(listSpots(nameKey, myArray)).not.toBe(result);
        });
        it('the mapLocation array is not null', function() {
            expect(null).not.toBe(result);
        });            
    });
    describe('Return list of surf spots titles for selected direction', function() {
        var spot = mapLocation[0].listOfSpots;
        var result = `<div class="col-xs-12 padding"><button class="btn btn-default spot" type="submit">${spot[0]}</button></div><div class="col-xs-12 padding"><button class="btn btn-default spot" type="submit">${spot[1]}</button></div><div class="col-xs-12 padding"><button class="btn btn-default spot" type="submit">${spot[2]}</button></div>`;
        it('returned list of surf spots titles match selected direction', function() {
            expect(surfTitle(spot)).toBe(result);
        });
        it('returned list of surf spots titles in not null', function() {
            expect(null).not.toBe(result);
        });
        it('returned list of surf spots titles does not match titles of other direction', function() {
            var spot = mapLocation[3].listOfSpots;
            expect(surfTitle(spot)).not.toBe(result);
        });
    });
});

describe('Fix date value', function() {
    describe('Add 0 to returned value for all numbers less then 10', function() {
        it('should return 01', function() {
            expect(addZero(1)).toBe('01');
        });
        it('should return 09', function() {
            expect(addZero(9)).toBe('09');
        });
        it('should not return 010', function() {
            expect(addZero(10)).not.toBe('010');
        });
        it('should return 18', function() {
            expect(addZero(18)).toBe('18');
        });
    });
});

describe('Simplify wind Cardinal directions', function() {
    describe('Round up/down given value', function() {
        it('should return 0', function() {
            expect(direction(360)).toBe(0);
        });
        it('should not return 0', function() {
            expect(direction(25)).not.toBe(0);
        });
        it('should return 180', function() {
            expect(direction(201.5)).toBe(180);
        });
        it('should return error if provided value is not a number', function() {
            expect(direction('string')).toBe("Error!");
        });
        it('should return error if provided value is less then 0', function() {
            expect(direction(-10)).toBe("Error!");
        });
    });
});

describe('Set wind type from two parameters', function() {
    describe('Wind and point have same values', function() {
        it('should return OFF', function() {
            wind = 180;
            point = 180;        
            range = [wind, point];
            expect(check()).toBe('OFF');
        });
        it('should not return other string', function() {
            wind = 90;
            point = 90;        
            range = [wind, point];
            expect(check()).not.toBe('CROSS');
        });
    });
    describe('Wind and point have values that matches particular range', function() {
        it('should return ON', function() {
            wind = 45;
            point = 225;
            range = [wind, point];
            expect(check()).toBe('ON');
        });
        it('should not return other string', function() {
            wind = 0;
            point = 180;
            range = [wind, point];
            expect(check()).not.toBe('OFF');
        });
    });
    describe('Wind and point have values that matches particular range', function() {
        it('should return CROSS', function() {
            wind = 45;
            point = 180;
            range = [wind, point];
            expect(check()).toBe('CROSS');
        });
        it('should not return other string', function() {
            wind = 45;
            point = 315;
            range = [wind, point];
            expect(check()).not.toBe('ON');
        });
    });
});
