import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    // MatIconModule,
    // MatMenuModule,
    // MatButtonModule
  ],
  imports: [
    CommonModule,
  ], 
  exports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class MaterialuiModule { }
