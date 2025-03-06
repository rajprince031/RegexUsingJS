class Pincode{
    constructor(pincode){
        //Validate pincode
        if(!this.validatePincode(pincode)){
            throw "Invalid pincode";
        }
        this.pincode = pincode;
    }
    //Validate pincode
     validatePincode(pincode){
        return /^[1-9][0-9]{5}$/.test(pincode);
        }
    
    
}

try{
    let pincode = new Pincode("400088");
    console.log(pincode);
    let pincode2 = new Pincode("400088B"); 
    console.log("Valid:", pincode2);
}
catch(e){
    console.log(e);
    }