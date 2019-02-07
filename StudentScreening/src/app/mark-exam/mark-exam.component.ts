import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mark-exam',
  templateUrl: './mark-exam.component.html',
  styleUrls: ['./mark-exam.component.css']
})
export class MarkExamComponent implements OnInit {
  public exam: [];

  constructor(private route: ActivatedRoute) {

    route.params.subscribe(obj => {
      const student = obj['student'];
      console.log(JSON.parse(student));
    });
  }

  ngOnInit() {
  }

}
