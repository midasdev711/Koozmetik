<template>
    <div id="blogList">
              <section class="section-read">
            <div class="container" v-if="blogList.length > 0">
                <div class="row">
                    <article class="col-xs-12 col-sm-6 section-read__column" v-for="item in blogList" style="min-height: 800px">
                        <a class="featured-article" v-on:click="BlogDetails(item)">
                        <template v-if="!item.main_picture"> <img src="/static/img/noimage.png" alt="Featured article image" class="u-margin-bottom-med-2"></template>
                           <template v-else> <img :src="item.main_picture.image" alt="Featured article image" class="u-margin-bottom-med-2"></template>
                            <p class="paragraph--big u-font-accent u-margin-bottom-small-2">{{item.title}}</p>
                            <span v-html="item.content"></span>
                        </a>

                    </article>

                </div>
            </div>
           <div class="row" v-else>          
                     <div class="col-xs-3">
                                            
                        </div>             
                        <div class="col-xs-7">
                                   <h3 class="u-color-gray">{{Error_Blog_List}}</h3>
                                              
                        </div>
                         <div class="col-xs-2">
                                                
                        </div>
                    </div>
        </section>
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

    import axios from 'axios';

    export default {
        name: 'blogList',
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
            blogList: [],
            Error_Blog_List:'',


        }),        
        created() {
             window.scrollTo(0, 0);
             this.GetjsoneData()
        },
        mounted() {
             
            this.GetBlogDetailsList();
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
            GetBlogDetailsList() {             
                axios.get("posts/" + globalStore.LangDomain ,{
        headers: { 'Authorization': 'Bearer '+localStorage.getItem("koozmetikToken") }
      }).then(result => {                  
                    if(result.data && result.data.results.length >0){
                        this.blogList = result.data.results;                   
                    }
                    else{                         
                         const toast = this.$swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        toast({
                            type: 'error',
                            title: this.Error_Blog_List
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
                            title:error.status
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
                        this.Error_Blog_List=json.Error_Blog_List;
                       
                    }
                }.bind(this));
            },
            BlogDetails: function (blog) {
              
                if(blog.url){
               var blogid =blog.url.match(/\d+/g).map(Number);
                this.$router.push({ path: `/blogarticle/${blogid}` });                   
                }
                
            },            
            GotoHome: function () {
                this.$router.push({ path: `/Home` });
            }
        }

    }
</script>