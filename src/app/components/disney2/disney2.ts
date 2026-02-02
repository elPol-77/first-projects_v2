import { Component, OnInit } from '@angular/core';
import { Disney2Service } from '../../services/disney2';
import { CharacterDisney, InfoApiDisney } from '../../common/disneyinterface2';

@Component({
  selector: 'app-disney2',
  standalone: false,
  templateUrl: './disney2.html',
  styleUrl: './disney2.css',
})
export class Disney2Component {
  dataApi!: InfoApiDisney;
  characters: CharacterDisney[] = [];
  activeIndex: number | null = null;
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;
  charName: string = '';
  name: string = '';



  constructor(private disney2: Disney2Service) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.disney2.getCharacters(this.currentPage,this.name).subscribe({
      next: (value) => {
        this.name = this.charName;
        this.dataApi = value;
        this.characters = this.dataApi.data;
        this.totalPages = this.dataApi.info.totalPages;
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
    this.name = this.charName;
    this.loadCharacters();
  }
  resetFilter() {
    this.loadCharacters();
    this.charName = '';

  }
  orderByName() {
    this.characters.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      else if (a.name.toLowerCase() < b.name.toLowerCase())
        return -1;
      else return 0;
    });
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters();
    }
  }
}
