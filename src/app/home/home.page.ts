import { Component } from '@angular/core';
import { parse } from 'path';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  n1: string='';
  res: number=0;

  radioVenda:string='';
  n2: string='';
  res2: number=0;

  constructor(){

  }

  verificarRadio() {
    if(this.radioSelecionada==='homem'){
      this.res=(parseFloat(this.n1)*72.7)-58;
    }
    else {
      this.res=(parseFloat(this.n1)*62.1)-44.7;
      }
    }

    verificarVenda() {
      if(this.radioVenda==='pix'){
        this.res2=parseFloat(this.n2) -(this.res2=parseFloat(this.n2)*0.1);
      }
      else if(this.radioVenda==='debito') {
        this.res2=parseFloat(this.n2);
      }
      else {
        this.res2=parseFloat(this.n2)+(this.res2=parseFloat(this.n2)*0.1);
      }
      }


}

