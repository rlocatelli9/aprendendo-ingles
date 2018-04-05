import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model'
import {FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta : string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0
  public tentativas: number = 3

  /**
   * usar @Output onde for necessário fazer emissão de evento
   * cria atributo do componente, associa a esse atributo uma estancia da classe EventEmitter
   * e ao termino, decore esse atributo para ser exposto ao componente pai
   * ou seja, estamo jogando pra cima com a funcao Output
   */
  //podemos fazer a inferencia do tipo de atributo tb
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor( ) { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  /**
   * Disparando método da classe do componente
   * com base no evento capturado no template HTML
   */
  //quando não aparece o operador de visibilidade
  //o typescript entende que é público
  atualizaResposta(resposta: Event): void{
    //acessando a propriedade value do HTML e atribundo o valor a variável
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  //método responsável por verificar a resposta do usuário
  verificarResposta(): void{
    if(this.rodadaFrase.frasePtBr == this.resposta){
      //trocar pergunta da rodada
      this.rodada++
      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      
      //verifica se traduziu correto todas frases
      if(this.rodada === 4){
        this.encerrarJogo.emit('vitória')
        //alert('Você concluiu as traduções com suscesso!')
      }
      
      //atualiza o objeto rodadaFrase
      this.atualizaRodada()
    } else {
      //alert('A tradução está incorreta!')
      //diminuir a variável tentativas
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
        //alert('Você perdeu todas as tentativas')
      }
    }
  }

  //método responsável por atualizar a rodada (trocar de frase)
  atualizaRodada(): void{
    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]
    //limpar resposta
    this.resposta = ''
  }

}
