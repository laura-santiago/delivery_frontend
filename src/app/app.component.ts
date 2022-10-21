import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MenuOptions } from './interfaces/interfaces';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuOptions: Observable<MenuOptions[]>;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.menuOptions = this.itemService.getMenuOpts();
  }
}
