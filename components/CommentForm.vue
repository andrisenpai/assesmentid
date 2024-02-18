<template>
    <div class="blog-comment-section">
        <div class="container">
            <div class="row inner-container">
                <!-- Comment Form -->
                <div class="col-xl-8 col-lg-10 offset-xl-2 offset-lg-1 comment-form">
                    <div class="group-title">
                        <h4 class="title">Leave A Comment</h4>
                    </div>

                    <!--Comment Form-->
                    <form>
                        <div class="row">
                            <div class="col-md-6 form-group" data-aos="fade-right" data-aos-delay="300">
                                <input type="text" name="username" placeholder="Name *" required>
                            </div>

                            <div class="col-md-6 form-group" data-aos="fade-left" data-aos-delay="300">
                                <input type="email" name="email" placeholder="Email *" required>
                            </div>

                            <div class="col-12 form-group" data-aos="fade-up" data-aos-delay="300">
                                <input type="text" name="subject" placeholder="Subject (Optional)" required>
                            </div>

                            <div class="col-12 form-group" data-aos="fade-up" data-aos-delay="300">
                                <textarea class="darma" name="message" placeholder="Message"></textarea>
                            </div>

                            <div class="col-12 form-group">
                                <button class="btn btn-primary btn-hover-dark" type="submit" name="submit-form"><span class="txt">Post Comments</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
