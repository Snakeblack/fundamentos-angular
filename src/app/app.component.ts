import { Component } from '@angular/core';
import { Product } from './interfaces/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Michael';
  age = 27;
  img = 'https://www.w3schools.com/w3images/avatar2.png';
  btnDisabled = true;
  person = {
    name: 'Michael',
    age: 27,
    avatar: 'https://www.w3schools.com/w3images/avatar2.png'
  }
  names: string[] = ['Michael', 'John', 'Jane', 'Mary', 'Bob', 'Alice'];
  newName = '';
  products: Product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'juguete'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colección de albumes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
  ]

  toogleBtn() {
    this.btnDisabled = !this.btnDisabled;
  }

  addAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
    console.log(element.value);
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
