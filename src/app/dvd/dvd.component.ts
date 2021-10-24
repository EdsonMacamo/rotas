import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
import { DvdService } from '../services/dvd.service';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  dvds$:Observable<Dvd[]>;
  constructor(private devdService:DvdService) { }

  ngOnInit(): void {
    this.dvds$ = this.devdService.dvds$
  }

}
