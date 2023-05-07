import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {OffreServiceService} from '../../services/offre-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  offers:any
  requests:any
  requestSelected:any
  constructor(private OffreServiceService :OffreServiceService,public dialog: MatDialog,private toastr: ToastrService) { }


  ngOnInit(): void {
    this. getAll()
    this.getAllRequest()
  }
  getAll(){
    this.OffreServiceService.getOffres().subscribe(res=>{
      this.offers =res
      console.log(res)
    })
  }

  bestOff(){
    this.OffreServiceService.bestOff().subscribe(res=>{
      this.offers=res
    })
  }

  likeOffre(id:any){
    return this.OffreServiceService.likeOffre(id).subscribe(res=>{
      this.getAll()
    })
  }
  dislikeOffre(id:any){
    return this.OffreServiceService.dislikeOffre(id).subscribe(res=>{
      this.getAll()
    })
  }
  viewAll(){
    this.getAll()
  }
  Matching(){
  this.OffreServiceService.matching(this.requestSelected).subscribe(res=>{
    this.offers=res
  })
  }
  getAllRequest(){
    this.OffreServiceService.getRequests().subscribe(res=>{
      this.requests=res
      console.log(res)
    })
  }
}
