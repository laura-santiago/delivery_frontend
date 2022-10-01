import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  itemForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private itemService: ItemService
  ) { 
    this.itemForm = this.formBuilder.group({
      description: [''],
      price: [''],
      actived: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.itemService.createItem(this.itemForm.value)
    .subscribe(response => {
      this.zone.run(() => {
        this.itemForm.reset();
        this.router.navigate(['/list']);
      });
    });
  }

  goBack(){
    this.router.navigateByUrl("/home");
  }

}