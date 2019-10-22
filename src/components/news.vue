<template>
    <div id="blogList">
        <section class="section-read">
            <div class="container" v-if="blogList.length > 0">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 section-read__column">
                        <div class="u-align-inline-center u-margin-bottom-small-2 u-padding-top-med">
                            <h3 class="heading--tertiary">{{Home_news}}</h3>
                        </div>
                        <div class="news-list">
                            <a href="javascript:" class="news-list__item" v-for="item in blogList">
                                <div class="news-list__item-header">
                                    <p>{{item.published_on | moment("YYYY-MM-DD")}}</p>
                                </div>
                                <div class="news-list__item-content">
                                    <p class="paragraph--big u-font-accent u-margin-bottom-small">{{item.title}}</p>
                                    <p>With its great history for almost thirty years, the European Academy of Paediatric
                                        Dentistry (EAPD) has...</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-else>          
                <div class="col-xs-3"></div>             
                <div class="col-xs-7">
                    <h3 class="u-color-gray">{{Error_News_List}}</h3>
                </div>
                <div class="col-xs-2"></div>
            </div>
        </section>
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

    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'blogList',
        data: () => ({
            Menu_About: "",
            Menu_Ingredients: "",
            Menu_News: "news",
            Home_news: "",
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
            Error_News_List:'',


        }),        
        created() {
             window.scrollTo(0, 0);
             this.GetjsoneData()
        },
        mounted() {
             
            this.GetBlogDetailsList();
        },
         
        methods: {
            ...mapActions('app', {
                getNewsList: "getNewsList"
            }),
            GetBlogDetailsList() {             
                this.getNewsList(globalStore.LangDomain).then(result => {                  
                    if(result && result.results.length >0){
                        this.blogList = result.results;                   
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
                            title: this.Error_News_List
                        })
                    }
                }).catch( error => {                     
                    const toast = this.$swal.mixin({
                        toast: true,
                        position: 'top-center',
                        showConfirmButton: false,
                        timer: 4000
                    });
                    toast({
                        type: 'error',
                        title:error.status
                    });
                });
            },
             GetjsoneData: function () {             
                var json_language_file = "";
                var type = globalStore.LangDomain.slice(-2);
                type = type == "co" ? "en" : type;
                json_language_file = "static/js/language_file/" + type + "_.json";
                this.SelectedLang = "_" + type.toUpperCase();
                $.getJSON(json_language_file, function (json) {
                    if(json){ 
                        this.Menu_About = json.Menu_About;
                        this.Menu_Ingredients = json.Menu_Ingredients;
                        this.Menu_News = json.Menu_News;
                        this.Home_news = json.Home_news;
                        this.Menu_Online_Shop = json.Menu_Online_Shop;
                        this.Menu_Blog = json.Menu_Blog;
                        this.Menu_Contact = json.Menu_Contact;                         
                        this.Error_News_List=json.Error_News_List;
                       
                    }
                });
            },
            BlogDetails: function (blog) {
                if(blog.url){
                    var blogid =blog.url.match(/\d+/g).map(Number);
                    this.$router.push({ path: `/blogarticle/${blogid}` });                   
                }
            }
        }
    }
</script>