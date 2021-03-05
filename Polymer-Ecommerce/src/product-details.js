/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-button/paper-button.js';


class ProductDetails extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}"></app-location>   
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
        }
       h1{
        text-align:center;
        color:#236666;
        font-size:30px;
        font-weight:bold;
       }
        paper-button{
          background-color:#236666;
          color:#fff;
          padding:10px;
          border-radius:5px;
          display:flex;
          justify-content: center;
          align-items: center;
          width:150px;
          margin:auto;
        }
        paper-button:hover{
          color:orange;
        }
        button{
          text-align:left;
          margin-left:20px;
          background-color:#236666;
          color:#fff;
          padding:10px;
          border-radius:5px;
          margin-top:10px;
        }
        button:hover{
        color:orange;
        }
        p{
          text-align:center;
          justify:center;
          justify-content:center;
          margin-top:15px;
          font-weight:bold;
        }
        img{
          width:180px;
        }
        h2{
          text-align:center;
          justify:center;
          justify-content:center;
          color:rgb(60, 179, 113);
        }
        ul{
          color:skyblue;
        }
        h5{
          color:#236666;
          font-weight:bold;
          font-size:10px;
        }
      </style>
        <!-- html content for product list page -->
          
             <h1>Product Details</h1>
             <p><img  src={{productId.Img}} ></p>
             <h2>Price:Rs. {{productId.Price}}</h2>
             <p>Color: {{productId.Color}}</p>
             <p>ProductName: {{productId.ProductName}}</p> 
             <p>ProductCategory: {{productId.ProductCategory}}</p>
             <p>ProductDesc: {{productId.ProductDesc}}</p>
             <button   on-click="back" >Back</button>
             <div><paper-button  raised on-click="addToCart">Add to Cart</paper-button></div>
      <!-- Footer -->
        <footer >
         <div>
           <h5 >About Us :</h5>
           <p >Online shopping cart for men's youthful T-shirt's and developed by uniquehire Polymer Team</p>
          </div>
      </footer>
      <!-- Footer -->
  
     `;
  }
  static get properties() {
    return {
      // accessing product id from my app page which is used to select product index
      productId: {
        type: Number,
        notify: true,
        observer: "_checkId"
      },
      cart:{
        type:Array,
        value:[],
        notify:true
      },
      totalProductList:{
        type:Array,
        value:[],
        notify:true
      },
      totalSum: {   ////It will calculate totatl cart items price
        type: Number,
        value: 0,
        notify:true
      }
    };
  }
  
  _checkId(){ //observer method
    
   }

   back(){
    this.set('route.path','/total-products');
  }
 
    addToCart(){
      let productExisted = false;
      //totalProductList
      //cart
      // check product is already existed or not using map cart array
      // if already inside cart, then increment to that product
      // else add product to cart array
      let updatedProducts = this.cart.map((product, index) => {
        if(product.Id === this.productId.Id) {
          productExisted = true;
          product.qty += 1;
          this.notifyPath("cart."+index+".qty", product.qty);  //notify polymer that the value has changed
        }
        return product;
      });
      if(productExisted) {
         this.cart = updatedProducts; 
      }else{
        //add product to cart array
        let product = this.productId;
        console.log(product);
        product.qty = 1;
        this.cart.push(product);
      }
      //set cart with new name to update to new function
      let toSetCart = this.cart.map((product) => {
        return product
      });
      this.set('cart',toSetCart);
      this.set('route.path','/cart-products');
    }
}


window.customElements.define('product-details', ProductDetails);