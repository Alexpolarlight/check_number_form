import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, fromEvent, merge} from 'rxjs';
import { map } from 'rxjs/operators';
import { ValidateNumService } from '../services/validate-num.service';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  number = new FormControl('');
  color = new EventEmitter<boolean>();
  isSpecial: boolean = true;

  colorName = 'red';

  constructor( private validateNumService: ValidateNumService) {
     console.log('constructor ran...')
   }

  ngOnInit() {
    console.log('ngOnInit ran...')
    this.setCurrentClasses();
    // this.setCurrentStyles();   
    
    this.number.valueChanges
    .pipe(
      map(v => v < 0)
        // (Number(v.toString()) < 0) ? 'red' : 'green')
        // v.toString() + '-color')
    )    
    .subscribe( v =>  this.color.next(v));

    this.color.subscribe(v => {
      this.isSpecial = v;
      console.log(this.isSpecial)
    })
  }
  currentClasses: {};

  setCurrentClasses() {
    this.currentClasses = {
      'special': this.isSpecial
    };
  }

  // currentStyles: {};
  // setCurrentStyles() {
  //   this.currentStyles = {
  //     'color': this.isSpecial ? 'red' : 'green',
  //   };
  // }      
}

  // const inputNumObservable = (number: number): Observable<any> => {
    //   console.log('FormControl' + number);
    //   const inputNumber: number = number;
    //   const observable = fromEvent(this.number.value, 'number').pipe(
    //     map(e => inputNumber || '')
    //   );

    //   return merge(of(this.number.value), observable);      
    // };

    // const numberObservable = inputNumObservable(this.number.value);

    // const debugPrint = (observable: Observable<any>) => observable.subscribe(console.log);
    // debugPrint(numberObservable);

    // this.number.valueChanges
    // .subscribe((value: number) => { 
    //   console.log(value);
    //   this.color.next(value)
    // });