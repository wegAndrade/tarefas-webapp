import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

export interface Alert {
	type: string;
	message: string;
}

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})


export class AlertComponent {
	alerts: Alert[] = [];

	constructor() {
		this.reset();
	}

public	close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

  public add(alert: Alert){
    this.alerts.push(alert);
  }
	public reset() {
		this.alerts = [];
	}
}
