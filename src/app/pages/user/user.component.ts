import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { UserPinCardComponent } from '../../components/cards/user-pin-card/user-pin-card.component';
import { UserService } from '../../shared/services/user/user.service';
import { UserData } from '../../interfaces/user/user-data';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FooterComponent, UserPinCardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  protected userData!: UserData;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  private getUserData() {
    this.userService.getUserData().subscribe(
      (res) => {
        this.userData = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
