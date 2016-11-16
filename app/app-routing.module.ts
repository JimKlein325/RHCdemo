import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChecklistComponent } from './checklist/checklist.component';
import { CaseManagementComponent } from './CaseManagement/casemanagement.component';

import { HomeComponent } from './home.component';
import { RXDataComponent } from './rx-data.component';
import { ValuePropComponent } from './value-prop.component';
import { LineGraphComponent } from './line-graph.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'checklist', component: ChecklistComponent },
    { path: 'casemanagement', component: CaseManagementComponent },
    { path: 'rxdata', component: RXDataComponent },
    { path: 'valueprop', component: ValuePropComponent },
    { path: 'doseresponse', component: LineGraphComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
