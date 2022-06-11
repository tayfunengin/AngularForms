import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  defaultColor: string ="goldenrod";
  headerBackgroundColor : string = this.defaultColor;

  colorSubs: Subscription = null;
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.colorSubs = this.colorService.choosenColor.subscribe(
      (data: { default: boolean, color: string}) => {
        if(data.default)
        {
          this.headerBackgroundColor = this.defaultColor;
        }
        else{
          this.headerBackgroundColor = data.color;
        }
       
      }
    )
  }

  ngOnDestroy(): void {
    this.colorSubs.unsubscribe();
  }
}
