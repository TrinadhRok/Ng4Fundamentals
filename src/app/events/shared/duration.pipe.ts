import {Pipe,PipeTransform} from "@angular/core";

@Pipe({
    name:'duration'
})
export class DurationPipe implements PipeTransform{
    transform(value:number){
        var abc;
        switch (value) {
            case 1:
                abc = "half Hour";
                break;
            case 2:
                abc = "1 Hour";
                break;
            case 3:
                abc = "Half Day";
                break;
            default:
                abc = "full Day";
        }
        return abc;
    }
}