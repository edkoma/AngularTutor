import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingredients: boolean[] = [false, false, false, false, false];
  menuGenerated = false;
  menu: Map<string, boolean[]> = new Map<string, boolean[]>();
  foundDish = false;
  notFoundDish = false;
  dishName = '';
  isStart = true;

  selectPork() {
    this.ingredients[0] = !this.ingredients[0];
  }
  selectFish() {
    this.ingredients[1] = !this.ingredients[1];
  }
  selectChicken() {
    this.ingredients[2] = !this.ingredients[2];
  }
  selectTofu() {
    this.ingredients[3] = !this.ingredients[3];
  }
  selectPepper() {
    this.ingredients[4] = !this.ingredients[4];
  }
  cook() {
    if (!this.menuGenerated) {
      this.generateMenu();
    }
    this.foundDish = false;
    this.menu.forEach((value: boolean[], key: string) => {
      let found = true;
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== this.ingredients[i]) {
          found = false;
          break;
        }
      }
      if (found)  {
        this.foundDish = true;
        this.dishName = key;
      }
    });
    this.notFoundDish = !this.foundDish;
    for (let i = 0; i < this.ingredients.length; i++) {
      this.ingredients[i] = false;
    }
  }
  generateMenu() {
    this.menu.set('豆花鱼片', [false, true, false, true, true]);
    this.menu.set('麻婆豆腐', [true, false, false, true, true]);
    this.menu.set('辣子鸡丁', [false, false, true, false, true]);
    this.menuGenerated = true;
    this.isStart = false;
  }
}
