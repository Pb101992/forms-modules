import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestDirectiveDirective } from '../test-directive/test-directive.directive';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './template-form/template-form.component';
import { MustMatchDirective } from '../_helpers/MustMatchDirective/must-match-directive.directive';

@NgModule({
  declarations: [ChildComponentComponent, TestDirectiveDirective, TemplateFormComponent, MustMatchDirective],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [ChildComponentComponent]
})
export class ChildModuleModule { }
