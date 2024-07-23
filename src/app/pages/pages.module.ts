import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class PagesModule { }
