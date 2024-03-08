import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { UserData } from '../../../interfaces/user/user-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  protected userLogin!: boolean;
  protected userImage!: UserData;

  constructor(private userService: UserService) {
    this.userLogin = true;
  }

  ngOnInit(): void {
    this.verifyUserId();
  }

  protected verifyUserId() {
    if (typeof window !== 'undefined') {
      const getToken = sessionStorage.getItem('token');

      if (getToken !== null) {
        this.userLogin = false;
        this.getUserImage();
      }
    } else {
      this.userLogin = true;
    }
  }

  private getUserImage() {
    this.userService.getUserData().subscribe((res) => {
      this.userImage = res;
    });
  }
}
