import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BudgetComponent } from './budget/budget.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import {JwtModule} from '@auth0/angular-jwt';
import { BudgetlistComponent } from './budgetlist/budgetlist.component';


export function tokenGetter() {
  return localStorage.getItem('token');  // Dobavljanje tokena iz localStorage //
}

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    HomeComponent,
    BudgetlistComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,

    /**
     * Konfiguracija za JWT autentikaciju !
     */
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['http://ebit-front-test.herokuapp.com']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
