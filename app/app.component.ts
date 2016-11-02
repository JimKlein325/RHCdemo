import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<nav>
                    <a routerLink='/' routerLinkActive='active'>Home</a>
                    <a routerLink='/checklist' routerLinkActive='active'>Checklist</a>
                    <a routerLink='/casemanagement' routerLinkActive='active'>Case Management</a>
                </nav>
                <div class='main'>
                    <router-outlet></router-outlet>
                </div>
                `
})
export class AppComponent {

 }
