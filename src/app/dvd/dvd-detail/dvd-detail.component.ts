import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd';
import { DvdService } from 'src/app/services/dvd.service';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {
  
  dvds$:Observable<Dvd>;
  title:any = null;
  constructor(private route:ActivatedRoute,
    private dvdService:DvdService,
    private router:Router
    ) { }

  ngOnInit(): void {
    let index : number = +this.route.snapshot.paramMap.get('index');
    this.dvds$ = this.dvdService.get(index);
    this.route.paramMap
    .subscribe((params:ParamMap) => {
      if(params.has('title'))
      this.title = params.get('title');
    })
  }
  goBAck(){
   this.router.navigate(['/dvds'])
  }

}
