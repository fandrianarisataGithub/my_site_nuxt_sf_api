<template>
	<LocomotiveScroll
		ref="scroller"
		:getted-options="{
			smooth: true,

			smartphone: {
				smooth: true,
			},
			tablet: {
				smooth: true,
			},
		}"
	>
		<div class="locomotive-style vertical page-contact">
			<div class="bloc-introduction" data-scroll-section>
						<div class="bloc-title-page" data-scroll>
                <h2>
                    Contactez-moi
                </h2>
								<h1>
									TRAVAILLONS ENSEMBLE
								</h1>
						</div>
						<div data-scroll-section
								class="contact-container"
						>
							<div class="part-contact"

              >
                <div class="adress-container">
                  <div class="title-contact">
                    REACH OUT ME
                  </div>
                  <div class="full-adress">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </div>
                </div>
                <div class="contact-phone">
                  <div class="title-contact">
                    <a href="tel:+261325109013">+261 32 51 090 13</a>
                  </div>
                  <div class="title-contact">
                    <a href="mailto:fandrianarisata2@gmail.com">fandrianarisata2@gmail.com</a>
                  </div>
                  <div class="social-adress">
                      <ul class="list-social">
                        <li>
                          <a href="https://www.facebook.com/fenitriniaina.sata/">FACEBOOK</a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/fenitriniaina-andrianarisata-513552173/">LINKEDIN</a>
                        </li>
                        <li>
                          <a href="tel:+261325109013">WHATSAPP</a>
                        </li>
                      </ul>
                  </div>
                </div>
							</div>
              <div class="part-contact gradient"
              >
                <div class="title-gradient">
                  Avez-vous du projet?
                </div>
                <form action="">
                  <div class="form-line">
                    <div class="form-group">
                      <input type="text" class="form-input" placeholder="Nom">
                    </div>
                    <div class="form-group move-25-left">
                      <input type="email" class="form-input" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-line">
                    <div class="form-group for-textarea">
                      <textarea placeholder="Votre message" name="" id="" cols="30" rows="10" class="form-textarea"></textarea>
                    </div>
                  </div>
                  <div class="form-line">
                    <button class="element-button btn-large">Envoyer</button>
                  </div>
                </form>
							</div>
						</div>
				</div>
				<footer class="locomotive-style-section footer" data-scroll-section>
						<Footer />
				</footer>
		</div>
	</LocomotiveScroll>
</template>
<script>
export default {
	async mounted() {},
};
</script>
