import { ChangeDetectionStrategy, Component, inject, OnInit, TransferState } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { TestStore } from './+store/test/test.store';
import { TRANSFER_STATE_KEY } from './app.initializer';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, RouterOutlet, HeaderComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  test = 'test';
  private transferState = inject(TransferState);
  readonly testStore = inject(TestStore);

  ngOnInit() {
    console.log(this.transferState.get(TRANSFER_STATE_KEY, 'app-component default transfer state'));
  }
}
