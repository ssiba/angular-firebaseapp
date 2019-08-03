import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productsForm: FormGroup
  type: any
  constructor(public fb: FormBuilder,
    public db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.productsForm = this.fb.group({
      ProductType: '',
      ProductName: '',
      ProductPrice: ''
    })
  }

  saveProduct() {
    const data =
    {
      _id: localStorage.getItem('token'),
      productName: this.productsForm.get('ProductName').value,
      productType: this.productsForm.get('ProductType').value,
      productPrice: this.productsForm.get('ProductPrice').value
    }

    this.db.list(this.type).push(data);
  }

}
