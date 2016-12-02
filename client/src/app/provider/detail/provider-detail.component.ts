import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProviderService } from '../provider.service';
import { Provider } from '../provider';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'provider-detail',
  templateUrl: 'provider-detail.component.html',
  styleUrls: ['provider-detail.component.scss']
})

export class ProviderDetailComponent implements OnInit {
    mode = 'Observable';
    provider: Provider;
    errorMessage: string;

    constructor(
    private providerService: ProviderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  
  ngOnInit(): void {
    this.route.params.forEach((params: any) => {
      let id = params.id;
      this.providerService.getProvider(id)
        .subscribe(
          data => this.provider = data,
          error => this.errorMessage = <any>error,
          () => console.log('data')
      )
    })
  }

  goBack(): void {
    this.location.back();
  }
}