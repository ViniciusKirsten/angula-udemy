import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  atributoLegal = "qualquer"

  constructor(){}

  ngOnInit(): void{
  }

  fazerAlgo(): void{
    console.log('fazendo algo!')
  }
}
