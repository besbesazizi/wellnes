import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Offre,Request} from '../model/Offre';

@Injectable({
  providedIn: 'root'
})
export class OffreServiceService {

  private baseURL = "http://localhost:8081";

  constructor(private httpClient: HttpClient) { }

  addOffre(offre:Offre){
    return   this.httpClient.post(this.baseURL+'/addOffer',offre)
  }
  getOffre(id:any){
    return this.httpClient.get(this.baseURL+'/getOffre/'+id)
  }
  addRequest(request:Request){
    return this.httpClient.post(this.baseURL+'/addRequest',request)
  }
  updateRequest(request:Request, id:any){
    return this.httpClient.put(this.baseURL+'/updateRequest/'+id,request)
  }
  updateOffre(offre:Offre, id:any){
    return this.httpClient.put(this.baseURL+'/updateOffer/'+id,offre)
  }
  deleteOffre( id:any){
    return this.httpClient.delete(this.baseURL+'/deleteOffer/'+id)
  }
  deleteRequest( id:any){
    return this.httpClient.delete(this.baseURL+'/deleteRequest/'+id)
  }
  getOffres()  {
    return this.httpClient.get(this.baseURL + '/AllOffers');
  }
  getRequests( )  {
    return this.httpClient.get(this.baseURL + '/AllRequests');
  }
}
