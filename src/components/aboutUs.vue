<template id="AboutUs">
    <div>
        <main>
            <section class="hero hero--bg hero--quote" style="background-image: url('static/img/banner-snowy-mountains.jpg');">
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
                <div class="banner banner--inner">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="hero__card card card--quote">
                                    <img src="static/img/logo-shape.svg" alt="Logo shape" class="card__logo u-margin-bottom-big">
                                    <h2>{{About_Main_Title}}
                                        <br>{{About_Main_Title2}}</h2>
                                    <div class="divider u-margin-top-med-2 u-margin-bottom-med"></div>
                                    <p>{{About_Hippocrates}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="container section-features">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="col-xs-12 col-sm-4 section-features__item feature-box">
                            <img src="static/img/minimalism.svg" alt="Minimalism" class="feature-box__icon">
                            <h3 class="feature-box__title">{{About_Minimalism}}</h3>
                            <div class="divider feature-box__divider"></div>
                            <p>{{About_Minimalism_Text}}</p>
                        </div>
                        <div class="col-xs-12 col-sm-4 section-features__item feature-box">
                            <img src="static/img/holistic.svg" alt="Holistic Approach" class="feature-box__icon">
                            <h3 class="feature-box__title">{{About_Holistic_Approach}}</h3>
                            <div class="divider feature-box__divider"></div>
                            <p>{{About_Holistic_Approach_Text}}</p>
                        </div>
                        <div class="col-xs-12 col-sm-4 section-features__item feature-box">
                            <img src="static/img/essence.svg" alt="Essence" class="feature-box__icon">
                            <h3 class="feature-box__title">{{About_Essence}}</h3>
                            <div class="divider feature-box__divider"></div>
                            <p>{{About_Essence_Text}}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="banner banner--top" style="background-image: url('static/img/banner-waves.jpg');">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="card banner__card banner__card--top">
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

            <section class="section-copy">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                            <p>{{About_Last_Text}}</p>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <p>{{About_Last_Text1}}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <img src="static/img/women.jpg" alt="Women" class="u-responsive-img-full">
                    </div>
                </div>
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
    import { mapActions, mapGetters } from 'vuex'
    import { globalStore } from '../main.js'
    export default {
        data: () => ({
            Menu_About: "",
            Menu_Ingredients: "",
            Menu_News: "news",
            Menu_Online_Shop: "",
            Menu_Blog: "",
            Menu_Contact: "",
            About_Main_Title: "",
            About_Main_Title2: "",
            About_Hippocrates: "",
            About_Minimalism: "",
            About_Minimalism_Text: "",
            About_Holistic_Approach: "",
            About_Holistic_Approach_Text: "",
            About_Essence: "",
            About_Essence_Text: "",
            Home_about_us_Text: "",
            About_Last_Text: "",
            About_Last_Text1: "",
            Home_about_us: "",
            RedirectFR: '',
            RedirectEN: '',
            RedirectME: '',
            RedirectRS: '',
            SelectedLang: "_EN",
        }),
        created() {
            window.scrollTo(0, 0);
            this.RedirectFR = globalStore.RedirectFR;
            this.RedirectEN = globalStore.RedirectEN;
            this.RedirectME = globalStore.RedirectME;
            this.RedirectRS = globalStore.RedirectRS;
            this.GetjsonData();
        },
        methods: {
            ...mapActions('app', {
                getStaticFiles: "getStaticFiles"
            }),
            GetjsonData: function () {
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
                        this.About_Main_Title = json.About_Main_Title;
                        this.About_Main_Title2 = json.About_Main_Title2;
                        this.About_Hippocrates = json.About_Hippocrates;
                        this.About_Minimalism = json.About_Minimalism;
                        this.About_Minimalism_Text = json.About_Minimalism_Text;
                        this.About_Holistic_Approach = json.About_Holistic_Approach;
                        this.About_Holistic_Approach_Text = json.About_Holistic_Approach_Text;
                        this.About_Essence = json.About_Essence;
                        this.About_Essence_Text = json.About_Essence_Text;
                        this.Home_about_us_Text = json.Home_about_us_Text;
                        this.About_Last_Text = json.About_Last_Text;
                        this.About_Last_Text1 = json.About_Last_Text1;
                        this.Home_about_us = json.Home_about_us;
                    }
                });
            }
        }
    }
</script>