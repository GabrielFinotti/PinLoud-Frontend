import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../../shared/services/pin/ideas.service';

@Component({
  selector: 'app-pin-create-form',
  standalone: true,
  imports: [],
  templateUrl: './pin-create-form.component.html',
  styleUrl: './pin-create-form.component.scss',
})
export class PinCreateFormComponent {
  public imgPreview!: string | ArrayBuffer;

  constructor(private ideasService: IdeasService) {}

  protected getAllIdeas() {
    const token: string = '';

    this.ideasService.getIdeas(token).subscribe(
      (res) => res,
      (err) => console.error(err)
    );
  }

  public showImagePreview(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      const file: File = target.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.imgPreview = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
