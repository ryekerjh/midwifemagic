import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Midwife } from './midwife';
import { MidwifeService } from './midwife.service';


@Component({
    moduleId: 'module.id',
    selector: 'my-midwives',
    providers: [MidwifeService],
    templateUrl: 'midwife.component.html',
    styleUrls: ['midwife.component.css']
})

export class MidwivesComponent implements OnInit {
    midwives : Midwife[];
    selectedMidwife : Midwife;
    
    constructor(
        private router: Router,
        private midwifeService: MidwifeService
        ) { }
    
    getMidwives(): void {
    this.midwifeService.getMidwives()
        .then(midwives => 
            this.midwives = midwives
            );
    }

    ngOnInit(): void{
    this.getMidwives();
    }

    onSelect(midwife: Midwife): void {
    this.selectedMidwife =  midwife;
    // console.log(this.selectedMidwife);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedMidwife.id]);
    }

    add(name: string): void {
        name = name.trim();
        if(!name) { return }
        this.midwifeService.create(name)
            .then(midwife => {
                this.midwives.push(midwife);
                console.log(this.midwives)
                this.selectedMidwife = null;
            })
    }

    delete(midwife: Midwife): void {
    this.midwifeService
        .delete(midwife.id)
        .then(() => {
            this.midwives = this.midwives.filter(h => h !== midwife);
            if(this.selectedMidwife === midwife) { this.selectedMidwife = null; }
        });
    }
 }


