import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {OffreServiceService} from '../../services/offre-service.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationComponent} from '../../confirmation/confirmation.component';
import {AddOffreComponent} from '../add-offre/add-offre.component';
import {UpdateOffreComponent} from '../update-offre/update-offre.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}

@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.css']
})
export class OffreListComponent implements OnInit {
  displayedColumns: string[] = [ 'Name','description','Date','expiration','archived', 'actions'];
  dataSource :any
  constructor(private OffreServiceService :OffreServiceService,public dialog: MatDialog) { }
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.OffreServiceService.getOffres().subscribe(res=>{
      this.dataSource=res
      console.log(res)
    })
  }

  delete(element: any) {
    let dialogRef =  this.dialog.open(ConfirmationComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.OffreServiceService.deleteOffre(element.id).subscribe(res=>{
          console.log("done")
        })
      }
      else console.log('nope');
    });
  }

  edit(element :any){
    let dialogRef =  this.dialog.open(UpdateOffreComponent,{
      width :'700px',
      height :'600px',
      data:element
    })
    console.log(element)
  }
  add(){
    let dialogRef =  this.dialog.open(AddOffreComponent,{
      width :'700px',
      height :'600px',

    })
  }
}