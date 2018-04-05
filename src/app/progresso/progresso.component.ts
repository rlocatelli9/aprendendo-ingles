import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //variavel que aceita parametros externos
  //funcao decorator @Input
  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit() {
  }

}
