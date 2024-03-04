import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../../shared/services/pin/ideas.service';
import { Ideas } from '../../../interfaces/ideas';

@Component({
  selector: 'app-pin-create-form',
  standalone: true,
  imports: [],
  templateUrl: './pin-create-form.component.html',
  styleUrl: './pin-create-form.component.scss',
})
export class PinCreateFormComponent implements OnInit {
  protected tagName!: Ideas[];
  protected selectedTag!: string[];
  public imgPreview!: string | ArrayBuffer;

  constructor(private ideasService: IdeasService) {
    this.selectedTag = [];
  }

  ngOnInit(): void {
    this.getAllIdeas();
  }

  protected getAllIdeas() {
    const token: string =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEwMTk5MTQxLCJpYXQiOjE3MDkzMzUxNDEsImp0aSI6IjAyZmM4ZGI1Y2U5YjQ0MjI5ZmVjYzc1YWMyMGE1ODlmIiwidXNlcl9pZCI6MX0.fLr5JsvE4Z5Nis_n_EPIHl-NBE3xwskch0RJBCVosVc';

    this.ideasService.getIdeas(token).subscribe(
      (res) => (this.tagName = res),
      (err) => console.error(err)
    );
  }

  protected selectTag(index: number) {
    this.selectedTag.push(this.tagName[index].title);
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
