import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../servicios/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  arrayTeam=[];

  intputsteam:any={id_team:'',name:'',fkid_category:'',fkid_origin:'',id_person:[]};

  id_person:any;
  personame:any;
  team:any;
  category:any;// me recive  todas las categorias filtradas con pipe, al momento  de agregar un producto
  origin:any;// recible el nombre de la empresa que esta como parametro
  person:any;

  identificador:any;// identificador de la empresa que va como parametro
  estate:any;// activa el formulario en uno
  seleccioncate :any;
  filtroproducto:any;

  constructor(public teamservice:TeamService,
    private route:ActivatedRoute,private router:Router) { 
      console.log(this.intputsteam);
      this.get_team()
      console.log(this.get_origin());
      console.log(this.arrayTeam);
  }
  ngOnInit(): void {
  
  }
  
   get_team(){
      this.teamservice.get().subscribe(result=>{
        this.team=result.data;
        console.log(this.team);
        
      },error=>{
        console.log(JSON.stringify(error));  
      
      });
    }
    
   get_category(){
      this.teamservice.get_category().subscribe(result=>{
        this.category=result.data;
        console.log(this.category);
        
      },error=>{
        console.log(JSON.stringify(error));  
      
      });
   }
  
   get_origin(){
      this.teamservice.get_origin().subscribe(result=>{
        this.origin=result.data;
        console.log(this.origin);
        
      },error=>{
        console.log(JSON.stringify(error));  
      
      });
   }
   get_person(){
      this.teamservice.get_person().subscribe(result=>{
        this.person=result.data;
        console.log(this.person);
        
      },error=>{
        console.log(JSON.stringify(error));  
      
      });
   }
   agregar_equipo(){
      this.teamservice.getOne(this.id_person).subscribe(result=>{
        this.personame=result.data;
        for (let index = 0; index < this.intputsteam.id_person.length; index++) {
              if (this.intputsteam.id_person[index].id_person==this.personame.id_person) {
                alert('ya esiste el integrante')
                var rest=1;
              }   
          
          }
            if (rest!=1) {
              this.intputsteam.id_person.push(this.personame);
            }
            console.log(this.intputsteam);
    
      },error=>{
        console.log(JSON.stringify(error));  
      
      });
    }

  
   post_team(){    
    if (this.intputsteam.id_team=='') {
       this.teamservice.post_team(this.intputsteam).subscribe(resultado=>{ 
          this.get_team();
          //mensaje de xito
          this.desactivarCreate();
       }, error=>{
          console.log(JSON.stringify(error));   
          //error al gaurdar
       });    
    }
  }
  

    resetForm(){
      this.intputsteam.id_team='',
      this.intputsteam.name='',
      this.intputsteam.fkid_category='',
      this.intputsteam.fkid_origin=''; 
      this.intputsteam.id_person=[];
      this.estate=1;
    }

    desactivarCreate(){
      this.estate=0;
    }
    rescategory(event){
        this.intputsteam.fkid_category=event.target.value;
        console.log(this.intputsteam.fkid_category);
    }
    resorigin(event){
      this.intputsteam.fkid_origin=event.target.value;
      console.log(this.intputsteam.fkid_origin);
    }
  

    resperson(event){
      this.id_person=event.target.value; 
        console.log(this.person);
    }
  
 
}
