import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user/user.service';
import { UserData } from '../../../interfaces/user/user-data';
import { PinsService } from '../../../shared/services/pin/pins.service';

@Component({
  selector: 'app-user-pin-card',
  standalone: true,
  imports: [],
  templateUrl: './user-pin-card.component.html',
  styleUrl: './user-pin-card.component.scss',
})
export class UserPinCardComponent implements OnInit {
  protected userPins!: UserData;

  constructor(
    private userService: UserService,
    private pinsService: PinsService
  ) {}

  ngOnInit(): void {
    this.getUserPins();
  }

  private getUserPins() {
    this.userService.getUserData().subscribe((res) => {
      this.userPins = res;
    });
  }

  protected deletePin(id: number) {
    this.pinsService.deletePin(id).subscribe(
      (res) => {
        alert('Imagem deletada com sucesso!');
        this.getUserPins();
      },
      (err) => {
        alert('Não foi possivel deletar a imagem, por favor, tente novamente!');
      }
    );
  }
}
