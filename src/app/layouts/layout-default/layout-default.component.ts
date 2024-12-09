import { Component, Input } from '@angular/core';
import { BaseHeaderComponent } from '../../bases/base-header/base-header.component';
import { BaseBodyComponent } from '../../bases/base-body/base-body.component';
import { BaseFooterComponent } from '../../bases/base-footer/base-footer.component';

@Component({
  selector: 'app-layout-default',
  standalone: true,
  imports: [BaseHeaderComponent, BaseBodyComponent, BaseFooterComponent],
  templateUrl: './layout-default.component.html',
  styleUrl: './layout-default.component.scss',
})
export class LayoutDefaultComponent {
  @Input() bodyContainer: string = 'home';
}
