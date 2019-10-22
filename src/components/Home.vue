<template id="Home">
    <div>
        <main>
            <section class="hero hero--content hero--slider slider">
                <div class="hero__slider">
                    <div class="hero__slider-dots"></div>
                    <div class="slider__list slider__list--products">
                        <div class="hero__slide " id="1" style="background-color: #efd3bf;">
                            <img src="static/img/slide-banner-1.png" alt="Product image" class="hero__slide-img">
                            <div class="banner banner--inner banner--content">
                                <div class="banner__content">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 u-padding-horizontal-null">
                                                <h1 class="col-xs-12 u-margin-bottom-med-2 u-hyphens">{{productCategorieName}}</h1>
                                                <a href="javascript:" class="col-xs-12 col-sm-4 banner__content-column hero__slide-product" v-for="item in subproductList.slice(0, 3)">
                                                    <div class="mark u-align-block-center u-margin-bottom-smallest">
                                                        <p class="paragraph--big u-font-accent">{{item.short_name}}</p>
                                                    </div>
                                                    <h3>{{item.name}}</h3>
                                                    <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                                                    <p>
                                                        <span v-html="item.description"></span>
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hero__slide " id="2" style="background-color: #d3ccc2;">
                            <img src="static/img/slide-banner-2.png" alt="Product image" class="hero__slide-img">
                            <div class="banner banner--inner banner--content">
                                <div class="banner__content">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 u-padding-horizontal-null">
                                                <h1 class="col-xs-12 u-margin-bottom-med-2 u-hyphens">{{productCategorieName1}}</h1>
                                                <a href="javascript:" class="col-xs-12 col-sm-4 banner__content-column hero__slide-product" v-for="item in subproductList1.slice(0, 3)">
                                                    <div class="mark u-align-block-center u-margin-bottom-smallest">
                                                        <p class="paragraph--big u-font-accent">{{item.short_name}}</p>
                                                    </div>
                                                    <h3>{{item.name}}</h3>
                                                    <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                                                    <p>
                                                        <span v-html="item.description"></span>
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hero__slide " id="3" style="background-color: #cbd8c0;">
                            <img src="static/img/slide-banner-3.png" alt="Product image" class="hero__slide-img">
                            <div class="banner banner--inner banner--content">
                                <div class="banner__content">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 u-padding-horizontal-null">
                                                <h1 class="col-xs-12 u-margin-bottom-med-2 u-hyphens">{{productCategorieName2}}</h1>
                                                <a href="javascript:" class="col-xs-12 col-sm-4 banner__content-column hero__slide-product" v-for="item in subproductList2.slice(0, 3)">
                                                    <div class="mark u-align-block-center u-margin-bottom-smallest">
                                                        <p class="paragraph--big u-font-accent">{{item.short_name}}</p>
                                                    </div>
                                                    <h3>{{item.name}}</h3>
                                                    <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                                                    <p>
                                                        <span v-html="item.description"></span>
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hero__slide " id="4" style="background-color: #d3ccc2;">
                            <img src="static/img/slide-banner-2.png" alt="Product image" class="hero__slide-img">
                            <div class="banner banner--inner banner--content">
                                <div class="banner__content">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 u-padding-horizontal-null">
                                                <h1 class="col-xs-12 u-margin-bottom-med-2 u-hyphens">{{productCategorieName3}}</h1>
                                                <a href="javascript:" class="col-xs-12 col-sm-4 banner__content-column hero__slide-product" v-for="item in subproductList3.slice(0, 3)">
                                                    <div class="mark u-align-block-center u-margin-bottom-smallest">
                                                        <p class="paragraph--big u-font-accent">{{item.short_name}}</p>
                                                    </div>
                                                    <h3>{{item.name}}</h3>
                                                    <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                                                    <p>
                                                        <span v-html="item.description"></span>
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid hero__actions-wrapper hero__actions-wrapper--full">
                    <div class="hero__actions">
                        <ul class="socialbar hero__social">
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
                        <p class="paragraph--big hero__scroll u-font-accent">{{ Home_scroll_more }}</p>
                        <div class="language-switch hero__language-switch">
                            <a :href="RedirectRS" target="_blank" class="language-switch__label" :class="{'language-switch__label--active': SelectedLang == '_RS'}">sr</a>
                            <span class="language-switch__line"></span>
                            <a :href="RedirectEN" target="_blank" class="language-switch__label " :class="{'language-switch__label--active': SelectedLang == '_EN'}">en</a>
                            <span class="language-switch__line"></span>
                            <a :href="RedirectME" target="_blank" class="language-switch__label " :class="{'language-switch__label--active': SelectedLang == '_ME'}">me</a>
                            <span class="language-switch__line"></span>
                            <a :href="RedirectFR" target="_blank" class="language-switch__label " :class="{'language-switch__label--active': SelectedLang == '_FR'}">fr</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="shop u-padding-vertical-huge" v-if="products.length > 0">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 shop__products">
                            <div class="u-margin-bottom-med-2 u-align-inline-center">
                                <h3 class="heading-tertiary--small">{{Home_our_shop}}</h3>
                            </div>
                            <div class="shop__products-group shop__products-group--single">
                                <ul class="shop__products-group">
                                    <li class="product-box" v-for="item in products.slice(0, 3)">
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
                </div>
            </section>

            <section class="banner banner--bottom" style="background-image: url('static/img/banner-snowy-mountains.jpg');">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="card card--small banner__card">
                                <div class="card__side card__side--bg" style="background-image: url('static/img/snowy-mountains.jpg')"></div>
                                <div class="card__side card__side--copy">
                                    <img src="static/img/logo-shape.svg" alt="Logo shape" class="card__logo u-margin-bottom-med">
                                    <p class="paragraph--med u-italic u-margin-bottom-med">{{Home_about_us_Text}}</p>
                                    <a href="javascript:" class="cta">
                                        <img src="static/img/plus.svg" alt="Plus icon" class="cta__icon">{{Home_about_us}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-read">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 section-read__column">
                            <div class="u-align-inline-center u-margin-bottom-small-2 u-padding-top-med">
                                <h3 class="heading--tertiary">{{Home_news}}</h3>
                            </div>
                            <div class="news-list">
                                <a href="javascript:" class="news-list__item" v-for="item in newsList.slice(0, 3)">
                                    <div class="news-list__item-header">
                                        <p>{{item.published_on | moment("YYYY-MM-DD")}}</p>
                                    </div>
                                    <div class="news-list__item-content">
                                        <p class="paragraph--big u-font-accent u-margin-bottom-small">{{item.title}}</p>
                                          <p v-html="item.excerpt"></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <article class="col-xs-12 col-sm-6 section-read__column">
                            <a href="javascript:" class="featured-article" v-on:click="BlogDetails(blogList.url)">
                                <div class="u-align-inline-center u-margin-bottom-small-2">
                                    <h3 class="heading-tertiary--small">{{Home_blog}}</h3>
                                </div>
                                <img src="static/img/featured-article.jpg" alt="Featured article image" class="u-margin-bottom-med-2">
                                <p class="paragraph--big u-font-accent u-margin-bottom-small-2">{{blogList.title}}</p>
                                <p  v-html="blogList.excerpt"></p>
                            </a>
                        </article>
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
                                        <a v-on:click="$router.push({ name: 'ingredients' })" class="footer__menu-link">news</a>
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
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data: () => ({
            Menu_About: "",
            Menu_Ingredients: "",
            Menu_News: "news",
            Menu_Online_Shop: "",
            Menu_Blog: "",
            Menu_Contact: "",
            Home_scroll_more: "",
            Home_our_shop: "",
            Home_about_us: "",
            Home_news: "",
            Home_blog: "",
            Home_about_us_Text: "",
            Error_Product_Categorie: "",
            isLoading: false,
            fullPage: true,
            canCancel: false,
            useSlot: false,
            loader: 'spinner',
            color: '#007bff',
            bgColor: '#ffffff',
            height: 128,
            width: 128,
            productCategorieList: [],
            subproductList: [],
            subproductList1: [],
            subproductList2: [],
            subproductList3: [],
            subproductList4: [],
            productCategorieName: '',
            productCategorieName1: '',
            productCategorieName2: '',
            productCategorieName3: '',
            productCategorieName4: '',
            RedirectFR: '',
            RedirectEN: '',
            RedirectME: '',
            RedirectRS: '',
            SelectedLang: "_EN",
            products: [],
            blogList: [],
            newsList: [],

        }),

        created() {  
            window.scrollTo(0, 0);          
            this.RedirectFR = globalStore.RedirectFR,
            this.RedirectEN = globalStore.RedirectEN,
            this.RedirectME = globalStore.RedirectME,
            this.RedirectRS = globalStore.RedirectRS,
            this.GetjsoneData();
            if (!localStorage.getItem("koozmetikToken")) {
                this.CheckUserToken();
            } else {
                this.GetProductCategorieList()
                this.GetProdictList();
                this.GetBlogDetailsList();
                this.GetNewsDetailsList();
                this.CheckUserCart();
            }
        },

        methods: {
            ...mapActions("auth", {
                createNewUser: "createNewUser",
            }),
            ...mapActions('app', {
                getCurrentCartData: "getCurrentCartData",
                getProductCategories: "getProductCategories",
                getProducts: "getProducts",
                getBlogDetailsList: "getBlogDetailsList",
                getNewsDetailsList: "getNewsDetailsList",
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
                        localStorage.setItem("koozmetikToken", response.access_token);
                        this.GetProductCategorieList()
                        this.GetProdictList();
                        this.GetBlogDetailsList();
                        this.GetNewsDetailsList();
                        this.CheckUserCart();
                    }).catch(function (error) {
                        console.log("Post Error : " + error);
                    });
                }
            },
            CheckUserCart: function () {
                var params = globalStore.LangDomain;
                this.getCurrentCartData(params).then((result) => {
                    if (result.data) {
                        sessionStorage.setItem("UserCart", result.data.url);
                        if (sessionStorage.getItem("carts") == null && result.data.products.length > 0) {
                            var listProducts = [];
                            for (let i = 0; i < result.data.products.length; i++) {
                                var Product = {
                                    ProImg: result.data.products[i].variant.product.image_url,
                                    ProTitle: result.data.products[i].variant.product.name,
                                    ProShortname: result.data.products[i].variant.product.short_name,
                                    ProUnitPrice: result.data.products[i].variant.price,
                                    ProSlug: result.data.products[i].variant.product.slug,
                                    ProId: result.data.products[i].variant.product.url,
                                    ProQTY: result.data.products[i].quantity,
                                    ProPrice: result.data.products[i].variant.price * result.data.products[i].quantity,
                                    Provariant:{
                                        "pk": result.data.products[i].variant.pk,
                                        "name":  result.data.products[i].variant.name,
                                        "sku": result.data.products[i].variant.sku,
                                        "barcode": result.data.products[i].variant.barcode,
                                        "price_override": result.data.products[i].variant.price_override,
                                        "price": result.data.products[i].variant.price,
                                        "capacity": result.data.products[i].variant.capacity,
                                        "quantity": result.data.products[i].variant.quantity
                                    }
                                }
                                listProducts.push(Product);
                                sessionStorage.setItem("carts", JSON.stringify(listProducts));
                                this.$bus.$emit('eventNames', 'text passed through event bus')
                            }
                        }
                    }
                }).catch(function (error) {
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
                });
            },
            ProductDetails: function (pro) {
                if (pro.url) {
                    var proid = pro.url.match(/\d+/g).map(Number);
                    var pronam = pro.slug
                    this.$router.push({ path: `/product/${proid}/${pronam}` })
                }
            },
            GetProductCategorieList: function () {
                var params = globalStore.LangDomain;
                this.getProductCategories(params).then(result => {
                    if (result && result.results.length > 0) {
                        this.productCategorieList = result.results;
                        if (this.productCategorieList[0] && this.productCategorieList[0].products.length > 0) {
                            this.productCategorieName = this.productCategorieList[0].name;
                            this.subproductList = this.productCategorieList[0].products;

                        }
                        if (this.productCategorieList[1] && this.productCategorieList[1].products.length > 0) {
                            this.productCategorieName1 = this.productCategorieList[1].name;
                            this.subproductList1 = this.productCategorieList[1].products;

                        }
                        if (this.productCategorieList[2] && this.productCategorieList[2].products.length > 0) {
                            this.productCategorieName2 = this.productCategorieList[2].name;
                            this.subproductList2 = this.productCategorieList[2].products;
                        }
                        if (this.productCategorieList[3] && this.productCategorieList[3].products.length > 0) {
                            this.productCategorieName3 = this.productCategorieList[3].name;
                            this.subproductList3 = this.productCategorieList[3].products;
                        }

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
                            title: this.Error_Product_Categorie
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
                        title: 'error.status ' + error.status
                    })
                });
            },
            GetProdictList: function () {
                var params = globalStore.LangDomain;
                this.getProducts(params).then(result => {
                    if (result && result.results.length > 0) {
                        this.products = [];
                        this.products = result.results;
                    }

                }).catch(error => {
                    return error;
                });
            },
            GetBlogDetailsList() {
                this.getBlogDetailsList(globalStore.LangDomain).then(result => {
                    if (result && result.results.length > 0) {
                        this.blogList = result.results[0];
                    }
                }).catch(error => {
                    return error;
                });
            },
            GetNewsDetailsList() {
                this.getNewsDetailsList(globalStore.LangDomainHome).then(result => {
                    if (result && result.results.length > 0) {
                        this.newsList = result.results;
                    }
                }).catch(error => {
                    return error;
                });
            },
            BlogDetails: function (url) {
                if (url) {
                    var blogid = url.match(/\d+/g).map(Number);
                    this.$router.push({ path: `/blogarticle/${blogid}` });
                }
            },
            GetjsoneData: function () {
                var json_language_file = "";
                var type = globalStore.LangDomain.slice(-2);
                type = type == "co" ? "en" : type;
                json_language_file = "static/js/language_file/" + type + "_.json";
                this.SelectedLang = "_" + type.toUpperCase();
                this.getStaticFiles(json_language_file).then((json) => {
                    if (json) {
                        this.Menu_About = json.Menu_About;
                        this.Menu_Ingredients = json.Menu_Ingredients;
                        this.Menu_News = json.Menu_News;
                        this.Menu_Online_Shop = json.Menu_Online_Shop;
                        this.Menu_Blog = json.Menu_Blog;
                        this.Menu_Contact = json.Menu_Contact;
                        this.Home_scroll_more = json.Home_scroll_more;
                        this.Home_our_shop = json.Home_our_shop;
                        this.Home_about_us = json.Home_about_us;
                        this.Home_news = json.Home_news;
                        this.Home_blog = json.Home_blog;
                        this.Home_about_us_Text = json.Home_about_us_Text;
                        this.Error_Product_Categorie = json.Error_Product_Categorie;
                    }
                });
            }

        },
        mounted() {
            let blogslider = document.createElement('script')
            blogslider.setAttribute('src', '/static/js/app-dist.js')
            document.head.appendChild(blogslider)

            let c = document.createElement('script')
            c.setAttribute('src', '/static/js/app-dist.js')
            document.head.appendChild(c)

        }
    }
</script>