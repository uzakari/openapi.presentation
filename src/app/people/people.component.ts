import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../core/services/people.service';
import { PeopleDetails } from '../shared/ipeople';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  peopleDetals!: PeopleDetails[];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {

    this.peopleService
      .getPeople()
      .subscribe({
        next: (toReturn) => (this.peopleDetals = toReturn.results),
      });
  }
  
}
