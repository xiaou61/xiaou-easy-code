package com.xiaou.config;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.cache.RedisCacheWriter;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.RedisSerializationContext;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
@EnableCaching // 启用缓存功能
public class RedisConfig {

    // 定义 RedisTemplate Bean，用于操作 Redis 数据
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory factory) {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(factory);

        // 设置 RedisTemplate 的键和值的序列化方式
        redisTemplate.setKeySerializer(new StringRedisSerializer()); // 设置键的序列化器为 StringRedisSerializer
        redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer()); // 设置值的序列化器为 GenericJackson2JsonRedisSerializer

        // 设置 RedisTemplate 的哈希键和哈希值的序列化方式
        redisTemplate.setHashKeySerializer(new StringRedisSerializer()); // 设置哈希键的序列化器为 StringRedisSerializer
        redisTemplate.setHashValueSerializer(new Jackson2JsonRedisSerializer<Object>(Object.class)); // 设置哈希值的序列化器为 Jackson2JsonRedisSerializer

        return redisTemplate;
    }

    // 定义 RedisCacheManager Bean，用于管理缓存
    @Bean
    public RedisCacheManager redisCacheManager(RedisTemplate redisTemplate) {
        // 创建 RedisCacheWriter 实例，用于向 Redis 写入缓存，非锁定方式
        RedisCacheWriter redisCacheWriter = RedisCacheWriter.nonLockingRedisCacheWriter(redisTemplate.getConnectionFactory());

        // 创建 RedisCacheConfiguration 实例，配置缓存的默认行为
        RedisCacheConfiguration redisCacheConfiguration = RedisCacheConfiguration.defaultCacheConfig()
                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(redisTemplate.getValueSerializer())); // 设置缓存值的序列化方式

        // 返回 RedisCacheManager 实例，用给定的 RedisCacheWriter 和 RedisCacheConfiguration 初始化
        return new RedisCacheManager(redisCacheWriter, redisCacheConfiguration);
    }
}
