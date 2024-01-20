import { Component, inject } from '@angular/core'
import { TestStore } from '../../../+store/test/test.store'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly testStore = inject(TestStore)

  increment(): void {
    this.testStore.increment()
  }
}
