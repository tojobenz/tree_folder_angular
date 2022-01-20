import { Directive, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';
import { UserService } from './../service/user.service';

@Directive({
  selector: '[featureFlags]'
})
export class FeatureFlagsDirective implements OnInit {
  @Input() featureFlags: string | string[];
  @Input() featureFlagsOr: string | string[];
  @Input() featureFlagsElse: TemplateRef<any>;

  constructor(
    private tplRef: TemplateRef<any>,
    private vcRef: ViewContainerRef,
    private user: UserService,
  ) { }

  ngOnInit() {
  }
}