<script>    
    export default {

        data() {
            return {
                searchTextIndex: 0,
                currentTaglineIndex: 0,
                categories: [],
                cartCount: 1,
                tagline: [
                    'Jewelry For Your Perfect Style',
                    'Buy Artificial Jewellery Online',
                    'Buy Bracelet Online For Girls',
                    'Buy Rings For Women Online In India',
                    'Buy Chain Online In India',
                    'Best Jewellery Store in Delhi-NCR',
                    'Buy Temple Jewellery Online',
                    'Buy Kundan Jewellery Online',
                    'Best Store to Buy Artificial Jewellery',
                    'Shop American Diamond Earrings',
                    'Shop Gold Look-Alike Earrings',
                    'Top Jewellery Store in Ghaziabad',
                    'Real Pearl Jewellery Online',
                    "Trending Shop to Buy Office Jewellery",
                    'Best Deals on Immitation Jewellery'
                ]
            }
        },

        computed: {
            searchText: {
                get(){
                    return this.categories[this.searchTextIndex].name;
                },
                set() {
                    this.searchTextIndex = 0;
                }
            },      
        },

        mounted() {
            setInterval( this.changePlaceholder, 2000);
        },

        methods: {
            changePlaceholder() {
                this.searchTextIndex = (this.searchTextIndex + 1) % this.categories.length;
                this.currentTaglineIndex = (this.currentTaglineIndex + 1) % this.tagline.length;
            },
        },

    }
</script>

<template>
    <!-- Home Head Section -->
    <section class="home-head-section">
        <div class="overlay"></div>

        <div class="home-head-content">

            <!-- Company Logo and name -->
            <div class="company-logo-name">
                <v-img src="resources/assets/images/default/logo.png" alt="Company Logo" class="mr-50" />
            </div>
 
            <!-- User Intro and search section -->
            <div class="user-search-section">

                <!-- User -->
                <div class="user-intro font-weight-bolder">
                    <span>Hello user 👋</span>
                </div>

                <!-- Search -->
                <div class="search-section mt-50">
                    <b-row>
                        <b-col cols="12" md="8">
                            <h1 class="taglines"> {{ tagline[currentTaglineIndex] }} </h1>

                            <div class="search-login">
                                <v-text-field
                                    density="compact"
                                    variant="solo"
                                    label="Search templates"
                                    append-inner-icon="mdi-magnify"
                                    single-line
                                    hide-details
                                    @click:append-inner="onClick"
                                ></v-text-field>

                                <!-- Login -->
                                <v-btn variant="gradient-primary d-mobile-none ml-1">
                                    Login/SignUp
                                </v-btn>

                                <!-- Cart -->
                                <v-btn variant="gradient-primary d-mobile-none ml-1 cart-icon">
                                    <v-icon icon="fa:fas shopping-cart" class="mr-1"></v-icon>
                                    <span class="text-primary cart-count cart-count-js"> 0 </span>
                                    <span> Cart </span> 
                                </v-btn>
                            </div>

                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
    </section>
</template>