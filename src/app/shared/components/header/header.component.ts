import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { ToggleTokenService } from '../../../services/access/toggle-token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  protected userLogin!: boolean;
  protected userImage!: string;

  constructor(
    private userService: UserService,
    private toggleTokenService: ToggleTokenService
  ) {
    this.userLogin = true;
  }

  ngOnInit(): void {
    this.toggleTokenService.token$.subscribe((token) => {
      this.verifyUserId(token);
    });
  }

  protected verifyUserId(token: string | null) {
    if (token !== null) {
      this.userLogin = false;
      this.getUserImage();
    } else {
      this.userLogin = true;
    }
  }

  private getUserImage() {
    this.userService.getUserData().subscribe((res) => {
      this.userImage = res.user.profile_picture;
    });
  }
}
