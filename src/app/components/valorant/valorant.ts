import { Component, OnInit } from '@angular/core';
import { ValorantService } from '../../services/valorant';
import { ValorantCharacter, ValorantInfoApi } from '../../common/valorantinterface.ts';

@Component({
  selector: 'app-valorant',
  standalone: false,
  templateUrl: './valorant.html',
  styleUrl: './valorant.css',
})
export class Valorant implements OnInit {
  dataApi!: ValorantInfoApi;
  characters: ValorantCharacter[] = [];
  activeIndex: number | null = null;
  charName: string = '';

  constructor(private valorantService: ValorantService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.valorantService.getCharacters().subscribe({
      next: (value) => {
        this.dataApi = value;
        this.characters = this.dataApi.data;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Done');
      },
    });
  }
  toggleAcordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
  filterByName() {
    this.characters = this.characters.filter((char) =>
      char.displayName.toLowerCase().includes(this.charName.toLowerCase()),
    );
  }
  resetFilter() {
    this.loadCharacters();
    this.charName = '';
  }
  orderByName() {
    this.characters.sort((a, b) => {
      if (a.displayName.toLowerCase() > b.displayName.toLowerCase()) return 1;
      else if (a.displayName.toLowerCase() < b.displayName.toLowerCase())
        return -1;
      else return 0;
    });
  }
  
}