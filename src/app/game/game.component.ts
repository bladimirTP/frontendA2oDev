import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../servicios/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  inputgame:any={id_game:'',state:'',date:'',spot:'',level:'',lague:'',teamya:[]};

  id_team:any;
  teamname:any;
  game:any;
  league:any;
  team:any;
  estate:any;

  

  constructor(public gameservice:GameService,
    private route:ActivatedRoute,private router:Router) { 
      console.log(this.inputgame);
      this.get_game()
      console.log(this.get_league());
  }
  ngOnInit(): void {
  
  }
  
   get_game(){
      this.gameservice.get().subscribe(result=>{
        this.game=result.data;
        console.log(this.game);
        
      },error=>{
        console.log(JSON.stringify(error));  
      
      });
    }
    
   get_league(){
      this.gameservice.get_league().subscribe(result=>{
        this.league=result.data;
        console.log(this.league);
        
      },error=>{
        console.log(JSON.stringify(error));  
      
      });
   }
    get_team(){
        this.gameservice.get_team().subscribe(result=>{
          this.team=result.data;
          console.log(this.team);
          
        },error=>{
          console.log(JSON.stringify(error));  
        
        });
    }
  
   agregar_equipos(){
      this.gameservice.getOne(this.id_team).subscribe(result=>{
        this.teamname=result.data;
        for (let index = 0; index < this.inputgame.teamya.length; index++) {
              if (this.inputgame.teamya[index].id_team==this.teamname.id_team) {
                alert('ya esiste el integrante')
                var rest=1;
              }   
          
          } 
            if (rest!=1) {
              this.inputgame.teamya.push(this.teamname);
            }
            console.log(this.teamname)
            console.log(this.inputgame);
    
      },error=>{
        console.log(JSON.stringify(error));  
      
      });
    }

  
   post_game(){    
    if (this.inputgame.id_game=='') {
       this.gameservice.post_game(this.inputgame).subscribe(resultado=>{ 
          this.get_game();
          //mensaje de xito
          this.desactivarCreate();
       }, error=>{
          console.log(JSON.stringify(error));   
          //error al gaurdar
       });    
    }
  }
  

    resetForm(){
      this.inputgame.id_game='',
      this.inputgame.state='',
      this.inputgame.date='',
      this.inputgame.spot=''; 
      this.inputgame.level='';
      this.inputgame.fkid_league=''; 
      this.inputgame.teamya=[];
      this.estate=1;
    }

    desactivarCreate(){
      this.estate=0;
    }
    resleague(event){
        this.inputgame.fkid_league=event.target.value;
        console.log(this.inputgame.fkid_league);
    }
    resteam(event){
      this.id_team=event.target.value; 
        console.log(this.id_team);
    }
  

}
