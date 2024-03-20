// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    


        const hqLocation = 42;

        return Math.abs(someValue - hqLocation);
    }
    
    function distanceFromHqInFeet(someValue) {
        distanceFromHqInBlocks(someValue);
       

        const feetPerBlock = 264;
        const hqLocation = 42;
        const distanceInBlocks = Math.abs(someValue - hqLocation);
        return distanceInBlocks * feetPerBlock;
    
    
      }
      function distanceTravelledInFeet(start, destination) {
        

        
            const blockLengthInFeet = 264;
            
            
            const distanceInBlocks = Math.abs(destination - start);
            
            
            const distanceInFeet = distanceInBlocks * blockLengthInFeet;
            
            return distanceInFeet;
        }
      

    
        function calculatesFarePrice(start, destination) {
            const blockLengthInFeet = 264;
            const firstFreeDistance = 400;
            const minimumChargeableDistance = 400;
            const maximumDistanceForFlatFare = 2500;
            const flatFare = 2500; 
            
           
            const distanceInFeet = distanceTravelledInFeet(start, destination);
            
            
            if (distanceInFeet > maximumDistanceForFlatFare) {
                return 'cannot travel that far';
            }
            
            
            if (distanceInFeet <= firstFreeDistance) {
                return 0;

            } else if (distanceInFeet <= minimumChargeableDistance) {
              
                const chargeableDistance = distanceInFeet - firstFreeDistance;
               
                return chargeableDistance * 0.02; 

            } else if (distanceInFeet < flatFare) {
                
                return 25; 
            }
        }

