import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { BannerComponent } from './banner/banner.component'
import { NavigationComponent } from './navigation/navigation.component';
import { ProcessComponent } from './process/process.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { Banner2Component } from './banner2/banner2.component';


@NgModule({
  declarations: [
    BannerComponent,
    NavigationComponent,
    ProcessComponent,
    PricingComponent,
    TeamComponent,
    FooterComponent,
    ShowcaseComponent,
    Banner2Component
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    BannerComponent,
    Banner2Component,
    NavigationComponent,
    ProcessComponent,
    PricingComponent,
    TeamComponent,
    ShowcaseComponent,
    FooterComponent
  ]
})
export class WidgetsModule { }
