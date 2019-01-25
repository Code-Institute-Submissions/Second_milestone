// function surfTitle(spot) {
//     var result = '';
//     for (var i = 0; i < spot.length; i++) {
//         result += `<div class="col-xs-12 padding"><button class="btn btn-default spot" type="submit">${spot[i]}</button></div>`;
//     }
//     return result;
// };


// mapLocation.listOfSpots

describe('List of surf spots button generator', function() {
    var result = '';
    var spot = mapLocation[0].listOfSpots;
    for (var i = 0; i < spot.length; i++) {
        result += `<div class="col-xs-12 padding"><button class="btn btn-default spot" type="submit">${spot[i]}</button></div>`;
    }
    it('should generate inner HTML with surf spot title', function() {
        expect(result).toBe('<div class="col-xs-12 padding"><button class="btn btn-default spot" type="submit">Portrush</button></div><div class="col-xs-12 padding"><button class="btn btn-default spot" type="submit">Magheroarty</button></div><div class="col-xs-12 padding"><button class="btn btn-default spot" type="submit">Falcarragh</button></div>');
        expect(result).toBeTruthy();
    });
});

// describe('display list of surfing spots', function() {
//     describe('selecting direction "north"', function() {
//         it('button "north" should')
//         it('should return 3 surf spots' function() {
//             expect()
//         })
//     })
// })




// describe('List of surf Spots', function() {
//     it('Location should be equal to direction', function() {
//         expect(mapLocation[0].id).toEqual('north');
//     });
// });


// myArray[i].listOfSpots

// function surfTitle(spot) {
//     var result = '';
//     for (var i = 0; i < spot.length; i++) {
//         result += `<div class="col-xs-12 padding"><button class="btn btn-default spot" type="submit">${spot[i]}</button></div>`;
//     }
//     return result;
// };

// describe('Map direction output', function() {
//     function mapZoom(surfSpots, mapLocation) {
//       it('should display direction of the selected area with the list of Surf spots, so ' + mapLocation + ' should equal to ' + surfSpots, function() {
//         expect(mapLocation[0].id = 'north').toEqual(surfSpots[i].map = 'north')
//       });
//     }
  
//     for (var i=0; i < mapLocation.length; i++) {
//         mapZoom(surfSpots[i].map, mapLocation[i].id);
//     }
//   });

//   describe('this is my looping test!', function() {
//     // var input;
//     function test_my_times_ten(input, output) {
//       it('should multiply ' + input + ' by 10 to give ' + output, function() {
//         expect(input * 10).toEqual(output)
//       });
//     }
  
//     for(var x = 0; x < input.length; x++) {
//       test_my_times_ten(input[x], output[x]);
//     }
//   });


//   function mapZoom(nameKey, myArray) {
//     for (var i=0; i < myArray.length; i++) {
//         if (myArray[i].id === nameKey) {
//             return myArray[i].setZoom;
//         }
//     }
// };
