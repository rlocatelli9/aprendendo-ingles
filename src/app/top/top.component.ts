import { Component } from '@angular/core'

@Component({
    selector: 'app-top', //seletor baseado em rotulo "tag"
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.css']
})
export class TopComponent{
    // fazendo String interpolation
    public title: string = "Aprendendo Inglês"
}