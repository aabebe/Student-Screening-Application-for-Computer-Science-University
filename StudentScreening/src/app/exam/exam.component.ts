import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  constructor( private router: Router) {}

  ngOnInit() {}
  onStart() {
    this.router.navigate(['examscreen']);

  }
}
