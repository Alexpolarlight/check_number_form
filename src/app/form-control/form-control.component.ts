import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, fromEvent, merge, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import { ValidateNumService } from '../services/validate-num.service';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit, OnDestroy {

  destroySubscription = new Subscription();
  number = new FormControl('');
  color = new EventEmitter<boolean>();
  isSpecial: boolean = true;

  // colorName = 'red';

  constructor() {
     console.log('constructor ran...')
   }

   ngOnDestroy() {
     this.destroySubscription.unsubscribe();
   }

  ngOnInit() {
    console.log('ngOnInit ran...')
    // this.setCurrentClasses();

    this.number.valueChanges
    .pipe(
      map(v => v < 0)
    )    
    .subscribe( v =>  this.color.next(v));

    this.color.subscribe(v => {
      this.isSpecial = v;
      console.log(this.isSpecial)
    })
    this.destroySubscription.add(this.color);
  }
}
