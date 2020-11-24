import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, distinctUntilKeyChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent implements OnInit {

  // this holds an instance of the form
  form: FormGroup;

  // create variables to hold each control on the form
  comment = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);

  // create the form and link it with the formcontrols created above
  constructor(private formBuilder: FormBuilder) {

    // this creates a stream of all the form control's inputs and exposes an observable we can subscribe to get values from the form whenever it changes
    // observable is exposed via the ValueChanges() method on the this.form
    this.form = this.formBuilder.group({
      comment: this.comment,
      name: this.name,
      email: this.email
    });


    /* Observable Solution */
    // this will be emitting invalid form values too, to fix that, use the filter RxJS operator to only emit form values when they are valid
    // this.form.valueChanges.subscribe(value => console.log(JSON.stringify(value)));

    // Reactive programming
    this.form.valueChanges.pipe(
      debounceTime(300),
      distinctUntilKeyChanged('name'), // if the name changes within this time frame (300seconds), then emit the values to the next stream in the chain
      filter((formData) => this.form.valid), // use this to filter to publish only form valid values to the next output stream
      map((formData) => {

        // map the resulting output stream from filter to remove any string that might look like an html tag, prevent hackers from injecting something funny into the comment box
        formData.comment = formData.comment.replace(/<(?:.|\n)*?>/gm, '');
        return formData; // return the modified stream data
      }),
      map((formData) => {
        formData.lastUpdatedTime = new Date(); // modified the form data output stream to push unto it a new property/value: lastUpdatedTime
        return formData;
      })
    ).subscribe(formData => console.log(JSON.stringify(formData)));


    // writing above Reactive code in an Imperative code style
    // this.form.valueChanges.subscribe((formData) => {
    //   if(this.form.valid){
    //     formData.comment = formData.comment.replace(/<(?:.|\n)*?>/gm, '');
    //     formData.lastUpdatedTime = new Date();

    //     console.log(JSON.stringify(formData))
    //   }
    // });

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Form has been submitted');

  }

}


