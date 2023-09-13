<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
        smooth: true,
        direction : 'horizontal',
        smartphone: {
            smooth: true,
        },
        tablet: {
            smooth: true,
        },
    }"
  >
    <div
      class="locomotive-style  smooth-scroll page-about"
      data-scroll-container
    >
        <div data-scroll-section>
            <div data-scroll data-scroll-direction="horizontal" id="hor-about">
                <div id="about1" class="item-hor about1">
                    <div class="image-welcome">
                        <h2>À propos de moi</h2>
                        <div class="image-container">
                            <img
                                src="~/assets/images/perso/home.png"
                                alt="sata fenitriniaina feni"
                            />
                        </div>
                        <h1>ANDRIANARISATA <br> FENITRINIAINA</h1>
                    </div>
                    <div class="about-content1">
                       <div class="contact">
                            <div class="item-about-me">
                                <a href="#">
                                    <fa :icon="['fas', 'phone']" />
                                    <span>+261 32 51 090 13</span>
                                </a>
                            </div>
                            <div class="item-about-me">
                                <a href="#">
                                    <fa :icon="['fas', 'phone']" />
                                    <span>+261 32 51 090 13</span>
                                </a>
                            </div>
                            <div class="item-about-me">
                                <a href="#">
                                    <fa :icon="['fas', 'phone']" />
                                    <span>+261 32 51 090 13</span>
                                </a>
                            </div>
                            <div class="item-about-me">
                                <a href="#">
                                    <fa :icon="['fas', 'phone']" />
                                    <span>+261 32 51 090 13</span>
                                </a>
                            </div>
                       </div>
                       <div class="experience">
                           <div class="item-exp">
                                <div class="title-xp">
                                    <div class="number-xp">
                                        4+
                                    </div>
                                    <div class="name-xp">
                                        Lorem, <br>ipsum dolor.
                                    </div>
                                </div>
                                <div class="description-xp">
                                    <p>
                                        Lorem,Eligendi, enim.
                                        Est iste sit facere, blanditiis repellendus
                                    </p>
                                </div>
                           </div>
                           <div class="item-exp">
                                <div class="title-xp">
                                    <div class="number-xp">
                                        4+
                                    </div>
                                    <div class="name-xp">
                                        Lorem, <br> ipsum dolor.
                                    </div>
                                </div>
                                <div class="description-xp">
                                    <p>
                                        nsectetur adipisicing elit. Eligendi, enim.
                                        Est iste sit repellendus
                                    </p>
                                </div>
                           </div>
                           <div class="item-exp">
                                <div class="title-xp">
                                    <div class="number-xp">
                                        4+
                                    </div>
                                    <div class="name-xp">
                                        Lorem,<br> ipsum dolor.
                                    </div>
                                </div>
                                <div class="description-xp">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                           </div>
                           <div class="item-exp">
                                <div class="title-xp">
                                    <div class="number-xp">
                                        4+
                                    </div>
                                    <div class="name-xp">
                                        Lorem,<br> ipsum dolor.
                                    </div>
                                </div>
                                <div class="description-xp">
                                   <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing eliis repellendus
                                    sit amet consectetur adipisicing eliis repellendus
                                   </p>
                                </div>
                           </div>
                       </div>
                    </div>
                    <div class="direction-scroll">
                        <button class="left button-direction button spin circle opacity-0">
                            <fa :icon="['fas', 'arrow-left']" />
                        </button>
                        <button @click="moveToNext" class="left button-direction button spin circle">
                            <fa :icon="['fas', 'arrow-right']" />
                        </button>
                    </div>
                </div>
                <div id="about2" class="item-hor about2">
                    <div class="my-exp">
                      <h2 class="to-uppercase">Mes expériences <br> professionelles</h2>
                      <div class="bref-exp">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore fugit a.
                           Accusamus, mollitia autem! Molestias similique debitis modi officiis?
                        </p>
                      </div>
                      <div class="donwload">
                          <a href="#" class="btn btn-download element-button">
                            <fa :icon="['fas', 'download']" />
                            <span>Télecharger mon CV</span>
                          </a>
                      </div>
                    </div>
                    <div class="list-exp">
                        <div class="item-list-exp">
                          <div class="date-role">
                            <span class="date">-2018-present</span>
                            <span class="role">Role dans le...</span>
                          </div>
                          <div class="exp-content">
                            LEAD DEVELOP...
                          </div>
                        </div>
                        <div class="item-list-exp">
                          <div class="date-role">
                            <span class="date">-2018-present</span>
                            <span class="role">Role dans le...</span>
                          </div>
                          <div class="exp-content">
                            LEAD DEVELOP...
                          </div>
                        </div>
                        <div class="item-list-exp">
                          <div class="date-role">
                            <span class="date">-2018-present</span>
                            <span class="role">Role dans le...</span>
                          </div>
                          <div class="exp-content">
                            LEAD DEVELOP...
                          </div>
                        </div>
                    </div>
                    <div class="direction-scroll">
                        <button @click="moveToPrev" class="left button-direction button spin circle">
                            <fa :icon="['fas', 'arrow-left']" />
                        </button>
                        <button class="left button-direction button spin circle opacity-0">
                            <fa :icon="['fas', 'arrow-right']" />
                        </button>
                    </div>
                    <div class="footer-container-item" :class="{'showed' : isShowedFooter}">
                        <button
                          @mouseover="isClignoter = false"
                          @mouseleave="isClignoter = true"
                          @click="isShowedFooter = !isShowedFooter"
                          class="toggle-footer button spin circle bordered-white" :class="{'clignoter' : isClignoter}">
                          <fa :icon="['fas', isShowedFooter ? 'chevron-down' : 'chevron-up']" />
                        </button>
                      <Footer/>
                    </div>
                </div>
              </div>
        </div>
    </div>
  </LocomotiveScroll>
</template>
<script>
    export default {
        props : ['locomotive'],
        data(){
            return {
                isClignoter : true,
                isShowedFooter : false
            }
        },
        methods: {
          moveToNext(){
            this.$nuxt.$emit('scrollToAbout2', "#about2")
          },
          moveToPrev(){
            this.$nuxt.$emit('scrollToAbout1', "#about1")
          }
        },
    }
</script>
