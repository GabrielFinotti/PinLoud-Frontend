import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user/user.service';

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

  constructor(private userService: UserService) {
    this.userLogin = true;
  }

  ngOnInit(): void {}

  protected verifyUserId() {
    if (typeof window !== 'undefined') {
      const verifytoken = sessionStorage.getItem('token');

      if (verifytoken !== null) {
        this.userLogin = false;
        this.getUserImage();
      } else {
        this.userLogin = true;
      }
    }
  }

  private getUserImage() {
    this.userService.getUserData().subscribe((res) => {
      this.userImage = res.user.profile_picture;
    });
  }
}
