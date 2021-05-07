import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/models/Endereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
 
  endereco: Endereco = new Endereco();
  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private enderecoService: EnderecoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  salvarEndereco():void{
    this.enderecoService.criarEndereco(this.endereco, this.id).subscribe({
      next: data => {
        console.log("salvo com sucesso", data);
        this.router.navigate(['/login'])
      },
      error: err => console.log("Error: ", err)
    })
  }

}
