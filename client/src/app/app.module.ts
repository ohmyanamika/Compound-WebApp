import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoundComponent } from './components/compound/compound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AddCompoundComponent } from './pages/add-compound/add-compound.component';
import { CompoundDetailComponent } from './pages/compound-detail/compound-detail.component';
import { MessageComponent } from './components/message/message.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompoundComponent,
    NavbarComponent,
    HomeComponent,
    AddCompoundComponent,
    CompoundDetailComponent,
    MessageComponent,
    PageNotFoundComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
