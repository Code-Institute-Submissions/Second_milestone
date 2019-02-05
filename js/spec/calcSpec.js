describe('Select one of four Cardinal directions', function() {
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

describe('Convert date to display days of the week', function() {
    describe('Todays day display correct day of the week', function() {
        it('should return todays day of the week', function() {
            expect(dayWeek[date.addDays(0).getDay()]).toBeTruthy();
        });
        it('should return day of the week matching the array of days', function() {
            expect(dayWeek).toContain(dayWeek[date.addDays(0).getDay()]);
        });
    });
    describe('Four days from todays day should display correct day of the week', function() {
        it('should return fourth day of the week from todays day', function() {
            expect(dayWeek[date.addDays(4).getDay()]).toBeTruthy();
        });
        it('should return day of the week matching the array of days', function() {
            expect(dayWeek).toContain(dayWeek[date.addDays(4).getDay()]);
        });
    });
    describe('Seven days from todays day should display the same day of the week', function() {
        it('should return the same day of the week', function() {
            expect(dayWeek[date.addDays(7).getDay()]).toBeTruthy();
        });
        it('returned day of the week should match the array of days', function() {
            expect(dayWeek).toContain(dayWeek[date.addDays(7).getDay()]);
        });
    });   
});

describe('Calculate average wind values for defined data', function() {
    describe('Sum all values for selected data type', function() {
        it('should return an average value of wind direction', function() {
            expect(average.windDirection).toBe(334);
        });
        it('should not throw an error for wind direction', function() {
            expect(average.windDirection).toBeTruthy();
        });
        it('should return an average value of wind speed', function() {
            expect(average.windSpeed).toBe(70);
        });
        it('should not throw an error for wind speed', function() {
            expect(average.windSpeed).toBeTruthy();
        });
    });
});


describe('Display Forecast source for selected Surf Spot', function() {
    describe('Display buoy name matching Surfin Spot of choice', function() {
        it('should display M4', function() {
            var selection = 'Portrush';
            expect(spotSearch(selection, surfSpots, 'buoy')).toBe('%22M4%22');
        });
        it('should display Spiddal', function() {
            var selection = 'Inch Strand';
            expect(spotSearch(selection, surfSpots, 'buoy')).toBe('%22Spiddal%22');
        });
        it('should not display M2', function() {
            var selection = 'Inchydoney';
            expect(spotSearch(selection, surfSpots, 'buoy')).not.toBe('%22M2%22');
        });
    });
    describe('Display station name matching Surfin Spot of choice', function() {
        it('should display Dublin_Port', function() {
            var selection = 'Whiterock';
            expect(spotSearch(selection, surfSpots, 'station')).toBe('%22Dublin_Port%22');
        });
        it('should display Rossaveel', function() {
            var selection = 'Lahinch';
            expect(spotSearch(selection, surfSpots, 'station')).toBe('%22Rossaveel%22');
        });
        it('should not display Aranmore', function() {
            var selection = 'Castlefreake';
            expect(spotSearch(selection, surfSpots, 'station')).not.toBe('%22Aranmore%22');
        });
    })
});

// TO DO

// describe("add direction classes", function() {
//     it ("add a south class", function() {
//         var directions = 'north';
//         // element.onclick();
//         expect(cardinal(directions)).toEqual('north');
//     });
// }); 