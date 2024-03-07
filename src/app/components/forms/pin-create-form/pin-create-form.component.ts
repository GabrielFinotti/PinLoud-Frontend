import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../../shared/services/pin/ideas.service';
import { Ideas } from '../../../interfaces/ideas/ideas';
import { NgClass } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PinsService } from '../../../shared/services/pin/pins.service';
import { Router } from '@angular/router';
import { PinCreate } from '../../../interfaces/pins/pin-create';

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
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.selectedTag = [];
    this.tagSelectionStage = {};
    this.pinCreateForm = this.formBuilder.group({
      image: [null, [Validators.required]],
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
    this.ideasService.getIdeas().subscribe(
      (res) => (this.tagName = res),
      (err) => console.error(err)
    );
  }

  protected selectTag(index: number) {
    const selectTag = this.tagName[index].title;
    const tagExistsIndex = this.selectedTag.findIndex(
      (tag) => tag.title === selectTag
    );

    if (tagExistsIndex !== -1) {
      this.selectedTag.splice(tagExistsIndex, 1);
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
  }

  public showImagePreview(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
      const file: File = target.files[0];

      if (file.type.startsWith('image/') && !file.type.includes('gif')) {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target) {
            this.imgPreview = e.target.result as string;
          }
        };

        reader.readAsDataURL(file);
        this.pinCreateForm.get('image')?.setValue(file);
      } else {
        alert('O arquivo tem que ser uma imagem, e não pode ser um gif!');
        target.value = '';
      }
    }
  }

  public onSubmit() {
    if (this.pinCreateForm.valid) {
      const token: string =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5Nzg5NzA3LCJpYXQiOjE3MDk3MDMzMDcsImp0aSI6ImQxM2M2MTA2MDMwNzQxYTJhMDYxNTBmN2I5NTNmOTIxIiwidXNlcl9pZCI6MX0.Mz-tdjcz_CXN954SI4a6W9VrABpe9j_SktuAkSrVOoQ';

      const pinData: PinCreate = {
        image: this.pinCreateForm.value['image'],
        title: this.pinCreateForm.value['title'],
        description: this.pinCreateForm.value['description'],
        ideas: this.pinCreateForm.value['tags'],
        user: 1,
      };

      const veryfiPinData: Partial<PinCreate> = {
        title: pinData.title.trim(),
        description: pinData.description.trim(),
      };

      if (
        pinData.title !== veryfiPinData.title ||
        pinData.description !== veryfiPinData.description
      ) {
        alert(
          'O título e descrição não podem iniciar ou terminar com espaçamentos!'
        );

        return;
      } else {
        const formData = new FormData();
        formData.append('title', pinData.title);
        formData.append('description', pinData.description);
        formData.append('image', pinData.image);
        formData.append('user', pinData.user.toString());
        formData.append('ideas', JSON.stringify([pinData.ideas]));

        this.pinsService.createPin(formData, token).subscribe(
          (res) => {
            alert('Imagem enviada com sucesso!');
            this.router.navigateByUrl('/pins');
          },
          (err) => {
            alert(
              'Erro ao enviar imagem, verifique os campos e tente novamente!'
            );
          }
        );
      }
    } else {
      alert(
        'Todos os campos devem estar preenchidos e não podem conter espaçamentos!'
      );
    }
  }
}
