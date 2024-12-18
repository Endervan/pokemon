import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../../service/poke-api.service";
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any; // lista original
  public getAllPokemons: any; // lista filtrada
  private searchSubject: Subject<string> = new Subject();
  isLoading = false;


  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.pokeApiService.apiListAllPokemons.subscribe(res => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
      this.isLoading = false;
    })

    this.searchSubject.pipe(
      debounceTime(1000)
    ).subscribe(searchText => {
      this.getSearch(searchText);
    });
  }

  onSearchChange(value: string) {
    this.searchSubject.next(value);
  }



  getSearch(value: string) {
    this.getAllPokemons = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
  }

}
