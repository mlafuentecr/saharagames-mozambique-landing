/************************/
/* START     Sahara games           */
/************************/

// Function to generate contact and social media section
function generateContactSection() {
	return `
		<div class="flex w-full justify-center social-container">
			<ul class="text-primary flex max-w-xl flex-col justify-center gap-2 overflow-x-auto rounded-xl p-2 text-2xl text-white">
				<li class="flex items-center gap-x-2 support">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-primary h-4 w-4 shrink-0"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path></svg><a class="text-active hover:text-white active:text-active" href="mailto:support@saharagames.com?subject = Feedback">support@saharagames.com</a>
				</li>
				<li class="flex items-center gap-x-2 contact" style="margin: 0.5rem 0;">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 shrink-0 text-primary-500"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"></path></svg>
					<div class="flex flex-col contact ">
						<div class="text-primary hover:text-primary active:text-primary flex gap-x-2 text-sm">
							<span class="flex flex-wrap gap-1"><span >Contact us: 0783500000,</span><span> 0733200211,</span><span>0103434404</span></span>
						</div>
					</div>
				</li>
				<li class="flex items-center gap-y-1 gap-x-2 px-2 py-1">
					<div class="flex w-full justify-around gap-4 icons">
						<!-- Facebook -->
						<a href="https://facebook.com/KeSaharagames" target="_blank" rel="noreferrer noopener">
						  <svg viewBox="0 0 64 64" width="30" height="30">
							<circle cx="32" cy="32" r="31" fill="#3b5998"></circle>
							<path fill="white" d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6h2.8v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2
							  c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"></path>
						  </svg>
						</a>
					  
					<!-- Instagram -->
					<a href="https://instagram.com/saharagameske" target="_blank" rel="noreferrer noopener">
						<svg viewBox="0 0 64 64" width="30" height="30">
						<circle cx="32" cy="32" r="31" fill="#E4405F"></circle>
						<path fill="white" d="M32,14.2c5.8,0,6.5,0,8.8,0.1c2.1,0.1,3.3,0.5,4.1,0.8c1,0.4,1.8,0.9,2.6,1.7
							c0.8,0.8,1.3,1.6,1.7,2.6c0.3,0.8,0.7,2,0.8,4.1c0.1,2.3,0.1,3,0.1,8.8s0,6.5-0.1,8.8
							c-0.1,2.1-0.5,3.3-0.8,4.1c-0.4,1-0.9,1.8-1.7,2.6c-0.8,0.8-1.6,1.3-2.6,1.7
							c-0.8,0.3-2,0.7-4.1,0.8c-2.3,0.1-3,0.1-8.8,0.1s-6.5,0-8.8-0.1c-2.1-0.1-3.3-0.5-4.1-0.8
							c-1-0.4-1.8-0.9-2.6-1.7c-0.8-0.8-1.3-1.6-1.7-2.6c-0.3-0.8-0.7-2-0.8-4.1
							c-0.1-2.3-0.1-3-0.1-8.8s0-6.5,0.1-8.8c0.1-2.1,0.5-3.3,0.8-4.1c0.4-1,0.9-1.8,1.7-2.6
							c0.8-0.8,1.6-1.3,2.6-1.7c0.8-0.3,2-0.7,4.1-0.8C25.5,14.2,26.2,14.2,32,14.2 M32,10.7
							c-5.9,0-6.6,0-8.9,0.1c-2.3,0.1-3.9,0.5-5.3,1c-1.4,0.5-2.6,1.3-3.8,2.5c-1.2,1.2-2,2.4-2.5,3.8
							c-0.5,1.4-0.9,3-1,5.3c-0.1,2.3-0.1,3-0.1,8.9s0,6.6,0.1,8.9c0.1,2.3,0.5,3.9,1,5.3
							c0.5,1.4,1.3,2.6,2.5,3.8c1.2,1.2,2.4,2,3.8,2.5c1.4,0.5,3,0.9,5.3,1c2.3,0.1,3,0.1,8.9,0.1
							s6.6,0,8.9-0.1c2.3-0.1,3.9-0.5,5.3-1c1.4-0.5,2.6-1.3,3.8-2.5c1.2-1.2,2-2.4,2.5-3.8
							c0.5-1.4,0.9-3,1-5.3c0.1-2.3,0.1-3,0.1-8.9s0-6.6-0.1-8.9c-0.1-2.3-0.5-3.9-1-5.3
							c-0.5-1.4-1.3-2.6-2.5-3.8c-1.2-1.2-2.4-2-3.8-2.5c-1.4-0.5-3-0.9-5.3-1C38.6,10.7,37.9,10.7,32,10.7z
							M32,20.9c-6.1,0-11.1,5-11.1,11.1s5,11.1,11.1,11.1s11.1-5,11.1-11.1S38.1,20.9,32,20.9z M32,39.6
							c-4.2,0-7.6-3.4-7.6-7.6s3.4-7.6,7.6-7.6s7.6,3.4,7.6,7.6S36.2,39.6,32,39.6z M44.4,20.3
							c0,1.4-1.2,2.6-2.6,2.6s-2.6-1.2-2.6-2.6s1.2-2.6,2.6-2.6S44.4,18.9,44.4,20.3z"></path>
						</svg>
					</a>
						<a href="https://twitter.com/saharagamesKE" target="_blank" rel="noreferrer noopener">
						  <svg viewBox="0 0 64 64" width="30" height="30">
							<circle cx="32" cy="32" r="31" fill="#00aced"></circle>
							<path fill="white" d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6
							  c-1.3,0.8-2.7,1.3-4.2,1.6C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6
							  c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3
							  c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1
							  c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1
							  c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1
							  c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7c0-0.3,0-0.6,0-0.8
							  C46,24.5,47.1,23.4,48,22.1z"></path>
						  </svg>
						</a>
					  </div>
					  
				</li>
			</ul>
		</div>
	`;
}
function start() {
	const readmoreBtn = document.querySelectorAll('.readmore');
	const imgBtn = document.querySelectorAll('.imgpromo');
	if (readmoreBtn || imgBtn) {
		//click for read more
		readmoreBtn.forEach(btn => {
			btn.addEventListener('click', () => {
				const promoNumber = btn.getAttribute('data-number');
				showPromoOverlay(promoNumber);
			});
		});
		//click for img
		imgBtn.forEach(btn => {
			btn.addEventListener('click', () => {
				const promoNumber = btn.getAttribute('data-number');
				showPromoOverlay(promoNumber);
			});
		});
	}

	// Add contact section to main page if it doesn't exist
	const mainSocialContainer = document.querySelector('.social-container');
	console.log(mainSocialContainer, 'social-container');
	if (mainSocialContainer) {
		mainSocialContainer.innerHTML = generateContactSection();
	}
}

async function loadOverlayContent(promoNumber) {
	try {
		// Load promo-overlay.html file that contains all promos
		const response = await fetch('promo-overlay.html');
		if (!response.ok) {
			throw new Error('Error loading overlay content');
		}
		const content = await response.text();

		// Create temporary element to parse HTML
		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = content;

		// Find div with specific promo ID
		const promoDiv = tempDiv.querySelector(`#promo-${promoNumber}`);
		if (promoDiv) {
			console.log(promoDiv, 'promoDiv');
			return promoDiv.outerHTML;
		} else {
			throw new Error(`Promo ${promoNumber} not found`);
		}
	} catch (error) {
		console.error('Error loading overlay:', error);
		return null;
	}
}

async function showPromoOverlay(promoNumber) {
	const overlay = document.getElementById('promoOverlay');
	if (overlay) {
		console.log('Overlay found, promo number:', promoNumber);
		// Always load new content for each promo
		const content = await loadOverlayContent(promoNumber);
		if (content) {
			overlay.innerHTML = content;

			// Add contact section if it doesn't exist
			const promoBody = overlay.querySelector('.promo-overlay-body-full');
			if (promoBody && !promoBody.querySelector('.social-container')) {
				promoBody.insertAdjacentHTML('beforeend', generateContactSection());
			}

			// Add event listener to close button after loading content
			const backButton = overlay.querySelector('.back-button');
			if (backButton) {
				backButton.addEventListener('click', closePromoOverlay);
			}
		} else {
			overlay.innerHTML = `<div class="promo-overlay-content-full"><div class="promo-overlay-header-full bg-[#03342b]"><button class="back-button" onclick="closePromoOverlay()">×</button><h2>Error</h2></div><div class="promo-overlay-body-full"><p>Error loading promo ${promoNumber || 'content'}. Please try again.</p></div></div>`;
		}

		overlay.classList.add('active');
		document.body.style.overflow = 'hidden';
	}
}

/* LANDING */
function closePromoOverlay() {
	const overlay = document.getElementById('promoOverlay');
	const backButton = overlay.querySelector('.back-button');
	if (backButton) {
		backButton.removeEventListener('click', closePromoOverlay);
	}
	if (overlay) {
		overlay.classList.remove('active');
		document.body.style.overflow = 'auto';
	}
}

// Close overlay when clicking outside content
document.addEventListener('click', function (event) {
	const overlay = document.getElementById('promoOverlay');
	const overlayContent = document.querySelector('.promo-overlay-content-full');

	if (overlay && overlay.classList.contains('active')) {
		if (event.target === overlay && overlayContent && !overlayContent.contains(event.target)) {
			closePromoOverlay();
		}
	}
});

// Close overlay with Escape key
document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		closePromoOverlay();
	}
});

document.addEventListener('DOMContentLoaded', start);
