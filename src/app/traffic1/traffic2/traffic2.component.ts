import { Component, OnInit } from '@angular/core';
import { Traffic2Service } from 'src/app/shared/traffic2.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-traffic2',
  templateUrl: './traffic2.component.html',
  styleUrls: ['./traffic2.component.css']
})
export class Traffic2Component implements OnInit {

  constructor(private service : Traffic2Service,
    private firestore:AngularFirestore,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form !=null)
      form.resetForm();
    this.service.formData={
      id :null ,
      violation : '',
      fine : '',
      vehilenum :'',
      licensenum :'',
      location :'',
      details : ''
    }
  }

  onSubmit(form : NgForm){
    let data = Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null)
       this.firestore.collection('traffic').add(data);
    else
       this.firestore.doc('traffic' + form.value.id).update(data);
       this.resetForm(form);
    this.toastr.success('Submited .............','Traffic Register');
  }

}
