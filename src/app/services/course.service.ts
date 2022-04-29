import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../classes/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  static getCoursesByTeacherId(id: any): Course[] {
    throw new Error('Method not implemented.');
  }

  private baseUrl= "http://localhost:8080/api/v1/courses"

  constructor(private httpClient: HttpClient) { }

  //return the Course list
  getCourseList():Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseUrl}`);
  }

  //find a Course by id
  getCourseById(id:number):Observable<Course>{
    return this.httpClient.get<Course>(`${this.baseUrl}/${id}`);
  }

  //create a Course we'll return an object
  createCourse(course: Course):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,course);
  }

  //update a Course
  updateCourse(id:number, course:Course):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,course);
  }

  //delete a Course
deleteCourse(id:number):Observable<Object>{
  return this.httpClient.delete(`${this.baseUrl}/${id}`);
}

getCoursesByTeacherId(teacher_id: number) {
    return this.httpClient.get<Course>(`${this.baseUrl}/${teacher_id}`);
}
}
