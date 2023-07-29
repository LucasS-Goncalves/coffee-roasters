import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  collectionItems = [
    {
      itemImg: '../../../assets/home/desktop/image-gran-espresso.png',
      itemName: 'Gran Espresso',
      itemDescription: 'Light and flavorful blend with cocoa and black pepper for an intense experience'
    },
    {
      itemImg: '../../../assets/home/desktop/image-planalto.png',
      itemName: 'Planalto',
      itemDescription: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
    },
    {
      itemImg: '../../../assets/home/desktop/image-piccollo.png',
      itemName: 'Piccollo',
      itemDescription: 'Mild and smooth blend featuring notes of toasted almond and dried cherry'
    },
    {
      itemImg: '../../../assets/home/desktop/image-danche.png',
      itemName: 'Danche',
      itemDescription: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
    },
  ]
}
