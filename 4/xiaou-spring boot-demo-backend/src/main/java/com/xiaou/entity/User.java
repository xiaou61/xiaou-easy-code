package com.xiaou.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

@Data
@RedisHash
public class User {
    @Id
    private Integer id;
    private String name;
    private Integer age;
    private String phone;
}
