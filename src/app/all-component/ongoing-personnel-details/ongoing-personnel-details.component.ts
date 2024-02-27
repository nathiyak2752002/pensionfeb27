import { Component } from '@angular/core';

// import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PensionService } from '../../services/pensionservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ongoing-personnel-details',
  templateUrl: './ongoing-personnel-details.component.html',
  styleUrl: './ongoing-personnel-details.component.css'
})
export class OngoingPersonnelDetailsComponent {
  pensioner!: FormGroup;
  pensionStatus!: FormGroup;
  trialForm1!: FormGroup;
  trialForm2!: FormGroup;
  trialForm3!: FormGroup;
  selectedTrial!: string;
  empId: number = 0;
  constructor(private fb: FormBuilder,
    private pensionService: PensionService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pensioner = this.fb.group({

      empid: ['', Validators.required],
      empname: ['', Validators.required],
      designation: ['', Validators.required],
      workingPlace: ['', Validators.required],
      dob: ['', Validators.required],
      doa: ['', Validators.required],
      retirementDate: ['', Validators.required],
      age: ['', Validators.required],
      pensionType: ['', Validators.required],
      retirementType: ['', Validators.required],
      spouseName: ['', Validators.required],
      spouseDob: ['', Validators.required],
      address: ['', Validators.required],
      mobileNo: ['', Validators.required],
      emailNo: ['', Validators.required],
      panNo: ['', Validators.required],
      aadharNo: ['', Validators.required],
      bankAcctNo: ['', Validators.required],
      bankBranch: ['', Validators.required],
      ifsc: ['', Validators.required],
    });


    this.pensionStatus = this.fb.group({
      pfno: ['', Validators.required],
      pensionStatus: ['', Validators.required],
      commutationPortion: ['', Validators.required],
      dateCommencement: ['', Validators.required],
      dateReduced: ['', Validators.required],
      recoveryInstal: ['', Validators.required],
      originalPension: ['', Validators.required],
      basicPension: ['', Validators.required],
      additionalPension: ['', Validators.required],
      commutedPension: ['', Validators.required],
      pensionPayable: ['', Validators.required],
      da: ['', Validators.required],
      ma: ['', Validators.required],
      gross: ['', Validators.required],
      securityFund: ['', Validators.required],
      fa: ['', Validators.required],
      advRecovery: ['', Validators.required],
      misc: ['', Validators.required],
      miscRecovery: ['', Validators.required],
      nhis: ['', Validators.required],
      tds: ['', Validators.required],
      netPension: ['', Validators.required]
    });


    this.trialForm1 = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });


    this.trialForm2 = this.fb.group({
      name1: ['', Validators.required],
      password1: ['', Validators.required],
    });
    this.trialForm3 = this.fb.group({
      name1: ['', Validators.required],
      password1: ['', Validators.required],
    });


    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.empId = JSON.parse(id);
    }
    this.getEmpDetails()
    debugger
  }
  getEmpDetails() {
    this.pensionService.getEmpDetails(this.empId).subscribe(res => {
      if (res && res.data) {
        var age: number = 0;
        if (res.data.dateOfBirth) {
          let dob = new Date(res.data.dateOfBirth);

          // let timeDiff = new Date().getFullYear() - dob.getFullYear();
          // console.log('timeDiff', timeDiff);
          debugger
          let timeDiff = Math.abs(new Date().getTime() - dob.getTime());
          // let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
          age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
          console.log('age', age);
        }
        debugger
        this.pensioner.patchValue({
          empid: res.data.empId,
          empname: res.data.employeeName,
          designation: res.data.cadreName,
          workingPlace: res.data.officeName,
          dob: res.data.dateOfBirth,
          doa: res.data.dateOfJointService,
          // retirementDate: ,
          age: age,
          // pensionType: ,
          // retirementType: ,
          spouseName: res.data.nameOfSpouse,
          // spouseDob: ,
          address: res.data.presentAddress,
          mobileNo: res.data.mobileNo,
          emailNo: res.data.email,
          panNo: res.data.panNo,
          aadharNo: res.data.adharNo,
          // bankAcctNo: ,
          // bankBranch: ,
          // ifsc: ,
        })
        this.pensionStatus.patchValue({
          pfno: res.data.empId
        })
      }
    })
  }
  grossPensionCalc() {
    debugger
    let originalPension = this.pensionStatus.value.originalPension != '' ? JSON.parse(this.pensionStatus.value.originalPension) : 0;
    let basicPension = this.pensionStatus.value.basicPension != '' ? JSON.parse(this.pensionStatus.value.basicPension) : 0
    let additionalPension = this.pensionStatus.value.additionalPension != '' ? JSON.parse(this.pensionStatus.value.additionalPension) : 0
    let commutedPension = this.pensionStatus.value.commutedPension != '' ? JSON.parse(this.pensionStatus.value.commutedPension) : 0
    let pensionPayable = this.pensionStatus.value.pensionPayable != '' ? JSON.parse(this.pensionStatus.value.pensionPayable) : 0
    let DA = this.pensionStatus.value.da != '' ? JSON.parse(this.pensionStatus.value.da) : 0
    let MA = this.pensionStatus.value.ma != '' ? JSON.parse(this.pensionStatus.value.ma) : 0
    // let grossPension = originalPension > 0 && originalPension != '' ? JSON.parse(originalPension) : 0 + basicPension > 0 && basicPension != '' ? JSON.parse(basicPension) : 0 + additionalPension > 0 && additionalPension != '' ? JSON.parse(additionalPension) : 0 + commutedPension > 0 && commutedPension != '' ? JSON.parse(commutedPension) : 0 + pensionPayable > 0 && pensionPayable != '' ? JSON.parse(pensionPayable) : 0 + DA > 0 && DA != '' ? JSON.parse(DA) : 0 + MA > 0 && MA != '' ? JSON.parse(MA) : 0;
    let grossPension = originalPension + basicPension + additionalPension + commutedPension + pensionPayable + DA + MA;
    this.pensionStatus.controls['gross'].setValue(grossPension);

    console.log('grossPension', grossPension);


    let securityFund = this.pensionStatus.value.securityFund != '' ? JSON.parse(this.pensionStatus.value.securityFund) : 0;
    let fa = this.pensionStatus.value.fa != '' ? JSON.parse(this.pensionStatus.value.fa) : 0
    let advRecovery = this.pensionStatus.value.advRecovery != '' ? JSON.parse(this.pensionStatus.value.advRecovery) : 0
    let misc = this.pensionStatus.value.misc != '' ? JSON.parse(this.pensionStatus.value.misc) : 0
    let miscRecovery = this.pensionStatus.value.miscRecovery != '' ? JSON.parse(this.pensionStatus.value.miscRecovery) : 0
    let nhis = this.pensionStatus.value.nhis != '' ? JSON.parse(this.pensionStatus.value.nhis) : 0
    let tds = this.pensionStatus.value.tds != '' ? JSON.parse(this.pensionStatus.value.tds) : 0
    // let grossPension = originalPension > 0 && originalPension != '' ? JSON.parse(originalPension) : 0 + basicPension > 0 && basicPension != '' ? JSON.parse(basicPension) : 0 + additionalPension > 0 && additionalPension != '' ? JSON.parse(additionalPension) : 0 + commutedPension > 0 && commutedPension != '' ? JSON.parse(commutedPension) : 0 + pensionPayable > 0 && pensionPayable != '' ? JSON.parse(pensionPayable) : 0 + DA > 0 && DA != '' ? JSON.parse(DA) : 0 + MA > 0 && MA != '' ? JSON.parse(MA) : 0;
    let getPension = securityFund + fa + advRecovery + misc + miscRecovery + nhis + tds;
    let netPension = Math.abs(this.pensionStatus.value.gross - getPension)
    this.pensionStatus.controls['netPension'].setValue(netPension);

    console.log('netPension', netPension);

  }
  netPensionCalc() {
    debugger
    let securityFund = this.pensionStatus.value.securityFund != '' ? JSON.parse(this.pensionStatus.value.securityFund) : 0;
    let fa = this.pensionStatus.value.fa != '' ? JSON.parse(this.pensionStatus.value.fa) : 0
    let advRecovery = this.pensionStatus.value.advRecovery != '' ? JSON.parse(this.pensionStatus.value.advRecovery) : 0
    let misc = this.pensionStatus.value.misc != '' ? JSON.parse(this.pensionStatus.value.misc) : 0
    let miscRecovery = this.pensionStatus.value.miscRecovery != '' ? JSON.parse(this.pensionStatus.value.miscRecovery) : 0
    let nhis = this.pensionStatus.value.nhis != '' ? JSON.parse(this.pensionStatus.value.nhis) : 0
    let tds = this.pensionStatus.value.tds != '' ? JSON.parse(this.pensionStatus.value.tds) : 0
    // let grossPension = originalPension > 0 && originalPension != '' ? JSON.parse(originalPension) : 0 + basicPension > 0 && basicPension != '' ? JSON.parse(basicPension) : 0 + additionalPension > 0 && additionalPension != '' ? JSON.parse(additionalPension) : 0 + commutedPension > 0 && commutedPension != '' ? JSON.parse(commutedPension) : 0 + pensionPayable > 0 && pensionPayable != '' ? JSON.parse(pensionPayable) : 0 + DA > 0 && DA != '' ? JSON.parse(DA) : 0 + MA > 0 && MA != '' ? JSON.parse(MA) : 0;
    let getPension = securityFund + fa + advRecovery + misc + miscRecovery + nhis + tds;
    let netPension = this.pensionStatus.value.gross + getPension
    this.pensionStatus.controls['netPension'].setValue(netPension);

    console.log('netPension', netPension);
  }

  submit() {
    debugger
    let data = {
      "empId": this.pensioner.value.empid,
      "pfNo": this.pensionStatus.value.pfno,
      "pensionStatus": this.pensionStatus.value.pensionStatus,
      "portionComm": this.pensionStatus.value.commutationPortion,
      "dateOfComm": this.pensionStatus.value.dateCommencement,
      "reducedPension": this.pensionStatus.value.dateReduced,
      "recoveryNo": this.pensionStatus.value.recoveryInstal,
      "originalPension": this.pensionStatus.value.originalPension,
      "basicPension": this.pensionStatus.value.basicPension,
      "additionalPension": this.pensionStatus.value.additionalPension,
      "commutedPension": this.pensionStatus.value.commutedPension,
      "pensionPayable": this.pensionStatus.value.pensionPayable,
      "da": this.pensionStatus.value.da,
      "ma": this.pensionStatus.value.ma,
      "crossValue": this.pensionStatus.value.gross,
      "fsFound": this.pensionStatus.value.securityFund,
      "fa": this.pensionStatus.value.fa,
      "advRecovery": this.pensionStatus.value.advRecovery,
      "misc": this.pensionStatus.value.misc,
      "miscRecovery": this.pensionStatus.value.miscRecovery,
      "nhis": this.pensionStatus.value.nhis,
      "tds": this.pensionStatus.value.tds,
      "netPension": this.pensionStatus.value.netPension
    }
    console.log('data', data);

    this.pensionService.savePension(data).subscribe(res => {
      if (res == "Successfully Added") {
        this.router.navigateByUrl('pension/personaldetails');
      }
    })
  }
  back() {
    this.router.navigateByUrl('pension/personaldetails');

  }


}
