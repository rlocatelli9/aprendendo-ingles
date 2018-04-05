import { Component, OnInit, OnChanges, Input} from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges{

  @Input() public tentativas: number

  public coracoes: Array<Coracao> = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() { }

  //metodod executado durante o processo de input dos dados
  //sempre que os valores são alterados, esse metodo é executado
  ngOnChanges(){
    //this.tentativas
    //this.coracoes.length
    //quando a tentativa for diferente de 3
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      //aparece o caração vazio
      this.coracoes[indice - 1].cheio = false
    }
  }

  ngOnInit() {
    
  }
}
