import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';


interface IUpload {
  name: string,
  file: File,
  url: SafeResourceUrl
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent {
  @Input()
  title: string = "";

  @Output() onSelectedFilesChange = new EventEmitter<IUpload[]>();
  @Output() onSelectedFilesSubmit = new EventEmitter<IUpload[]>();

  selected = new BehaviorSubject<Array<IUpload>>([]);

  canSubmit = false;
  constructor(private DomSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.selected.subscribe(data => {
      this.canSubmit = data.length > 0;
      this.onSelectedFilesChange.emit(data);
    })
  }

  onFileSelected(event: Event): void {
    var target = event.target as HTMLInputElement;
    var value = this.selected.value.concat({ name: File.name, file: target.files![0], url: URL.createObjectURL(target.files![0])})
    this.selected.next(value);
  }
  onFileRemoved(upload: IUpload): void {   
    var value = this.selected.value.filter(el => el.url != upload.url) 
    this.selected.next(value)
  }

  onFileDropped(files: File[]): void {
    var value = files.map(el => ({name: File.name, file: el, url: URL.createObjectURL(el)} as IUpload));
    this.selected.next(this.selected.value.concat(value))

  }
  onSubmit(): void {
    this.selected.subscribe(data => {
      this.onSelectedFilesSubmit.emit(data);
    })
  }
}
