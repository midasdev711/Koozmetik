<template id="shop">
    <div> 
    
     <main v-if="products.length > 0">
            <section class="shop">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12" >
                            <div class="shop__filters" >
                                <h3 class="shop__filters-item " :class="{'shop__filters-item--active': selectedItem == 'all'}"   v-on:click="ProductListFilter('all')">{{Shop_All}}</h3>
                                <h3 class="shop__filters-item" v-for="item in productCategorieList" :class="{'shop__filters-item--active': selectedItem == item.slug}"  v-on:click="ProductListFilter(item.slug)">{{item.name}}</h3>                               
                            </div>
                        </div>
                        <div class="col-xs-12 shop__products">
                            <ul class="shop__products-group" v-if="filterProductNoData == false">
                                <li class="product-box" v-for="item in products">
                                    <div class="product-box__img-wrapper" v-if="!item.photo">
                                        <img src="static/img/noimage.png" alt="IMG" class="product-box__img">
                                    </div>
                                    <div class="product-box__img-wrapper" v-else>
                                            <img :src="item.photo" alt="IMG" class="product-box__img">
                                        </div>
                                    <div class="product-box__copy" v-on:click="ProductDetails(item)">
                                        <div class="mark product-box__mark">
                                            <p class="paragraph--big u-font-accent">{{item.short_name}}</p>
                                        </div>
                                        <h3 class="heading-tertiary--small">
                                            <a>{{item.name}}</a>
                                        </h3>
                                        <div class="divider product-box__divider"></div>
                                        <p>
                                            <span v-html="item.description"></span>
                                        </p>
                                    </div>
                                </li>
                            </ul>                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <main v-else>
        <section class="shop">
                <div class="container">
                    <div class="row">          
                     <div class="col-xs-3">
                                            
                        </div>             
                        <div class="col-xs-7">
                                   <h3 class="u-color-gray">{{Shop_No_Products}}</h3>
                                   <h3 class="u-color-gray">{{Shop_Check_Back}}</h3>               
                        </div>
                         <div class="col-xs-2">
                                                
                        </div>
                    </div>
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
    import {globalStore} from '../main.js'
  
    import Loading from 'vue-loading-overlay';
  
    import 'vue-loading-overlay/dist/vue-loading.css';

    import axios from 'axios';
  
    export default {      
        name: 'List',
         data: () => ({  
              Menu_About: "",
            Menu_Ingredients: "",
            Menu_News: "news",
            Menu_Online_Shop: "",
            Menu_Blog: "",
            Menu_Contact: "",
        isLoading: false,
        fullPage: true,
        canCancel: false,
        useSlot: false,
        loader: 'spinner',
        color: '#007bff',
        bgColor: '#ffffff',
        height: 128,
        width: 128,

            products: [],
            filterProductsList: [],
            productCategorieList: [],
            selectedItem:'all',
            isProductAvailable:false,
            Shop_All:"",
            Error_Product_List:"",
            Shop_No_Products:"",
            Shop_Check_Back:"",
            Error_Product_Categorie:"",
            filterProductNoData:false,

           
        }),  
         components: {
            Loading
        },  
        created() {
             window.scrollTo(0, 0);
            this.GetjsoneData()          
        },   
        mounted() {
            this.GetProductCategorieList();
            this.GetProdictList();
        },
        methods: {       
             GotoPage: function (page) {
                if (page == 'about') { this.$router.push({ path: `/about` }); }
                else if (page == 'ingredients') { this.$router.push({ path: `/ingredients` }); }
                else if (page == 'shop') { this.$router.push({ path: `/shop` }); }
                else if (page == 'blog') { this.$router.push({ path: `/blogList` }); }
                else if (page == 'contact') { this.$router.push({ path: `/contact` }); }
                else if (page == 'home') { this.$router.push({ path: `/Home` }); }
                else if (page == 'news') { this.$router.push({ path: `/news` }); }

            }, 
            ProductDetails: function (pro) {               
                if(pro.url){
                var proid =pro.url.match(/\d+/g).map(Number); 
                var pronam=pro.slug             
                this.$router.push({ path: `/product/${proid}/${pronam}` }) 
                }                
            },
            GotoHome: function () {
                this.$router.push({ path: `/Home` });
            },
            GetProductCategorieList: function () {
                  axios.get("productcategories/" +  globalStore.LangDomain,{
        headers: { 'Authorization': 'Bearer '+localStorage.getItem("koozmetikToken") }
      }).then(result => {      
                    if (result.data && result.data.results.length > 0) {
                        this.productCategorieList = result.data.results;
                    }
                    else {
                        const toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        toast({
                            type: 'error',
                            title: 'No Product Categorie Available'
                        })
                    }

                }, error => {
                    const toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-center',
                            showConfirmButton: false,
                            timer: 4000
                        });
                        toast({
                            type: 'error',
                            title:'error.status '+error.status
                        })     
                    console.error(error);
                });
            },
            GetProdictList: function () {              
                axios.get("products/" +  globalStore.LangDomain,{
        headers: { 'Authorization': 'Bearer '+localStorage.getItem("koozmetikToken") }
      }).then(result => {
                    if (result.data && result.data.results.length >0) {
                        this.filterProductsList= [];
                        this.products=[];     
                                  
                        this.products = result.data.results;
                        this.filterProductsList=this.products;
                        this.isProductAvailable=true;  
                    }
                    else {                        
                        const toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        toast({
                            type: 'error',
                            title: this.Error_Product_List
                        })
                    }

                }, error => {                    
                    const toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-center',
                            showConfirmButton: false,
                            timer: 4000
                        });
                        toast({
                            type: 'error',
                            title:'error.status '+error.status
                        })     
                    console.error(error);
                });
            },
            ProductListFilter: function (type) {
               
                this.selectedItem=type;
                if(type=="all"){
                    this.products=this.filterProductsList;
                }else{
                    var temp=[];                  
                     this.products=this.productCategorieList;
                     temp = this.products.filter(item => item.slug === type);
                     if(temp.length >0){
                           this.filterProductNoData=false;   
                           this.products=temp[0].products
                     }else{
                         this.filterProductNoData=true;                         
                     }
                }              

            }, GetjsoneData: function () {               
                var json_language_file=""
                if(globalStore.LangDomain=="?site__domain=koozmetik.fr"){
                    var json_language_file="static/js/language_file/fr_.json"
                }
                else if(globalStore.LangDomain=="?site__domain=koozmetik.co"){
                     var json_language_file="static/js/language_file/en_.json"
                }
                else if(globalStore.LangDomain=="?site__domain=koozmetik.rs"){
                     var json_language_file="static/js/language_file/rs_.json"
                }
                else if(globalStore.LangDomain=="?site__domain=koozmetik.me"){
                    var json_language_file="static/js/language_file/me_.json"
                }else{
                      var json_language_file="static/js/language_file/en_.json"
                }
               
                $.getJSON(json_language_file, function (json) {                   
                    if(json){     
                         this.Menu_About = json.Menu_About;
                        this.Menu_Ingredients = json.Menu_Ingredients;
                        this.Menu_News = json.Menu_News;
                        this.Menu_Online_Shop = json.Menu_Online_Shop;
                        this.Menu_Blog = json.Menu_Blog;
                        this.Menu_Contact = json.Menu_Contact;                                       
                        this.Shop_All=json.Shop_All;
                        this.Error_Product_List=json.Error_Product_List;
                        this.Shop_No_Products=json.Shop_No_Products;
                        this.Shop_Check_Back=json.Shop_Check_Back;
                        this.Error_Product_Categorie=json.Error_Product_Categorie

                    }                        
                }.bind(this));
            }
        },
        

    }

</script>