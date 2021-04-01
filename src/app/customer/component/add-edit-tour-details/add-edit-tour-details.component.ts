import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TourDetail} from '../../../shared/interface/tour-detail';
import {ActivatedRoute, Router} from '@angular/router';
import {TourDetailService} from '../../../shared/service/tour-detail.service';

@Component({
  selector: 'app-add-edit-tour-details',
  templateUrl: './add-edit-tour-details.component.html',
  styleUrls: ['./add-edit-tour-details.component.scss']
})
export class AddEditTourDetailsComponent implements OnInit {

  isAdding!: boolean;
  selectedTourDetail!: TourDetail;

  constructor(@Inject(MAT_DIALOG_DATA) data: TourDetail,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private tourDetailService: TourDetailService) {
    this.selectedTourDetail = data;
    if (this.selectedTourDetail && this.selectedTourDetail.id !== 0) {
      /* update a existing record */
      this.isAdding = false;
    } else {
      /* add a new record */
      this.isAdding = true;
      this.selectedTourDetail = this.tourDetailService.emptyTourDetail;
    }
  }

  ngOnInit(): void {

  }

  redirectToCustomerPage(): void {
    this.router.navigateByUrl('/customer');
  }
}
