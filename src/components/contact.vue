<template id="contact">

<div>  
 
  <main>
        <section class="hero hero--bg hero--content" style="background-image: url('static/img/banner-headquarters.jpg');">
            <div class="banner banner--inner banner--content">
                <div class="banner__content">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 u-padding-horizontal-null">
                                <h1 class="col-xs-12 u-margin-bottom-med-2 u-hyphens">{{Contact_Headquarters}}</h1>
                                <div class="col-xs-12 col-sm-4 banner__content-column">
                                    <div class="mark u-align-block-center u-margin-bottom-smallest"><img src="static/img/i-pin.svg" alt="Location icon" class="mark__icon"></div>
                                    <h3>{{Contact_Address}}</h3>
                                    <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                                    <p>Skender Begova 27<br>11 000 Belgrade, Serbia<br><span class="u-color-gray"><a href="javascript:">{{Contact_Map}}</a></span></p>
                                </div>
                                <div class="col-xs-12 col-sm-4 banner__content-column">
                                    <div class="mark u-align-block-center u-margin-bottom-smallest"><img src="static/img/i-phone.svg" alt="Location icon" class="mark__icon"></div>
                                    <h3>{{Contact_Phone}}</h3>
                                    <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                                    <p><a href="tel:+ 381 11 409 66 51">+ 381 11 409 66 51</a></p>
                                    <p><a href="tel:+ 381 60 033 22 33">+ 381 60 033 22 33</a></p>
                                    <p><a href="tel:+ 381 60 033 22 44">+ 381 60 033 22 44</a></p>
                                    <p><a href="tel:+ 381 60 033 22 66">+ 381 60 033 22 66</a></p>
                                </div>
                                <div class="col-xs-12 col-sm-4 banner__content-column">
                                    <div class="mark u-align-block-center u-margin-bottom-smallest"><img src="static/img/i-email.svg" alt="Location icon" class="mark__icon mark__icon--wide"></div>
                                    <h3>{{Contact_email}}</h3>
                                    <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                                    <p><a href="mailto:kontakt@koozmetik.rs">kontakt@koozmetik.rs</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid hero__actions-wrapper hero__actions-wrapper--full">
                <div class="hero__actions">
                    <ul class="socialbar hero__social">
                        <li class="socialbar__item"><a href="javascript:" class="socialbar__link"><i class="fab fa-facebook-f socialbar__icon"></i></a></li>
                        <li class="socialbar__item"><a href="javascript:" class="socialbar__link"><i class="fab fa-instagram socialbar__icon"></i></a></li>
                        <li class="socialbar__item"><a href="javascript:" class="socialbar__link"><i class="fab fa-pinterest-p socialbar__icon"></i></a></li>
                    </ul>
                    <p class="paragraph--big hero__scroll u-font-accent">{{Home_scroll_more}}</p>
                     <div class="language-switch hero__language-switch">
                            <a :href="RedirectRS" target="_blank" class="language-switch__label"  :class="{'language-switch__label--active': SelectedLang == '_RS'}">sr</a>
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

        <section class="section-locations">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 section-locations__group">
                        <div class="col-xs-12 col-sm-4 section-locations__item">
                            <h3 class="heading-tertiary--small">ušće shopping center</h3>
                            <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                            <p>Bulevar Mihajla Pupina 4<br><a href="tel:+ 381 11 285 45 05">+ 381 11 285 45 05</a><br><span class="u-color-gray"><a href="javascript:">{{Contact_Map}}</a></span></p>
                        </div>
                        <div class="col-xs-12 col-sm-4 section-locations__item">
                            <h3 class="heading-tertiary--small">delta city</h3>
                            <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                            <p>Jurija Gagarina 16<br><a href="tel:+ 381 11 220 36 24">+ 381 11 220 36 24</a><br><span class="u-color-gray"><a href="javascript:">{{Contact_Map}}</a></span></p>
                        </div>
                        <div class="col-xs-12 col-sm-4 section-locations__item">
                            <h3 class="heading-tertiary--small">makadam</h3>
                            <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                            <p>Kosančićev Venac 20<br><a href="tel:+ 381 11 263 02 72">+ 381 11 263 02 72</a><br><span class="u-color-gray"><a href="javascript:">{{Contact_Map}}</a></span></p>
                        </div>
                    </div>
                    <div class="col-xs-12 section-locations__group">
                        <div class="col-xs-12 col-sm-4 section-locations__item">
                            <h3 class="heading-tertiary--small">supermarket</h3>
                            <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                            <p>Uzun Mirkova 8<br><a href="tel:+ 381 11 291 09 42">+ 381 11 291 09 42</a><br><span class="u-color-gray"><a href="javascript:">{{Contact_Map}}</a></span></p>
                        </div>
                        <div class="col-xs-12 col-sm-4 section-locations__item">
                            <h3 class="heading-tertiary--small">mikser house</h3>
                            <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                            <p>Karađordjeva 46<br><a href="tel:+ 381 11 262 60 68">+ 381 11 262 60 68</a><br><span class="u-color-gray"><a href="javascript:">{{Contact_Map}}</a></span></p>
                        </div>
                        <div class="col-xs-12 col-sm-4 section-locations__item">
                            <h3 class="heading-tertiary--small">srbotrade apoteka</h3>
                            <div class="divider divider--left u-align-block-center u-margin-vertical-small"></div>
                            <p>Sinđelićeva 3<br><a href="tel:+ 381 11 243 79 89">+ 381 11 243 79 89</a><br><span class="u-color-gray"><a href="javascript:">{{Contact_Map}}</a></span></p>
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
 import { globalStore } from '../main.js'

 export default {
     data: () => ({  
            Menu_About: "",
            Menu_Ingredients: "",
            Menu_News: "news",
            Menu_Online_Shop: "",
            Menu_Blog: "",
            Menu_Contact: "",
                        Contact_Headquarters:"",
                        Contact_Address:"",
                        Contact_Phone:"",
                        Contact_email:"",
                        Home_scroll_more:"",
                        Contact_Map:"",
                        RedirectFR: '',
            RedirectEN: '',
            RedirectME: '',
            RedirectRS: '',
             SelectedLang:"_EN",

        }),
     created() {
          window.scrollTo(0, 0);
              this.RedirectFR = globalStore.RedirectFR,
                this.RedirectEN = globalStore.RedirectEN,
                this.RedirectME = globalStore.RedirectME,
                this.RedirectRS = globalStore.RedirectRS,
            this.GetjsoneData();
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
        GotoHome:function(){
             this.$router.push({ path: `/Home` });
        },
         GetjsoneData: function () {              
                var json_language_file=""
               var json_language_file=""
                 if(globalStore.LangDomain=="?site__domain=koozmetik.fr"){
                    var json_language_file="static/js/language_file/fr_.json"
                    this.SelectedLang="_FR";
                }
                else if(globalStore.LangDomain=="?site__domain=koozmetik.co"){
                     var json_language_file="static/js/language_file/en_.json"
                      this.SelectedLang="_EN";
                }
                else if(globalStore.LangDomain=="?site__domain=koozmetik.rs"){
                     var json_language_file="static/js/language_file/rs_.json"
                      this.SelectedLang="_RS";
                }
                else if(globalStore.LangDomain=="?site__domain=koozmetik.me"){
                    var json_language_file="static/js/language_file/me_.json"
                     this.SelectedLang="_ME";
                }else{
                      var json_language_file="static/js/language_file/en_.json"
                       this.SelectedLang="_EN";
                }
               
                $.getJSON(json_language_file, function (json) {                   
                    if(json){     
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
                        this.Contact_Map=json.Contact_Map;                     
                    }                        
                }.bind(this));
            }
    }
 }
</script>