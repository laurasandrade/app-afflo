import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { QuestionarioComponent } from './questionario/questionario.component';


const appRoutes: Routes  = [
	{ path: '', component: LoginComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'cadastro', component: CadastroComponent },
	{ path: 'questionario', component: QuestionarioComponent },	
	{ path: '**', redirectTo: ''},
	{ path: '', redirectTo: '/cadastro', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);