import {Component, OnInit} from '@angular/core';
import {Breadcrumb, BreadcrumbService} from 'angular-crumbs';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(private titleService: Title,
              private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.breadcrumbChanged.subscribe((crumbs) => {
      this.titleService.setTitle(this.createTitle(crumbs));
    });
  }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe((crumbs) => {
      this.titleService.setTitle(this.createTitle(crumbs));
    });
  }

  private createTitle(routesCollection: Breadcrumb[]): string {
    const title = 'Angular Breadcrumb';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
  }

  private titlesToString(titles: Breadcrumb[]): string {
    return titles.reduce((prev, curr) => {
      return `${curr.displayName} - ${prev}`;
    }, '');
  }
}
