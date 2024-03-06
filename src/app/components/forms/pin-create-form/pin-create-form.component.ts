import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../../shared/services/pin/ideas.service';
import { Ideas } from '../../../interfaces/ideas';
import { NgClass } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PinsService } from '../../../shared/services/pin/pins.service';
import { PinsCreate } from '../../../interfaces/pins/pins-create';

@Component({
  selector: 'app-pin-create-form',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './pin-create-form.component.html',
  styleUrl: './pin-create-form.component.scss',
})
export class PinCreateFormComponent implements OnInit {
  protected tagName!: Ideas[];
  protected selectedTag!: Array<{ title: string }>;
  public imgPreview!: string | ArrayBuffer;
  public tagSelectionStage!: Record<string, boolean>;
  public pinCreateForm!: FormGroup;

  constructor(
    private ideasService: IdeasService,
    private pinsService: PinsService,
    private formBuilder: FormBuilder
  ) {
    this.selectedTag = [];
    this.tagSelectionStage = {};
    this.pinCreateForm = this.formBuilder.group({
      image: [null],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      tags: this.formBuilder.array([
        this.formBuilder.group({
          title: ['', Validators.required],
        }),
      ]),
    });
  }

  ngOnInit(): void {
    this.getAllIdeas();
  }

  protected getAllIdeas() {
    const token: string =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5Nzg5NzA3LCJpYXQiOjE3MDk3MDMzMDcsImp0aSI6ImQxM2M2MTA2MDMwNzQxYTJhMDYxNTBmN2I5NTNmOTIxIiwidXNlcl9pZCI6MX0.Mz-tdjcz_CXN954SI4a6W9VrABpe9j_SktuAkSrVOoQ';

    this.ideasService.getIdeas(token).subscribe(
      (res) => (this.tagName = res),
      (err) => console.error(err)
    );
  }

  protected selectTag(index: number) {
    const selectTag = this.tagName[index].title;
    const tagExists = this.selectedTag.find((tag) => tag.title === selectTag);

    if (tagExists) {
      const indexToRemove = this.selectedTag.findIndex(
        (tag) => tag.title === selectTag
      );

      this.selectedTag.splice(indexToRemove, 1);
      this.tagSelectionStage[selectTag] = false;
    } else {
      this.selectedTag.push({ title: selectTag });
      this.tagSelectionStage[selectTag] = true;
    }

    this.updateTagsInFormGroup();
  }

  private updateTagsInFormGroup() {
    const tagsArray = this.pinCreateForm.get('tags') as FormArray;
    tagsArray.clear();

    this.selectedTag.forEach((tag) => {
      tagsArray.push(
        this.formBuilder.group({
          title: [tag.title, Validators.required],
        })
      );
    });

    this.pinCreateForm.setControl('tags', tagsArray);
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

  public onSubmit() {
    if (this.pinCreateForm.valid) {
      const token: string =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5Nzg5NzA3LCJpYXQiOjE3MDk3MDMzMDcsImp0aSI6ImQxM2M2MTA2MDMwNzQxYTJhMDYxNTBmN2I5NTNmOTIxIiwidXNlcl9pZCI6MX0.Mz-tdjcz_CXN954SI4a6W9VrABpe9j_SktuAkSrVOoQ';

      const pinData: PinsCreate = {
        title: this.pinCreateForm.value['title'],
        description: this.pinCreateForm.value['description'],
        image: this.pinCreateForm.value['image'],
        ideas: this.pinCreateForm.value['tags'],
        user: 1,
      };

      console.log(pinData);

      this.pinsService.createPin(pinData, token).subscribe(
        (res) => {
          alert('Imagem enviada com sucesso!');
        },
        (err) => {
          alert(
            'Erro ao enviar imagem, verifique os campos e tente novamente!'
          );
        }
      );
    } else {
      alert('Todos os campos devem estar preenchidos!');
    }
  }
}
