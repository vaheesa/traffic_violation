import { Component, OnInit } from '@angular/core';
import { Traffic2Service } from 'src/app/shared/traffic2.service';
import { Traffic2 } from 'src/app/shared/traffic2.model';

@Component({
  selector: 'app-traffic2-list',
  templateUrl: './traffic2-list.component.html',
  styleUrls: ['./traffic2-list.component.css']
})
export class Traffic2ListComponent implements OnInit {
 list : Traffic2[];
  constructor(private service : Traffic2Service) { }
  searchText : string ="";

  ngOnInit() {
    this.service.getTraffic().subscribe(actionArray =>{
    this.list = actionArray.map(item =>{
      return {
        id:item.payload.doc.id,
        ...item.payload.doc.data()}  as Traffic2;
    })
    });
  }
  onEdit(emp:Traffic2){
    this.service.formData = Object.assign({},emp);
  }
filterCondition(traffic2){
  return traffic2.licensenum.toLowerCase().indexOf(this.searchText.toLowerCase()) !=-1;
}
 
}
