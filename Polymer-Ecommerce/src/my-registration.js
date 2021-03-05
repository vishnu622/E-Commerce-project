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
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';

	

class Myregistration extends PolymerElement {
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
      
        h1{
          text-align:center;
         }
        paper-button{
          display:flex;
          justify-content: center;
          align-items: center;
          width:10px;
          margin:auto;
          color: #fff;
          background: #236666;
          padding:10px;
        }
        paper-button:hover{
          color:orange;
        }
      </style>
      
     <!------------html content------------->
    <app-location route="{{route}}"></app-location>
    <div class="row">
      <div class="col s12 m4 l2"><p></p></div>
        <div class="col s12 m4 l8"><p></p>
          <div class="card-panel ">
           <span class="white-text">
       <!------Heading-----> 
        <h1>Create Account</h1>

      <!-------polymer paper-inputs----->  
 
    <paper-input id="name" always-float-label label="Username" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z]*" ></paper-input>
    <paper-input id="phone"  always-float-label label="Phone Number" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[0-9]*" ></paper-input>
    <paper-input id="email"  always-float-label label="Email" required auto-validate error-message="Provide valid details!" char-counter maxlength="20"  ></paper-input>
    <paper-input id="password" type="password"always-float-label label="password" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z0-9]*"></paper-input>
    <br/ >
    <!----polymer paper button---->
    <paper-button  raised on-click="register">Register</paper-button>
    <br/>
    <paper-button  raised on-click="goToLogin">Back</paper-button>
    <br/>
    </div>
    </div>
    </div>
    </div>
  </div> 
  `;
  
  
    }
    //It will checks the end user valid credentials and navigate to total products page
      register(){
        if(this.$.name.value=="vishnu" && this.$.password.value=="reddy" && this.$.phone.value=="9490810275" && this.$.email.value=="manne@email.com"){
          this.set('route.path','/total-products');
        }else{
          alert("Fill Your Details");
        }  
     }
     goToLogin(){
      this.set('route.path','/log-in');
     }

     
  }

    
window.customElements.define('my-registration', Myregistration);
