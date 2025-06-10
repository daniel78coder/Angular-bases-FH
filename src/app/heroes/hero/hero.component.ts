import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;
  public power: string = 'Maximo';
  public velocity: number = 100;




  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.power} - Velocidad:${this.velocity}km/s`;
  }
  changeName(): void {
    this.name = 'Super-Man'
  }
  changeAge(): void {
    this.age = 22
  }
  changeMetodo(): void {
    this.power = 'Poderes extremos'
  }

}


