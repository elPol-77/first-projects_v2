import { Component,OnInit } from '@angular/core';
import { FinalspaceService } from '../../services/finalspace';
import { CharacterFS, Root } from '../../common/finalspaceinterface';


@Component({
  selector: 'app-finalspace',
  standalone: false,
  templateUrl: './finalspace.html',
  styleUrl: './finalspace.css',
})
export class Finalspace implements OnInit {

  dataApi!: Root;
  characters: CharacterFS[] = [];
  activeIndex: number | null = null;

  constructor(private FinalspaceService: FinalspaceService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }
  private loadCharacters() {
    this.FinalspaceService.getCharacters().subscribe({
      next: (value) => {
        this.dataApi = value;
        this.characters = this.dataApi;
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

}
