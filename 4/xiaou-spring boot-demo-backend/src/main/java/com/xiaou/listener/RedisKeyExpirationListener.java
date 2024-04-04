package com.xiaou.listener;

import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.listener.KeyExpirationEventMessageListener;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;

public class RedisKeyExpirationListener extends KeyExpirationEventMessageListener {

    public RedisKeyExpirationListener(RedisMessageListenerContainer listenerContainer) {
        super(listenerContainer);
    }

    /**
     * 获取过期key
     * @param message
     * @param pattern
     */

    @Override
    public void onMessage(Message message, byte[] pattern) {
        String expireKey = message.toString();
        System.out.println("expireKey====>" + expireKey);
    }
}