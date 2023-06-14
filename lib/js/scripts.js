let page_url      = window.location.pathname;
let page_filename = page_url.substring(page_url.lastIndexOf('/')+1);

// HEADER
class Header extends HTMLElement {
    connectedCallback() {
        // var bg_class     = (page_filename=='maxshop.html') ? 'bg-red' : ( (page_filename=='maxpro.html')? 'bg-grey' : 'bg-white' );
        // var filter_class = (page_filename=='maxshop.html') ? 'filter-white' : 'filter-red';
        var bg_class     = "";
        var filter_class = "";
        switch(page_filename)
        {
            case 'maxshop.html':
                bg_class = 'bg-red';
                filter_class = 'filter-white';
                break;
            case 'buy-fberlite.html':
                bg_class = 'bg-red';
                filter_class = 'filter-white';
                break;
            case 'buy-xilenium.html':
                bg_class = 'bg-red';
                filter_class = 'filter-white';
                break;
            case 'buy-cellplus.html':
                bg_class = 'bg-red';
                filter_class = 'filter-white';
                break;
            case 'contact.html':
                bg_class = 'bg-red';
                filter_class = 'filter-white';
                break;
            case 'privacy.html':
                bg_class = 'bg-red';
                filter_class = 'filter-white';
                break;
            case 'tnc.html':
                bg_class = 'bg-red';
                filter_class = 'filter-white';
                break;
            case 'video.html':
                bg_class = 'bg-red';
                filter_class = 'filter-white';
                break;
            case 'maxpro.html':
                bg_class = 'bg-grey';
                filter_class = 'filter-white';
                break;
            case 'video.html':
                bg_class = 'bg-grey';
                filter_class = 'filter-white';
                break;
            default:
                bg_class = 'bg-white';
                filter_class = 'filter-red';
        }

        this.innerHTML = `
            <nav class="section-header navbar navbar-expand-lg p-0 ${bg_class}" style="height: 56px;">
                <div class="container-1440 d-flex jc-between ai-center fw-wrap px-lg-5 h-full">
                <a class="navbar-brand navbar-brand p-0 pb-1" href="index.html"><img class="${filter_class}" src="assets/svg/logo.svg" height="24"></a>
                    <a class="navbar-brand maxlivin-icon d-flex p-0" href="index.html"><img class="${filter_class}" src="assets/svg/logo_red.svg" height="12px" width="auto"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon2 ${filter_class}"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul class="navbar-nav me-auto mb-lg-0 text-right">
                            
                            <!-- <li class="nav-item dropdown" style="color: #ED2C3B;top: -5px;">
                                <a class="nav-link dropdown-toggle" style="color: #ED2C3B;position: relative; top: 5px;" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                         EN <img src="assets/svg/globe.svg" class="img-fluid"/> 
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">EN </a></li>
                                    <li><a class="dropdown-item" href="#">CN  </a></li>
                                </ul>
                            </li> -->
                            <li class="nav-item">
                                <a class="nav-link" href="login.html" target="_blank">
                                    <img src="assets/svg/person.svg" class="img-fluid ${filter_class}"/>
                                </a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <img src="assets/svg/cart.svg" class="img-fluid"/>
                                </a>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </nav>
        `
    }
}

// FOOTER
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="section-footer py-3 bg-white">
                <div class="container-1440">
                    <div class="row font-hkGrotesk px-lg-5">
                        <div class="col-12 col-md-3 mb-3 mb-sm-0 accordion px-lg-5" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <a class="accordion-button collapsed fs-12 px-0" data-bs-toggle="collapse" data-bs-target="#collapseqabout" aria-expanded="true" aria-controls="collapseOne" style="padding-left: 0px;padding-bottom: 0;">
                                        <p>ABOUT MAXLIVIN’</p>
                                    </a>
                                </h2>
                                <div id="collapseqabout" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul class="nav flex-column fs-min-12 fs-16 text-left">
                                            <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-muted">Home</a></li>
                                            <li class="nav-item mb-2"><a href="maxshop.html" class="nav-link p-0 text-muted">Max Shop</a></li>
                                            <li class="nav-item mb-2"><a href="maxpro.html" class="nav-link p-0 text-muted">Max Pro</a></li>
                                            <li class="nav-item mb-2"><a href="video.html" class="nav-link p-0 text-muted">Videos</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-3 mb-3 mb-sm-0 accordion px-lg-5" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <a class="accordion-button collapsed fs-12 px-0" data-bs-toggle="collapse" data-bs-target="#collapseqabout1" aria-expanded="true" aria-controls="collapseOne" style="padding-left: 0px;padding-bottom: 0;">
                                        <p>CUSTOMER SERVICES</p>
                                    </a>
                                </h2>
                                <div id="collapseqabout1" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul class="nav flex-column fs-min-12 fs-16 text-left">
                                            <li class="nav-item mb-2"><a href="contact.html" class="nav-link p-0 text-muted">Contact Us</a></li>
                                            <li class="nav-item mb-2"><a href="privacy.html" class="nav-link p-0 text-muted">Our Policies</a></li>
                                            <li class="nav-item mb-2"><a href="tnc.html" class="nav-link p-0 text-muted">Terms & Conditions</a></li>
                                            <!-- <li class="nav-item mb-2"><a href="" class="nav-link p-0 text-muted">FAQs</a></li> -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-3 mb-3 mb-sm-0 accordion px-lg-5" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <a class="accordion-button collapsed fs-12 px-0" data-bs-toggle="collapse" data-bs-target="#collapseqabout2" aria-expanded="true" aria-controls="collapseOne" style="padding-left: 0px;padding-bottom: 0;">
                                        <p>MY ACCOUNT</p>
                                    </a>
                                </h2>
                                <div id="collapseqabout2" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul class="nav flex-column fs-min-12 fs-16 text-left">
                                            <li class="nav-item mb-2"><a href="login.html" class="nav-link p-0 text-muted">Log In</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-3 mb-3 mb-sm-0 accordion px-lg-5" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <a class="accordion-button collapsed fs-12 px-0" data-bs-toggle="collapse" data-bs-target="#collapseqabout3" aria-expanded="true" aria-controls="collapseOne" style="padding-left: 0px;padding-bottom: 0;">
                                        <p>SOCIAL MEDIA</p>
                                    </a>
                                </h2>
                                <div id="collapseqabout3" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body text-left d-flex">
                                        <a href="https://www.facebook.com/maxlivinofficial" target="_blank" class="me-2">
                                            <div class="svg-fb"></div>
                                        </a>
                                        <a href="https://www.instagram.com/maxlivin_official" target="_blank" class="me-2">
                                            <div class="svg-ig"></div>
                                        </a>
                                        <a href="https://www.tiktok.com/tag/maxlivin" target="_blank" class="me-2">
                                            <div class="svg-tiktok"></div>
                                        </a>
                                        <a href="https://www.xiaohongshu.com/page/topics/61de45c189f15d00017fd748" target="_blank">
                                            <div class="svg-xhs"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <hr/>
                    <div class="row ai-center px-lg-5">
                        <div class="col-4 px-lg-5 text-left">
                            <a href="index.html" class="lh-1"><img src="assets/svg/logo_red.svg" alt="MAXLIVIN’ Logo" class="maxlivin-logo"></a>
                        </div>
                        <div class="col-8 px-lg-5 text-end fs-12 font-hkGrotesk">
                            <p>Maxlivin Bio Sdn Bhd (1419814-A) © 2022</p>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}

class Popular extends HTMLElement {
    connectedCallback() {
        var display_ctrl     = (page_filename=='index.html') ? 'd-block' : 'd-none';
        
        this.innerHTML = `
            <!-- Popular Big Screen Section -->
            <section class="section-popular">
                <div class="container-1440 px-sm-5 pb-5">
                    <div class="row py-5 my-lg-3">
                        <div class="col-sm-3"><!--/.col--></div>
                        <div class="col-12 col-sm-6">
                            <img  class="section-title-svg relative" src="assets/svg/popular-text.svg" width="100%">
                        </div>
                        <div class="col-sm-3"><!--/.col--></div>
                    </div><!--/.row-->
                    <div class="owl-carousel owl-theme carousel-popular">
                        <a href="buy-fberlite.html" class="item">
                            <div class="bg-white rounded-10">
                                <div class="unit-image-wrapper">
                                    <figure class="prod-img m-0 relative"><!--/.Updated on 20210909-->
                                        <picture class="overlay-top">
                                            <source type="image/webp" 
                                                media="(min-width: 1200px)"
                                                srcset="assets/img/banner/fberlite-1080x1080-min.webp">
                                            <source type="image/jpeg" 
                                                media="(min-width: 1200px)"
                                                srcset="assets/img/banner/fberlite-1080x1080-min.jpg">
                                            <source type="image/webp" 
                                                media="(min-width: 768px)"
                                                srcset="assets/img/banner/fberlite-540x540-min.webp">
                                            <source type="image/jpeg" 
                                                media="(min-width: 768px)"
                                                srcset="assets/img/banner/fberlite-540x540-min.jpg">
                                            <source type="image/webp" 
                                                srcset="assets/img/banner/fberlite-540x540-min.webp">
                                            <img src="" data-src="assets/img/banner/fberlite-540x540-min.jpg" width="100%"  height="auto" class="lazyload" alt="精准教学创业营销"><!--/.Updated on 20211108-->
                                        </picture>
                                    </figure><!--/.figure-->
                                </div>
                                <div class="unit-content-wrapper text-left">
                                    <h3 class="fs-30 font-hkGrotesk">Fiber Lite</h3>
                                    <p class="fs-18 font-JiaLiXi">15 独立包装 | 15g​</p>
                                    <br>
                                    <p class="font-hkGrotesk fs-20"><b class="fs-26">RM180.00</b> / 25 BV</p>
                                </div>
                            </div>
                        </a>
                        <a href="buy-cellplus.html" class="item">
                            <div class="bg-white rounded-10">
                                <div class="unit-image-wrapper">
                                    <figure class="prod-img m-0 relative"><!--/.Updated on 20210909-->
                                        <picture class="overlay-top">
                                            <source type="image/webp" 
                                                media="(min-width: 1200px)"
                                                srcset="assets/img/banner/cellplus-1080x1080-min.webp">
                                            <source type="image/jpeg" 
                                                media="(min-width: 1200px)"
                                                srcset="assets/img/banner/cellplus-1080x1080-min.jpg">
                                            <source type="image/webp" 
                                                media="(min-width: 768px)"
                                                srcset="assets/img/banner/cellplus-540x540-min.webp">
                                            <source type="image/jpeg" 
                                                media="(min-width: 768px)"
                                                srcset="assets/img/banner/cellplus-540x540-min.jpg">
                                            <source type="image/webp" 
                                                srcset="assets/img/banner/cellplus-540x540-min.webp">
                                            <img src="" data-src="assets/img/banner/cellplus-540x540-min.jpg" width="100%"  height="auto" class="lazyload" alt="精准教学创业营销"><!--/.Updated on 20211108-->
                                        </picture>
                                    </figure><!--/.figure-->
                                </div>
                                <div class="unit-content-wrapper text-left">
                                    <h3 class="fs-30 font-hkGrotesk">Cell Plus</h3>
                                    <p class="fs-18 font-JiaLiXi">20 独立包装 | 6g</p>
                                    <br>
                                    <p class="font-hkGrotesk fs-20"><b class="fs-26">RM360.00</b> / 50 BV</p>
                                </div>
                            </div>
                        </a>
                        <a href="buy-xilenium.html" class="item">
                            <div class="bg-white rounded-10">
                                <div class="unit-image-wrapper">
                                    <figure class="prod-img m-0 relative"><!--/.Updated on 20210909-->
                                        <picture class="overlay-top">
                                            <source type="image/webp" 
                                                media="(min-width: 1200px)"
                                                srcset="assets/img/banner/xilenium-1080x1080-min.webp">
                                            <source type="image/jpeg" 
                                                media="(min-width: 1200px)"
                                                srcset="assets/img/banner/xilenium-1080x1080-min.jpg">
                                            <source type="image/webp" 
                                                media="(min-width: 768px)"
                                                srcset="assets/img/banner/xilenium-540x540-min.webp">
                                            <source type="image/jpeg" 
                                                media="(min-width: 768px)"
                                                srcset="assets/img/banner/xilenium-540x540-min.jpg">
                                            <source type="image/webp" 
                                                srcset="assets/img/banner/xilenium-540x540-min.webp">
                                            <img src="" data-src="assets/img/banner/xilenium-540x540-min.jpg" width="100%"  height="auto" class="lazyload" alt="精准教学创业营销"><!--/.Updated on 20211108-->
                                        </picture>
                                    </figure><!--/.figure-->
                                </div>
                                <div class="unit-content-wrapper text-left">
                                    <h3 class="fs-30 font-hkGrotesk">Xi Lenium</h3>
                                    <p class="fs-18 font-JiaLiXi">20 独立包装 | 4g</p>
                                    <br>
                                    <p class="font-hkGrotesk fs-20"><b class="fs-26">RM360.00</b> / 50 BV</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <a href="maxshop.html" class="font-hkGrotesk fs-min-12 fs-18 d-flex ai-center jc-end mt-3 ${display_ctrl}">
                        <span class="font-regular me-0 me-sm-2 text-red">查看全部</span>
                        <div class="svg-right-red mx-3"></div>
                    </a>
                </div>
            </section>
            <!-- Section End -->
        `;
    
    }
}

class Script extends HTMLElement {
    connectedCallback() {
        $('.owl-carousel.carousel-popular').owlCarousel({
            loop: true,
            margin: 15,
            dots: false,
            nav: false,
            singleItem: true,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 60
                },
                375: {
                    items: 1,
                    stagePadding: 80
                },
                768: {
                    items: 3
                }
            }
        });
    }
}



function updatePageInfo()
{
    switch( page_filename )
    {
        case 'index.html':
            document.title = 'Home | Maxlivin';
            break;
        case 'maxshop.html':
            document.title = 'Max Shop | Maxlivin';
            break;
        case 'maxpro.html':
            document.title = 'Max Pro | Maxlivin';
            break;
        case 'buy-fberlite.html':
            document.title = 'F’ber Lite | Maxlivin';
            break;
        case 'buy-cellplus.html':
            document.title = 'Cell Plus | Maxlivin';
            break;
        case 'buy-xilenium.html':
            document.title = 'Xi Lenium | Maxlivin';
            break;
        case 'contact.html':
            document.title = 'Contact Us | Maxlivin';
            break;
        case 'privacy.html':
            document.title = 'Our Policies | Maxlivin';
            break;
        case 'tnc.html':
            document.title = 'Terms and Conditions | Maxlivin';
            break;
        case 'video.html':
            document.title = 'Video | Maxlivin';
            break;
        case 'highlight.html':
            document.title = 'Highlight | Maxlivin';
            break;
    }

    // var link_list = document.getElementsByTagName('link');
    // for( i=0; i<link_list.length;++i )
    // {
    //     if( link_list[i].rel == 'stylesheet' )
    //         link_list[i].href += '?v=' + Date.now();
    // }
}

function includeHTML() 
{
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

updatePageInfo();
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
customElements.define('footer-js', Script);
customElements.define('inc-popular', Popular);

function change_image(image){
    var container = document.getElementById("main-image");
    container.src = image.src;
}
document.addEventListener("DOMContentLoaded", function(event) {});
