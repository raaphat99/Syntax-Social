import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminService } from './features/post/services/admin.service';
import { PostListComponent } from './features/post/components/post-list/post-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected adminService = inject(AdminService);
}
