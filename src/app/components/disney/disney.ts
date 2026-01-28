import { Component, OnInit } from '@angular/core';
import { DisneyService } from '../../services/disney';
import { CharacterDisney, Disneyinterface } from '../../common/disneyinterface';

@Component({
  selector: 'app-disney',
  standalone: false,
  templateUrl: './disney.html',
  styleUrl: './disney.css',
})
export class Disney implements OnInit {
  dataApi!: Disneyinterface;
  characters: CharacterDisney[] = [];

  activeIndex: number | null = null;
  charName: string = '';
  loading: boolean = false;

  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;

  constructor(private disneyService: DisneyService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }


  loadCharacters() {
    this.loading = true;
    this.disneyService.getCharacters(this.currentPage).subscribe({
      next: (value) => {
        this.dataApi = value;
        this.characters = value.data;
        this.totalPages = value.info.totalPages;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error recuperando datos:', err);
        this.loading = false;
      }
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters();
    }
  }

  toggleAcordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  filterByName() {
    if (this.charName.trim() === '') {
      this.loadCharacters();
    } else {
      this.characters = this.characters.filter((char) =>
        char.name.toLowerCase().includes(this.charName.toLowerCase())
      );
    }
  }

  resetFilter() {
    this.charName = '';
    this.loadCharacters();
  }

  orderByName() {
    this.characters.sort((a, b) => a.name.localeCompare(b.name));
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
}