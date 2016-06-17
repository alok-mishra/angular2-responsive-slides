import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import {Slide} from './slide';

@Component({
  moduleId: module.id,
  selector: 'responsive-slides',
  templateUrl: 'slides.component.html',
  // styles: [`
  //     body { background: #000; }
  // `]
  styleUrls: ['slides.component.css']
})
export class AppComponent {}
