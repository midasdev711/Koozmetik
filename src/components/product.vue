<template id="product">
    <div>
        <main v-if="!productsDetails.price">
            <section class="shop">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 shop__products">
                            <div class="u-padding-top-huge u-margin-bottom-med-2 u-align-inline-center">

                            </div>
                        </div>
                        <div class="col-xs-12 shop__products">
                            <div class="u-padding-top-huge u-margin-bottom-med-2 u-align-inline-center">
                                <h3 class="heading-tertiary--small">{{Shop_No_Products}}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <main>
            <div>
                <section class="hero hero--divided hero--content" style="background-color: #efd8d4;">
                    <div class="banner banner--inner banner--content">
                        <div class="banner__divided">
                            <div class="hero__social hero__social--vertical">
                                <ul class="socialbar socialbar--vertical">
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
                                <p class="paragraph--big u-font-accent u-weight-bld hero__social-label" :class="{'hero__social-label_custome': SelectedLang == '_RS','hero__social-label_custome_fr': SelectedLang == '_FR'}">{{Product_Share}}</p>
                            </div>
                            <div class="container">
                                <div class="row product">
                                    <div class="col-xs-12 col-sm-6 banner__divided-side">
                                        <div class="banner__product" v-if="!productsDetails.photo">
                                            <img src="/static/img/noimage.png" alt="IMG" class="banner__product-img">
                                        </div>
                                         <div class="banner__product" v-else>
                                            <img  :src="productsDetails.photo" alt="IMG" class="banner__product-img">
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-sm-6 banner__divided-side">
                                        <div class="product__description">
                                            <div class="mark u-margin-bottom-smallest">
                                                <p class="paragraph--big u-font-accent">{{productsDetails.short_name}}</p>
                                            </div>
                                            <div class="u-margin-bottom-med-2">
                                                <h1 class="heading-secondary u-margin-bottom-small">{{productsDetails.name}}</h1>
                                                <p class="u-weight-bld"><span v-if="productsDetails.skin_type==5">All</span> <span v-if="productsDetails.skin_type==4">Combination</span> <span v-if="productsDetails.skin_type==3">Oily</span> <span v-if="productsDetails.skin_type==2">Dry</span> <span v-if="productsDetails.skin_type==1">Normal</span> skin types</p>
                                                <p> <span v-for="(item,index) in productsDetails.ingredients"><span v-if="index!=0"> • </span>{{item.ingredient.translations.fr.name}}</span>
                                                    <br>{{productsDetails.natural}}% natural ingredients</p>
                                            </div>
                                            <div class="product__info u-margin-bottom-med">
                                                <div class="tabs">
                                                    <div class="tabs__controls">
                                                        <p class="paragraph--med-2 u-font-accent tabs__control tabs__control--active" data-tab="about">about</p>
                                                        <p class="paragraph--med-2 u-font-accent tabs__control" data-tab="usage">usage</p>
                                                        <p class="paragraph--med-2 u-font-accent tabs__control" data-tab="characteristics">characteristics</p>
                                                        <p class="paragraph--med-2 u-font-accent tabs__control" data-tab="ingredients">ingredients</p>
                                                    </div>
                                                    <div class="tabs__content">
                                                        <div class="tabs__content-item tabs__content-item--active" data-tab="about">
                                                            <p>
                                                                <span v-html="productsDetails.about"></span>
                                                            </p>
                                                        </div>
                                                        <div class="tabs__content-item" data-tab="usage">
                                                            <p>
                                                                <span v-html="productsDetails.usage"></span>
                                                            </p>
                                                        </div>
                                                        <div class="tabs__content-item" data-tab="characteristics">
                                                            <p>
                                                                <span v-html="productsDetails.characteristics"></span>
                                                            </p>
                                                        </div>
                                                        <div class="tabs__content-item" data-tab="ingredients">
                                                            <p>
                                                                <span v-html="productsDetails.inci"></span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product__type">
                                                <form action="javascript:" class="radio">
                                                    <div class="radio__group" v-for="item in productsDetails.variants">
                                                        <input name="format" v-bind:value="item" v-model="variant" type="radio" :id="item.name" class="radio__input">
                                                        <label :for="item.name" class="radio__label">
                                                            <span class="radio__mark"></span>{{item.name}}</label>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="total product__total" v-if="productsDetails.price">
                                                <h3 class="heading-tertiary--small" v-if="variant.price_override" > € {{variant.price_override}}</h3>
                                                <h3 class="heading-tertiary--small" v-else > € {{productsDetails.price}}</h3>
                                                <button class="btn total__btn add-pro-btn" v-on:click="AddProduct(productsDetails)">{{Product_Add_Cart}}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid hero__actions-wrapper hero__actions-wrapper--full">
                        <div class="hero__actions">
                            <div class="back" v-on:click="$router.go(-1)">
                                <img src="/static/img/back-arrow.svg" alt="Back arrow icon" class="back__icon">
                                <p class="paragraph--big u-font-accent u-weight-bld">{{Product_Back}}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="shop" v-if="productsDetails.price">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 shop__products">
                                <div class="u-padding-top-huge u-margin-bottom-med-2 u-align-inline-center">
                                    <h3 class="heading-tertiary--small">{{Product_Accompany}}</h3>
                                </div>
                                <div class="shop__products-group shop__products-group--single">
                                    <article class="product-box"  v-for="item in RelatedProducts.slice(1, 4)">
                                        <div class="product-box__img-wrapper" v-if="!item.photo">
                                            <img src="/static/img/noimage.png" alt="IMG" class="product-box__img">
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
                                             <span v-html="item.description"></span>

                                        </div>
                                    </article>
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </main>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="footer__content">
                            <div class="footer__content-group">
                                <a v-on:click="$router.push({ name: 'home' })" class="footer__logo">
                                    <img src="/static/img/logo-square.svg" alt="Køøzmetik Logo" class="footer__logo-img">
                                </a>
                            </div>
                            <nav class="footer__content-group">
                                <ul class="footer__menu">
                                    <li class="footer__menu-item">
                                        <a v-on:click="$router.push({ name: 'about' })" class="footer__menu-link">{{Menu_About}}</a>
                                    </li>
                                    <li class="footer__menu-item">
                                        <a v-on:click="$router.push({ name: 'ingredients' })" class="footer__menu-link">{{Menu_Ingredients}}</a>
                                    </li>
                                    <li class="footer__menu-item">
                                        <a v-on:click="$router.push({ name: 'news' })" class="footer__menu-link">news</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav class="footer__content-group">
                                <ul class="footer__menu">
                                    <li class="footer__menu-item">
                                        <a v-on:click="$router.push({ name: 'shop' })" class="footer__menu-link">{{Menu_Online_Shop}}</a>
                                    </li>
                                    <li class="footer__menu-item">
                                        <a v-on:click="$router.push({ name: 'blog' })" class="footer__menu-link">{{Menu_Blog}}</a>
                                    </li>
                                    <li class="footer__menu-item">
                                        <a v-on:click="$router.push({ name: 'contact' })" class="footer__menu-link">{{Menu_Contact}}</a>
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

    import Loading from 'vue-loading-overlay';

    import 'vue-loading-overlay/dist/vue-loading.css';
    import { mapActions, mapGetters } from 'vuex'
    export default ({
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
            productsDetails: [],
            name: '',
            preProduct: [],
            isExist: false,
            Product_No_Details: "",
            Product_Add_Cart: "",
            Product_Back: "",
            Product_Share: "",
            Product_Added: "",
            Product_Accompany: "",
            Shop_No_Products: "",
            variant:[],
            Product_Variant_Info_Msg:"",
            RelatedProducts:[],
            Error_Product_List:"",
            SelectedLang: "_EN",
        }),
        components: {
            Loading
        },
        created() {
            this.getJsonData();
            window.scrollTo(0, 0);
            if (!localStorage.getItem("koozmetikToken")) {
                this.CheckUserToken();
            }
            else {
                this.name = this.$route.params.id;
                if (this.name) {
                    this.GetProductDetails(this.name);
                }
            }
        },
        watch: {
            '$route': function (from, to) {			
               this.name = this.$route.params.id;			
				if (this.name) {
                    this.GetProductDetails(this.name);
                }
            }
        },
        methods: {
            ...mapActions("auth", {
                createNewUser: "createNewUser",
            }),
            ...mapActions('app', {
                getNewsList: "getNewsList",
                getProducts: "getProducts",
                getRelatedProductCategory: "getRelatedProductCategory",
                getStaticFiles: "getStaticFiles"
            }),
            CheckUserToken: function () {
                if (!localStorage.getItem("koozmetikToken")) {
                    const data = new FormData();
                    data.append("username", "");
                    data.append("password", "");
                    data.append("grant_type", "password");
                    data.append("client_id", globalStore.ClientId);
                    data.append("client_secret", globalStore.ClientSecret);
                    this.createNewUser(data).then((response) => {
                        if (response.access_token) {
                            localStorage.setItem("koozmetikToken", response.access_token);
                            this.name = this.$route.params.id;
                            if (this.name) {
                                this.GetProductDetails(self.name);
                            }
                            this.CheckUserCart();
                        }
                    }).catch(function (error) {
                        console.log("Post Error : " + error);
                    });
                }
            },
            AddProduct: function (ProductDetails) {            
                if(this.variant.pk){
                    if (ProductDetails) {
                        var tempProQTY = 1;
                        const toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        toast({
                            type: 'success',
                            title: this.Product_Added
                        });

                        var listProducts = [];

                        var price = this.variant.price_override ? this.variant.price_override : ProductDetails.price;
                        
                        var Product = {
                            ProImg: ProductDetails.image_url,
                            ProQTY: tempProQTY,
                            ProTitle: ProductDetails.name,
                            ProShortname: ProductDetails.short_name,
                            ProPrice:price * tempProQTY,
                            ProUnitPrice: price,
                            ProSlug: ProductDetails.slug,
                            ProId: ProductDetails.url,
                            Provariant :this.variant

                        }
                        if (sessionStorage.getItem("carts")) {
                            listProducts = JSON.parse(sessionStorage.getItem("carts"));

                            for (var i = 0; i < listProducts.length; i++) {
                                if (listProducts[i].Provariant.pk == Product["Provariant"].pk) {
                                    tempProQTY = Number(listProducts[i].ProQTY) + 1
                                    listProducts[i].ProQTY = tempProQTY
                                    listProducts[i].ProPrice = Product["ProPrice"] * tempProQTY
                                    this.isExist = true;
                                }
                            }
                            if (!this.isExist) {
                                listProducts.push(Product);
                            }
                            sessionStorage.setItem("carts", JSON.stringify(listProducts));
                            this.$bus.$emit('eventNames', 'text passed through event bus')
                        }
                        else {
                            listProducts.push(Product);
                            sessionStorage.setItem("carts", JSON.stringify(listProducts));
                            this.$bus.$emit('eventNames', 'text passed through event bus')
                        }
                    }
                }else{
                    const toast = this.$swal.mixin({
                        toast: true,
                        position: 'top-center',
                        showConfirmButton: false,
                        timer: 4000
                    });
                    toast({
                        type: 'info',
                        title:  this.Product_Variant_Info_Msg
                    })
                }
                var vars= this.variant;
                this.isExist = false;
            },
            GetProductDetails: function (Proname) {
                var params = Proname + "/" + globalStore.LangDomain;
                this.getProducts(params).then(result => {
                    if (result) {
                        this.productsDetails = result;
                        this.GetRelatedProductBasedonCatagory(this.productsDetails.category.url)
                    } else {
                        const toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        toast({
                            type: 'error',
                            title: this.Product_No_Details
                        });
                    }
                }).catch(error => {
                    const toast = this.$swal.mixin({
                        toast: true,
                        position: 'top-center',
                        showConfirmButton: false,
                        timer: 4000
                    });
                    toast({
                        type: 'error',
                        title: 'error.status ' + error.status
                    });
                    console.error(error);
                });
            },
            GetRelatedProductBasedonCatagory: function (catagoryURL) {
                var params = catagoryURL+ globalStore.LangDomain;
                this.getRelatedProductCategory(params).then(result => {
                    if (result.products.length >0) {
                        this.RelatedProducts = result.products;
                    } else {
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
                }).catch(error => {
                    const toast = this.$swal.mixin({
                        toast: true,
                        position: 'top-center',
                        showConfirmButton: false,
                        timer: 4000
                    });
                    toast({
                        type: 'error',
                        title: 'error.status ' + error
                    })
                });
            },
            ProductDetails: function (pro) {
                if (pro.url) {
                    var proid = pro.url.match(/\d+/g).map(Number);
                    var pronam = pro.slug
                    this.$router.push({ path: `/product/${proid}/${pronam}` })
                }
            },
            getJsonData: function () {
                var json_language_file = "";
                var type = globalStore.LangDomain.slice(-2);
                type = type == "co" ? "en" : type;
                json_language_file = "/static/js/language_file/" + type + "_.json";
                this.SelectedLang = "_" + type.toUpperCase();
                this.getStaticFiles(json_language_file).then((json) => {
                    if (json) {
                        this.Menu_About = json.Menu_About;
                        this.Menu_Ingredients = json.Menu_Ingredients;
                        this.Menu_News = json.Menu_News;
                        this.Menu_Online_Shop = json.Menu_Online_Shop;
                        this.Menu_Blog = json.Menu_Blog;
                        this.Menu_Contact = json.Menu_Contact;
                        this.Product_No_Details = json.Product_No_Details;
                        this.Product_Add_Cart = json.Product_Add_Cart;
                        this.Product_Back = json.Product_Back;
                        this.Product_Share = json.Product_Share;
                        this.Product_Added = json.Product_Added;
                        this.Product_Accompany = json.Product_Accompany;
                        this.Shop_No_Products = json.Shop_No_Products;
                        this.Product_Variant_Info_Msg=json.Product_Variant_Info_Msg;
                        this.Error_Product_List=json.Error_Product_List;
                    }
                });
            }
        },
        mounted() {
            let b = document.createElement('script')

            b.setAttribute('src', '/static/js/app-dist.js')

            document.head.appendChild(b)
            let a = document.createElement('script')

            a.setAttribute('src', '/static/js/app-dist.js')

            document.head.appendChild(a)
        }
    })
</script>