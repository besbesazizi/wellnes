import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Offre} from '../../model/Offre';
import {OffreServiceService} from '../../services/offre-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
declare var $: any;
interface type {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {

  offreForm: FormGroup;
  offre:Offre
  pendingStatus:any
  id:any
  type: type[] = [
    {value: 'GALA', viewValue: 'Gala'},
    {value: 'MEDIATIQUE', viewValue: 'Mediatique'},
    {value: 'ENCHERES', viewValue: 'Encheres'},
    {value: 'CONCERT', viewValue: 'Concert'},
  ];
  constructor(private fb: FormBuilder , private offreService :OffreServiceService,
              public dialogRef: MatDialogRef<AddOffreComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) {}

  ngOnInit(): void {

    this.offre = new Offre()
    this. createform()
  }


  createform(){
    this.offreForm = this.fb.group({
      name: [''],
      expiration_date:[''],
      creation_date:[''],
      description:[''],
      orderPrice:['']
    })
  }

  createEvent(){
    this.offre.name = this.offreForm.get('name').value
    this.offre.description = this.offreForm.get('description').value
    this.offre.expiration_date = this.offreForm.get('expiration_date').value
    this.offre.creation_date = this.offreForm.get('expiration_date').value
    this.offre.orderPrice = this.offreForm.get('orderPrice').value
    this.offreService.addOffre(this.offre).subscribe(res=>{
      console.log(res)
    })


  }

}
