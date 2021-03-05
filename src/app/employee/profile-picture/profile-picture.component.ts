import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit, AfterViewInit {

  @ViewChild('profileImg')
  profileImg!: ElementRef;

  defaultProfilePicture = '../../assets/employee/profile-photo/user-profile-photo.svg';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // (this.profileImg.nativeElement as HTMLImageElement).src = '';
  }

  doHoveringEffect(event: MouseEvent): void {
    console.log(event);
  }
}
