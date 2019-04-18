<template id="blogarticle">
    <div> 
    <main  v-if="!blogDetails.title">
         <div class="row" >          
                     <div class="col-xs-3">                                            
                        </div>             
                        <div class="col-xs-7">
                                   <h3 class="u-color-gray">{{Error_Blog_Details}}</h3>                                              
                        </div>
                         <div class="col-xs-2">                                                
                        </div>
                    </div>
        </main>
          <main>
            <section class="article" >
                <div class="article__social"  v-if="blogDetails.title">
                    <p class="paragraph--big u-font-accent u-weight-bld article__social-label">{{Product_Share}}</p>
                    <ul class="socialbar socialbar--vertical-sm article__social-bar">
                        <li class="socialbar__item"><a href="javascript:" class="socialbar__link"><i class="fab fa-facebook-f socialbar__icon"></i></a></li>
                        <li class="socialbar__item"><a href="javascript:" class="socialbar__link"><i class="fab fa-instagram socialbar__icon"></i></a></li>
                        <li class="socialbar__item"><a href="javascript:" class="socialbar__link"><i class="fab fa-pinterest-p socialbar__icon"></i></a></li>
                    </ul>
                </div>
                <div class="container"  v-if="blogDetails.title">
                    <div class="row">
                        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                            <div class="article__header">
                                <p class="u-margin-bottom-small-2">{{blogDetails.published_on  | moment("YYYY-MM-DD") }}</p>
                                <h1 class="heading-secondary">{{blogDetails.title}}</h1>
                                <div class="divider u-margin-vertical-med"></div>
                                <p>Autor: {{authorName}}</p>
                            </div>
                            <div class="article__content">
                                <div class="article__content-group" v-if="!blogDetails.main_picture">
                                    <img src="/static/img/products.jpg" alt="Products">
                                </div>
                                 <div class="article__content-group" v-else>
                                    <img :src="blogDetails.main_picture.image" alt="Products">
                                </div>
                                <div class="article__content-group">
                                    <h3 class="u-line-small"  v-html="blogDetails.excerpt"></h3>
                                </div>
                                <div class="article__content-group">
                                   <span v-html="blogDetails.content"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid article__slider">
                    <div class="row">
                        <div class="col-xs-12 u-padding-horizontal-null">
                            <div class="slider slider--full">
                                <div class="slider__list slider__list--full">
                                    <img src="/static/img/slide-article-1.jpg" alt="Slide" class="slider__slide">
                                    <img src="/static/img/slide-article-2.jpg" alt="Slide" class="slider__slide">
                                    <img src="/static/img/slide-article-3.jpg" alt="Slide" class="slider__slide">
                                    <img src="/static/img/slide-article-2.jpg" alt="Slide" class="slider__slide">
                                </div>
                                <div class="slider__arrows"></div>
                                <div class="slider__controls">
                                    <div class="slider__dots"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                            <div class="article__content">
                                <div class="article__content-group">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid u-padding-horizontal-null"  v-if="blogDetails.title">
                    <blockquote class="row quote">
                        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                            <div class="article__content article__content--big article__content--inner">
                                <img src="/static/img/logo-shape.svg" alt="Logo" class="quote__logo">
                                <h3 class="heading-tertiary--small quote__text">Sed ut enim auctor, elementum urna id, euismod diam. Cras mattis turpis dolor, ac luctus tellus lacinia non. Sed a diam dui. Integer consequat tellus massa, ac faucibus magna eleifend egestas. Mauris ultricies luctus massa ut tristique.</h3>
                                <div class="divider u-margin-vertical-med"></div>
                                <p>Ime Prezime</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div class="container"  v-if="blogDetails.title">
                    <div class="row">
                        <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                            <div class="article__content">
                                <div class="article__content-group">
                                    <p></p>
                                </div>
                            </div>
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

    import Slick from 'vue-slick';

    export default ({
    
        components: { Slick ,  Loading},    
        data:()=> ({      
             Menu_About: "",
            Menu_Ingredients: "",
            Menu_News: "news",
            Menu_Online_Shop: "",
            Menu_Blog: "",
            Menu_Contact: "",      
                slickOptions: {
                   dots: true, 
                     infinite: true,
                 speed: 300,
                     slidesToShow: 2,
                },     
                  blogDetails: [],
                  authorName:'', 
                  Error_Blog_Details:'',  
                 Product_Share: "",   
        }) ,
        created() {   
             window.scrollTo(0, 0);      
            this.GetjsoneData()
           
            this.name = this.$route.params.id;
            if (this.name) {
                this.GetBlogDetails(this.name);
            }
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
            GetBlogDetails: function (Proname) {              
                axios.get("posts/" + Proname + globalStore.LangDomain,{
        headers: { 'Authorization': 'Bearer '+localStorage.getItem("koozmetikToken") }
      }).then(result => {
                    if (result.data) {
                        this.blogDetails = result.data;
                        this.authorName= result.data.author.username;                         
                    } else {
                        const toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        toast({
                            type: 'error',
                            title: this.Error_Blog_Details
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
             GetjsoneData: function () {             
                var json_language_file="";                
                 if(globalStore.LangDomain=="?site__domain=koozmetik.fr"){
                    var json_language_file="/static/js/language_file/fr_.json"
                }
                else if(globalStore.LangDomain=="?site__domain=koozmetik.co"){
                     var json_language_file="/static/js/language_file/en_.json"
                }
                else if(globalStore.LangDomain=="?site__domain=koozmetik.rs"){
                     var json_language_file="/static/js/language_file/rs_.json"
                }
                else if(globalStore.LangDomain=="?site__domain=koozmetik.me"){
                    var json_language_file="/static/js/language_file/me_.json"
                }else{
                      var json_language_file="/static/js/language_file/en_.json"
                }

                $.getJSON(json_language_file, function (json) {
                    if(json){        
                         this.Menu_About = json.Menu_About;
                        this.Menu_Ingredients = json.Menu_Ingredients;
                        this.Menu_News = json.Menu_News;
                        this.Menu_Online_Shop = json.Menu_Online_Shop;
                        this.Menu_Blog = json.Menu_Blog;
                        this.Menu_Contact = json.Menu_Contact;     
                        this.Product_Share = json.Product_Share;              
                    this.Error_Blog_Details=json.Error_Blog_Details;
                    }
                }.bind(this));
            } ,
            GotoHome:function(){
                 this.$router.push({ path: `/Home` });
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
    });
    
    </script>