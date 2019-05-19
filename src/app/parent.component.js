"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ParentComponent = (function () {
    function ParentComponent() {
        this.employees = [
            { code: 'emp01', name: 'John', gender: 'Male', salary: '20000', dateofbirth: '12-23-1986' },
            { code: 'emp02', name: 'david', gender: 'Male', salary: '10000', dateofbirth: '10-10-1996' },
            { code: 'emp03', name: 'tom', gender: 'Male', salary: '30000', dateofbirth: '10-10-2000' },
            { code: 'emp03', name: 'mary', gender: 'Female', salary: '30000', dateofbirth: '10-10-2000' },
            { code: 'emp03', name: 'mary', gender: 'Female', salary: '30000', dateofbirth: '10-10-2000' },
            { code: 'emp03', name: 'mary', gender: 'Female', salary: '30000', dateofbirth: '10-10-2000' }
        ];
    }
    // defaultvalue :string ="All";
    ParentComponent.prototype.ondropdownchange = function (eventArgs) {
        //  Selecteddropdownvalue= Defaultvalue;
        console.log(eventArgs);
    };
    return ParentComponent;
}());
ParentComponent = __decorate([
    core_1.Component({
        selector: 'parenthtml',
        templateUrl: './parent.component.html',
        styleUrls: ['./parent.component.css']
    })
], ParentComponent);
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map