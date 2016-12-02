import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from './provider';
import { ProviderService } from './provider.service';
import { Observable } from 'rxjs/Rx';
import * as _ from "lodash";

@Component({
  selector: 'provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
  providers: [ProviderService],
  moduleId: 'module.id'
})

export class ProviderComponent implements OnInit {
   providers: Provider[];
   errorMessage: string;
   selectedProvider : Provider;

   constructor(
    private router: Router,
    private providerService: ProviderService
  ) {  }
  
  ngOnInit(): void {
     this.getProviders();
    }

  getProviders() {
    this.providerService.getProviders()
    .subscribe(
        data => this.providers = data,
        error => this.errorMessage = <any>error,
        () => console.log('whoa')
    )
  }

  gotoDetail(id: number):void { 
    let link = '/provider/detail/' + id;
    console.log(this.router.navigateByUrl(link));
    this.router.navigateByUrl(link);
  }
}