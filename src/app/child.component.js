"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ChildComponent = (function () {
    function ChildComponent() {
        this.txt = "hi";
        this.customevent = new core_1.EventEmitter();
        this.ddvalues = [
            { id: 'All', name: 'All' },
            { id: 'Male', name: 'Male' },
            { id: 'Female', name: 'Female' }
        ];
    }
    ChildComponent.prototype.onChange = function () {
        // this.selectedValue=this.selectedValue;
        this.customevent.emit({ gender: this.selectedValue, txt: this.txt });
        //  console.log('Dropdo'+ this.selectedValue);
    };
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildComponent.prototype, "selectedValue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildComponent.prototype, "txt", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "customevent", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child',
        templateUrl: './child.component.html',
        styleUrls: ['./child.component.css']
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map