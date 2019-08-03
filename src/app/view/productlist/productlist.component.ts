import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  productList = [];
  constructor(public data: AngularFireDatabase) { }

  ngOnInit() {
    this.data.list('Electoric').valueChanges()
      .subscribe((data: any) => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (data[i]._id === localStorage.getItem('token')) {
            // console.log(data[i]);
            this.productList.push(data[i])
          }
        }
      })
    this.data.list('Fashion').valueChanges()
      .subscribe((data: any) => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (data[i]._id === localStorage.getItem('token')) {
            // console.log(data[i]);
            this.productList.push(data[i])
          }
        }
      })
    this.data.list('Grocery').valueChanges()
      .subscribe((data: any) => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (data[i]._id === localStorage.getItem('token')) {
            // console.log(data[i]);
            this.productList.push(data[i])
          }
        }
      })
    this.data.list('Sports').valueChanges()
      .subscribe((data: any) => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
          if (data[i]._id === localStorage.getItem('token')) {
            // console.log(data[i]);
            this.productList.push(data[i])
          }
        }
      })
    console.log(this.productList);
  }

}
