import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { MypipePipe } from './peso/mypipe.pipe';



@NgModule({
  declarations: [
    
  
    MypipePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [DatePipe]
})
export class OperationModule { }
