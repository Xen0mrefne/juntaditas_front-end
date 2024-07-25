import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Juntadita from '../../types/juntadita';
import { JuntaditaService } from '../../services/juntadita.service';

@Component({
  selector: 'app-juntadita',
  standalone: true,
  imports: [],
  templateUrl: './juntadita.component.html',
  styleUrl: './juntadita.component.css'
})
export class JuntaditaComponent {
  id!: string;
  juntadita!: Juntadita;

  loading = true;

  constructor (
    private route: ActivatedRoute,
    private juntaditaService: JuntaditaService,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")!;
    this.juntaditaService.getJuntadita(this.id).subscribe({
      next: (juntadita) => {
        this.juntadita = juntadita
      },
      error: ({error}) => {
        this.juntadita = {name: "error"}
      }
    })
    this.loading = false;
  }
}
