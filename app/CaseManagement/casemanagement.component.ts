import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'casemanagement',
    template: `<h1>Case Search</h1>
<div>
    <form>
        <div class="form-group">
            <label for="disease">Look up for disease</label>
            <input type="text" required placeholder="enter disease here" id="disease">
        </div>
        <button type="submit" class="btn btn-info">Search</button>
    </form>
</div>`
})
export class CaseManagementComponent {}