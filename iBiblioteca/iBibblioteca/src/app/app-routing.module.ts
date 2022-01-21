import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioHomeComponent } from './inicio-home/inicio-home.component';

const routes: Routes = [
  { path: '', component: InicioHomeComponent  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio-home/inicio/inicio.module').then( m => m.InicioPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
