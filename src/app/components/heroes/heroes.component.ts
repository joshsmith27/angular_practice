import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Properties
  heroes: Hero[];
  selectedHero: Hero;
  // Life cycle hooks
  ngOnInit() {
    this.getHeroes();
  }
  constructor(private heroService: HeroService) { }
  /// event Handlers
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
