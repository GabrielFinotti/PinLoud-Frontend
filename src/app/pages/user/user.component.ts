import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { UserPinCardComponent } from '../../components/cards/user-pin-card/user-pin-card.component';
import { UserService } from '../../shared/services/user/user.service';
import { UserData } from '../../interfaces/user/user-data';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, FooterComponent, UserPinCardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  protected userData!: UserData;
  protected userImg!: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.userImg = this.formBuilder.group({
      imgProfile: [null, [Validators.required]],
    });
  }

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

  protected editUserImg(event: Event) {
    const target = event.target as HTMLInputElement;
    const fileType = this.verifyTypeFile(target);

    if (fileType) {
      const formData = new FormData();
      formData.append('profile_picture', this.userImg.value['imgProfile']);

      this.userService
        .userEditImgData(this.userData.user.id, formData)
        .subscribe((res) => {
          alert('Imagem de usuário alterada com sucesso!');

          if (typeof window !== 'undefined') {
            window.location.reload();
          }
        });
    }
  }

  private verifyTypeFile(target: HTMLInputElement) {
    if (target.files && target.files.length > 0) {
      const file = target.files[0];

      if (file.type.startsWith('image/') && !file.type.includes('gif')) {
        this.userImg.get('imgProfile')?.setValue(file);
      } else {
        alert('O arquivo tem que ser uma imagem, e não pode ser um gif!');

        return false;
      }
    }

    return true;
  }
}
