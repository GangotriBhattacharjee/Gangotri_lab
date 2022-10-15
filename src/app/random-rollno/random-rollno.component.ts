import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-rollno',
  templateUrl: './random-rollno.component.html',
  styleUrls: ['./random-rollno.component.css']
})
export class RandomRollnoComponent implements OnInit {

  randomRollNo: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  generateRandomRollNo = () => {
    this.randomRollNo = Math.ceil(Math.random() * 69)
    }
}
