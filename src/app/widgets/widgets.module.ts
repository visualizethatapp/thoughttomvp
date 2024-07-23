import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component'
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    BannerComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BannerComponent,
    NavigationComponent
  ]
})
export class WidgetsModule { }
