package com.xiaou.mapper;

import com.xiaou.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRedisMapper extends CrudRepository<User,Integer> {
}
