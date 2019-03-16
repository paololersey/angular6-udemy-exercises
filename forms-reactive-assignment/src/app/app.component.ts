import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  projectStatusList = [];

  ngOnInit() {
    this.projectStatusList = [{
      'key': 'S',
      'value': 'Stable'
    },
    {
      'key': 'C',
      'value': 'Critical'
    },
    {
      'key': 'F',
      'value': 'Finished'
    }];
    this.form = new FormGroup({
      /*synchrounous validator */
   //   'projectName': new FormControl('projectName', [Validators.required, this.notAllowedProjectName.bind(this)]),
     /* asynchrounous validator */
      'projectName': new FormControl('projectName', [Validators.required], this.notAllowedProjectNameAsync),
   'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('projectStatus', [Validators.required]),
    });

  }

  onSubmit() {
    console.log('Project name = ' + this.form.value.projectName,
    'Project email = ' + this.form.value.email,
    'Project status = ' + this.form.value.projectStatus);
  }

  /* working synchronous */
   notAllowedProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { 'nameTestIsForbidden': true };
    }
    return null;
  }

  /* working asynchronous */
  notAllowedProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
