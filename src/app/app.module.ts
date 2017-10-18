import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListaDeAlunosComponent } from './lista-de-alunos/lista-de-alunos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioTurmaComponent } from './formulario-turma/formulario-turma.component';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ListaDeAlunosComponent,
        FormularioComponent,
        FormularioTurmaComponent,
        ListaDeTurmasComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
