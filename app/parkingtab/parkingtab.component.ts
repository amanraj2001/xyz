import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParkservService } from '../parkserv.service';

@Component({
  selector: 'app-parkingtab',
  templateUrl: './parkingtab.component.html',
  styleUrls: ['./parkingtab.component.css']
})
export class ParkingtabComponent {

          rownum:Array<number>=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
          form!:FormGroup
        constructor(private fb:FormBuilder,private demo:ParkservService) {
            this.form=this.fb.group({
              delid:[''],
              id:[''],
              carnum:[''],
              intime:[''],
              outtime:['00:00'],
              status:[true]
            })
        }
        get in(){
          return this.form.get('intime')
        }
        get out(){
          return this.form.get('outtime')
        }

          arr:any=[]
          indexnum!:number
          clc(i:number){
            // console.log(i);
            this.indexnum=i
            console.log(this.indexnum);


          }
          nenum!:number
          x:any
          indextoremoves:any
          // stat:boolean=false
          new:any
          carin(i:number){
            // if(this.arr[i].status==true)
              this.arr.push({id:this.indexnum,carnum:this.form.value.carnum,intime:this.form.value.intime,outtime:this.form.value.outtime})

            if((document.getElementById(`${this.indexnum}`) as HTMLButtonElement).style.backgroundColor='white'){
              (document.getElementById(`${this.indexnum}`) as HTMLButtonElement).style.backgroundColor='green';
            }


            console.log(this.arr);
            this.demo.sharedata(this.indexnum,this.arr)

            console.log(this.arr);
            // console.log(this.indexnum);

            // console.log(this.t);
            // if(this.t.status==false  ){
            //   this.t.status=true
            // }


             console.log(this.t);
            }
            t:any
            tt:any
            price:any
            carout(i:number){

              this.indextoremoves= this.arr.findIndex((p:any)=>p.id===this.indexnum)
              // if(this.indextoremoves==0){
              //   this.indextoremoves=1
              // }

              if((document.getElementById(`${this.indexnum}`) as HTMLButtonElement).style.backgroundColor==='green'){
                (document.getElementById(`${this.indexnum}`) as HTMLButtonElement).style.backgroundColor='white';
              }
            
              this.t = this.arr[this.indextoremoves]
              console.log(this.t);

              if(this.t.status==false){
                this.t.status=true
              }
              console.log(this.indextoremoves);
              // this.arr.splice(this.t.id,1)
              if(this.indextoremoves==0){
                this.arr.splice(0,1)
              }
              this.arr[this.indextoremoves]={delid:"",
              id:this.indextoremoves,
              carnum:'',
              intime:'',
              outtime:'',
              status:''}

              console.log(this.t);

              let tt =
      parseInt(this.t.outtime.split(':')[0]) -
      parseInt(this.t.intime.split(':')[0]) +
      (parseInt(this.t.outtime.split(':')[1]) -
        parseInt(this.t.intime.split(':')[1])) /
        60;
              console.log(tt);
              if (Math.round(tt) <= 1) {
                this.price = 20;
                console.log(this.price);
              } else if (Math.round(tt) >= 2 && Math.round(tt) <= 4) {
                this.price = 40;
                console.log(this.price);
              } else if (Math.round(tt) >= 4 && Math.round(tt) <= 6) {
                this.price = 100;
                console.log(this.price);
              } else if (Math.round(tt) >= 6 && Math.round(tt) <= 8) {
                this.price = 200;
                console.log(this.price);
              }




          }
}
