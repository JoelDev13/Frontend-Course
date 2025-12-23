import { Routes } from '@angular/router';
import { CounterpageComponet } from './pages/Counter/Counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
{

  path: '',
  component: CounterpageComponet,
},
{
  path: 'hero',
  component: HeroPageComponent,
}
];
