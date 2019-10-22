<template id="ingredients">
    <div>
       <main>
            <section class="hero hero--bg hero--quote" style="background-image: url('static/img/banner-cloudy-mountains.jpg');">
                <div class="container hero__actions-wrapper">
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
                <div class="banner banner--inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="hero__card card card--quote">
                                    <img src="static/img/logo-shape.svg" alt="Logo shape" class="card__logo u-margin-bottom-big">
                                    <h2>{{Ingredients_Main_Title}}</h2>
                                    <div class="divider u-margin-top-med-2 u-margin-bottom-med"></div>
                                    <p>Zoraida Rivera Morales</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="container section-ingredients">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="col-xs-12 section-ingredients__intro">
                            <h3 class="u-line-small">{{Ingredients_Main}}</h3>
                        </div>
                        <div class="col-xs-12 section-ingredients__table">
                            <div class="section-ingredients__table-header">
                                <h3>{{Ingredients_Yes_to}}</h3>
                            </div>
                            <div class="section-ingredients__table-content">
                                <div class="section-ingredients__group">
                                    <p class="u-italic">{{Ingredients_Yes_to_Data}}</p>
                                </div>
                                <div class="section-ingredients__group">
                                    <p class="u-weight-bld">{{Ingredients_Yes_to_Essential_oils}}</p>
                                    <p>{{Ingredients_Yes_to_Essential_oils_Data}}</p>
                                </div>
                                <div class="section-ingredients__group">
                                    <p class="u-weight-bld">{{Ingredients_Yes_to_natural_extracts}}</p>
                                    <p>{{Ingredients_Yes_to_natural_extracts_Data}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 section-ingredients__table">
                            <div class="section-ingredients__table-header">
                                <h3>{{Ingredients_No_to}}</h3>
                            </div>
                            <div class="section-ingredients__table-content">
                                <div class="section-ingredients__group">
                                    <p class="u-italic">{{Ingredients_No_to_Data}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="banner banner--top" style="background-image: url('static/img/banner-plants.jpg');">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="card banner__card banner__card--top">
                                <div class="card__side card__side--bg" style="background-image: url('static/img/plant.jpg')"></div>
                                <div class="card__side card__side--copy">
                                    <img src="static/img/logo-shape.svg" alt="Logo shape" class="card__logo u-margin-bottom-small">
                                    <p class="paragraph--med u-italic u-margin-bottom-med">{{Ingredients_Image_Data}}</p>
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
    export default {
        data: () => ({
             Menu_About: "",
            Menu_Ingredients: "",
            Menu_News: "news",
            Menu_Online_Shop: "",
            Menu_Blog: "",
            Menu_Contact: "",
            Ingredients_Main_Title:"",
            Ingredients_Main:"" ,
            Ingredients_Yes_to:"",
            Ingredients_Yes_to_Data:"",
            Ingredients_Yes_to_Essential_oils:"",
            Ingredients_Yes_to_Essential_oils_Data:"",
            Ingredients_Yes_to_natural_extracts:"",
            Ingredients_Yes_to_natural_extracts_Data:"",
            Ingredients_No_to:"",
            Ingredients_No_to_Data:"",
            Ingredients_Image_Data:"",
            RedirectFR: '',
            RedirectEN: '',
            RedirectME: '',
            RedirectRS: '',
            SelectedLang:"_EN",

        }),
        created() {
            window.scrollTo(0, 0);
            this.RedirectFR = globalStore.RedirectFR;
            this.RedirectEN = globalStore.RedirectEN;
            this.RedirectME = globalStore.RedirectME;
            this.RedirectRS = globalStore.RedirectRS;
            this.GetjsoneData();
        },
        methods: {
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
                        this.Menu_Online_Shop = json.Menu_Online_Shop;
                        this.Menu_Blog = json.Menu_Blog;
                        this.Menu_Contact = json.Menu_Contact;                 
                        this.Ingredients_Main_Title = json.Ingredients_Main_Title;
                        this.Ingredients_Main = json.Ingredients_Main,
                        this.Ingredients_Yes_to = json.Ingredients_Yes_to,
                        this.Ingredients_Yes_to_Data = json.Ingredients_Yes_to_Data,
                        this.Ingredients_Yes_to_Essential_oils = json.Ingredients_Yes_to_Essential_oils,
                        this.Ingredients_Yes_to_Essential_oils_Data=json.Ingredients_Yes_to_Essential_oils_Data,
                        this.Ingredients_Yes_to_natural_extracts=json.Ingredients_Yes_to_natural_extracts,
                        this.Ingredients_Yes_to_natural_extracts_Data=json.Ingredients_Yes_to_natural_extracts_Data,
                        this.Ingredients_No_to=json.Ingredients_No_to,
                        this.Ingredients_No_to_Data=json.Ingredients_No_to_Data,
                        this.Ingredients_Image_Data=json.Ingredients_Image_Data
                    }                        
                }.bind(this));
            }
        }
         
    }
</script>