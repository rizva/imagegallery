import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

interface Images { views: string, webformatURL: string, tags: string }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Free Image Search using Pixabay api'; 
  public images: any;
  public showDiv: boolean;

  constructor( private http: Http){}

  ngOnInit(){
     this.showDiv= false;

  }
  
getImages(value){
  //console.log(`https://pixabay.com/api/?key=8095997-f9d04798f533790b139b81772&&q=${value}`);
  return this.http.get(`https://pixabay.com/api/?key=8095997-f9d04798f533790b139b81772&&q=${value}`)
                  .map((response: Response)=> response.json())
                  .subscribe((res)=>
                  {
                    this.showDiv = true;
                    this.images = res;
                    console.log(this.images);
                                             
                  });
  
  }

}
