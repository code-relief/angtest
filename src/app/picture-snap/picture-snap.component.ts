import {Component, ElementRef, OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Component({
  selector: 'app-picture-snap',
  templateUrl: './picture-snap.component.html',
  styleUrls: ['./picture-snap.component.css']
})

export class PictureSnapComponent implements OnInit {

  introTxt = 'snap component works!';
  restUrl = 'http:rest.service/img';

  constructor(private el: ElementRef, private http: Http) {
  }

  ngOnInit() {
    const video = this.el.nativeElement.querySelector('video');

    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });
    }
  }

  snapPicture() {
    const canvas = this.el.nativeElement.querySelector('canvas');
    const context = canvas.getContext('2d');
    const video = this.el.nativeElement.querySelector('video');
    context.drawImage(video, 0, 0, 640, 480);
    const imageBase64 = canvas.toDataURL();
    const data = {
      imgBase64: imageBase64
    }
    this.http.post(this.restUrl, data).subscribe(
      () => {
        console.log('Img sending OK')
      },
      err => {
        console.log('Img sending ERROR')
      }
    );
  }

}
