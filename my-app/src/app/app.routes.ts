import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AwardsComponent } from './pages/user/awards/awards.component';
import { CompaniesComponent } from './pages/user/companies/companies.component';
import { EducationsComponent } from './pages/user/educations/educations.component';
import { HabitsComponent } from './pages/user/habits/habits.component';
import { InformationComponent } from './pages/user/information/information.component';
import { ObjectivesComponent } from './pages/user/objectives/objectives.component';
import { ProjectsComponent } from './pages/user/projects/projects.component';
import { SettingComponent } from './pages/user/setting/setting.component';
import { SkillsComponent } from './pages/user/skills/skills.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'awards', component: AwardsComponent, title: 'awards'.toUpperCase(), },
      { path: 'companies', component: CompaniesComponent, title: 'companies'.toUpperCase(), },
      { path: 'educations', component: EducationsComponent, title: 'educations'.toUpperCase(), },
      { path: 'habits', component: HabitsComponent, title: 'habits'.toUpperCase(), },
      { path: 'information', component: InformationComponent, title: 'information'.toUpperCase(), },
      { path: 'objectives', component: ObjectivesComponent, title: 'objectives'.toUpperCase(), },
      { path: 'projects', component: ProjectsComponent, title: 'projects'.toUpperCase(), },
      { path: 'setting', component: SettingComponent, title: 'setting'.toUpperCase(), },
      { path: 'skills', component: SkillsComponent, title: 'skills'.toUpperCase(), },
    ],
  },
  
  { path: 'a',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
