import { Component, OnInit } from '@angular/core';
import { AzureAppConfigurationService } from './azure-app-configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _service: AzureAppConfigurationService) {}

  ngOnInit(): void {
      this._service.getHogeHoge().subscribe(res => alert(res));
  }
}
