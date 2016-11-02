import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<nav>
                    <a routerLink='/' routerLinkActive='active'>Home</a>
                    <a routerLink='/checklist' routerLinkActive='active'>Checklist</a>
                </nav>
                <router-outlet></router-outlet>
                `
})
export class AppComponent {

 }
