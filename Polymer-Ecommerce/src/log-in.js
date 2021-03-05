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
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/polymer/lib/elements/dom-bind.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import {} from '@polymer/polymer/lib/elements/dom-if.js';
	

class Login extends PolymerElement {
  static get properties() {
    return {
      loggedInStatus: {
        type: Boolean,
        value: false,
        notify: true
      }
    };
  }

  static get template() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
          background-image:url("../images/shop.jpg"); no-repeat center fixed;
          background-size:cover;
          height:570px;   
        }
        img{
          widht:50px;
          height:150px;
        }
        h1{
          text-align:center;
          font-size:10px;
        }
        paper-button{
          display:flex;
          justify-content: center;
          align-items: center;
          width:130px;
          height:35px;
          margin:auto;
          color: #fff;
          background: #236666;
          padding:10px;
          border-radius:5px;
          font-size:13px;
        } 
        paper-button:hover{
          color:orange;
        } 
  
  
      </style>
  
        <!-------html content for user input-------->
      <app-location route="{{route}}"></app-location>
      
      <div class="row">
      <div class="col s12 m4 l2"><p></p></div>
        <div class="col s12 m4 l8"><p></p>
          <div class="card-panel ">
          <span class="white-text">
        <!----Heading-----> 
        <h1>LOGIN</h1>
        <!-----polymer paper-input-elements------->
     
       <paper-input id="name" always-float-label label="Username" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z]*"></paper-input>
       
       <paper-input id="password" type="password" always-float-label label="password" required auto-validate error-message="Provide valid details!"  maxlength="10" pattern="[a-zA-Z0-9]*"></paper-input>
       <br/>
        <!------polymer paper-buttons--------->
       <paper-button  raised on-click="navigateLogin">Submit</paper-button>
       <br/>
       <paper-button  raised on-click="navigateRegister">New User ?</paper-button> 
       
       </span>
        </div>
        </div>
   </div> 
   </div>
   
  `;
  }
      navigateLogin(){ //It will check authorized user credentials 
        if(this.$.name.value=="vishnu" && this.$.password.value=="reddy"){
           this.loggedInStatus = true;
           this.set('route.path','/total-products'); //navigate to total products page
        }else{
          alert("Enter Valid Details");
             } 
       }
  
      navigateRegister(){  //It will navigate to Registration page
        this.set('route.path','/my-registration');
      }
     
    }  
    
window.customElements.define('log-in', Login);
