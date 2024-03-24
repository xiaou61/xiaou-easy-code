package com.xiaou.controller;

import cn.hutool.captcha.CaptchaUtil;
import cn.hutool.captcha.LineCaptcha;
import cn.hutool.captcha.generator.RandomGenerator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
@Slf4j
@RestController
public class  CodeController {

    private LineCaptcha lineCaptcha;
    @RequestMapping("/checkCode")
    public void checkCode(HttpServletResponse response, HttpSession session) {
        // 随机生成 4 位验证码
        RandomGenerator randomGenerator = new RandomGenerator("0123456789", 4);
        // 定义图片的显示大小
        lineCaptcha = CaptchaUtil.createLineCaptcha(100, 30);
        //定义类型
        response.setContentType("image/jpeg");
        //不要进行缓存
        response.setHeader("Pragma", "No-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expire", 0);
        try {
            // 调用父类的 setGenerator() 方法，设置验证码的类型
            lineCaptcha.setGenerator(randomGenerator);
            // 输出到页面
            lineCaptcha.write(response.getOutputStream());
            // 打印日志
            log.info("生成的验证码:{}", lineCaptcha.getCode());
            // 将验证码存入 session 中
            session.setAttribute("code", lineCaptcha.getCode());
            // 关闭流
            response.getOutputStream().close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @RequestMapping
    public void check(String CheckCode,HttpSession session){
        if (!CheckCode.equalsIgnoreCase((String) session.getAttribute("code"))) {
            //验证码错误
            log.info("验证码错误");
        }
    }
}

