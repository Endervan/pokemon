import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// components
import {PokeHeaderComponent} from './poke-header/poke-header.component';
import {PokeSearchComponent} from './poke-search/poke-search.component';
import {PokeListComponent} from './poke-list/poke-list.component';
import {RouterModule} from "@angular/router";
import {PokeFooterComponent} from './poke-footer/poke-footer.component';


@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokeFooterComponent
  ],
  exports: [PokeHeaderComponent, PokeSearchComponent, PokeListComponent, PokeFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
