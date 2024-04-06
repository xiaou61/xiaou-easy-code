package com.xiaou.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.xiaou.entity.Users;
import com.xiaou.service.UsersService;
import com.xiaou.mapper.UsersMapper;
import org.springframework.stereotype.Service;

/**
* @author Lenovo
* @description 针对表【users】的数据库操作Service实现
* @createDate 2024-04-06 11:03:08
*/
@Service
public class UsersServiceImpl extends ServiceImpl<UsersMapper, Users>
    implements UsersService {

}




