import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IDropdownSettings } from 'ng-multiselect-dropdown';

/**
 * Author: DaiDH
 */
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Create DaiDH
 


  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
deal: string;
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai',isCheked: false },
      { item_id: 2, item_text: 'Bangaluru' ,isCheked: false},
      { item_id: 3, item_text: 'Pune',isCheked: false },
      { item_id: 4, item_text: 'Navsari' ,isCheked: false},
      { item_id: 5, item_text: 'New Delhi',isCheked: false }
    ];
    this.selectedItems = [
     

    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  itemPushed=[]
  item2=[]
  onItemSelect(item: any) {
    // item.selectedItems.forEach((element)=>{
    //   console.log(element)
    // })
//     for (var product of this.selectedItems) {
//       this.itemPushed.push(product.item_id)
//       console.log(this.itemPushed)
//  }

      this.selectedItems.forEach(
        (point,index) => 
        
        this.itemPushed.push(point.item_text))
      console.log(this.itemPushed.toString())
    console.log(this.selectedItems);
    this.item2 = this.itemPushed.filter((el, i, a) => i === a.indexOf(el))
    console.log(this.item2.toString())
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }

  onUnSelectAll() {
    console.log('onUnSelectAll fires');
}

onItemDeSelect(item: any) {
  console.log('onItemDeSelect', item);
}
  
}

