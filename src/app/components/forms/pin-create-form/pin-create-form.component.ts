import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../../shared/services/pin/ideas.service';
import { Ideas } from '../../../interfaces/ideas';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pin-create-form',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pin-create-form.component.html',
  styleUrl: './pin-create-form.component.scss',
})
export class PinCreateFormComponent implements OnInit {
  protected tagName!: Ideas[];
  protected selectedTag!: string[];
  public imgPreview!: string | ArrayBuffer;
  public tagSelectionStage!: Record<string, boolean>;

  constructor(private ideasService: IdeasService) {
    this.selectedTag = [];
    this.tagSelectionStage = {};
  }

  ngOnInit(): void {
    this.getAllIdeas();
  }

  protected getAllIdeas() {
    const token: string =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5NzQ5MDIxLCJpYXQiOjE3MDk2NjI2MjEsImp0aSI6IjMwNDk5MjU4YTVjMDQ1N2RhZmZkNGZiNWM4OTNmMWQ4IiwidXNlcl9pZCI6MX0.Ig6OCy55YxvB-s02WPNIw_JCbI-M5RIgxn1gUJO4Q8E';

    this.ideasService.getIdeas(token).subscribe(
      (res) => (this.tagName = res),
      (err) => console.error(err)
    );
  }

  protected selectTag(index: number) {
    const selectTag = this.tagName[index].title;
    const tagExists = this.selectedTag.includes(selectTag);

    if (tagExists) {
      const indexToRemove = this.selectedTag.indexOf(selectTag);
      this.selectedTag.splice(indexToRemove, 1);
      this.tagSelectionStage[selectTag] = false;
    } else {
      this.selectedTag.push(selectTag);
      this.tagSelectionStage[selectTag] = true;
    }
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
