import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `<h1>My First Angular App</h1>
                <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        console.log(d3);
    }
 }
