import React from 'react';
import bird from "./bird"


export default class data{

    arr:bird[];
    constructor (){
        this.arr= new Array(10);
        this.arr[0] =(new bird("https://imgs.search.brave.com/8UenujRGiFQnavYLFLTVWMKeiRF2dz__4mBnAauiyEQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9id29n/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8xMS90d28t/dG9tLXR1cmtleS1p/bi1mYWxsLmpwZw", false));
        this.arr[1] = (new bird("https://imgs.search.brave.com/A5_b4zvSEm91uQJQ_3t0-AKae8AF2dZtGBcDKODqpk4/rs:fit:1000:750:1/g:ce/aHR0cHM6Ly93d3cu/b3V0ZG9vcmxpZmUu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDEv/MjMvUlhZWjdOVFAz/RkE3NEtCR0syM0xM/SEdTTEkuanBn",false));
        this.arr[2] = (new bird("https://imgs.search.brave.com/A5_b4zvSEm91uQJQ_3t0-AKae8AF2dZtGBcDKODqpk4/rs:fit:1000:750:1/g:ce/aHR0cHM6Ly93d3cu/b3V0ZG9vcmxpZmUu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDEv/MjMvUlhZWjdOVFAz/RkE3NEtCR0syM0xM/SEdTTEkuanBn",true));
        this.arr[3]=(new bird("https://imgs.search.brave.com/2lRgV-Td2NV5d0uWrCNwUl2VTDniLg8t4vvh3Ow3Z_A/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9jMi5z/dGF0aWNmbGlja3Iu/Y29tLzQvMzE4OS81/ODYyMDQwMTM0Xzg1/ZTRiYTA1MWVfYi5q/cGc",true));
        this.arr[4]=(new bird("https://imgs.search.brave.com/M7roWNpFW9qtNmh2J0VXwzPzQ7mzY7WJAPdqrfbE3xk/rs:fit:736:736:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC82MC9kOC8wZS82/MGQ4MGU3MzQ2ZGZl/NDcxOWVjMTY5ZjM1/NDdiNDhlNS0tZHVj/a3MtdHVya2V5Lmpw/Zw",false));
        this.arr[5]=(new bird("https://imgs.search.brave.com/8MGijeacE9URYLkpgJ8h3kvKWgP743RIFXADRp3gjWU/rs:fit:500:525:1/g:ce/aHR0cDovL3d3dy5i/YWNreWFyZGNoaWNr/ZW5zLmNvbS9jb250/ZW50L3R5cGUvNjEv/aWQvNTg1OTE3MS93/aWR0aC8zNTAvaGVp/Z2h0LzcwMC9mbGFn/cy9MTA",true));
        this.arr[6]=(new bird("https://imgs.search.brave.com/xH2STQlZsnF0h27akFdLlDqf1Mcdk3_OJhxwHKE063o/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bWVpZ3Nwb2ludG5h/dHVyZWNlbnRlci5v/cmcvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDgvY29tbW9u/LXBpZ2Vvbi1zcy1z/Y2FsZWQuanBn",true));
        this.arr[7]=(new bird("https://imgs.search.brave.com/i03mCm1b4QQrmb2_O-xjMBb6uVJUppbkU-xpjzBcVtg/rs:fit:1200:1071:1/g:ce/aHR0cHM6Ly8zLmJw/LmJsb2dzcG90LmNv/bS8tLVhBM2lNdmFK/TFkvVHdfR3lrUHMt/ZUkvQUFBQUFBQUFF/Z1UvRW1GS1M3Q3o1/eFEvczE2MDAvRHVj/ay0wNC5qcGc",true));
        this.arr[8]=(new bird("https://imgs.search.brave.com/i1aULgQ72tpV4OkbOqyJ1JimgjryT8ue35XPZdW9iH4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Z2FubmV0dC1jZG4u/Y29tLy1tbS0vOWQ3/ODA1ODJhMGE0NmMy/ZTNiYWRmNTE2YmNi/M2UwODYxMjk2NDll/OC9jPTAtMjY1LTMw/MDAtMTk1My9sb2Nh/bC8tL21lZGlhL0Jp/bmdoYW10b24vMjAx/NS8wNC8wOS9COTMx/NjkxOTc0OFouMV8y/MDE1MDQwOTEzMTQ0/NF8wMDBfRzFJQUY2/N1FTLjEtMC5qcGc_/d2lkdGg9MzIwMCZo/ZWlnaHQ9MTY4MCZm/aXQ9Y3JvcA",true));
        this.arr[9]=(new bird("https://imgs.search.brave.com/qfU-c1-z5H5BBa0iLYwSrbVHO4Tx9PN2ZXsa5CWRsZw/rs:fit:1200:1151:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tVWNySkdURWVp/LU0vWFE3eEstYWQw/Z0kvQUFBQUFBQUE0/YkEvd2o1dWxWTTJY/MWt0RmsyN01oRTNL/Z1VGX3pISEx5ZkpR/Q0s0QkdBWVlDdy9z/MTYwMC9EU0NOMjQ3/Ny5qcGc",true));
    }
    getRandomBird(){
        return this.arr[Math.floor(Math.random()*this.arr.length+1)]
    }


}