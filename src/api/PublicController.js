import svgCaptcha from "svg-captcha";
class PublicController {
  constructor() {}
  async getCaptcha(ctx) {
    const newCaptcha = svgCaptcha.create({
      color: true,
      size: 6,
      noise: 2,
      ignoreChars: "0o1il",
      width: 150,
      height: 50,
    }); // 使用svg实例
    ctx.body = {
      code: 200,
      data: newCaptcha.data,
    };
  }
}

export default new PublicController();
