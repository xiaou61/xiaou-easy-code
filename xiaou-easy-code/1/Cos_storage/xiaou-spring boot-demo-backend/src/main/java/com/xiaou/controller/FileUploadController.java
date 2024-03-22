package com.xiaou.controller;

import com.xiaou.util.AliOssUtil;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class FileUploadController {

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            // 调用阿里云 OSS 工具类上传文件
            String objectName = file.getOriginalFilename();
            String url = AliOssUtil.uploadFile(objectName, file.getInputStream());
            return "File uploaded successfully! URL: " + url;
        } catch (Exception e) {
            e.printStackTrace();
            return "Error uploading file: " + e.getMessage();
        }
    }
}
