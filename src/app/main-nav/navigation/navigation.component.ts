import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.router.url) {

        const navUlElement: HTMLUListElement = (document.getElementById('navigation_bar') as HTMLUListElement);
        const anchorElements: HTMLCollection = navUlElement.getElementsByTagName('a');

        Array.from(anchorElements).forEach((value) => {
          const anchorTag = (value as HTMLAnchorElement);
          if (this.router.url.replace('/', '').startsWith(anchorTag.innerText.toLowerCase())) {
            anchorTag.style.borderBottom = '2px solid yellowgreen';
          } else {
            anchorTag.style.borderBottom = '';
            // anchorTag.style.borderBottom = '3px solid transparent';
          }
        });
      }
    }, 0);
  }

  // onClick(event: MouseEvent): void {
  //   setTimeout( () => {
  //     const navUlElement: HTMLUListElement = (document.getElementById('navigation_bar') as HTMLUListElement);
  //     const anchorElements: HTMLCollection = navUlElement.getElementsByTagName('a');
  //
  //     Array.from(anchorElements).forEach((value) => {
  //       const anchorTag = (value as HTMLAnchorElement);
  //       if ((anchorTag.innerText.toLowerCase()) == (event.target as HTMLAnchorElement).innerText.toLowerCase()){
  //         anchorTag.style.borderBottom = '3px solid yellowgreen';
  //       } else {
  //         anchorTag.style.borderBottom = '3px solid transparent';
  //       }
  //     });
  //   }, 0);
  // }
}
