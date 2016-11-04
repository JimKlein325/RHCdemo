import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<nav>
                    <a routerLink='/' routerLinkActive='active'>Home</a>
                    <a routerLink='/checklist' routerLinkActive='active'>Checklist</a>
                    <a routerLink='/casemanagement' routerLinkActive='active'>Case Management</a>
                    <a routerLink='/rxdata' routerLinkActive='active'>RX Data</a>
                    <a routerLink='/valueprop' routerLinkActive='active'>Value Proposition</a>
                </nav>
                <div class='main'>
                    <router-outlet></router-outlet>
                </div>
                `
})
export class AppComponent {

 }
