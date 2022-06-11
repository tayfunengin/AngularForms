import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({providedIn:'root'})

export class ColorService{

  choosenColor = new Subject<{ default: boolean, color: string}>();

}