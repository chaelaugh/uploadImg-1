module.exports = {

    detectVerticalSquash(img) {
      let data;
      let ih = img.naturalHeight;
      let canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = ih;
      let ctx = canvas.getContext('2d');
      if (!ctx) {
        return 1;
      }
      ctx.drawImage(img, 0, 0);
      try {
        // Prevent cross origin error
        data = ctx.getImageData(0, 0, 1, ih).data;
      } catch (err) {
        return 1;
      }
      // search image edge pixel position in case it is squashed vertically.
      let sy = 0;
      let ey = ih;
      let py = ih;
      while (py > sy) {
        let alpha = data[(py - 1) * 4 + 3];
        if (alpha === 0) {
          ey = py;
        } else {
          sy = py;
        }
        py = (ey + sy) >> 1;
      }
      let ratio = (py / ih);
      return (ratio === 0) ? 1 : ratio;
    },
    compressImage(src, maxWidth, cb) {
      let img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {

        let w = img.width;
        let h = img.height;
        if (img.width > img.height) {
          w = Math.min(maxWidth, img.width);
          h = img.height * (w / img.width);
        }
        else {
          h = Math.min(maxWidth, img.height);
          w = img.width * (h / img.height);
        }
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');

        if (ctx) {
          let drawImage = ctx.drawImage;
          ctx.drawImage = (_img: HTMLImageElement, sx, sy, sw, sh: number, dx, dy, dw, dh: number) => {
            let vertSquashRatio = 1;
            // Detect if img param is indeed image
            if (!!_img && _img.nodeName === 'IMG') {
              vertSquashRatio = this.detectVerticalSquash(_img);
              if (typeof sw === 'undefined') {
                sw = _img.naturalWidth;
              }
              if (typeof sh === 'undefined') {
                sh = _img.naturalHeight;
              }
            }
            // Execute several cases (Firefox does not handle undefined as no param)
            // by call (apply is bad performance)
            if (arguments.length === 9) {
              drawImage.call(ctx, _img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
            } else if (typeof sw !== 'undefined') {
              drawImage.call(ctx, _img, sx, sy, sw, sh / vertSquashRatio);
            } else {
              drawImage.call(ctx, _img, sx, sy);
            }
          };

          canvas.width = w;
          canvas.height = h;
          ctx.drawImage(img, 0, 0, w, h);
          // get image type
          let type = src.substring(src.indexOf(':') + 1, src.indexOf(';'));
          let base64Url = canvas.toDataURL(type);
          cb(base64Url);
        }
      };
      img.src = src;
    },

    convertInputImgae(files, maxWidth, cb){
      var file;
      // 获取目前上传的文件
      file = files[0];// 文件大小校验的动作
      // if(file.size > 1024 * 1024 * 2) {
      //     console.log('图片大小不能超过 2MB!');
      //     return false;
      // }
      // 获取 window 的 URL 工具
      var URL = window.URL || window.webkitURL;
      // 通过 file 生成目标 url
      var imgURL = URL.createObjectURL(file);
      //用attr将img的src属性改成获得的url
      // $("#img-change").attr("src",imgURL);
      // 使用下面这句可以在内存中释放对此 url 的伺服，跑了之后那个 URL 就无效了
      // URL.revokeObjectURL(imgURL);
      // console.log('imgURL', imgURL);

      let img = new Image();
      img.src = imgURL;
      img.onload = () =>{

        let w = img.width;
        let h = img.height;
        if (img.width > img.height) {
          w = Math.min(maxWidth, img.width);
          h = img.height * (w / img.width);
        }
        else {
          h = Math.min(maxWidth, img.height);
          w = img.width * (h / img.height);
        }

        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        if(ctx){

          let drawImage = ctx.drawImage;
          ctx.drawImage = (_img: HTMLImageElement, sx, sy, sw, sh: number, dx, dy, dw, dh: number) => {
            let vertSquashRatio = 1;
            // Detect if img param is indeed image
            if (!!_img && _img.nodeName === 'IMG') {
              vertSquashRatio = this.detectVerticalSquash(_img);
              if (typeof sw === 'undefined') {
                sw = _img.naturalWidth;
              }
              if (typeof sh === 'undefined') {
                sh = _img.naturalHeight;
              }
            }
            // Execute several cases (Firefox does not handle undefined as no param)
            // by call (apply is bad performance)
            if (arguments.length === 9) {
              drawImage.call(ctx, _img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
            } else if (typeof sw !== 'undefined') {
              drawImage.call(ctx, _img, sx, sy, sw, sh / vertSquashRatio);
            } else {
              drawImage.call(ctx, _img, sx, sy);
            }
          };

          canvas.width = w;
          canvas.height = h;
          ctx.drawImage(img, 0, 0, w, h);
          let ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
          let dataURL = canvas.toDataURL("image/"+ext);
          // console.log('dataURL',dataURL);
          cb(dataURL,imgURL);
        }
      }
    }

    // convertInputImgae(src, maxWidth, cb){
    //   let img = new Image();
    //   img.src = src;
    //   img.onload = () =>{
    //
    //     let w = Math.min(maxWidth, img.width);
    //     let h = img.height * (w / img.width);
    //
    //     console.log('w',w);
    //     console.log('h',h);
    //
    //     let canvas = document.createElement("canvas");
    //     canvas.width = w;
    //     canvas.height = h;
    //     let ctx = canvas.getContext("2d");
    //     if(ctx){
    //       ctx.drawImage(img, 0, 0, img.width, img.height);
    //       let ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
    //       let dataURL = canvas.toDataURL("image/"+ext);
    //       console.log('dataURL',dataURL);
    //       cb(dataURL);
    //     }
    //   }
    // }
}
