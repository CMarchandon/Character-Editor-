function readFile(image64) {
    if (!this.files || !this.files[0]) return;
    const FR = new FileReader();
    FR.addEventListener("load", function(evt) {

        let index = evt.target.result.indexOf(',');
        image64 = evt.target.result.substring(index + 1);
    });
    FR.readAsDataURL(this.files[0]);
}