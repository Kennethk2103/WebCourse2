import React from 'react';




export default class bird{
  
    img:string;
    isDuck:boolean;
    
    constructor(img:string, isDuck:boolean){
        this.img=img;
        this.isDuck=isDuck;
    }

    getImg(){
        return this.img;
    }
    getBoolean(){
        return this.isDuck;
    }

    





}