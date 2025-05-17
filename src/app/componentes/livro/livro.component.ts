import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }

  livro = {
    titulo: 'As ondas',
    autoria: 'Virginia Woolf',
    favorito: false,
    imagem:
      'https://m.media-amazon.com/images/I/51nZq2iEpnS._SY445_SX342_PQ91_.jpg',
  };
}
