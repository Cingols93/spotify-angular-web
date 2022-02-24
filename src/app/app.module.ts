import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CenterComponent } from './components/center/center.component';
import { home, search, library, heart, rss, plusCircle,chevronDown, HeroIconModule } from 'ng-heroicon';

const icon = HeroIconModule.withIcons({
  home,
  search,
  library,
  heart,
  plusCircle,
  rss,
  chevronDown
}, {
  /**
   * Child level options.
   * Non passed options will use the rootModule options.
   */
  defaultHostDisplay: 'block',
})

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    icon
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
