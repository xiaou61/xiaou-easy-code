package com.xiaou;


import com.xiaou.entity.User;
import com.xiaou.mapper.UserRedisMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;

import javax.annotation.Resource;
import java.util.*;
import java.util.concurrent.TimeUnit;

@SpringBootTest
public class RedisTest {
    @Resource
    private RedisTemplate redisTemplate;

    // 测试设置字符串类型数据到 Redis
    @Test
    public void testString() {
        String key = "user:token:0001";
        redisTemplate.opsForValue().set(key, UUID.randomUUID().toString(), 30, TimeUnit.MINUTES);
        System.out.println(redisTemplate.opsForValue().get(key));
    }

    // 测试字符串类型数据自增操作
    @Test
    public void testString2() {
        String key = "article:A00001:viewsCount";
        redisTemplate.opsForValue().increment(key);
        System.out.println(redisTemplate.opsForValue().get(key));
    }

    // 测试设置 Map 类型数据到 Redis
    @Test
    public void testString3() {
        Map<String, Object> user = new HashMap<>();
        user.put("id", "0001");
        user.put("name", "张三疯");
        user.put("age", 28);
        user.put("birthday", new Date(2005 - 1900, 10, 03));
        String key = "user:0001";
        redisTemplate.opsForValue().set(key, user);
        System.out.println(redisTemplate.opsForValue().get(key));
    }

    // 测试设置哈希类型数据到 Redis
    @Test
    public void testHash() {
        String key = "user:0001:cart";
        Map<String, Object> shoppingCart = new HashMap<>();
        shoppingCart.put("cartId", "123456789");
        shoppingCart.put("userId", "987654321");
        List<Map<String, Object>> items = List.of(
                Map.of("itemId", "1", "itemName", "手机", "price", 999.99, "quantity", 1),
                Map.of("itemId", "2", "itemName", "笔记本电脑", "price", 1499.99, "quantity",
                        2),
                Map.of("itemId", "3", "itemName", "耳机", "price", 49.99, "quantity", 3)
        );
        shoppingCart.put("items", items);
        shoppingCart.put("totalAmount", 3149.92);
        shoppingCart.put("creationTime", "2046-03-07T10:00:00");
        shoppingCart.put("lastUpdateTime", "2046-03-07T12:30:00");
        shoppingCart.put("status", "未结账");
        redisTemplate.opsForHash().putAll(key, shoppingCart);
        System.out.println(redisTemplate.opsForHash().get(key, "items"));
    }

    // 测试设置集合类型数据到 Redis
    @Test
    public void testSet() {
        String key = "author:0001:fans";
        redisTemplate.opsForSet().add(key, "张三", "李四", "王五");
        System.out.println("粉丝量：" + redisTemplate.opsForSet().size(key));
    }

    // 测试设置有序集合类型数据到 Redis
    @Test
    public void testZset() {
        String key = "user:0001:friends";
        redisTemplate.opsForZSet().add(key, "张三", System.currentTimeMillis());
        redisTemplate.opsForZSet().add(key, "李四", System.currentTimeMillis());
        redisTemplate.opsForZSet().add(key, "王五", System.currentTimeMillis());

        Set set = redisTemplate.opsForZSet().reverseRange(key, 0, -1);
        System.out.println(set);
    }

    // 测试设置列表类型数据到 Redis
    @Test
    public void testList() {
        String key = "order:queue";
        Map<String, Object> order1 = new HashMap<>();
        order1.put("orderId", "1001");
        order1.put("userId", "2001");
        order1.put("status", "已完成");
        order1.put("amount", 500.75);
        order1.put("creationTime", "2024-03-07T09:30:00");
        order1.put("lastUpdateTime", "2024-03-07T10:45:00");
        order1.put("paymentMethod", "在线支付");
        order1.put("shippingMethod", "自提");
        order1.put("remarks", "尽快处理");
        Map<String, Object> order2 = new HashMap<>();
        order2.put("orderId", "1002");
        order2.put("userId", "2002");
        order2.put("status", "待处理");
        order2.put("amount", 280.99);
        order2.put("creationTime", "2024-03-07T11:00:00");
        order2.put("lastUpdateTime", "2024-03-07T11:00:00");
        order2.put("paymentMethod", "货到付款");
        order2.put("shippingMethod", "快递配送");
        order2.put("remarks", "注意保鲜");
        // A程序接收订单请求并将其加入队列
        redisTemplate.opsForList().leftPush(key, order1);
        redisTemplate.opsForList().leftPush(key, order2);
        // B程序从订单队列中获取订单数据并处理
        System.out.println("处理订单：" + redisTemplate.opsForList().rightPop(key));
    }

    @Autowired
    private UserRedisMapper userRedisMapper;

    // 测试 Redis 与 Spring Data Redis 集成的操作
    @Test
    public void testRedisHash(){
        User user = new User();
        user.setId(100);
        user.setName("张三疯");
        user.setAge(18);
        user.setPhone("19988889999");
        // 保存
        userRedisMapper.save(user);
        // 读取
        User redisUser = userRedisMapper.findById(100).get();
        System.out.println("redisUser:" + redisUser);
        // 更新
        user.setPhone("18899998888");
        userRedisMapper.save(user);
        // 删除
        //userRedisMapper.deleteById(100);
        // 判断存在
        boolean exists = userRedisMapper.existsById(100);
        System.out.println("exists: " + exists);
    }
}
