import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
    selector: 'formpart',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <label>{{label}} <span *ngIf="required && !disabled">*</span></label>
      <ng-content></ng-content>
    `,
    styleUrls: ['./formpart.component.scss']
})
export class FormPartComponent {
  @HostBinding('class.disabled')
  @Input() disabled = false;
  
  @Input() required = false;
  @Input() label: string;
}
