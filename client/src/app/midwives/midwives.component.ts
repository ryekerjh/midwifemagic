import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Midwife } from './midwife';
import { MidwifeService } from './midwife.service';


@Component({
    moduleId: 'module.id',
    selector: 'my-midwives',
    providers: [MidwifeService],
    templateUrl: './midwife.component.html',
    styleUrls: ['./midwife.component.scss']
})

export class MidwivesComponent implements OnInit {
    midwives : Midwife[];
    selectedMidwife : Midwife;
    mode = 'Observable';
    errorMessage: string;

    
    constructor(
        private router: Router,
        private midwifeService: MidwifeService,
        ) { }
    
    getMidwives() {
      this.midwifeService.getMidwives()
        .subscribe(
           midwives => this.midwives = midwives,
              error =>  this.errorMessage = <any>error
        )
    }

    ngOnInit(): void{
    this.getMidwives();
    }

    onSelect(midwife: Midwife): void {
    this.selectedMidwife =  midwife;
    console.log(this.midwives);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedMidwife._id]);
    }

    addMidwife(midwife: Midwife): void {
        this.midwifeService.addMidwife(midwife)
            .subscribe(
                midwife  => this.midwives.push(midwife),
                error =>  this.errorMessage = <any>error);
    }

    delete(midwife: Midwife): void {
    this.midwifeService
        .delete(midwife._id)
        .then(() => {
            this.midwives = this.midwives.filter(h => h !== midwife);
            if(this.selectedMidwife === midwife) { this.selectedMidwife = null; }
        });
    }
 }


