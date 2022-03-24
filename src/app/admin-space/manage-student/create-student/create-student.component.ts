import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  student: Student= new Student();


  constructor(private studentService: StudentService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveStudent(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/manage-student']);
  }
  
  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }

}