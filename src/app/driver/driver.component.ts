import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  activeTab = 'my-biz';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      console.log(data);
      this.activeTab = data['tab'];
    });
  }
}
