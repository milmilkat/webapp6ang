import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(){
    this.http.get('https://localhost:44391/api/Students').subscribe(Response => 
    {
      this.students = Response;
    }, error => {
      console.log(error);
    });
  }
}
