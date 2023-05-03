import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Offre, Request} from '../../model/Offre';
import {OffreServiceService} from '../../services/offre-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  offreForm: FormGroup;
  request:Request
  pendingStatus:any
  id:any

  constructor(private fb: FormBuilder , private offreService :OffreServiceService,
              public dialogRef: MatDialogRef<AddRequestComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) {}

  ngOnInit(): void {

    this.request = new Request()
    this. createform()
  }


  createform(){
    this.offreForm = this.fb.group({
      name: [''],
      expirationDate:[''],
      creationDate:[''],
      description:[''],
      type:[''],
      stateRequest:[''],
      budget:['']
    })
  }

  createEvent(){
    this.request.name = this.offreForm.get('name').value
    this.request.description = this.offreForm.get('description').value
    this.request.expirationDate = this.offreForm.get('expirationDate').value
    this.request.creationDate = this.offreForm.get('creationDate').value
    this.request.type = this.offreForm.get('type').value
    this.request.budget = this.offreForm.get('budget').value
    this.request.stateRequest = this.offreForm.get('stateRequest').value
    this.offreService.addRequest(this.request).subscribe(res=>{
      console.log(res)
    })


  }


}
