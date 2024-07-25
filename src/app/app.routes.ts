import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { JuntaditaComponent } from './components/juntadita/juntadita.component';
import { JuntaditaMenuComponent } from './components/juntadita-menu/juntadita-menu.component';


export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        children: [
            {
                path: "juntadita/:id",
                title: "Juntadita",
                component: JuntaditaComponent
            },
            {
                path: "",
                component: JuntaditaMenuComponent,
                pathMatch: "full",
            }
        ]
    },
    {path: "about", component: AboutComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "", redirectTo: "/home", pathMatch: "full"}
];
