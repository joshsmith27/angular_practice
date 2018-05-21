import { Injectable } from '@angular/core';
import { HEROES } from '../mockHeroes';
import { Hero } from '../classes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './messageservice.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: Fetched Heroes!');
    return of(HEROES);
  }
}
