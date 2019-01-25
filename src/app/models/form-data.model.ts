export class FormData {
   number: number

   constructor(number: number){
      this.number = number;
   }

   isNumberChecked(): boolean {
      return this.isCheckedNumberInput(this.number);
   }

   isCheckedNumberInput(value: number): boolean {
      return value < 0;
   }
}