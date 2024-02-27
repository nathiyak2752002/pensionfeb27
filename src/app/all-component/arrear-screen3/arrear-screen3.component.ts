import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-arrear-screen3',
  templateUrl: './arrear-screen3.component.html',
  styleUrl: './arrear-screen3.component.css'
})
export class ArrearScreen3Component {
  commonfields!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.commonfields= this.fb.group({

      vpf: ['', Validators.required],
      fbf: ['', Validators.required],
      nhis: ['', Validators.required],
      sdf: ['', Validators.required],
      dap: ['', Validators.required],
      hba: ['', Validators.required],
      eoe: ['', Validators.required],
      waterCharges: ['', Validators.required],
      hrr: ['', Validators.required],
     
    })
}

}