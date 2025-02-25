import { Component, inject, Input } from '@angular/core';
import { Svg } from '../../models/svg.model';
import { SvgService } from '../../services/svg.service';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css',
})
export class StackComponent {
  svgService = inject(SvgService);
  svgs = this.svgService.svgs;

  /*
  getSafeSvg(icon: string): SafeHtml {
    const scriptTagPattern = /<\s*script\b[^>]*>/i; // Detects any <script> tag

    if (!scriptTagPattern.test(icon)) {
      return this.sanitizer.bypassSecurityTrustHtml(icon);
    }
    return this.sanitizer.bypassSecurityTrustHtml('');
  }
  */
}
