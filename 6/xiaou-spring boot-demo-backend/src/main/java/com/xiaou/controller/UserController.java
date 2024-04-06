package com.xiaou.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.xiaou.entity.Users;
import com.xiaou.service.UsersService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Resource
    private UsersService userService;

    /**
     * 创建用户
     *
     * @param user 要创建的用户对象
     * @return ResponseEntity 包含创建的用户对象
     */
    @PostMapping
    public ResponseEntity<Users> createUser(@RequestBody Users user) {
        userService.save(user);
        return ResponseEntity.ok(user);
    }

    /**
     * 获取用户信息
     *
     * @param id 用户ID
     * @return ResponseEntity 包含用户信息的字符串
     */
    @GetMapping("/{id}")
    public ResponseEntity<Users> getUser(@PathVariable("id") Long id) {
        Users user = userService.getById(id);
        return ResponseEntity.ok(user);
    }

    /**
     * 更新用户信息
     *
     * @param id   要更新的用户ID
     * @param user 更新后的用户对象
     * @return ResponseEntity 包含更新后的用户对象
     */
    @PutMapping("/{id}")
    public ResponseEntity<Users> updateUser(@PathVariable("id") Long id, @RequestBody Users user) {
        // 实际情况中，此处应该更新用户信息到数据库中
        user.setId(id);
        userService.updateById(user);
        // 返回更新后的用户对象
        return ResponseEntity.ok(user);
    }

    /**
     * 根据用户名搜索用户
     *
     * @param username 要搜索的用户名
     * @return ResponseEntity 包含搜索结果的字符串
     */
    @GetMapping("/search")
    public ResponseEntity<Users> searchUserByUsername(@RequestParam("username") String username) {
        QueryWrapper<Users> queryWrapper=new QueryWrapper<>();
        queryWrapper.eq("username", username);
        Users user = userService.getOne(queryWrapper);
        return ResponseEntity.ok(user);
    }
}
