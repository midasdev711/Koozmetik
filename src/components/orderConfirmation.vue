<template id="shop">

    <div>

        <main>
            <section class="shop">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>{{Cart_Image}}</th>
                                        <th>{{Cart_Title}}</th>
                                        <th style="width:20%">{{Cart_Quantity}}</th>
                                        <th>{{Cart_Price}}</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in cartData">
                                        <td>
                                            <div class="cart__product-img-wrapper">
                                                <img src="static/img/noimage.png" alt="Deodorant" class="cart__product-img">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="mark mark--small">
                                                <p class="u-font-accent">{{item.ProShortname}}</p>
                                            </div>
                                            <p class="paragraph--med-2 u-font-accent">{{item.ProTitle}} ({{item.Provariant.name}})</p>
                                        </td>
                                        <td>
                                            <div class="cart__product-info-group">
                                                <p class="paragraph--med-2 u-font-accent">
                                                    <input type="number" onkeypress="return event.charCode >= 48" @change="QtyChnage(item)" v-model="item.ProQTY" min="1" class="qty_in">
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="cart__product-info-group">
                                                <p class="paragraph--med-2 u-font-accent"> € {{item.ProPrice}}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <a v-on:click="RemoveItem(item)">
                                                <i class="fa fa-times fa-2x" aria-hidden="true"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">
                                            <strong>{{Cart_Total}}</strong>
                                        </td>
                                        <td colspan="2">
                                            <div class="cart__product-info-group">
                                                <p class="paragraph--med-2 u-font-accent"> € {{MainTotal}}</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 " v-if="MainTotal >0">
                            <div class="col-sm-4 col-xs-12" v-if="Allow_Paypal_Payment">
                                <PayPal :button-style="myStyle" :amount=MainTotal currency="EUR" v-on:payment-authorized="paymentAuthorized" v-on:payment-completed="paymentCompleted"
                                    v-on:payment-cancelled="paymentCancelled" v-bind:client="paypal" env="sandbox" :items=paypalcart
                                    >
                                </PayPal>
                            </div>
                            <div class="col-sm-4 col-xs-12" v-if="Allow_Payment_Delivery">
                                <button class="btn cart__btn_on_Delivery"  @click="PaymentonDelivery">{{Oder_Payment_on_Delivery}}</button>
                            </div>
                            <div class="col-sm-4 col-xs-12" v-if="Allow_Stripe_Payment">
                                <button class="btn cart__btn" @click="checkout">Stripe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                 <div class="col-xs-12"></div>
                 </div>
            </section>
          <br>
            <section v-if="ShowPaymentonDelivery">
            
                <div class="container">                      
                    <form @submit.prevent="SendUserData">
                        <fieldset>
                            <legend>{{Personalia_Info}}</legend>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>{{First_Name}}</label>
                                    <input type="text" class="form-control" v-model="Paid_Delivery.FirstName" placeholder="Enter First Name" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>{{Last_Name}}</label>
                                    <input type="text" class="form-control" v-model="Paid_Delivery.LastName" placeholder="Enter Last Name" required>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                        <legend>{{Delivery_Address}}</legend>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputCity">{{Delivery_Street}}</label>
                                <input type="text" class="form-control" v-model="Paid_Delivery.DStreet" placeholder="Enter Street Name" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label>{{Delivery_City}}</label>
                                <input type="text" class="form-control"  v-model="Paid_Delivery.DCity"  placeholder="Enter City Name" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputZip">{{Delivery_Zipcode}}</label>
                                <input type="text" class="form-control"  v-model="Paid_Delivery.DZipcode"   placeholder="Enter Zipcode Name" required>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputCity">{{Delivery_Floor}}</label>
                                <input type="text" class="form-control"  v-model="Paid_Delivery.DFloor" placeholder="Enter Floor Name" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label>{{Delivery_Apartment_Number}}</label>
                                <input type="text" class="form-control"  v-model="Paid_Delivery.DApartmentNo" placeholder="Enter Apartment Name" required>
                            </div>
                            <div class="form-group col-md-2">
                               
                            </div>
                        </div>
                         </fieldset>
                            <input type="checkbox" @click="checkDeliveryAddress"> &nbsp {{Same_As_Delivery_Address_Please_Check_Checkbox}}<br>
                           <fieldset>                        
                        <legend>{{Billing_Address}}</legend>
                        <template v-if="!SameasDeliveryAddress">
                        <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>{{Billing_Name}}</label>
                                    <input type="text" class="form-control" v-model="Paid_Delivery.BName" placeholder="Enter  Name" required>
                                </div>
                               
                            </div>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputCity">{{Billing_Street}}</label>
                                <input type="text" class="form-control"  v-model="Paid_Delivery.BStreet" placeholder="Enter Street Name" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label>{{Billing_City}}</label>
                                <input type="text" class="form-control"  v-model="Paid_Delivery.BCity" placeholder="Enter City Name" required>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputZip">{{Billing_Zipcode}}</label>
                                <input type="text" class="form-control"  v-model="Paid_Delivery.BZipcode"  placeholder="Enter Zipcode" required>
                            </div>
                        </div>
                       </template>
                        <div class="form-row">
                                <div class="form-group col-md-5">
                                    <label>{{Billing_Phone_Number}}</label>
                                    <input type="text" class="form-control" v-model="Paid_Delivery.BPhoneNo" placeholder="Enter Phone Number" required>
                                </div>                               
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label>{{Comments}}</label>
                                     <input type="text" class="form-control" v-model="Paid_Delivery.Comments" placeholder="Enter Comments">
                                </div>                               
                            </div>
                         </fieldset>
                        <div class="form-row">
                                <div class="form-group col-md-4">
                                  <button class="btn">{{Button_Ok}}</button>
                                </div>                               
                            </div>
                    </form>

                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="footer__content">
                            <div class="footer__content-group">
                                <a v-on:click="GotoPage('home')" class="footer__logo">
                                    <img src="/static/img/logo-square.svg" alt="Køøzmetik Logo" class="footer__logo-img">
                                </a>
                            </div>
                            <nav class="footer__content-group">
                                <ul class="footer__menu">
                                    <li class="footer__menu-item">
                                        <a v-on:click="GotoPage('about')" class="footer__menu-link">{{Menu_About}}</a>
                                    </li>
                                    <li class="footer__menu-item">
                                        <a v-on:click="GotoPage('ingredients')" class="footer__menu-link">{{Menu_Ingredients}}</a>
                                    </li>
                                    <li class="footer__menu-item">
                                        <a v-on:click="GotoPage('news')" class="footer__menu-link">news</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav class="footer__content-group">
                                <ul class="footer__menu">
                                    <li class="footer__menu-item">
                                        <a v-on:click="GotoPage('shop')" class="footer__menu-link">{{Menu_Online_Shop}}</a>
                                    </li>
                                    <li class="footer__menu-item">
                                        <a v-on:click="GotoPage('blog')" class="footer__menu-link">{{Menu_Blog}}</a>
                                    </li>
                                    <li class="footer__menu-item">
                                        <a v-on:click="GotoPage('contact')" class="footer__menu-link">{{Menu_Contact}}</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav class="footer__content-group footer__content-group--center">
                                <ul class="socialbar socialbar--small socialbar--white">
                                    <li class="socialbar__item">
                                        <a href="javascript:" class="socialbar__link">
                                            <i class="fab fa-facebook-f socialbar__icon"></i>
                                        </a>
                                    </li>
                                    <li class="socialbar__item">
                                        <a href="javascript:" class="socialbar__link">
                                            <i class="fab fa-instagram socialbar__icon"></i>
                                        </a>
                                    </li>
                                    <li class="socialbar__item">
                                        <a href="javascript:" class="socialbar__link">
                                            <i class="fab fa-pinterest-p socialbar__icon"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="subfooter">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 subfooter__content">
                            <nav class="subfooter__nav">
                                <p class="paragraph--small u-color-gray">
                                    <a href="javascript:">Privacy Policy</a>
                                </p>
                                <p class="paragraph--small u-color-gray">
                                    <a href="javascript:">Terms and Conditions</a>
                                </p>
                            </nav>
                            <p class="paragraph--small u-color-gray">© 2017 Koozmetik / All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>
<script>
    import { globalStore } from '../main.js'
    import PayPal from 'vue-paypal-checkout'
    import { StripeCheckout } from 'vue-stripe'
    import axios from 'axios';
    const queryString = require('query-string');
    export default {
        components: {
            PayPal,
            'stripe-checkout': StripeCheckout
        },
        data: () => ({
             myStyle: 
    {
      label: 'checkout',
      size:  'responsive',
      shape: 'pill',
      color: 'gold'
    
  },
            Menu_About: "",
            Menu_Ingredients: "",
            Menu_News: "news",
            Menu_Online_Shop: "",
            Menu_Blog: "",
            Menu_Contact: "",
            paypalcart: [],
            qty: 1,
            count: 0,
            cartData: {},
            paypal: {
                sandbox: 'AVqR8yfW0wHVR1fEahCBtoxR34zbJ4055rfHAxuAISnrAArhWyLXmJ3kh_gaB7hRSJbMBjTmsL72mhfG',
                production: ''
            },
            MainTotal: 0.00,
            Cart_Image: "",
            Cart_Title: "",
            Cart_Quantity: "",
            Cart_Price: "",
            Cart_Total: "",
            Oder_Payment_on_Delivery: "",
            SelectedLang: "_EN",
            ShowPaymentonDelivery:false,
            SameasDeliveryAddress:false,
            Paid_Delivery:{},
            Personalia_Info:"",
            First_Name:"",
            Last_Name:"",
            Delivery_Address:"",
            Delivery_Street:"",
            Delivery_City:"",
            Delivery_Zipcode:"",
            Delivery_Floor:"",
            Delivery_Apartment_Number:"",
            Same_As_Delivery_Address_Please_Check_Checkbox:"",
            Billing_Address:"",
            Billing_Name:"",
            Billing_Street:"",
            Billing_City:"",
            Billing_Zipcode:"",
            Billing_Phone_Number:"",
            Comments:"",
            Button_Ok:"",
            Allow_Paypal_Payment:false,
            Allow_Stripe_Payment:false,
            Allow_Payment_Delivery:false,
            
        }),
        
        mounted() {
            this.GetProduct();
            let b = document.createElement('script')

            b.setAttribute('src', '/static/js/app-dist.js')

            document.head.appendChild(b)
            let a = document.createElement('script')

            a.setAttribute('src', '/static/js/app-dist.js')

            document.head.appendChild(a)
        },
        created() {
            window.scrollTo(0, 0);
            this.GetjsoneData()
            this.$bus.$on('eventNames', dataPassed => {
                if (sessionStorage.getItem("carts")) {
                    this.MainTotal = 0.00;
                    this.cartData = JSON.parse(sessionStorage.getItem("carts"));
                    this.count = this.cartData.length;
                    this.isCartEmpty = false;
                    this.cartData.filter((item) => {
                        this.MainTotal += (parseFloat(item["ProPrice"]));

                    })
                } else {
                    this.isCartEmpty = true;
                }
            });
            this.CartDataSave();
        },

        methods: {
            CartDataSave: function () {
                var products = [];
                if (sessionStorage.getItem("UserCart")) {
                    this.cartData = JSON.parse(sessionStorage.getItem("carts"));
                    for (let j = 0; j < this.cartData.length; j++) {
                        var data =
                            { "variant": parseInt(this.cartData[j].Provariant.pk), "quantity": this.cartData[j].ProQTY }

                        products.push(data);

                    }
                    axios.patch(sessionStorage.getItem("UserCart") + globalStore.LangDomain, { products }, {
                        headers: { 'Authorization': 'Bearer ' + localStorage.getItem("koozmetikToken") }
                    }).then(result => {


                    }, error => {
                        const toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-center',
                            showConfirmButton: false,
                            timer: 4000
                        });
                        toast({
                            type: 'error',
                            title: 'error.status ' + error.status
                        })
                        console.error(error);
                    });
                }
            },
            GotoPage: function (page) {
                if (page == 'about') { this.$router.push({ path: `/about` }); }
                else if (page == 'ingredients') { this.$router.push({ path: `/ingredients` }); }
                else if (page == 'shop') { this.$router.push({ path: `/shop` }); }
                else if (page == 'blog') { this.$router.push({ path: `/blogList` }); }
                else if (page == 'contact') { this.$router.push({ path: `/contact` }); }
                else if (page == 'news') { this.$router.push({ path: `/news` }); }

            },
            QtyChnage: function (data) {
                if (data.ProQTY > 0) {
                    this.MainTotal = 0.00;
                    data["ProPrice"] = data["ProQTY"] * data["ProUnitPrice"];
                    this.cartData.filter((item) => {
                        this.MainTotal += (parseFloat(item["ProPrice"]));
                    })
                    this.UpdateSessionData(data)
                }
            },
            GetProduct: function () {
                if (sessionStorage.getItem("carts")) {
                    this.MainTotal = 0.00;
                    this.cartData = JSON.parse(sessionStorage.getItem("carts"));
                    this.count = this.cartData.length;
                    this.isCartEmpty = false;
                    this.cartData.filter((item) => {
                        this.MainTotal += (parseFloat(item["ProPrice"]));

                    })
                } else {
                    this.isCartEmpty = true;
                }
            },
            paymentAuthorized: function (data) {
                console.log("paymentAuthorized", data);
            },
            paymentCompleted: function (data) {
                const toast = this.$swal.mixin({
                    toast: true,
                    position: 'top-center',
                    showConfirmButton: false,
                    timer: 5000
                });
                toast({
                    type: 'success',
                    title: "Token Id=" + data.id
                })
                console.log("paymentCompleted", data);
            },
            paymentCancelled: function (data) {
                const toast = this.$swal.mixin({
                    toast: true,
                    position: 'top-center',
                    showConfirmButton: false,
                    timer: 5000
                });
                toast({
                    type: 'error',
                    title: "Payment Cancelled"
                })
                console.log("paymentCancelled", data);
            },
            RemoveItem: function (ProData) {
                var listProducts = [];
                if (sessionStorage.getItem("carts")) {
                    listProducts = JSON.parse(sessionStorage.getItem("carts"));
                    listProducts.splice(listProducts.findIndex(e => e.ProTitle === ProData["ProTitle"]), 1);
                    sessionStorage.setItem("carts", JSON.stringify(listProducts));
                    this.$bus.$emit('eventNames', 'text passed through event bus')
                    this.CartDataSave();
                }
            },
            UpdateSessionData: function (ProData) {
                var listProducts = [];
                if (sessionStorage.getItem("carts")) {
                    listProducts = JSON.parse(sessionStorage.getItem("carts"));
                    for (var i = 0; i < listProducts.length; i++) {
                        if (listProducts[i].ProTitle == ProData["ProTitle"]) {
                            listProducts[i].ProQTY = ProData["ProQTY"]
                            listProducts[i].ProPrice = ProData["ProPrice"]
                        }
                    }
                    sessionStorage.setItem("carts", JSON.stringify(listProducts));
                    this.$bus.$emit('eventNames', 'text passed through event bus')

                }
                this.CartDataSave();
            },
            GotoHome: function () {
                this.$router.push({ path: `/Home` });
            },
            GetjsoneData: function () {
                var json_language_file = ""
                if (globalStore.LangDomain == "?site__domain=koozmetik.fr") {
                    var json_language_file = "static/js/language_file/fr_.json"
                    this.SelectedLang = "_FR";
                }
                else if (globalStore.LangDomain == "?site__domain=koozmetik.co") {
                    var json_language_file = "static/js/language_file/en_.json"
                    this.SelectedLang = "_EN";
                }
                else if (globalStore.LangDomain == "?site__domain=koozmetik.rs") {
                    var json_language_file = "static/js/language_file/rs_.json"
                    this.SelectedLang = "_RS";
                }
                else if (globalStore.LangDomain == "?site__domain=koozmetik.me") {
                    var json_language_file = "static/js/language_file/me_.json"
                    this.SelectedLang = "_ME";
                } else {
                    var json_language_file = "static/js/language_file/en_.json"
                    this.SelectedLang = "_EN";
                }

                $.getJSON(json_language_file, function (json) {
                    if (json) {
                        this.Menu_About = json.Menu_About;
                        this.Menu_Ingredients = json.Menu_Ingredients;
                        this.Menu_News = json.Menu_News;
                        this.Menu_Online_Shop = json.Menu_Online_Shop;
                        this.Menu_Blog = json.Menu_Blog;
                        this.Menu_Contact = json.Menu_Contact;
                        this.Cart_Image = json.Cart_Image;
                        this.Cart_Title = json.Cart_Title;
                        this.Cart_Quantity = json.Cart_Quantity;
                        this.Cart_Price = json.Cart_Price;
                        this.Cart_Total = json.Cart_Total;
                        this.Oder_Payment_on_Delivery = json.Oder_Payment_on_Delivery;
                        this.Personalia_Info=json.Personalia_Info;
                        this.First_Name=json.First_Name;
                        this.Last_Name=json.Last_Name;
                        this.Delivery_Address=json.Delivery_Address;
                        this.Delivery_Street=json.Delivery_Street;
                        this.Delivery_City=json.Delivery_City;
                        this.Delivery_Zipcode=json.Delivery_Zipcode;
                        this.Delivery_Floor=json.Delivery_Floor;
                        this.Delivery_Apartment_Number=json.Delivery_Apartment_Number;
                        this.Same_As_Delivery_Address_Please_Check_Checkbox=json.Same_As_Delivery_Address_Please_Check_Checkbox;
                        this.Billing_Address=json.Billing_Address;
                        this.Billing_Name=json.Billing_Name;
                        this.Billing_Street=json.Billing_Street;
                        this.Billing_City=json.Billing_City;
                        this.Billing_Zipcode=json.Billing_Zipcode;
                        this.Billing_Phone_Number=json.Billing_Phone_Number;
                        this.Comments=json.Comments;
                        this.Button_Ok=json.Button_Ok;
                        this.Allow_Paypal_Payment=json.Allow_Paypal_Payment;
                        this.Allow_Stripe_Payment=json.Allow_Stripe_Payment;
                        this.Allow_Payment_Delivery=json.Allow_Payment_Delivery;
                    }
                }.bind(this));
            },
            checkout() {
                this.$checkout.open({
                    name: "Køøzmetik Store",
                    description: "Køøzmetik Purchase",
                    currency: 'EUR',
                    amount: Math.round(this.MainTotal) * 100,
                    token: (data) => {
                        debugger;
                        if (data && data.id) {
                           
                       axios.post("https://api.stripe.com/v1/charges",queryString.stringify({ amount: Math.round(this.MainTotal) * 100,currency :"eur",source : data.id } ), 
                       {
                        headers: {
                             'Content-Type': "application/x-www-form-urlencoded",
                             'Authorization': "Bearer "+ globalStore.StripeSecretKey  //stripe secret key
                         }
                    }).then(result => {
                            debugger;
                            const toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-center',
                            showConfirmButton: false,
                            timer: 4000
                        });
                        toast({
                            type: 'success',
                            title: result.data.status
                        })

                    }, error => {
                        debugger;
                        const toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-center',
                            showConfirmButton: false,
                            timer: 4000
                        });
                        toast({
                            type: 'error',
                            title: 'error.status ' + error.status
                        })
                        console.error(error);
                    });
                        }

                    }
                });
            },
            passPaypal() {
                if (sessionStorage.getItem("carts")) {
                    this.paypalcart = [];
                    this.cartData = JSON.parse(sessionStorage.getItem("carts"));
                    for (let i = 0; i < this.cartData.length; i++) {
                        var item = {
                            "name": this.cartData[i].ProTitle,
                            "description": this.cartData[i].ProSlug,
                            "quantity": this.cartData[i].ProQTY,
                            "price": (parseFloat(this.cartData[i].ProUnitPrice)),
                            "currency": "EUR"
                        }
                        this.paypalcart.push(item);

                    }
                }
            },
            PaymentonDelivery:function(){
                this.ShowPaymentonDelivery=true;
            },
            checkDeliveryAddress:function(){            
                if(this.SameasDeliveryAddress){
                    this.SameasDeliveryAddress=false;
                }else{
                     this.SameasDeliveryAddress=true;
                }
            },
            SendUserData:function(){            
                this.Paid_Delivery
            }
        },

    }
</script>