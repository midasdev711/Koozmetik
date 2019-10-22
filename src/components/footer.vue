<template>
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