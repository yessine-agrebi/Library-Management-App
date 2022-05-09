import { Component, OnInit } from '@angular/core';
import { Livres } from 'src/app/models/livres';
import { LivresService } from 'src/app/services/livres.service';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']
})
export class ListLivresComponent implements OnInit {
  listLivres :Livres[];
  auteur: [];
  constructor(private livService: LivresService) { }

  ngOnInit(): void {
    this.getLivres();
  }
  getLivres = () => {
    this.livService.ListLivres().subscribe((data: Livres[]) => {
      this.listLivres = data;
      console.log(typeof(this.listLivres[0].auteurs));
    })
  }


}
