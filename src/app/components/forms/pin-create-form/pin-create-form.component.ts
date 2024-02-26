import { Component } from '@angular/core';

@Component({
  selector: 'app-pin-create-form',
  standalone: true,
  imports: [],
  templateUrl: './pin-create-form.component.html',
  styleUrl: './pin-create-form.component.scss',
})
export class PinCreateFormComponent {
  public imgPreview!: string | ArrayBuffer;

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
