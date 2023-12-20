import { Component } from '@angular/core';
import { FileFacade } from '../../store/file.facade';

@Component({
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent {

  constructor(private fileFacade: FileFacade){}
  onPaycheckSubmit(uploads: File[] ) {
    this.fileFacade.uploadPaychecks(uploads);
  }

}
