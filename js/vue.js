new Vue({
    el: "#app",
    data: {
      currentImage: "images/FULL2.png",
      afterImage: "images/FULL.png",

    },
    methods: {
      changeImage() {
        this.currentImage = this.afterImage;
      },
      resetImage() {
        this.currentImage = "images/FULL2.png";
    },
  }});
