import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attivita } from '../../../model/attivita'
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(
    private myService: ActivityService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get getLista(): Attivita[] {
    return this.myService.attivitaChiamate;
  }

  dettagli(url: string) {
    this.router.navigate([url], { relativeTo: this.route });
  }
  ngOnInit(): void {}
}
