import { Component, EventEmitter } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';


function readBase64(file): Promise<any> {
  var reader  = new FileReader();
  var future = new Promise((resolve, reject) => {
    reader.addEventListener("load", function () {
      resolve(reader.result);
    }, false);

    reader.addEventListener("error", function (event) {
      reject(event);
    }, false);

    reader.readAsDataURL(file);
  });
  return future;
}

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';



@Component({
  selector: 'app-file-upload',
  styles: [`
      .my-drop-zone { border: dotted 3px lightgray; }
    .nv-file-over { border: dotted 3px red; } 
    .another-file-over-class { border: dotted 3px green; }    
 
    html, body { height: 100%; }
  `],
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent {
  public uploader:FileUploader = new FileUploader({
    url: URL, 
    disableMultipart:true
    });
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  fileObject: any;


  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e; 
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];

    console.log(file);

    readBase64(file)
      .then(function(data) {
      console.log(data);
    })

  }
}