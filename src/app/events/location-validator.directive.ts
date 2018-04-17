import {Directive} from "@angular/core"
import {Validator, FormGroup,NG_VALIDATORS} from "@angular/forms";

@Directive({
    selector:"[locationValidator]",
    providers:[{provide:NG_VALIDATORS, useExisting:ValidateLocation, multi:true}]
})

export class ValidateLocation implements Validator{
    validate(formGroup:FormGroup){
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrl = (<FormGroup>formGroup.root).controls['onlineUrl']

        if((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value)||(onlineUrl && onlineUrl.value)){
            return null;
        }else{
            return {ValidateLocation:false}
        }
        
    }
}