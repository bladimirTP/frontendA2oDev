import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/servicios/category.service';

//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryRegister:any={id: '',name:''} // preparamos los datos que vamos agregar
  category:any;
  categori:any;
  ACTIVO="activo";
  INACTIVO="inactivo";
  estate:any;

  constructor(private categoryService: CategoryService) {
    this.Obtenercategorias();
   }

  ngOnInit(): void {
  }
  Obtenercategorias(){
    this.categoryService.obtener().subscribe(resultado =>{
     this.category=resultado.data;
      console.log(this.category);
    },
    error=>{
         console.log(JSON.stringify(error));      
        
     });
  }

}
