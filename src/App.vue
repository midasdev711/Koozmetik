<template>
    <div id="app">
        <nav class="sidebar nav" data-sidebar="nav">
            <div class="sidebar__header">
                <img src="/static/img/logo.svg" alt="Køøzmetik Logo" class="sidebar__logo">
                <img src="/static/img/close.svg" alt="Close" class="js-sidebar-trigger sidebar__close" data-sidebar="nav">
            </div>
            <div class="sidebar__content">
                <ul class="menu nav__menu">
                    <li class="menu__item " :class="{'menu__item--active': AppcurrentRoute == 'AboutUs'}">
                        <router-link to="/About" class="menu__link">{{Menu_About}}</router-link>
                    </li>
                    <li class="menu__item" :class="{'menu__item--active': AppcurrentRoute == 'ingredients'}">
                        <router-link to="/ingredients" class="menu__link">{{Menu_Ingredients}}</router-link>
                    </li>
                    <li class="menu__item" :class="{'menu__item--active': AppcurrentRoute == 'blogList'}">
                        <router-link to="/blogList" class="menu__link">{{Menu_Blog}}</router-link>
                    </li>
                    <li class="menu__item" :class="{'menu__item--active': AppcurrentRoute == 'shop'}">
                        <router-link to="/shop" class="menu__link">{{Menu_Online_Shop}}</router-link>
                    </li>
                    <li class="menu__item" :class="{'menu__item--active': AppcurrentRoute == 'contact'}">
                        <router-link to="/contact" class="menu__link">{{Menu_Contact}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="sidebar__footer">
                <p class="paragraph--small">Žorža Klemansoa 14
                    <br>
                    <a href="tel:+381 11 40 96 651">+381 11 40 96 651</a>
                    <br>
                    <a href="mailto:kontakt@koozmetik.rs">kontakt@koozmetik.rs</a>
                </p>
                <div class="language-switch nav__language-switch">
                    <a :href="RedirectRS" target="_blank" class="language-switch__label" :class="{'language-switch__label--active': SelectedLang == '_RS'}">sr</a>
                    <span class="language-switch__line"></span>
                    <a :href="RedirectEN" target="_blank" class="language-switch__label " :class="{'language-switch__label--active': SelectedLang == '_EN'}">en</a>
                    <span class="language-switch__line"></span>
                    <a :href="RedirectME" target="_blank" class="language-switch__label " :class="{'language-switch__label--active': SelectedLang == '_ME'}">me</a>
                    <span class="language-switch__line"></span>
                    <a :href="RedirectFR" target="_blank" class="language-switch__label " :class="{'language-switch__label--active': SelectedLang == '_FR'}">fr</a>
                </div>
            </div>
        </nav>

        <div class="sidebar cart" data-sidebar="cart">
            <div class="sidebar__header cart__header">
                <img src="/static/img/logo.svg" alt="Køøzmetik Logo" class="sidebar__logo">
                <img src="/static/img/close.svg" alt="Close" class="js-sidebar-trigger sidebar__close" data-sidebar="cart">
            </div>
            <ul class="sidebar__content cart__list">
                <li class="cart__product" v-for="item in cartData" v-if="count!=0">
                    <div class="cart__product-content">
                        <img src="/static/img/close-small.svg" alt="Remove" class="cart__product-remove" v-on:click="RemoveItem(item)">
                        <div class="cart__product-img-wrapper">
                            <img src="/static/img/noimage.png" alt="Deodorant" class="cart__product-img">
                        </div>
                        <div class="cart__product-info">
                            <div class="cart__product-info-group" v-on:click="ProductDetailsPage(item)">
                                <div class="mark mark--small">
                                    <p class="u-font-accent">{{item.ProShortname}}</p>
                                </div>
                                <p class="paragraph--med-2 u-font-accent"><a>{{item.ProTitle}} ({{item.Provariant.name}})</a></p>
                            </div>
                            <div class="cart__product-info-group">
                                <p class="paragraph--med-2 u-font-accent">x{{item.ProQTY}}</p>
                            </div>
                            <div class="cart__product-info-group">                             
                                <p class="paragraph--med-2 u-font-accent" >€ {{item.ProPrice}}</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="cart__product" v-if="count==0">{{cart_Empty}}</div>
            <div class="sidebar__footer" v-if="count!=0">
                <h3 class="heading-tertiary--small cart__total">{{Cart_Total}} € {{MainTotal}}</h3>
                <button class="btn cart__btn" v-on:click="CheckOutpage()">{{Cart_Checkout}}</button>
            </div>
        </div>

        <header class="header" v-bind:class="{ 'header header--static': AppcurrentRoute == 'shop' ||  AppcurrentRoute == 'blogList' ||  AppcurrentRoute == 'oderConformation' ||  AppcurrentRoute == 'blogarticle' ||  AppcurrentRoute == 'news'}">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12 header__content">
                        <a v-on:click="GotoHome()" href="javascript:" class="header__logo">
                            <img src="/static/img/logo.svg" alt="Køøzmetik Logo" class="header__logo-img">
                        </a>
                        <div class="header__btns">
                            <div class="js-sidebar-trigger header__cart" data-sidebar="cart" v-show="AppcurrentRoute!='oderConformation'">
                                <p class="paragraph--big u-font-accent">{{cart}}</p>
                                <div class="mark mark--small header__cart-mark">
                                    <p>{{count}}</p>
                                </div>
                            </div>
                            <img src="/static/img/menu-icon.svg" alt="Menu" class="js-sidebar-trigger header__btn" data-sidebar="nav">
                        </div>
                    </div>
                </div>
            </div>
        </header>


        <router-view/>

    </div>
</template>
<script>
    import { globalStore } from './main.js'
    import axios from 'axios';

    export default {
        data: () => ({

            Menu_About: "",
            Menu_Ingredients: "",
            Menu_News: "",
            Menu_Online_Shop: "",
            Menu_Blog: "",
            Menu_Contact: "",
            qty: [],
            count: 0,
            cartData: {},
            isCartEmpty: false,
            MainTotal: 0.00,
            AppcurrentRoute: "",
            cart: "",
            cart_Empty: "",
            Cart_Image: "",
            Cart_Title: "",
            Cart_Quantity: "",
            Cart_Price: "",
            Cart_Checkout: "",
            Cart_Total: "",
            Contact_Headquarters: "",
            Contact_Address: "",
            Contact_Phone: "",
            Contact_email: "",
            Home_scroll_more: "",
            Contact_Map: "",
            RedirectFR: '',
            RedirectEN: '',
            RedirectME: '',
            RedirectRS: '',
            SelectedLang: "_EN",

        }),
        watch: {
            '$route': function (from, to) {
                this.AppcurrentRoute = from.name;
            }
        },
        created() {
            this.RedirectFR = globalStore.RedirectFR,
                this.RedirectEN = globalStore.RedirectEN,
                this.RedirectME = globalStore.RedirectME,
                this.RedirectRS = globalStore.RedirectRS,
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
                    this.CartDataSave();
                } else {
                    this.isCartEmpty = true;
                }
            })

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
            ProductDetailsPage: function (pro) {
                if (pro.ProId) {
                    var proid = pro.ProId.match(/\d+/g).map(Number);
                    var pronam = pro.ProSlug
                    this.$router.push({ path: `/product/${proid}/${pronam}` })
                }
            },
            GotoHome: function () {
                this.$router.push({ path: `/Home` });
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
            RemoveItem: function (ProData) {
                var listProducts = [];
                if (sessionStorage.getItem("carts")) {
                    listProducts = JSON.parse(sessionStorage.getItem("carts"));
                    listProducts.splice(listProducts.findIndex(e => e.ProTitle === ProData["ProTitle"]), 1);
                    sessionStorage.setItem("carts", JSON.stringify(listProducts));
                    this.$bus.$emit('eventNames', 'text passed through event bus')
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

                }
            },
            CheckOutpage: function (proid) {
                this.$router.push({ path: `/oderConformation` });
            },
            GetjsoneData: function () {
                var json_language_file = ""
                var json_language_file = ""
                if (globalStore.LangDomain == "?site__domain=koozmetik.fr") {
                    var json_language_file = "/static/js/language_file/fr_.json"
                    this.SelectedLang = "_FR";
                }
                else if (globalStore.LangDomain == "?site__domain=koozmetik.co") {
                    var json_language_file = "/static/js/language_file/en_.json"
                    this.SelectedLang = "_EN";
                }
                else if (globalStore.LangDomain == "?site__domain=koozmetik.rs") {
                    var json_language_file = "/static/js/language_file/rs_.json"
                    this.SelectedLang = "_RS";
                }
                else if (globalStore.LangDomain == "?site__domain=koozmetik.me") {
                    var json_language_file = "/static/js/language_file/me_.json"
                    this.SelectedLang = "_ME";
                } else {
                    var json_language_file = "/static/js/language_file/en_.json"
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
                        this.cart = json.Cart;
                        this.cart_Empty = json.Cart_Empty;
                        this.Cart_Image = json.Cart_Image;
                        this.Cart_Title = json.Cart_Title;
                        this.Cart_Quantity = json.Cart_Quantity;
                        this.Cart_Price = json.Cart_Price;
                        this.Cart_Checkout = json.Cart_Checkout;
                        this.Cart_Total = json.Cart_Total;
                        this.Menu_About = json.Menu_About;
                        this.Menu_Ingredients = json.Menu_Ingredients;
                        this.Menu_News = json.Menu_News;
                        this.Menu_Online_Shop = json.Menu_Online_Shop;
                        this.Menu_Blog = json.Menu_Blog;
                        this.Menu_Contact = json.Menu_Contact;
                        this.Contact_Headquarters = json.Contact_Headquarters;
                        this.Contact_Address = json.Contact_Address,
                            this.Contact_Phone = json.Contact_Phone,
                            this.Contact_email = json.Contact_email,
                            this.Home_scroll_more = json.Home_scroll_more;
                        this.Contact_Map = json.Contact_Map;
                    }
                }.bind(this));
            }
        },
        mounted() {

            this.GetProduct();
            this.AppcurrentRoute = this.$router.currentRoute.name;
        },
    }
</script>